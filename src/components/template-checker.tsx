"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  checkTemplate,
  verdict,
  EXAMPLE,
  EMPTY,
  LIMITS,
  type TemplateInput,
  type Category,
} from "@/lib/template-checker";

const inputBase =
  "w-full rounded-md border border-border bg-input px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";

function Counter({ value, max }: { value: number; max: number }) {
  const over = value > max;
  return (
    <span className={`font-mono text-xs ${over ? "text-red-400" : "text-muted-foreground"}`}>
      {value}/{max}
    </span>
  );
}

function Field({
  label,
  hint,
  htmlFor,
  counter,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor: string;
  counter?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <label htmlFor={htmlFor} className="text-sm font-semibold">
          {label}
          {hint && <span className="ml-1.5 font-normal text-muted-foreground">{hint}</span>}
        </label>
        {counter}
      </div>
      {children}
    </div>
  );
}

export function TemplateChecker() {
  const [t, setT] = useState<TemplateInput>(EXAMPLE);
  const set = <K extends keyof TemplateInput>(k: K, v: TemplateInput[K]) =>
    setT((prev) => ({ ...prev, [k]: v }));

  const issues = useMemo(() => checkTemplate(t), [t]);
  const v = verdict(issues);
  const isExample = JSON.stringify(t) === JSON.stringify(EXAMPLE);

  const toneClasses = {
    good: "border-green-500/40 bg-green-500/[0.06] text-green-800",
    warn: "border-amber-400/40 bg-amber-400/[0.06] text-amber-300",
    bad: "border-red-500/40 bg-red-500/[0.06] text-red-400",
    idle: "border-border bg-surface text-foreground",
  }[v.tone];

  const VerdictIcon =
    v.tone === "good" || v.tone === "idle" ? CheckCircle2 : v.tone === "warn" ? AlertTriangle : AlertCircle;
  const visibleIssues = v.tone === "idle" ? [] : issues;

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      {/* ---------- Inputs ---------- */}
      <form
        className="space-y-5 rounded-lg border border-border bg-surface p-5 sm:p-6"
        onSubmit={(e) => e.preventDefault()}
        aria-label="WhatsApp template to check"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold">Your template</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setT(EMPTY)}
              className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
            {!isExample && (
              <button
                type="button"
                onClick={() => setT(EXAMPLE)}
                className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Load example
              </button>
            )}
          </div>
        </div>
        {isExample && (
          <p className="text-sm text-muted-foreground">
            We loaded a template with common mistakes so you can see how it works. Paste your own over it.
          </p>
        )}

        <fieldset>
          <legend className="text-sm font-semibold mb-1.5">Category you&apos;ll submit as</legend>
          <div className="grid grid-cols-2 gap-2">
            {(["MARKETING", "UTILITY"] as Category[]).map((c) => (
              <label
                key={c}
                className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
                  t.category === c
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={c}
                  checked={t.category === c}
                  onChange={() => set("category", c)}
                  className="sr-only"
                />
                {c === "MARKETING" ? "Marketing" : "Utility"}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Template name" hint="(optional)" htmlFor="tc-name">
          <input
            id="tc-name"
            className={inputBase}
            value={t.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="order_shipped_v1"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </Field>

        <Field
          label="Header"
          hint="(optional, text)"
          htmlFor="tc-header"
          counter={t.header ? <Counter value={t.header.length} max={LIMITS.header} /> : null}
        >
          <input
            id="tc-header"
            className={inputBase}
            value={t.header}
            onChange={(e) => set("header", e.target.value)}
            placeholder="Your order is on its way"
          />
        </Field>

        <Field
          label="Body"
          htmlFor="tc-body"
          counter={<Counter value={t.body.length} max={LIMITS.body} />}
        >
          <textarea
            id="tc-body"
            className={`${inputBase} min-h-[150px] resize-y leading-relaxed`}
            value={t.body}
            onChange={(e) => set("body", e.target.value)}
            placeholder="Hi {{1}}, your order {{2}} has shipped and will arrive by {{3}}. Reply HELP if you need anything."
          />
          {/* Phones only: live verdict next to where people type, linking to the full results */}
          {v.tone !== "idle" && (
            <a
              href="#tc-results"
              className={`mt-2 flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm lg:hidden ${toneClasses}`}
            >
              <span className="flex items-center gap-1.5 font-semibold">
                <VerdictIcon size={16} aria-hidden />
                {v.label}
              </span>
              <span className="shrink-0 text-xs text-foreground/70">
                {visibleIssues.length ? `${visibleIssues.length} to review ↓` : "See result ↓"}
              </span>
            </a>
          )}
        </Field>

        <Field
          label="Footer"
          hint="(optional)"
          htmlFor="tc-footer"
          counter={t.footer ? <Counter value={t.footer.length} max={LIMITS.footer} /> : null}
        >
          <input
            id="tc-footer"
            className={inputBase}
            value={t.footer}
            onChange={(e) => set("footer", e.target.value)}
            placeholder="Reply STOP to opt out"
          />
        </Field>

        <Field label="Button labels" hint="(one per line)" htmlFor="tc-buttons">
          <textarea
            id="tc-buttons"
            className={`${inputBase} min-h-[84px] resize-y`}
            value={t.buttons}
            onChange={(e) => set("buttons", e.target.value)}
            placeholder={"Track order\nTalk to support"}
          />
        </Field>

        <Field label="Button URL" hint="(optional)" htmlFor="tc-url">
          <input
            id="tc-url"
            type="url"
            inputMode="url"
            className={inputBase}
            value={t.buttonUrl}
            onChange={(e) => set("buttonUrl", e.target.value)}
            placeholder="https://yoursite.com/track/{{1}}"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </Field>
      </form>

      {/* ---------- Results ---------- */}
      <section
        id="tc-results"
        aria-live="polite"
        aria-label="Check results"
        className="scroll-mt-24"
      >
        <div className={`rounded-lg border p-5 sm:p-6 ${toneClasses}`}>
          <div className="flex items-center gap-2.5">
            <VerdictIcon size={22} aria-hidden />
            <p className="text-xl font-bold">{v.label}</p>
          </div>
          <p className="mt-1.5 text-sm text-foreground/80">{v.summary}</p>
        </div>

        {visibleIssues.length > 0 && (
          <ul className="mt-4 space-y-3">
            {visibleIssues.map((i) => (
              <li key={i.id} className="rounded-lg border border-border bg-surface p-4">
                <div className="flex items-start gap-2.5">
                  {i.severity === "error" ? (
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" aria-label="Error" />
                  ) : (
                    <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-300" aria-label="Warning" />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold break-words">
                      <span className="mr-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {i.area}
                      </span>
                      {i.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{i.fix}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Red items break a rule Meta documents. Amber items are common reasons for rejection or a category
          change. Meta also checks content policy and duplicates, which no tool can confirm in advance.
        </p>

        {/* The one call to action */}
        <div className="mt-6 rounded-lg border border-border bg-surface p-5 sm:p-6">
          <p className="font-semibold">Approved templates are step one. Pipeline is the goal.</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Saasible is a GTM agency for B2B SaaS founders in India. We build the full WhatsApp and Voice AI
            outbound system: ICP, sequences, templates and launch, in 30 days.
          </p>
          <Link
            href="/book"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book a GTM Strategy Call — ₹999 <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
