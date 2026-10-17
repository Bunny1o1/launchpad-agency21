"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "yuvinod@gmail.com";

const challengeTypes = [
  "Paid acquisition",
  "Customer engagement and lifecycle",
  "Growth strategy and experimentation",
  "AI agents (WhatsApp, voice, chat)",
  "Something else",
];

const field =
  "w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent";

/**
 * Consulting enquiry form. There is no backend yet, so submitting opens the
 * visitor's email app with a pre-filled message to Vinod. Swap the submit
 * handler for a form service later without changing the fields.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company or website: ${get("company")}`,
      `Country or market: ${get("market")}`,
      `Challenge type: ${get("type")}`,
      "",
      get("message"),
    ].join("\n");
    const subject = `Project enquiry: ${get("type") || "Growth challenge"} (${get("company") || get("name")})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="block">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">Your name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">Work email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">Company or website</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">Country or market</span>
        <input name="market" placeholder="e.g. UAE, UK, US" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">What kind of challenge?</span>
        <select name="type" className={field} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {challengeTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="block text-xs font-semibold text-muted-foreground mb-1.5">Tell me about your project</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you trying to achieve, and what is getting in the way?"
          className={field}
        />
      </label>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-background font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          Discuss Your Project <ArrowRight size={16} />
        </button>
        <p className="text-xs text-muted-foreground">
          {sent
            ? `Your email app should open with the message ready. If it did not, write to ${CONTACT_EMAIL}.`
            : "Submitting opens your email app with your details filled in."}
        </p>
      </div>
    </form>
  );
}
