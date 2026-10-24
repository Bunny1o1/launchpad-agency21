"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

/** Google Apps Script web app that appends each enquiry to the leads sheet. */
const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwbI3MRVSp0uPF-2N6VyR7xm1Hhkt4TXL_P778BIj_WMotUCqHc9Sa2fNPfwgImK4zu/exec";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "block w-full rounded-md border border-border bg-input px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground";

const label = "block text-[13px] font-medium text-muted-foreground mb-1.5";

/**
 * Floating "Let's talk" enquiry widget shown on every page.
 * The Apps Script endpoint is called in no-cors mode, so the browser cannot
 * read its reply: "sent" means the request left the browser, not that the
 * sheet confirmed it.
 */
export function LeadWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const get = (k: string) => String(fields.get(k) ?? "").trim();
    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      company: get("company"),
      requirement: get("requirement"),
      consent: fields.get("consent") === "on",
    };

    setStatus("sending");
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed z-[60] flex flex-col items-end gap-3"
      style={{
        right: "max(16px, calc(env(safe-area-inset-right, 0px) + 16px))",
        bottom: "max(16px, calc(env(safe-area-inset-bottom, 0px) + 16px))",
      }}
    >
      {open && (
        <div
          ref={panelRef}
          id="saasible-chat"
          role="dialog"
          aria-modal="false"
          aria-labelledby="saasible-chat-title"
          className="w-[min(360px,calc(100vw-32px))] max-h-[calc(100dvh-110px)] overflow-y-auto border border-foreground bg-card text-foreground p-5"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
                ✦ Enquiry ✦
              </p>
              <h2 id="saasible-chat-title" className="text-[32px]">
                Let&apos;s talk <em>growth</em>.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close enquiry form"
              className="text-muted-foreground hover:text-foreground mt-1"
            >
              <X size={18} />
            </button>
          </div>

          {status === "sent" ? (
            <div role="status" aria-live="polite" className="py-4">
              <p className="text-[15px] leading-relaxed mb-5">
                Your request was sent. Please contact us if you need immediate
                assistance.
              </p>
              <p className="font-mono text-xs text-muted-foreground mb-5 select-all">
                yuvinod@gmail.com
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-[15px] underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form id="saasible-lead-form" onSubmit={onSubmit} className="flex flex-col gap-3.5">
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Tell us a little about your business. Our team can help you
                explore the right solution.
              </p>

              <div>
                <label htmlFor="lead-name" className={label}>Name *</label>
                <input ref={firstFieldRef} id="lead-name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="lead-email" className={label}>Business email *</label>
                <input id="lead-email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="min-w-0">
                  <label htmlFor="lead-phone" className={label}>Phone</label>
                  <input id="lead-phone" name="phone" type="tel" autoComplete="tel" className={field} />
                </div>
                <div className="min-w-0">
                  <label htmlFor="lead-company" className={label}>Company</label>
                  <input id="lead-company" name="company" autoComplete="organization" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="lead-requirement" className={label}>What do you need help with? *</label>
                <textarea id="lead-requirement" name="requirement" required rows={3} className={field} />
              </div>

              <label className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-snug">
                <input name="consent" type="checkbox" required className="mt-0.5 accent-foreground" />
                <span>
                  I agree that Saasible may use these details to respond to my enquiry.{" "}
                  <Link href="/privacy-policy" target="_blank" rel="noopener" className="underline underline-offset-2 text-foreground">
                    Privacy policy
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-full bg-foreground text-background text-[15px] font-medium hover:opacity-85 transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "Sending your enquiry…" : "Send enquiry"}
              </button>

              <p id="saasible-status" role="status" aria-live="polite" className="text-[13px] text-secondary min-h-[1em]">
                {status === "error" && "We couldn't send your request. Please try again later."}
              </p>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="saasible-chat"
        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-5 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        {open ? "Close" : "Let’s talk"}
      </button>
    </div>
  );
}
