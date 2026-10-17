import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { CONTACT_EMAIL } from "@/lib/booking";

// Razorpay redirects here after a successful ₹999 payment.
export const metadata: Metadata = {
  title: "Payment Confirmed: Pick Your Slot",
  robots: { index: false, follow: false },
};

export default function BookConfirmedPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-6 relative text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={26} className="text-accent" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Payment received
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Thank you. Now <span className="gradient-text">pick your slot.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose a time below for your lifecycle strategy session. You will get a calendar
            invite with the meeting link straight away.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <CalendlyEmbed />
          <p className="text-center text-xs text-muted-foreground mt-6">
            Any problem booking? Email {CONTACT_EMAIL} with your payment receipt.
          </p>
        </div>
      </section>
    </>
  );
}
