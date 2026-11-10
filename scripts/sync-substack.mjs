#!/usr/bin/env node
/**
 * Mirror new "Revenue After The Sale" issues from Substack onto saasible.in/blog.
 *
 * Reads the Substack RSS feed and, for every issue published on or after the
 * cutoff that is not already on the site, writes src/content/blog/<slug>.mdx in
 * the same format as Issue 1 (after-the-sale.mdx). The blog page then adds the
 * canonical link, the "Revenue After The Sale · Issue N" label and the
 * Subscribe box. It never edits or deletes existing posts.
 *
 * Usage:
 *   node scripts/sync-substack.mjs             # write new issues
 *   node scripts/sync-substack.mjs --dry-run   # only report what would be written
 *   node scripts/sync-substack.mjs --feed ./feed.xml   # read a saved feed instead
 *
 * Settings (environment variables):
 *   NEWSLETTER_FEED_URL      default https://vinod820.substack.com/feed
 *   NEWSLETTER_SYNC_SINCE    default 2026-10-24T00:00:00Z (Issue 1). Older posts
 *                            (The Expansion Signal archive) are never mirrored.
 *
 * Docs: docs/newsletter-sync.md
 */
import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";
import { compile } from "@mdx-js/mdx";

const FEED_URL = process.env.NEWSLETTER_FEED_URL || "https://vinod820.substack.com/feed";
const SINCE = new Date(process.env.NEWSLETTER_SYNC_SINCE || "2026-10-24T00:00:00Z");
const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");
const NEWSLETTER = "Revenue After The Sale";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const feedArg = args.includes("--feed") ? args[args.indexOf("--feed") + 1] : null;

// ---------- existing posts ----------

function readExisting() {
  const slugs = new Set();
  const guids = new Set();
  let maxIssue = 0;
  for (const file of fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))) {
    slugs.add(file.replace(/\.mdx$/, ""));
    const head = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8").split(/^---\s*$/m)[1] ?? "";
    const issue = head.match(/^newsletterIssue:\s*(\d+)/m);
    if (issue) maxIssue = Math.max(maxIssue, Number(issue[1]));
    const guid = head.match(/^substackGuid:\s*"?([^"\n]+)"?/m);
    if (guid) guids.add(guid[1].trim());
  }
  return { slugs, guids, maxIssue };
}

// ---------- feed ----------

async function loadFeed() {
  if (feedArg) return fs.readFileSync(feedArg, "utf8");
  const res = await fetch(FEED_URL, { headers: { "User-Agent": "saasible-newsletter-sync" } });
  if (!res.ok) throw new Error(`Feed request failed: ${res.status} ${res.statusText} (${FEED_URL})`);
  return res.text();
}

function parseItems(xml) {
  const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: false, textNodeName: "#text" });
  const doc = parser.parse(xml);
  const raw = doc?.rss?.channel?.item ?? [];
  const items = Array.isArray(raw) ? raw : [raw];
  const text = (v) => (v == null ? "" : typeof v === "object" ? String(v["#text"] ?? "") : String(v)).trim();
  return items
    .map((it) => {
      const link = text(it.link);
      return {
        title: text(it.title),
        subtitle: text(it.description),
        link,
        guid: text(it.guid) || link,
        pubDate: new Date(text(it.pubDate)),
        html: text(it["content:encoded"]),
        slug: (link.match(/\/p\/([^/?#]+)/) || [])[1] || "",
      };
    })
    .filter((it) => it.slug && it.html && !Number.isNaN(it.pubDate.getTime()))
    .sort((a, b) => a.pubDate - b.pubDate); // oldest first, so issue numbers follow publish order
}

// ---------- HTML -> MDX ----------

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
  strongDelimiter: "**",
});

// Substack-only chrome: subscribe widgets, buttons, share bars.
turndown.remove((node) => {
  const cls = node.getAttribute?.("class") || "";
  return /subscription-widget|subscribe-widget|button-wrapper|share-dialog|captioned-button|digest-post-embed/.test(cls);
});
turndown.remove(["script", "style", "iframe", "form", "button", "input"]);

// "Subscribe now" style links that point back to Substack's subscribe page.
turndown.addRule("dropSubscribeLinks", {
  filter: (node) => node.nodeName === "A" && /substack\.com\/subscribe|[?&]utm_medium=email.*subscribe/i.test(node.getAttribute("href") || ""),
  replacement: () => "",
});

// Substack links every image to its full-size file; keep just the image.
turndown.addRule("unwrapImageLinks", {
  filter: (node) => node.nodeName === "A" && node.querySelector?.("img") && !node.textContent.trim(),
  replacement: (content) => content,
});

// Substack wraps list item text in <p>, which makes loose, oddly spaced lists.
turndown.addRule("listParagraphs", {
  filter: (node) => node.nodeName === "P" && node.parentNode?.nodeName === "LI",
  replacement: (content) => content,
});

// Keep images, drop Substack's <picture>/<source> wrappers.
turndown.addRule("image", {
  filter: "img",
  replacement: (_, node) => {
    const src = node.getAttribute("src");
    if (!src) return "";
    const alt = (node.getAttribute("alt") || "").replace(/[[\]]/g, "");
    return `\n\n![${alt}](${src})\n\n`;
  },
});

/** Escape characters MDX would read as JSX or expressions, outside code fences. */
function escapeForMdx(md) {
  let inFence = false;
  return md
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      // Leave inline code spans alone.
      return line
        .split(/(`[^`]*`)/)
        .map((part) =>
          part.startsWith("`") ? part : part.replace(/[{}]/g, (c) => `\\${c}`).replace(/<(?!https?:\/\/)/g, "&lt;")
        )
        .join("");
    })
    .join("\n");
}

