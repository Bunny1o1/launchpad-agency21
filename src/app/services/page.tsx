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
    id: "audit",
    title: "Lifecycle Audit",
    tagline: "Find out where your revenue is leaking",
    price: "$400",
    priceInr: "₹15,000 in India",
    duration: "5-day engagement",
    description:
      "We review your funnel, CRM, ads-to-lead flow and messaging channels, from first click to repeat purchase. You get a prioritized fix list and a 60-minute walkthrough call.",
    deliverables: [
      "Full funnel and lifecycle map",
      "Channel review: WhatsApp, SMS, RCS, email and voice",
      "Lead response and follow-up speed check",
      "Compliance check for your markets (WhatsApp policy, GDPR, TCPA)",
      "Prioritized fix list with expected impact",
      "60-minute walkthrough call",
    ],
    bestFor: "Brands that want clarity before spending on new tools or agents.",
  },
  {
    id: "build",
    title: "AI Growth Build",
    tagline: "One complete growth engine, built and running in 30 days",
    price: "From $2,500",
    priceInr: "From ₹75,000 in India",
    duration: "30-day engagement",
    description:
      "We build one full engine end to end. For example: ad campaign, landing page, an AI agent on WhatsApp or voice that qualifies and books, and the CRM journeys that follow up. Full handoff with SOPs and video walkthroughs.",
    deliverables: [
      "Everything in the Lifecycle Audit",
      "Lead generation setup: ads, landing page, lead magnet",
      "AI agent on WhatsApp, voice or web chat",
      "CRM lifecycle journeys: onboarding, cart recovery, reminders, win-back",
      "30-day launch with weekly reporting",
      "Full handoff with SOPs and video walkthroughs",
    ],
    bestFor: "Brands ready to turn more leads into buyers and buyers into repeat customers.",
    featured: true,
  },
  {
    id: "retainer",
    title: "Growth Retainer",
    tagline: "AI execution plus a senior lifecycle consultant, every month",
    price: "From $1,500/month",
    priceInr: "From ₹40,000/month in India",
    duration: "Ongoing",
    description:
      "We run and improve your lifecycle every month. New journeys, new campaigns, agent tuning and reporting, plus a monthly strategy session with Vinod. A full lifecycle team without the hiring.",
    deliverables: [
      "Ongoing management of agents, journeys and campaigns",
      "New campaigns and journey builds each month",
      "Weekly performance review",
      "Direct Slack or WhatsApp access to Vinod",
      "Monthly strategy and growth review",
    ],
    bestFor: "Brands that want lifecycle and retention run as an ongoing function.",
  },
];

const comparison = [
  { feature: "Starts in days, not months", saasible: true, salesHire: false, agency: false },
  { feature: "Builds the actual AI agents and journeys", saasible: true, salesHire: false, agency: "Maybe" },
  { feature: "WhatsApp, SMS, RCS, email and voice expertise", saasible: true, salesHire: false, agency: false },
  { feature: "Global market and compliance knowledge", saasible: true, salesHire: "Maybe", agency: false },
  { feature: "No full-time salary cost", saasible: true, salesHire: false, agency: true },
  { feature: "Enterprise lifecycle track record", saasible: true, salesHire: "Maybe", agency: false },
  { feature: "Senior strategist on every account", saasible: true, salesHire: false, agency: false },
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
            AI agents for the work.{" "}
            <span className="gradient-text">Human experience for the strategy.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Three ways to work with Saasible. From a quick lifecycle audit to a full
            AI growth engine, built and running in 30 days. Priced in USD, with INR
            pricing for brands in India.
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
                    <span className="text-xs text-muted-foreground">{svc.priceInr}</span>
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
            <h2 className="text-3xl font-bold mb-4">How we compare, honestly</h2>
            <p className="text-muted-foreground">Saasible vs hiring an in-house lifecycle lead vs a generic AI agency.</p>
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
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">In-house Hire</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Generic AI Agency</th>
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
                  <td className="py-4 px-6 font-bold text-accent bg-accent/5">$400</td>
                  <td className="py-4 px-6 text-muted-foreground">Full salary plus tools</td>
                  <td className="py-4 px-6 text-muted-foreground">Monthly retainer plus setup fees</td>
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
              Book a free 20-minute lifecycle call. We look at your funnel and your market,
              then recommend the right engagement. No pitch, no pressure.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Free Lifecycle Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
