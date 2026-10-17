"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle, Clock, Target, Zap, Globe2 } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { CALENDLY_URL, CONTACT_EMAIL, RAZORPAY_LINK } from "@/lib/booking";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};


const includes = [
  "30-minute call on your funnel and customer lifecycle",
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
            Free 30-Minute Call
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
                  <div className="text-xs text-muted-foreground">30 minutes</div>
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
                <div className="text-sm text-muted-foreground">30 minutes · Any time zone</div>
              </div>

              <div className="space-y-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">1</span>
                  <span>Pick a time that suits you on my calendar</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">2</span>
                  <span>Get an instant invite in your own time zone</span>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                  <span className="text-accent font-bold text-base">3</span>
                  <span>Join the call and leave with your quick wins</span>
                </div>
              </div>

              <a
                href="#schedule"
                className="flex items-center justify-center gap-2 w-full bg-accent text-background font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                <Clock size={18} /> Pick a Time on My Calendar
              </a>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Or{" "}
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  open Calendly
                </a>
                {" · "}
                <a href={mailto} className="font-semibold text-accent hover:underline">
                  email me
                </a>
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 size={14} className="text-secondary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Based in India?</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Want a paid strategy session with a written action plan? Book it for ₹999.
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

      {/* Calendly scheduler */}
      <section id="schedule" className="py-20 border-t border-border scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Pick a Time
            </span>
            <h2 className="text-3xl font-bold">Book your free 30-minute call</h2>
          </div>
          <CalendlyEmbed />
        </div>
      </section>

      {/* Consulting enquiry */}
      <section id="enquiry" className="py-24 border-t border-border bg-surface scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                Consulting Enquiry
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Have a similar <span className="gradient-text">growth challenge?</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer to write first? Share a few details about your project and I will
                come back with how I would approach it.
              </p>
            </div>
            <EnquiryForm />
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
