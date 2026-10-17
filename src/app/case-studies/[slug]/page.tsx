import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info, CircleDashed } from "lucide-react";
import { getCaseStudies, getCaseStudy, ILLUSTRATIVE_NOTICE } from "@/lib/portfolio";
import { StatusBadge } from "@/components/portfolio-card";

export function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    // Unapproved or illustrative pages stay out of search results.
    robots: cs.illustrative || !cs.client ? { index: false, follow: true } : undefined,
  };
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-14 border-t border-border">
      <div>
        <span className="block text-sm font-bold tabular-nums text-secondary mb-2">{num}</span>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <article>
      {/* ===== HEADER ===== */}
      <header className="relative pt-36 pb-16 border-b border-border overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-secondary/10 blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-accent mb-10"
          >
            <ArrowLeft size={14} /> Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {cs.statuses.map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
            <span className="text-xs font-semibold uppercase tracking-widest text-accent ml-2">
              {cs.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8 max-w-4xl">
            {cs.title}
          </h1>

          {cs.illustrative && (
            <div className="flex items-start gap-3 p-5 rounded-xl border border-dashed border-muted-foreground/50 bg-muted/40 max-w-3xl mb-8">
              <Info size={18} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{ILLUSTRATIVE_NOTICE}</p>
            </div>
          )}

          {!cs.illustrative && (
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {[
                ["Client relationship", cs.client],
                ["Role", cs.role],
                ["Year", cs.year],
                ["Status", cs.statusLine],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{k}</dt>
                  <dd className="text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div className="max-w-5xl mx-auto px-6 pb-8">
        <Section num="01" title="Business challenge">
          <div className="space-y-4">
            {cs.challenge.map((p) => (
              <p key={p} className="text-lg text-foreground/90 leading-relaxed">{p}</p>
            ))}
          </div>
        </Section>

        <Section num="02" title="Strategic approach">
          <List items={cs.approach} />
        </Section>

        <Section num="03" title={cs.illustrative ? "My role in an engagement like this" : "My role and responsibilities"}>
          {cs.role && <p className="font-semibold mb-4">{cs.role}</p>}
          <List items={cs.role_responsibilities} />
        </Section>

        <Section num="04" title={cs.illustrative ? "Deliverables" : "Execution"}>
          <div className="grid sm:grid-cols-2 gap-4">
            {cs.execution.map((e) => (
              <div key={e.title} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold">{e.title}</h3>
                  {e.note && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-secondary/50 text-secondary text-[10px] font-bold uppercase tracking-widest">
                      <CircleDashed size={10} /> {e.note}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section num="05" title="Measurement framework">
          <List items={cs.measurement} />
        </Section>

        <Section num="06" title={cs.illustrative ? "Status" : "Verified outcomes and status"}>
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex w-2.5 h-2.5">
              {!cs.illustrative && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60 animate-ping" />
              )}
              <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${cs.illustrative ? "bg-muted-foreground" : "bg-secondary"}`} />
            </span>
            <p className="font-semibold">{cs.outcomes.statusText}</p>
          </div>
          {cs.outcomes.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden border border-border bg-border">
              {cs.outcomes.metrics.map((m, i, arr) => (
                <div
                  key={m.label}
                  className={`p-5 bg-card ${i === arr.length - 1 && arr.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  <div className={`text-2xl font-bold mb-1 ${m.value ? "text-accent" : "text-muted-foreground/40"}`}>
                    {m.value ?? "Pending"}
                  </div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          {cs.outcomes.metrics && (
            <p className="text-xs text-muted-foreground mt-4">
              Figures are added only once they are verified from campaign data.
            </p>
          )}
        </Section>

        <Section num="07" title="Key learning">
          <blockquote className="text-2xl md:text-3xl font-bold leading-snug border-l-4 border-accent pl-6">
            {cs.learning}
          </blockquote>
        </Section>

        {cs.skills && (
          <Section num="+" title="Skills demonstrated">
            <div className="flex flex-wrap gap-2">
              {cs.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </Section>
        )}
      </div>

      {/* ===== CTA ===== */}
      <section className="py-20 border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a similar <span className="gradient-text">growth challenge?</span>
          </h2>
          <Link
            href="/book#enquiry"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
