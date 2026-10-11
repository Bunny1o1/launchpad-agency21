// Rules engine for the WhatsApp Template Rejection Checker.
// "error"   = breaks a limit or format rule Meta documents; the template will be rejected.
// "warning" = a common rejection or recategorisation pattern; worth fixing, not guaranteed to fail.

export type Category = "MARKETING" | "UTILITY";

export type TemplateInput = {
  name: string;
  category: Category;
  header: string;
  body: string;
  footer: string;
  buttons: string; // one button label per line
  buttonUrl: string;
};

export type Severity = "error" | "warning";

export type Issue = {
  id: string;
  severity: Severity;
  area: "Name" | "Header" | "Body" | "Footer" | "Buttons" | "Category";
  title: string;
  fix: string;
};

export const LIMITS = {
  header: 60,
  body: 1024,
  footer: 60,
  buttonText: 25,
  buttons: 10,
  url: 2000,
  name: 512,
};

// Any {{...}} token, valid or not.
const ANY_VAR = /\{\{([^{}]*)\}\}/g;
const POSITIONAL = /^[1-9]\d*$/;
const NAMED = /^[a-z_][a-z0-9_]*$/;

const SHORTENERS = [
  "bit.ly", "bitly.com", "tinyurl.com", "goo.gl", "t.co", "ow.ly", "rb.gy",
  "cutt.ly", "is.gd", "shorturl.at", "tiny.cc", "rebrand.ly", "buff.ly",
  "s.id", "lnkd.in", "v.gd", "t.ly", "bl.ink", "short.io", "shorturl.com",
];

const PROMO_TERMS = [
  "offer", "discount", "% off", "sale", "cashback", "coupon", "promo code",
  "limited time", "hurry", "don't miss", "dont miss", "last chance", "buy now",
  "shop now", "deal", "exclusive", "free trial", "upgrade now", "special price",
  "new arrival", "check out our", "save up to", "grab", "early bird",
];

export function findVariables(text: string): string[] {
  return Array.from(text.matchAll(ANY_VAR), (m) => m[1]);
}

function hasShortener(text: string): string | null {
  const lower = text.toLowerCase();
  for (const s of SHORTENERS) {
    const re = new RegExp(`(^|[^a-z0-9.-])${s.replace(/\./g, "\\.")}(/|\\b)`, "i");
    if (re.test(lower)) return s;
  }
  return null;
}

function hasEmoji(text: string): boolean {
  // Built with the constructor because the project's TS target predates the `u` flag literal.
  return new RegExp("\\p{Extended_Pictographic}", "u").test(text);
}

