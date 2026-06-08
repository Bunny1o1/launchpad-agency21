"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const services = [
  {
    id: "diagnostic",
    title: "GTM Diagnostic",
    tagline: "Clarity before you build anything",
    price: "₹15,000",
    duration: "5-day engagement",
    description:
      "We define your ICP, pick the right outbound channel, and hand you a messaging framework ready to run — delivered as a Notion doc with a 60-minute walkthrough call.",
    deliverables: [
      "ICP definition workshop",
      "Channel strategy (WhatsApp vs Voice vs both)",
      "Messaging framework + first sequences",
      "Notion doc with full findings",
      "60-min walkthrough call",
    ],
    bestFor: "Founders who need clarity before building anything.",
  },
  {
    id: "build",
    title: "GTM Build",
    tagline: "Your first outbound engine — built and running in 30 days",
    price: "₹75,000",
    duration: "30-day engagement",
    description:
      "We build the entire outbound system — WhatsApp automation flows, Voice AI agent, sequences — and run the first 30-day campaign with you. Full handoff with SOPs and Loom walkthroughs.",
    deliverables: [
      "Everything in GTM Diagnostic",
      "WhatsApp automation flows built",
      "Voice AI agent scripted and deployed",
      "30-day campaign execution",
      "Weekly performance reporting",
      "Full handoff with SOPs and Loom walkthroughs",
    ],
    bestFor: "Founders ready to launch their first GTM motion.",
    featured: true,
  },
  {
    id: "retainer",
    title: "GTM Retainer",
    tagline: "GTM as an ongoing function — without the full-time hire",
    price: "₹40,000/month",
    duration: "Ongoing",
    description:
      "We manage the system, build new sequences, and optimize every month. You get a dedicated GTM function without the salary, equity, or ramp time of a sales hire.",
    deliverables: [
      "Ongoing system management and optimization",
      "Weekly performance review",
      "New sequences and campaign builds",
      "Dedicated Slack access to Vinod",
      "Monthly strategy call",
    ],
    bestFor: "Founders who want GTM as an ongoing function without hiring.",
  },
];

const comparison = [
  { feature: "Starts in days, not months", saasible: true, salesHire: false, agency: false },
  { feature: "Builds the actual system", saasible: true, salesHire: false, agency: false },
  { feature: "WhatsApp + Voice AI expertise", saasible: true, salesHire: false, agency: false },
  { feature: "India B2B market knowledge", saasible: true, salesHire: "Maybe", agency: false },
  { feature: "No equity, no full-time cost", saasible: true, salesHire: false, agency: true },
  { feature: "Proven enterprise GTM track record", saasible: true, salesHire: "Maybe", agency: false },
  { feature: "Founder-facing, not account manager", saasible: true, salesHire: false, agency: false },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
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
            Services &amp; Pricing
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Build your GTM system.{" "}
            <span className="text-accent">Start getting customers.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Three ways to work with Saasible — from quick clarity to a full
            outbound engine built and running in 30 days.
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              className={`rounded-2xl border ${
                svc.featured ? "border-accent/50 bg-surface/50" : "border-border bg-card"
              } p-8 md:p-12 relative`}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {svc.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20">
                  Most Popular
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{svc.title}</h2>
                  <p className="text-muted-foreground mb-8">{svc.tagline}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-xl font-bold text-foreground">{svc.price}</span>
                    <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-muted-foreground">
                      {svc.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {svc.description}
                  </p>

                  <div className="p-4 bg-surface rounded-xl border border-border mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
                      Best For
                    </span>
                    <p className="text-sm font-medium">{svc.bestFor}</p>
                  </div>

                  <Link
                    href={`/book?service=${svc.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center md:w-auto"
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    What you get
                  </h3>
                  <ul className="space-y-4">
                    {svc.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">How we compare — honestly</h2>
            <p className="text-muted-foreground">Saasible vs hiring a sales head vs a generic GTM agency.</p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Feature</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-accent bg-accent/5">Saasible</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Sales Head Hire</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Generic GTM Agency</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-accent bg-accent/5">
                      {row.saasible === true ? "✓" : row.saasible === false ? "✗" : row.saasible}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {row.salesHire === true ? "✓" : row.salesHire === false ? "✗" : row.salesHire}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {row.agency === true ? "✓" : row.agency === false ? "✗" : row.agency}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 font-medium text-foreground">Typical cost to start</td>
                  <td className="py-4 px-6 font-bold text-accent bg-accent/5">₹15,000</td>
                  <td className="py-4 px-6 text-muted-foreground">₹8L–15L/year</td>
                  <td className="py-4 px-6 text-muted-foreground">₹1L–5L/month</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-5">Not sure which tier is right?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute GTM call. We&apos;ll look at your product, your ICP, and
              recommend the right engagement — no pitch, no pressure.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Free GTM Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
