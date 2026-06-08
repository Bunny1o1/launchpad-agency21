"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mic, Code2 } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedCounter } from "@/components/animated-counter";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: 10, prefix: "₹", suffix: "Cr+", label: "Pipeline Generated" },
  { value: 326, prefix: "", suffix: "%", label: "Campaign ROI Delivered" },
  { value: 3, prefix: "", suffix: "x", label: "Average Activation Improvement" },
  { value: 8, prefix: "", suffix: " Yrs", label: "Enterprise GTM Experience" },
];

const icpCards = [
  {
    icon: Code2,
    title: "The AI SaaS Founder",
    description:
      "You shipped your product in 3 weeks. You've had 10 demos. Zero conversions. Your GTM motion is broken — and cold email isn't fixing it.",
  },
  {
    icon: MessageSquare,
    title: "The WhatsApp-First Builder",
    description:
      "You know your buyers are on WhatsApp. You just don't have the system, the sequences, or the strategy to turn it into pipeline.",
  },
  {
    icon: Mic,
    title: "The Technical Co-founder",
    description:
      "You can build anything. But you've never run outbound, never written a sales sequence, never closed a deal. You need a GTM partner, not a consultant.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <AuroraBackground />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Credential bar */}
          <motion.div
            className="flex flex-wrap items-center gap-2 mb-16"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="text-xs font-medium text-muted-foreground">
              Built by someone who drove GTM at
            </span>
            <span className="text-xs font-semibold text-foreground">
              Netflix India · Google · HSBC · Bosch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Your buyers are on{" "}
            <span className="text-accent">WhatsApp.</span>{" "}
            Your GTM system isn&apos;t.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Saasible builds outbound and messaging systems for AI-era B2B SaaS
            founders in India — using WhatsApp and Voice AI as the growth channel.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <MagneticButton>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(232,168,56,0.3)]"
              >
                Book a Free GTM Call <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all bg-card/50 backdrop-blur-sm"
              >
                See How It Works
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-border" style={{ background: 'linear-gradient(to right, var(--surface), color-mix(in srgb, var(--surface) 80%, var(--accent) 20%), var(--surface))' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fade} custom={i} className="text-center p-8 rounded-xl border border-accent/10 bg-accent/[0.03]">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHO THIS IS FOR ===== */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="mb-16"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Who This Is For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
              Built for founders who can build, but can&apos;t sell yet
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {icpCards.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-300 group"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              From zero GTM to first revenue — in 30 days
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "ICP Workshop", days: "Day 1–2", desc: "We define exactly who you're selling to, what pain you solve, and why they should respond to you — not your competitor." },
              { num: "02", title: "Channel Strategy", days: "Day 3–4", desc: "WhatsApp, Voice AI, or both? We pick the right outbound channel for your ICP and build the messaging framework." },
              { num: "03", title: "System Build", days: "Day 5–25", desc: "We build the actual outbound system — WhatsApp automation flows, voice agent scripts, sequences, and integrations." },
              { num: "04", title: "Launch + Optimize", days: "Day 26–30", desc: "We launch, track responses, iterate messaging, and hand off the full system with SOPs so you can run it independently." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <span className="text-4xl font-bold text-accent/20 block mb-3">{step.num}</span>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{step.days}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF NUMBERS ===== */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What the systems actually produce
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                These aren&apos;t projections. Every number below came from a real
                outbound or messaging system built for enterprise clients across
                India — using the same WhatsApp and Voice AI approach we bring to
                founder GTM.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                See the full case studies <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "34% → 71%", label: "Activation rate — BFSI WhatsApp outbound" },
                { metric: "326%", label: "Campaign ROI — Streaming giant" },
                { metric: "+15pt", label: "NPS lift — Consumer electronics" },
                { metric: "30 days", label: "Time to first results" },
              ].map((r) => (
                <div
                  key={r.label}
                  className="p-6 rounded-xl border border-border bg-card text-center hover:border-accent/30 transition-all"
                >
                  <div className="text-xl md:text-2xl font-bold text-accent mb-1">
                    {r.metric}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Stop building features.{" "}
              <span className="text-accent">Start getting customers.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute GTM call. We&apos;ll look at your product, your ICP,
              and tell you exactly what outbound system we&apos;d build first.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book a Free GTM Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                View Services
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-5">No pitch. No pressure. Just an honest look at your GTM.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
