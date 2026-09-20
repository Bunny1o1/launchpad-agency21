"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle, Clock, Target, Zap } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const RAZORPAY_LINK = "https://rzp.io/rzp/saasible-gtm-call";

const includes = [
  "30-minute focused GTM strategy session",
  "ICP definition and channel recommendation",
  "Top 3 quick wins you can implement immediately",
  "WhatsApp or Voice AI system recommendation",
  "Recorded session sent to your email",
];

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  let title = "GTM Strategy Call";
  if (serviceParam === "audit") title = "Messaging Audit Call";
  if (serviceParam === "retainer") title = "Growth Retainer Call";
  if (serviceParam === "sprint") title = "Messaging Sprint Call";
  if (serviceParam === "workshop") title = "Workshop Planning Call";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-surface border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Paid Strategy Session
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Book a <span className="text-accent">{title}</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A focused 30-minute session where we map your GTM gaps and build a
            clear outbound plan — using WhatsApp and Voice AI as your growth channel.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left — What's included */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <h2 className="text-2xl font-bold mb-6">What's included</h2>
              <ul className="space-y-4 mb-8">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Clock size={20} className="mx-auto mb-2 text-accent" />
                  <div className="text-xs text-muted-foreground">30 minutes</div>
                </div>
                <div className="text-center">
                  <Target size={20} className="mx-auto mb-2 text-accent" />
                  <div className="text-xs text-muted-foreground">GTM focused</div>
                </div>
                <div className="text-center">
                  <Zap size={20} className="mx-auto mb-2 text-accent" />
                  <div className="text-xs text-muted-foreground">Action plan</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Payment card */}
            <motion.div
              className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/5"
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="text-center mb-8">
                <div className="text-5xl font-bold tracking-tight mb-1">₹999</div>
                <div className="text-sm text-muted-foreground">One-time · No recurring charges</div>
              </div>

              <div className="space-y-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">1</span>
                  <span>Pay ₹999 via Razorpay (UPI, card, net banking)</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">2</span>
                  <span>Pick your slot on Calendly (link sent after payment)</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">3</span>
                  <span>Show up and get your GTM plan</span>
                </div>
              </div>

              <a
                href={RAZORPAY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                Pay ₹999 & Book Your Call <ArrowRight size={18} />
              </a>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Secure payment via Razorpay · UPI / Cards / Net Banking accepted
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse-soft text-accent">Loading...</div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
