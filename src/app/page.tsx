"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, TrendingUp, Users } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedCounter } from "@/components/animated-counter";
import dynamic from "next/dynamic";

// ⚡ Bolt Optimization:
// 💡 What: Dynamically import TimelineProcess component
// 🎯 Why: TimelineProcess relies on GSAP which adds significant weight to the initial bundle. It's rendered well below the fold, so lazy loading it reduces the First Load JS size.
// 📊 Impact: First Load JS reduced from ~193 kB to ~148 kB.
const TimelineProcess = dynamic(() => import("@/components/timeline-process").then(mod => mod.TimelineProcess));

import {
  WhatsAppIcon,
  TelegramIcon,
  InstagramIcon,
  MessengerIcon,
  RCSIcon,
  SMSIcon,
  LineIcon,
  GoogleBizIcon,
} from "@/components/channel-icons";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const logos = ["Netflix", "Google", "YouTube", "Bosch", "HSBC", "Carl Zeiss", "Nestlé"];

const stats = [
  { value: 10, prefix: "$", suffix: "M+", label: "Pipeline Contributed" },
  { value: 30, prefix: "", suffix: "%", label: "Engagement Uplift" },
  { value: 60, prefix: "", suffix: "+", label: "Enterprise Workshops" },
];

const channels = [
  { name: "WhatsApp", Icon: WhatsAppIcon, color: "#25D366", bg: "rgba(37,211,102,0.08)" },
  { name: "RCS", Icon: RCSIcon, color: "#1A73E8", bg: "rgba(26,115,232,0.08)" },
  { name: "Instagram", Icon: InstagramIcon, color: "#E1306C", bg: "rgba(225,48,108,0.08)" },
  { name: "Messenger", Icon: MessengerIcon, color: "#0078FF", bg: "rgba(0,120,255,0.08)" },
  { name: "Telegram", Icon: TelegramIcon, color: "#229ED9", bg: "rgba(34,158,217,0.08)" },
  { name: "SMS", Icon: SMSIcon, color: "#9A9080", bg: "rgba(154,144,128,0.08)" },
  { name: "Google Biz", Icon: GoogleBizIcon, color: "#4285F4", bg: "rgba(66,133,244,0.08)" },
  { name: "LINE", Icon: LineIcon, color: "#06C755", bg: "rgba(6,199,85,0.08)" },
];

// Duplicate for seamless loop
const channelsLoop = [...channels, ...channels];

const clientTypes = [
  {
    icon: MessageSquare,
    title: "Brands on WhatsApp Business",
    description:
      "You've launched WhatsApp campaigns but adoption is flat. Templates get ignored. You can't prove ROI.",
  },
  {
    icon: TrendingUp,
    title: "CPaaS & SaaS platforms",
    description:
      "Your enterprise customers aren't activating. Onboarding stalls. Churn happens silently before renewal.",
  },
  {
    icon: Users,
    title: "Enterprise CX teams",
    description:
      "Your team needs a conversational AI strategy that goes beyond broadcast — personalized, measurable, scalable.",
  },
];



export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <AuroraBackground />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Social proof logos — UP FRONT */}
          <motion.div
            className="flex flex-wrap items-center gap-6 md:gap-10 mb-16"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Trusted by teams at
            </span>
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>

          {/* Name + Positioning */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I help enterprises turn{" "}
            <span className="text-accent">messaging channels</span> into growth
            engines
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            8 years managing WhatsApp Business, RCS, and conversational AI for
            Netflix, Google, Bosch, and HSBC at Gupshup. Now available for
            consulting.
          </motion.p>

          {/* CTA */}
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
                Book a Strategy Call <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/readiness-score"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all bg-card/50 backdrop-blur-sm"
              >
                Take the Readiness Score
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ===== CHANNEL MARQUEE ===== */}
      <section className="border-y border-border bg-surface py-8 overflow-hidden">
        <div className="mb-3 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Channels I work with
          </span>
        </div>
        <div className="relative flex">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {channelsLoop.map((ch, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border shrink-0 transition-all"
                style={{
                  background: ch.bg,
                  borderColor: `${ch.color}30`,
                }}
              >
                <ch.Icon size={22} />
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: ch.color }}>
                  {ch.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 3 PROOF NUMBERS ===== */}
      <section className="border-b border-border" style={{ background: 'linear-gradient(to right, var(--surface), color-mix(in srgb, var(--surface) 80%, var(--accent) 20%), var(--surface))' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fade} custom={i} className="text-center p-8 rounded-xl border border-accent/10 bg-accent/[0.03]">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">
                  <AnimatedCounter value={stat.value as number} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONVERSATIONAL AI FLOW ===== */}
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
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              The conversational AI journey — from message to measurable outcome
            </h2>
          </motion.div>

          {/* Flow diagram */}
          <TimelineProcess />

          {/* Channel pills below flow */}
          <motion.div
            className="mt-16 p-8 rounded-2xl border border-border bg-card"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center mb-6">
              Works across every major channel
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {channels.map((ch) => (
                <div
                  key={ch.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all hover:scale-105 cursor-default"
                  style={{ background: ch.bg, borderColor: `${ch.color}25`, color: ch.color }}
                >
                  <ch.Icon size={18} />
                  {ch.name}
                </div>
              ))}
            </div>
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
              Who this is for
            </p>
            <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
              I work with companies where messaging is the channel — not an
              afterthought
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTypes.map((item, i) => (
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

      {/* ===== TEASER CASE STUDY ===== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <WhatsAppIcon size={20} />
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Case Study — Banking
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise bank with 18% WhatsApp adoption
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A major bank launched WhatsApp Business for customer
                service but couldn't move the needle past 18% adoption. Generic
                templates, no journey design, no engagement visibility. We
                rebuilt the entire conversational strategy.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Read the full case study <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "2.3×", label: "Adoption increase" },
                { metric: "45%", label: "Template CTR lift" },
                { metric: "60%", label: "Fewer support tickets" },
                { metric: "90 days", label: "Time to results" },
              ].map((r) => (
                <div
                  key={r.label}
                  className="p-6 rounded-xl border border-border bg-card text-center hover:border-accent/30 transition-all"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
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
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to make messaging{" "}
              <span className="text-accent">actually work</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute strategy call. We'll review your current
              messaging setup and identify the top 3 quick wins.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book a Free Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
