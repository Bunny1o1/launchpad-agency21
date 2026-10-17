import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudies } from "@/lib/portfolio";
import { PortfolioGrid } from "@/components/portfolio-card";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "How Vinod Yadav approaches growth strategy, paid acquisition, customer engagement and experimentation, with real projects and clearly labelled methodology examples.",
};

export default function PortfolioPage() {
  const studies = getCaseStudies();

  return (
    <>
      {/* ===== EDITORIAL HERO ===== */}
      <section className="relative pt-36 pb-20 border-b border-border overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-secondary/10 blur-[140px] pointer-events-none" />
        <div className="absolute -top-20 -left-40 w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Portfolio</span>
            <span className="h-px w-16 bg-secondary" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight max-w-5xl mb-10">
            Strategy is only the beginning.{" "}
            <span className="gradient-text">Execution is what matters.</span>
          </h1>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 pt-8 border-t border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Growth strategy · Paid acquisition · Customer engagement · Experimentation
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I work across growth strategy, paid acquisition, customer engagement,
              experimentation, and campaign execution. Explore how I approach real business
              challenges and turn strategy into actionable growth programmes.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LEGEND ===== */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" /> Real Project
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-secondary" /> In Progress
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border border-dashed border-muted-foreground" /> Illustrative Example
          </span>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <PortfolioGrid studies={studies} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Have a similar <span className="gradient-text">growth challenge?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            Tell me what you are working on. I will reply with how I would approach it.
          </p>
          <Link
            href="/book#enquiry"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