function toMdxBody(html) {
  let md = turndown.turndown(html);
  // The Substack email opens with "Also on saasible.in: <url>". That line is
  // for email readers only, so it does not belong on the site copy.
  md = md.replace(/^\s*\**Also on saasible\.in:?\**[^\n]*\n+/i, "");
  // Empty links left behind by removed subscribe buttons, and extra blank lines.
  md = md
    .replace(/\[\s*\]\([^)]*\)/g, "")
    .replace(/^(\s*)([-*]|\d+\.)\s{2,}/gm, "$1$2 ") // "-   item" -> "- item"
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return escapeForMdx(md) + "\n";
}

function excerptFrom(subtitle, body) {
  if (subtitle) return subtitle;
  const first = body.split(/\n\n/).find((p) => p && !p.startsWith("#") && !p.startsWith("!")) || "";
  const plain = first.replace(/[*_`[\]]|\(https?:[^)]*\)/g, "").trim();
  if (plain.length <= 160) return plain;
  return plain.slice(0, plain.lastIndexOf(" ", 157)) + "...";
}

/** Publish date as YYYY-MM-DD in India time, matching how Issue 1 is dated. */
function istDate(d) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(d);
}

function frontMatter({ title, excerpt, date, issue, guid, link }) {
  const q = (s) => JSON.stringify(s); // JSON strings are valid YAML strings
  return [
    "---",
    `title: ${q(title)}`,
    `seoTitle: ${q(`${title} | ${NEWSLETTER}`)}`,
    `metaDescription: ${q(excerpt)}`,
    `date: ${q(date)}`,
    `excerpt: ${q(excerpt)}`,
    `category: "Newsletter"`,
    `newsletterIssue: ${issue}`,
    `substackGuid: ${q(guid)}`,
    `substackUrl: ${q(link)}`,
    `tags: ${q([NEWSLETTER, "customer retention", "lifecycle marketing"])}`,
    "---",
    "",
  ].join("\n");
}

// ---------- main ----------

async function main() {
  const { slugs, guids, maxIssue } = readExisting();
  const items = parseItems(await loadFeed());
  let nextIssue = maxIssue + 1;
  const written = [];
  const skipped = [];

  for (const it of items) {
    if (it.pubDate < SINCE) {
      skipped.push(`${it.slug} (published before ${SINCE.toISOString().slice(0, 10)}, archive)`);
      continue;
    }
    if (slugs.has(it.slug) || guids.has(it.guid)) {
      skipped.push(`${it.slug} (already on the site)`);
      continue;
    }

    const body = toMdxBody(it.html);
    const fileText =
      frontMatter({
        title: it.title,
        excerpt: excerptFrom(it.subtitle, body),
        date: istDate(it.pubDate),
        issue: nextIssue,
        guid: it.guid,
        link: it.link,
      }) +
      "\n" +
      body;

    try {
      await compile(body); // same MDX compiler the blog uses; a broken post must not ship
    } catch (err) {
      skipped.push(`${it.slug} (MDX conversion failed, needs a manual fix: ${err.message.split("\n")[0]})`);
      continue;
    }

    if (!dryRun) fs.writeFileSync(path.join(CONTENT_DIR, `${it.slug}.mdx`), fileText);
    written.push({ slug: it.slug, issue: nextIssue, title: it.title });
    slugs.add(it.slug);
    nextIssue += 1;
  }

  for (const w of written) console.log(`${dryRun ? "Would add" : "Added"} Issue ${w.issue}: ${w.title} -> /blog/${w.slug}`);
  for (const s of skipped) console.log(`Skipped ${s}`);
  if (!written.length) console.log("No new issues to mirror.");

  // Hand results to the GitHub Actions workflow.
  if (process.env.GITHUB_OUTPUT) {
    const summary = written.map((w) => `Issue ${w.issue}: ${w.title} (/blog/${w.slug})`).join("; ");
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `count=${written.length}\nslugs=${written.map((w) => w.slug).join(" ")}\nsummary=${summary}\n`
    );
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
