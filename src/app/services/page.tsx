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
    title: "Conversational AI Audit",
    tagline: "See what's broken before you spend more",
    price: "Starting at $1,500",
    duration: "2-week engagement",
    description:
      "A forensic review of your WhatsApp Business, RCS, or messaging platform strategy. You get a clear diagnosis of where engagement drops, what templates aren't working, and a prioritized 30/60/90-day action plan.",
    deliverables: [
      "Full messaging channel audit (WhatsApp, RCS, SMS)",
      "Conversational journey mapping & gap analysis",
      "Template performance teardown",
      "User engagement & adoption scoring",
      "Competitor messaging strategy benchmark",
      "30/60/90-day action plan with priorities",
      "Recorded Loom walkthrough of findings",
    ],
    bestFor: "Brands that have launched messaging channels but aren't seeing expected ROI.",
  },
  {
    id: "retainer",
    title: "Messaging Growth Retainer",
    tagline: "Your embedded conversational AI strategist",
    price: "Starting at $2,500/month",
    duration: "Ongoing partnership",
    description:
      "I work inside your team 10-15 hours per month as your conversational AI growth partner — optimizing journeys, improving adoption, building playbooks, and identifying expansion opportunities.",
    deliverables: [
      "Custom conversational journey optimization",
      "Monthly engagement & health analytics",
      "Template strategy and A/B testing framework",
      "Platform performance monitoring & alerts",
      "Bi-weekly strategy calls",
      "Dedicated Slack/Teams access",
      "Quarterly business reviews with recommendations",
      "Expansion & upsell opportunity identification",
    ],
    bestFor: "Enterprises that need ongoing strategic guidance without hiring a full-time specialist.",
    featured: true,
  },
  {
    id: "sprint",
    title: "Enterprise Messaging Sprint",
    tagline: "Build your entire messaging infrastructure in 30 days",
    price: "Starting at $5,000",
    duration: "30-day intensive",
    description:
      "A hands-on, intensive buildout of your conversational AI infrastructure — from journey design to template libraries, analytics dashboards, automation flows, and team training.",
    deliverables: [
      "End-to-end conversational journey design",
      "Template library creation (50+ templates)",
      "Automation flow architecture",
      "Analytics & reporting framework",
      "Team training & enablement sessions",
      "Integration recommendations & architecture",
      "Comprehensive handoff documentation",
      "2 weeks post-sprint support",
    ],
    bestFor: "Companies launching or relaunching their messaging strategy who need rapid execution.",
  },
  {
    id: "workshop",
    title: "Workshops & Training",
    tagline: "Upskill your team on conversational AI",
    price: "Starting at $800/session",
    duration: "Half-day or full-day",
    description:
      "Interactive workshops for marketing, CX, and product teams on conversational AI best practices — from WhatsApp Business API fundamentals to advanced journey optimization.",
    deliverables: [
      "Customized workshop agenda for your team",
      "Hands-on exercises with real use cases",
      "Conversational AI playbook (take-home)",
      "Best practices documentation",
      "Q&A and strategy session",
      "Post-workshop action plan",
    ],
    bestFor: "Teams new to conversational AI or brands wanting to level up internal capabilities.",
  },
];

const comparison = [
  { feature: "Messaging expertise", you: true, agency: false, inhouse: "Maybe" },
  { feature: "Enterprise experience", you: true, agency: false, inhouse: false },
  { feature: "Fast to start", you: true, agency: true, inhouse: false },
  { feature: "No long-term lock-in", you: true, agency: false, inhouse: false },
  { feature: "Platform-agnostic", you: true, agency: false, inhouse: true },
  { feature: "Understands CPaaS internals", you: true, agency: false, inhouse: false },
  { feature: "Proven ROI metrics", you: true, agency: "Maybe", inhouse: "Maybe" },
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
            Services & Pricing
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Turn messaging channels into{" "}
            <span className="text-accent">measurable growth</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Whether you need a quick audit or a full messaging infrastructure
            buildout, there's a way to work together that fits your stage and urgency.
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
            <h2 className="text-3xl font-bold mb-4">Why work with me vs. alternatives</h2>
            <p className="text-muted-foreground">The difference between a generic agency and a domain expert.</p>
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
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-accent bg-accent/5">Vinod (Me)</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Digital Agency</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">In-House Hire</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-accent bg-accent/5">
                      {row.you === true ? "✓" : row.you === false ? "✗" : row.you}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {row.agency === true ? "✓" : row.agency === false ? "✗" : row.agency}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {row.inhouse === true ? "✓" : row.inhouse === false ? "✗" : row.inhouse}
                    </td>
                  </tr>
                ))}
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
            <h2 className="text-3xl font-bold mb-5">Not sure which service fits?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute call. I'll understand your situation and recommend the right engagement — no pitch, no pressure.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Free Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
