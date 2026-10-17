import { CALENDLY_EMBED_URL, CALENDLY_URL } from "@/lib/booking";

/** Inline Calendly scheduler with a plain link fallback. */
export function CalendlyEmbed() {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-25px_rgba(168,18,12,0.45)]">
        <iframe
          src={CALENDLY_EMBED_URL}
          title="Book a call with Vinod on Calendly"
          className="w-full h-[720px] block"
          loading="lazy"
        />
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        Calendar not loading?{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent hover:underline"
        >
          Open it on Calendly
        </a>
      </p>
    </div>
  );
}