export function checkTemplate(t: TemplateInput): Issue[] {
  const issues: Issue[] = [];
  const add = (i: Issue) => issues.push(i);

  const body = t.body;
  const bodyTrim = body.trim();
  const buttonLabels = t.buttons
    .split("\n")
    .map((b) => b.trim())
    .filter(Boolean);

  // ---------- Name ----------
  if (t.name.trim()) {
    const name = t.name.trim();
    if (!/^[a-z0-9_]+$/.test(name)) {
      add({
        id: "name-format",
        severity: "error",
        area: "Name",
        title: "Template name has characters Meta doesn't accept",
        fix: "Use only lowercase letters, numbers and underscores, e.g. order_update_v2.",
      });
    }
    if (name.length > LIMITS.name) {
      add({
        id: "name-length",
        severity: "error",
        area: "Name",
        title: `Template name is longer than ${LIMITS.name} characters`,
        fix: "Shorten the name.",
      });
    }
  }

  // ---------- Body: presence and length ----------
  if (!bodyTrim) {
    add({
      id: "body-empty",
      severity: "error",
      area: "Body",
      title: "Body is empty",
      fix: "Every template needs body text.",
    });
    return issues;
  }
  if (body.length > LIMITS.body) {
    add({
      id: "body-length",
      severity: "error",
      area: "Body",
      title: `Body is ${body.length} characters (limit ${LIMITS.body})`,
      fix: `Cut ${body.length - LIMITS.body} characters. The limit includes variables and emojis.`,
    });
  }

  // ---------- Variables: format ----------
  const bodyVars = findVariables(body);
  const badVars = bodyVars.filter((v) => !POSITIONAL.test(v.trim()) && !NAMED.test(v.trim()));
  const spacedVars = bodyVars.filter((v) => v !== v.trim() && (POSITIONAL.test(v.trim()) || NAMED.test(v.trim())));

  if (badVars.length) {
    const special = badVars.some((v) => /[#$%]/.test(v));
    add({
      id: "var-format",
      severity: "error",
      area: "Body",
      title: `Badly formatted variable${badVars.length > 1 ? "s" : ""}: ${badVars.map((v) => `{{${v}}}`).join(", ")}`,
      fix: special
        ? "Variables can't contain #, $ or %. Use {{1}}, {{2}} … or lowercase names like {{first_name}}."
        : "Use {{1}}, {{2}} … or lowercase names with underscores like {{first_name}}.",
    });
  }
  if (spacedVars.length) {
    add({
      id: "var-spaces",
      severity: "error",
      area: "Body",
      title: "Spaces inside a variable's braces",
      fix: `Write ${spacedVars.map((v) => `{{${v.trim()}}}`).join(", ")} with no spaces inside the braces.`,
    });
  }

  // Stray braces that never form a full {{...}}
  const withoutVars = body.replace(ANY_VAR, "");
  if (/\{|\}/.test(withoutVars)) {
    add({
      id: "var-braces",
      severity: "error",
      area: "Body",
      title: "Unmatched curly braces",
      fix: "A variable needs two braces on each side: {{1}}. Remove any stray { or }.",
    });
  }

  const cleanVars = bodyVars.map((v) => v.trim());
  const positional = cleanVars.filter((v) => POSITIONAL.test(v)).map(Number);
  const named = cleanVars.filter((v) => NAMED.test(v));

  if (positional.length && named.length) {
    add({
      id: "var-mixed",
      severity: "error",
      area: "Body",
      title: "Mixes numbered and named variables",
      fix: "Pick one style for the whole template: all {{1}}, {{2}} … or all named.",
    });
  }

  if (positional.length) {
    const unique = Array.from(new Set(positional)).sort((a, b) => a - b);
    const expected = unique.map((_, i) => i + 1);
    if (unique.some((n, i) => n !== expected[i])) {
      add({
        id: "var-sequence",
        severity: "error",
        area: "Body",
        title: `Numbered variables skip a number (${unique.map((n) => `{{${n}}}`).join(", ")})`,
        fix: `Number them in order with no gaps: ${expected.map((n) => `{{${n}}}`).join(", ")}.`,
      });
    }
  }

  // ---------- Variables: placement ----------
  if (bodyVars.length) {
    if (/^\{\{[^{}]*\}\}/.test(bodyTrim)) {
      add({
        id: "var-start",
        severity: "error",
        area: "Body",
        title: "Body starts with a variable",
        fix: 'Put fixed text first, e.g. "Hi {{1}}," instead of "{{1}}, …".',
      });
    }
    if (/\{\{[^{}]*\}\}$/.test(bodyTrim)) {
      add({
        id: "var-end",
        severity: "error",
        area: "Body",
        title: "Body ends with a variable",
        fix: 'Add fixed text after the last variable, e.g. "… {{2}}. Reply STOP to opt out."',
      });
    } else if (/\{\{[^{}]*\}\}[\s.,!?:;)"'’]*$/.test(bodyTrim)) {
      add({
        id: "var-end-punct",
        severity: "warning",
        area: "Body",
        title: "Body ends with a variable followed only by punctuation",
        fix: "Reviewers often treat this as ending on a variable. Add a short closing sentence.",
      });
    }
    if (/\}\}\s*\{\{/.test(body)) {
      add({
        id: "var-adjacent",
        severity: "warning",
        area: "Body",
        title: "Two variables sit next to each other",
        fix: 'Separate them with real words, e.g. "{{1}} on {{2}}", so the message still reads clearly.',
      });
    }
    const words = body.replace(ANY_VAR, " ").split(/\s+/).filter(Boolean).length;
    if (bodyVars.length >= 2 && words / bodyVars.length < 3) {
      add({
        id: "var-ratio",
        severity: "warning",
        area: "Body",
        title: "Lots of variables for very little fixed text",
        fix: "Meta can reject templates that are mostly variables. Add more fixed wording so the purpose is clear without the values.",
      });
    }
  }

  // ---------- Header ----------
  if (t.header) {
    if (t.header.length > LIMITS.header) {
      add({
        id: "header-length",
        severity: "error",
        area: "Header",
        title: `Header is ${t.header.length} characters (limit ${LIMITS.header})`,
        fix: `Cut ${t.header.length - LIMITS.header} characters.`,
      });
    }
    const hv = findVariables(t.header);
    if (hv.length > 1) {
      add({
        id: "header-vars",
        severity: "error",
        area: "Header",
        title: `Header has ${hv.length} variables (limit 1)`,
        fix: "Keep at most one variable in a text header.",
      });
    }
    if (/\n/.test(t.header)) {
      add({
        id: "header-newline",
        severity: "warning",
        area: "Header",
        title: "Header has a line break",
        fix: "Keep the header to a single line.",
      });
    }
  }

  // ---------- Footer ----------
  if (t.footer) {
    if (t.footer.length > LIMITS.footer) {
      add({
        id: "footer-length",
        severity: "error",
        area: "Footer",
        title: `Footer is ${t.footer.length} characters (limit ${LIMITS.footer})`,
        fix: `Cut ${t.footer.length - LIMITS.footer} characters.`,
      });
    }
    if (findVariables(t.footer).length) {
      add({
        id: "footer-vars",
        severity: "error",
        area: "Footer",
        title: "Footer contains a variable",
        fix: "Footers can't have variables. Move it into the body.",
      });
    }
    if (hasEmoji(t.footer)) {
      add({
        id: "footer-emoji",
        severity: "warning",
        area: "Footer",
        title: "Footer contains an emoji",
        fix: "Emojis in footers are not recommended. Use plain text.",
      });
    }
  }

  // ---------- Buttons ----------
  if (buttonLabels.length > LIMITS.buttons) {
    add({
      id: "buttons-count",
      severity: "error",
      area: "Buttons",
      title: `${buttonLabels.length} buttons (limit ${LIMITS.buttons})`,
      fix: "Remove buttons. More than 3 also hides the rest behind \"See all options\".",
    });
  }
  const longButtons = buttonLabels.filter((b) => b.length > LIMITS.buttonText);
  if (longButtons.length) {
    add({
      id: "buttons-length",
      severity: "error",
      area: "Buttons",
      title: `Button text over ${LIMITS.buttonText} characters: "${longButtons[0]}"${longButtons.length > 1 ? ` (+${longButtons.length - 1} more)` : ""}`,
      fix: "Shorten every button label to 25 characters or fewer.",
    });
  }

  if (t.buttonUrl.trim()) {
    const url = t.buttonUrl.trim();
    if (url.length > LIMITS.url) {
      add({
        id: "url-length",
        severity: "error",
        area: "Buttons",
        title: `Button URL is over ${LIMITS.url} characters`,
        fix: "Use a shorter URL on your own domain.",
      });
    }
    const uv = findVariables(url);
    if (uv.length > 1) {
      add({
        id: "url-vars",
        severity: "error",
        area: "Buttons",
        title: "Button URL has more than one variable",
        fix: "A URL button allows one variable, placed at the very end: https://yoursite.com/track/{{1}}",
      });
    } else if (uv.length === 1 && !/\{\{[^{}]*\}\}$/.test(url)) {
      add({
        id: "url-var-end",
        severity: "error",
        area: "Buttons",
        title: "Button URL variable isn't at the end",
        fix: "Move the variable to the end of the URL: https://yoursite.com/track/{{1}}",
      });
    }
    if (!/^https?:\/\//i.test(url)) {
      add({
        id: "url-scheme",
        severity: "warning",
        area: "Buttons",
        title: "Button URL doesn't start with https://",
        fix: "Use the full address, starting with https://",
      });
    }
  }

  // ---------- Short links anywhere ----------
  const shortHit =
    hasShortener(body) || hasShortener(t.header) || hasShortener(t.footer) || hasShortener(t.buttonUrl);
  if (shortHit) {
    add({
      id: "short-url",
      severity: "error",
      area: "Body",
      title: `Uses a link shortener (${shortHit})`,
      fix: "WhatsApp doesn't allow shortened URLs in templates. Use the full link on your own domain.",
    });
  }

  // ---------- Category ----------
  if (t.category === "UTILITY") {
    const all = `${t.header} ${body} ${t.footer} ${buttonLabels.join(" ")}`.toLowerCase();
    const hits = PROMO_TERMS.filter((p) => {
      const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // Whole words only, so "wholesale" doesn't match "sale". "% off" may follow a number.
      return new RegExp(`(^|[^a-z])${escaped}($|[^a-z])`, "i").test(all);
    });
    if (hits.length) {
      add({
        id: "utility-promo",
        severity: "warning",
        area: "Category",
        title: `Promotional wording in a Utility template: ${hits.slice(0, 4).map((h) => `"${h}"`).join(", ")}`,
        fix: "Meta moves Utility templates that read like promotion to Marketing, which costs more. Keep Utility to updates about something the user already did, and send offers as a separate Marketing template.",
      });
    }
  }

  return issues;
}

export type Verdict = {
  label: string;
  tone: "good" | "warn" | "bad" | "idle";
  summary: string;
};

export function verdict(issues: Issue[]): Verdict {
  if (issues.length === 1 && issues[0].id === "body-empty") {
    return {
      label: "Paste a template to check it",
      tone: "idle",
      summary: "Add your body text on the left. Results update as you type.",
    };
  }
  const errors = issues.filter((i) => i.severity === "error").length;
  const warnings = issues.length - errors;
  if (errors) {
    return {
      label: "Likely to be rejected",
      tone: "bad",
      summary: `${errors} problem${errors > 1 ? "s" : ""} will stop approval${warnings ? `, plus ${warnings} risk${warnings > 1 ? "s" : ""} to review` : ""}.`,
    };
  }
  if (warnings) {
    return {
      label: "Fix before you submit",
      tone: "warn",
      summary: `No hard errors, but ${warnings} pattern${warnings > 1 ? "s" : ""} often cause${warnings > 1 ? "" : "s"} rejection or a category change.`,
    };
  }
  return {
    label: "No common problems found",
    tone: "good",
    summary: "This template passes every format check here. Meta still reviews content against its policies.",
  };
}

export const EXAMPLE: TemplateInput = {
  name: "Order Update",
  category: "UTILITY",
  header: "Your order is on its way",
  body: "{{1}}, your order has shipped! Use code SAVE20 for 20% off your next order. Track it here: bit.ly/trk-{{3}}",
  footer: "Reply STOP to opt out",
  buttons: "Track order\nShop our new summer collection",
  buttonUrl: "",
};

export const EMPTY: TemplateInput = {
  name: "",
  category: "MARKETING",
  header: "",
  body: "",
  footer: "",
  buttons: "",
  buttonUrl: "",
};
