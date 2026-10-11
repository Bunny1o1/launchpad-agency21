import type { Metadata } from "next";
import { TemplateChecker } from "@/components/template-checker";

const URL = "https://saasible.in/whatsapp-template-rejection-checker";
const TITLE = "Free WhatsApp Template Rejection Checker";
const DESCRIPTION =
  "Paste a WhatsApp template and see why Meta might reject it: variable errors, short links, length limits and Utility-to-Marketing risk. Free, no signup.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: `${TITLE} | Saasible`,
    description: DESCRIPTION,
    siteName: "Saasible",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Saasible`,
    description: DESCRIPTION,
  },
};

const checks = [
  {
    title: "Variables",
    text: "Badly formatted placeholders, #, $ or % inside braces, skipped numbers like {{1}} then {{3}}, mixed numbered and named variables, and a body that starts or ends with a variable.",
  },
  {
    title: "Length limits",
    text: "Header and footer up to 60 characters, body up to 1,024, button labels up to 25, up to 10 buttons and URLs up to 2,000 characters.",
  },
  {
    title: "Links",
    text: "Shortened links such as bit.ly or tinyurl, which WhatsApp doesn't allow in templates, and URL button variables that aren't at the end of the link.",
  },
  {
    title: "Category risk",
    text: "Offer and discount wording inside a Utility template, which is the most common reason Meta moves a template to the more expensive Marketing category.",
  },
];

const faqs = [
  {
    q: "Why do WhatsApp templates get rejected?",
    a: "Most rejections come from a few causes: badly formatted or out-of-order variables, a body that starts or ends with a variable, shortened links, going over a character limit, wording that breaks WhatsApp's Business or Commerce policy, or a template that duplicates the wording of one you already have. Meta shows the reason in WhatsApp Manager once a template is rejected.",
  },
  {
    q: "Why did Meta change my Utility template to Marketing?",
    a: "Utility templates are for updates about something the customer already did, like an order, payment or booking. If the message also promotes something, such as a discount code, an offer or a new product, Meta treats it as Marketing. Keep Utility messages purely transactional and send promotions as a separate Marketing template.",
  },
  {
    q: "Can a WhatsApp template start or end with a variable?",
    a: "No. The body should begin and end with fixed text. Write \"Hi {{1}}, your order is ready\" rather than \"{{1}}, your order is ready\", and add a short closing line after the last variable.",
  },
  {
    q: "Are short links like bit.ly allowed in WhatsApp templates?",
    a: "No. WhatsApp doesn't allow shortened URLs in templates. Use the full link on your own domain. For tracking links, put the changing part in a URL button variable at the very end of the link.",
  },
  {
    q: "Does passing this checker guarantee approval?",
    a: "No. The checker catches format and limit problems before you submit. Meta also reviews the content against its policies and checks for duplicates, which only Meta's review can confirm. Fixing everything flagged here removes the most common avoidable rejections.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WhatsApp Template Rejection Checker",
  url: URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  provider: { "@type": "Organization", name: "Saasible", url: "https://saasible.in" },
};

export default function WhatsAppTemplateCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <section className="border-b border-border bg-surface pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Free tool · No signup
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl text-balance">
            WhatsApp Template Rejection Checker
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Paste your WhatsApp Business template and see what Meta is likely to reject before you submit it. It
            checks variables, character limits, short links and whether a Utility template reads like Marketing.
            Everything runs in your browser and nothing is saved.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <TemplateChecker />
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">What the checker looks for</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {checks.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Common questions</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
