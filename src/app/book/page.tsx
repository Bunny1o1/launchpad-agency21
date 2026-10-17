"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle, Clock, Target, Zap, Mail, Globe2 } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const RAZORPAY_LINK = "https://rzp.io/rzp/saasible-gtm-call";
const CONTACT_EMAIL = "yuvinod@gmail.com";

const includes = [
  "20-minute call on your funnel and customer lifecycle",
  "Your biggest revenue leaks, from first click to repeat purchase",
  "Top 3 quick wins you can implement right away",
  "Which AI agent or journey to build first, and on which channel",
  "The right engagement for you, with no pressure to buy",
];

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  let title = "Free Lifecycle Call";
  if (serviceParam === "audit") title = "Lifecycle Audit Call";
  if (serviceParam === "build") title = "AI Growth Build Call";
  if (serviceParam === "retainer") title = "Growth Retainer Call";
  if (serviceParam === "workshop") title = "Team Workshop Call";

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Saasible: ${title}`
  )}&body=${encodeURIComponent(
    "Hi Vinod,\n\nI would like to book a call.\n\nBrand and website:\nCountry or market:\nWhat I want help with:\nBest times for a call (with time zone):\n"
  )}`;

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
            Free 20-Minute Call
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
            A focused call where we look at your funnel, find where customers drop
            off, and map out the AI agents and lifecycle journeys that fix it.
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
              <h2 className="text-2xl font-bold mb-6">What you get</h2>
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
                  <div className="text-xs text-muted-foreground">20 minutes</div>
                </div>
                <div className="text-center">
                  <Target size={20} className="mx-auto mb-2 text-accent" />
                  <div className="text-xs text-muted-foreground">Lifecycle focused</div>
                </div>
                <div className="text-center">
                  <Zap size={20} className="mx-auto mb-2 text-accent" />
                  <div className="text-xs text-muted-foreground">Action plan</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Booking card */}
            <motion.div
              className="rounded-2xl border border-accent/40 bg-card p-8 shadow-xl shadow-black/5"
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="text-center mb-8">
                <div className="text-5xl font-bold tracking-tight mb-1 gradient-text">Free</div>
                <div className="text-sm text-muted-foreground">20 minutes · Any time zone</div>
              </div>

              <div className="space-y-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">1</span>
                  <span>Send a short note about your brand and market</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">2</span>
                  <span>Get a calendar slot in your time zone within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">3</span>
                  <span>Join the call and leave with your quick wins</span>
                </div>
              </div>

              <a
                href={mailto}
                className="flex items-center justify-center gap-2 w-full bg-accent text-background font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                <Mail size={18} /> Request My Free Call
              </a>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Or email {CONTACT_EMAIL}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 size={14} className="text-secondary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Based in India?</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Want a deeper 45-minute strategy session with a written action plan? Book it for ₹999.
                </p>
                <a
                  href={RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
                >
                  Pay ₹999 via Razorpay <ArrowRight size={12} />
                </a>
              </div>
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
