"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const caseStudies = [
  {
    id: "enterprise-bank",
    industry: "Banking & Finance",
    title: "Enterprise Bank — WhatsApp Adoption Revival",
    challenge:
      "A major Indian bank launched WhatsApp Business for customer service but saw only 18% adoption 60 days post-launch. The conversational flows were generic, templates had poor click-through rates, and the internal team had no visibility into what was working.",
    approach: [
      "Conducted full conversational journey audit across 12 banking use cases",
      "Redesigned onboarding communication sequence with 3-touchpoint success plan at weeks 2, 5, and 9",
      "Built engagement dashboard tracking template performance, conversation completion rates, and user drop-off points",
      "Implemented proactive check-ins tied to usage milestones",
    ],
    results: [
      { metric: "2.3x", label: "Adoption increase in one quarter" },
      { metric: "45%", label: "Template click-through improvement" },
      { metric: "60%", label: "Reduction in channel support tickets" },
    ],
  },
  {
    id: "global-electronics",
    industry: "Consumer Electronics",
    title: "Global Electronics Brand — Churn Prevention on Messaging",
    challenge:
      "A global electronics manufacturer was seeing high churn on their messaging campaigns. Campaign engagement was declining month-over-month, and there was no early warning system for disengaging customers.",
    approach: [
      "Built a customer health dashboard tracking delivery rates, engagement scores, and response patterns",
      "Introduced automated churn-risk flags triggered 2 weeks before renewal conversations",
      "Created segmented conversational journeys based on customer lifecycle stage",
      "Implemented A/B testing framework for template optimization",
    ],
    results: [
      { metric: "+15", label: "NPS improvement in 6 months" },
      { metric: "30%", label: "Higher engagement on messaging" },
      { metric: "22%", label: "Reduction in campaign churn" },
    ],
  },
  {
    id: "streaming-giant",
    industry: "Media & Entertainment",
    title: "Streaming Giant — Regional Campaign Adoption at Scale",
    challenge:
      "A global streaming platform struggled with inconsistent campaign adoption across regions. What worked in one market failed in another, and there was no framework for localizing conversational strategies.",
    approach: [
      "Ran 12 discovery workshops to map adoption blockers by region",
      "Created localized onboarding playbooks for 5 different markets",
      "Trained internal teams on a repeatable QBR framework tied to regional KPIs",
      "Built a unified reporting dashboard for cross-region comparison",
    ],
    results: [
      { metric: "35%", label: "Market share increase across regions" },
      { metric: "3x", label: "ROI on campaign engagement" },
      { metric: "50+", label: "Marketing assets created" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
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
            Case Studies
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Real results from <span className="text-accent">real engagements</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Anonymized case studies from enterprise messaging engagements across
            banking, electronics, and media — showing the operational wins
            conversational AI strategy can deliver.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              id={cs.id}
              className="rounded-2xl border border-border bg-card overflow-hidden"
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="p-8 md:p-12 border-b border-border bg-surface/50">
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                  {cs.industry}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">{cs.title}</h2>
              </div>
              
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      The Approach
                    </h3>
                    <ul className="space-y-4">
                      {cs.approach.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ChevronRight size={18} className="text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:border-l lg:border-border lg:pl-12">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    The Results
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {cs.results.map((result, j) => (
                      <div key={j} className="p-6 rounded-xl bg-surface border border-border">
                        <div className="text-3xl font-bold text-accent mb-2">
                          {result.metric}
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-5">
              Want similar results for <span className="text-accent">your brand</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Every engagement starts with a free 30-minute strategy call to
              understand your current messaging setup and identify quick wins.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
