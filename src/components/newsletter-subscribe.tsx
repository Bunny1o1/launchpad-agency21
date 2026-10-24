export const NEWSLETTER_NAME = "Revenue After The Sale";

/** Substack is the email engine; issues are mirrored on saasible.in/blog. */
export const NEWSLETTER_SUBSCRIBE_URL = "https://vinod820.substack.com/subscribe";

/**
 * Soft subscribe prompt shown at the end of newsletter issues.
 * Copy rules: no contractions, no em or en dashes, no invented numbers.
 */
export function NewsletterSubscribe() {
  return (
    <aside className="mt-16 border border-foreground bg-card px-6 py-10 md:px-10 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary mb-4">
        ✦ {NEWSLETTER_NAME} ✦
      </p>
      <h2 className="text-3xl md:text-4xl mb-4">
        Get the next issue <em>by email</em>.
      </h2>
      <p className="text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto mb-7">
        Weekly notes on keeping the customers you already paid to win. Repeat
        buys, journeys and lifetime value for consumer brands.
      </p>
      <a
        href={NEWSLETTER_SUBSCRIBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-foreground text-background text-[15px] font-medium hover:opacity-85 transition-opacity"
      >
        Subscribe on Substack ↗
      </a>
    </aside>
  );
}
