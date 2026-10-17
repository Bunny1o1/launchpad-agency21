"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Megaphone, CalendarCheck, CheckCircle, Globe2, ShieldCheck, Gauge, Bot, UserCheck } from "lucide-react";
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
  { value: 1, prefix: "$", suffix: "M+", label: "Pipeline Influenced" },
  { value: 326, prefix: "", suffix: "%", label: "Campaign ROI Delivered" },
  { value: 2, prefix: "", suffix: "x", label: "Customer Activation Lift" },
  { value: 8, prefix: "", suffix: "+ Yrs", label: "Enterprise Lifecycle Experience" },
];

const icpCards = [
  {
    icon: ShoppingBag,
    title: "The D2C and Ecommerce Founder",
    description:
      "Traffic is coming in. Carts get abandoned. Customers buy once and never come back. You need a lifecycle engine, not another discount code.",
  },
  {
    icon: Megaphone,
    title: "The Consumer Brand Marketer",
    description:
      "You spend on ads every month. Leads come in and go cold because nobody follows up fast enough. You need speed and follow-through at scale.",
  },
  {
    icon: CalendarCheck,
    title: "The Service Business Owner",
    description:
      "Clinics, coaching, real estate, salons, gyms. Enquiries arrive at all hours. Bookings slip through the cracks. You need an AI agent that never sleeps.",
  },
];

const pillars = [
  { icon: Megaphone, title: "Attract", desc: "Lead generation that fills the funnel. Meta and Google ads, landing pages, click-to-WhatsApp campaigns and AI lead magnets." },
  { icon: Bot, title: "Convert", desc: "AI agents on WhatsApp, voice and web chat that reply in seconds, qualify leads and book calls around the clock." },
  { icon: Gauge, title: "Engage", desc: "CRM lifecycle journeys across WhatsApp, SMS, RCS and email. Onboarding, cart recovery, reminders and smart broadcasts." },
  { icon: CheckCircle, title: "Retain", desc: "Repeat purchase, win-back, reviews and referrals. We find the customers about to leave and bring them back." },
  { icon: UserCheck, title: "Consult", desc: "The human layer. Audits, channel strategy and monthly reviews with someone who has run lifecycles for global brands." },
];

const markets = [
  { region: "Middle East", note: "UAE, Saudi Arabia, Qatar" },
  { region: "UK and Europe", note: "GDPR-ready journeys" },
  { region: "Southeast Asia", note: "Singapore, Indonesia, Malaysia" },
  { region: "United States", note: "SMS, email and voice first" },
  { region: "India", note: "WhatsApp-first growth" },
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
              Built by someone who ran customer lifecycles for
            </span>
            <span className="text-xs font-semibold text-foreground">
              Netflix · YouTube · Google · HSBC · Bosch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Your customers are on{" "}
            <span className="gradient-text">WhatsApp, SMS and email.</span>{" "}
            Your growth system isn&apos;t.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Saasible is an AI growth agency for consumer brands. We build AI agents
            and CRM lifecycle systems that turn clicks into buyers and buyers into
            repeat customers. AI does the volume. Human experience does the strategy.
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(255,194,43,0.3)]"
              >
                Book a Free Lifecycle Call <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all bg-card/50 backdrop-blur-sm"
              >
                See What We Build
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.p
            className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <Globe2 size={14} className="text-secondary" />
            Working with brands in the Middle East, UK, Europe, Southeast Asia, US and India
          </motion.p>
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
              Built for consumer brands that want more customers and more repeat buyers
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

      {/* ===== WHAT WE DO ===== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="mb-16"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              The Full Customer Lifecycle
            </p>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
              AI agents for the work. <span className="text-secondary">Human judgment</span> for the strategy.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
              Most AI agencies sell you a bot. We design the whole journey, from the first
              ad click to the fifth purchase, and we stay accountable for the result.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${i === 4 ? "bg-secondary/10 border border-secondary/30" : "bg-accent/10 border border-accent/20"}`}>
                  <p.icon size={18} className={i === 4 ? "text-secondary" : "text-accent"} />
                </div>
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-surface border-y border-border">
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
              From leaky funnel to a running lifecycle engine in 30 days
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Lifecycle Audit", days: "Day 1 to 3", desc: "We map your funnel from first click to repeat purchase and find exactly where revenue is leaking." },
              { num: "02", title: "Journey and Channel Design", days: "Day 4 to 7", desc: "We pick the right mix of WhatsApp, SMS, RCS, email and voice for your market and design every customer journey." },
              { num: "03", title: "AI Agent and Automation Build", days: "Day 8 to 25", desc: "We build the AI agents, CRM flows, templates and integrations. Compliant with WhatsApp policy, GDPR and TCPA." },
              { num: "04", title: "Launch and Human Review", days: "Day 26 to 30", desc: "We launch, measure, and review results with you. Then we keep optimizing, or hand it over with full SOPs." },
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
                These are not projections. Every number below came from a real
                lifecycle or messaging program run for a global consumer brand.
                The same playbook now powers every Saasible build.
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
                { metric: "34% → 71%", label: "Activation rate, banking WhatsApp journey" },
                { metric: "326%", label: "Campaign ROI, global streaming brand" },
                { metric: "+15pt", label: "NPS lift, consumer electronics brand" },
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

      {/* ===== MARKETS + COMPLIANCE ===== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Markets We Serve
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One playbook. The right channels for every market.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                WhatsApp leads in the Gulf, Europe and Asia. SMS, email and voice lead in
                the US. We design for how your customers actually talk to brands, wherever
                they are.
              </p>
              <div className="flex items-start gap-3 p-5 rounded-xl border border-secondary/30 bg-secondary/[0.05]">
                <ShieldCheck size={20} className="text-secondary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Compliance built in.</span>{" "}
                  Opt-in flows, consent records and message policies designed around WhatsApp
                  Business policy, GDPR in Europe and TCPA in the US.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {markets.map((m, i) => (
                <div
                  key={m.region}
                  className={`p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all ${i === markets.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Globe2 size={16} className="text-accent" />
                    <span className="font-bold">{m.region}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{m.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FREE TOOLS ===== */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Free Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Find your revenue leaks in minutes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { href: "/whatsapp-template-rejection-checker", title: "WhatsApp Template Rejection Checker", desc: "Paste your template and see why Meta might reject it, before you submit." },
              { href: "/readiness-score", title: "Lifecycle Readiness Score", desc: "Answer a few questions and get a score for your messaging and retention setup." },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Try it free <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
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
              Stop losing customers.{" "}
              <span className="gradient-text">Start keeping them.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 20-minute lifecycle call. We look at your funnel, show you
              the biggest leaks, and tell you which AI agent or journey to build first.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book a Free Lifecycle Call <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                View Services
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-5">Pricing in USD for global brands. INR pricing available in India.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
