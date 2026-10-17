import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy, StatusLabel } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: StatusLabel }) {
  const styles: Record<StatusLabel, string> = {
    "Real Project": "bg-accent text-background border-accent",
    "In Progress": "border-secondary text-secondary bg-secondary/10",
    "Illustrative Example": "border-dashed border-muted-foreground/50 text-muted-foreground bg-transparent",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest",
        styles[status]
      )}
    >
      {status}
    </span>
  );
}

export function PortfolioCard({
  cs,
  index,
  featured = false,
}: {
  cs: CaseStudy;
  index: number;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300",
        cs.illustrative
          ? "border border-dashed border-border bg-transparent hover:border-muted-foreground/50"
          : "border border-accent/40 bg-card hover:border-accent shadow-[0_20px_60px_-25px_rgba(168,18,12,0.45)]",
        featured && "md:p-12"
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-8">
        <span
          className={`font-bold tabular-nums leading-none ${featured ? "text-6xl md:text-7xl" : "text-5xl"} ${
            cs.illustrative ? "opacity-25" : "gradient-text"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap justify-end gap-2">
          {cs.statuses.map((s) => (
            <StatusBadge key={s} status={s} />
          ))}
        </div>
      </div>

      <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
        {cs.category}
      </span>
      <h3
        className={cn(
          "font-bold leading-tight mb-4 group-hover:text-accent transition-colors",
          featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
        )}
      >
        {cs.title}
      </h3>
      <p className={cn("text-muted-foreground leading-relaxed mb-8", featured ? "text-base md:text-lg max-w-2xl" : "text-sm")}>
        {cs.summary}
      </p>

      {cs.client && (
        <p className="text-xs text-muted-foreground mb-6">
          <span className="text-foreground font-semibold">{cs.client}</span>
          {cs.year ? ` · ${cs.year}` : ""}
          {cs.role ? ` · ${cs.role}` : ""}
        </p>
      )}

      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
        View Case Study
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function PortfolioGrid({ studies }: { studies: CaseStudy[] }) {
  const real = studies.filter((s) => !s.illustrative);
  const illustrative = studies.filter((s) => s.illustrative);
  return (
    <div className="space-y-6">
      {real.map((cs, i) => (
        <PortfolioCard key={cs.slug} cs={cs} index={i} featured />
      ))}
      {illustrative.length > 0 && (
        <>
          <div className="flex items-center gap-4 pt-10">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              Methodology examples
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="text-xs text-muted-foreground max-w-3xl">
            The examples below are illustrative. They show how I approach common growth
            challenges. They are not verified client engagements and claim no measured results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illustrative.map((cs, i) => (
              <PortfolioCard key={cs.slug} cs={cs} index={real.length + i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
