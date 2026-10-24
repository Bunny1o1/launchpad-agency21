# Newsletter sync: Substack to saasible.in/blog

New issues of **Revenue After The Sale** are written and emailed from Substack
(`vinod820.substack.com`). This sync copies each new issue onto
`saasible.in/blog/<slug>`, so the site holds the original for search engines.

## What it does

1. Reads the Substack RSS feed: `https://vinod820.substack.com/feed`.
2. Keeps only issues published on or after **24 October 2026** (Issue 1). Older
   posts from *The Expansion Signal* are never copied.
3. Skips any issue already on the site, matched by slug or Substack ID.
4. For each new issue, writes `src/content/blog/<slug>.mdx` in the same format
   as Issue 1 (`after-the-sale.mdx`):
   - title, subtitle (used as the excerpt and meta description), publish date in India time;
   - SEO title `<title> | Revenue After The Sale`;
   - the next issue number, which shows the "Revenue After The Sale · Issue N" label;
   - the body converted from Substack's HTML, without the "Also on saasible.in" line,
     subscribe widgets or Substack buttons.
5. Checks the post compiles. A post that fails is skipped and reported, never published.

The blog page adds `<link rel="canonical" href="https://saasible.in/blog/<slug>" />`
and the Subscribe on Substack box automatically.

It never edits or deletes existing posts, never touches Substack, and never changes DNS.

## Switching it on and off

The schedule runs every 3 hours, but does nothing until you choose a mode.
On GitHub, open **Settings → Secrets and variables → Actions → Variables** and set
`NEWSLETTER_SYNC_MODE`:

| Value | What happens |
|---|---|
| `off` or not set | Nothing. This is the default. |
| `pr` | Opens a pull request for each new issue. Vercel builds a preview; you merge to publish. |
| `push` | Commits new issues straight to `main`. Vercel publishes them automatically. |

To **turn it off**, set `NEWSLETTER_SYNC_MODE` to `off` or delete the variable.
To stop the schedule completely, open **Actions → Newsletter sync → ⋯ → Disable workflow**.

`pr` mode needs one extra setting: **Settings → Actions → General → Workflow
permissions → Allow GitHub Actions to create and approve pull requests**.

If two new issues arrive before you merge the first pull request, the second
waits. It is picked up on the next run after you merge, so issue numbers stay in order.

## Running it once by hand

**On GitHub:** open **Actions → Newsletter sync → Run workflow**, pick a mode, and run.

- `dry-run` lists what would be copied and changes nothing.
- `pr` or `push` copies new issues straight away, whatever the variable says.

**On a computer with the repo:**

```bash
npm ci
npm run sync:newsletter -- --dry-run   # report only
npm run sync:newsletter                # write new posts into src/content/blog
```

Then review the new `.mdx` files, commit and push as usual.

## Optional settings

Set these as repository variables if they ever need to change:

- `NEWSLETTER_FEED_URL`: feed address, if the Substack address changes.
- `NEWSLETTER_SYNC_SINCE`: earliest publish date to copy, for example `2026-10-24T00:00:00Z`.

## Publish order for each issue

In `push` mode the site copy usually appears within 3 hours of the Substack post.
If the email must link to a live site page, publish the site copy first: run the
workflow by hand, then send the email from Substack. The email should start with
`Also on saasible.in: https://saasible.in/blog/<slug>`.
