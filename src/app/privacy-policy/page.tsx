import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Saasible collects, uses and stores the details you share through the enquiry form and booking pages on saasible.in.",
  alternates: { canonical: "https://saasible.in/privacy-policy" },
};

const updated = "24 October 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        Saasible is an AI growth agency run by Vinod Yadav from Bengaluru, India.
        This policy covers saasible.in. For any privacy question, email{" "}
        <span className="text-foreground select-all">yuvinod@gmail.com</span>.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>When you send an enquiry through the &ldquo;Let&rsquo;s talk&rdquo; form, we collect:</p>
        <ul>
          <li>your name and business email</li>
          <li>your phone number and company, if you choose to give them</li>
          <li>what you tell us you need help with</li>
          <li>your consent to be contacted, and the time you submitted the form</li>
        </ul>
        <p>
          When you book a call, Calendly collects your booking details under its
          own privacy policy.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <p>
        We use your details only to reply to your enquiry and to talk with you
        about the work you asked about. We do not sell your details or share
        them with other companies for their marketing.
      </p>
    ),
  },
  {
    title: "Where it is stored",
    body: (
      <p>
        Enquiries are sent through Google Apps Script and stored in a private
        Google Sheet that only Saasible can access. Google processes this data
        as our service provider.
      </p>
    ),
  },
  {
    title: "Analytics and advertising",
    body: (
      <p>
        The site uses Google Analytics, Google Tag Manager, the Google Ads tag
        and Datafast to understand visits and measure advertising. These tools
        may set cookies and collect technical data such as your device, browser
        and pages viewed. They do not receive the contents of the enquiry form.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep an enquiry for as long as we need it to respond and follow up,
        and delete it when you ask us to.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        You can ask to see, correct or delete the details you sent us at any
        time. Email{" "}
        <span className="text-foreground select-all">yuvinod@gmail.com</span>{" "}
        and we will act on it.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Fine print
        </p>
        <h1 className="text-5xl md:text-7xl mb-6">
          Privacy <em>policy</em>.
        </h1>
        <p className="font-mono text-xs text-muted-foreground mb-14">
          Last updated · {updated}
        </p>

        <div className="border-t border-foreground">
          {sections.map((s) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 border-b border-border"
            >
              <h2 className="text-2xl md:text-[26px] leading-tight">{s.title}</h2>
              <div className="text-[16px] leading-relaxed text-muted-foreground space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[15px] text-muted-foreground">
          Questions about this policy?{" "}
          <Link href="/book" className="text-foreground underline underline-offset-4">
            Book a call
          </Link>{" "}
          or email us.
        </p>
      </div>
    </section>
  );
}
