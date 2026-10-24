"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/case-studies" },
  { label: "Lifecycle Score", href: "/readiness-score" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      {showBar && (
        <div className="bg-foreground text-background text-[13px]">
          <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-3 relative">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] border border-background/60 rounded-full px-2 py-0.5">
              New
            </span>
            <span className="hidden sm:inline">
              The free WhatsApp Template Rejection Checker is live.
            </span>
            <Link
              href="/whatsapp-template-rejection-checker"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Try it →
            </Link>
            <button
              onClick={() => setShowBar(false)}
              aria-label="Dismiss announcement"
              className="absolute right-4 opacity-70 hover:opacity-100"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Masthead */}
      <nav className="bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-[30px] leading-none tracking-tight"
            aria-label="Saasible home"
          >
            Saas<em className="italic">ible</em>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] transition-colors ${
                  pathname === item.href
                    ? "text-foreground underline underline-offset-[6px] decoration-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/book"
              className="text-[15px] font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:opacity-85 transition-opacity"
            >
              Book a free call →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col px-6 pt-24 pb-10">
          <button
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="border-t border-foreground">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block font-display text-4xl py-4 border-b border-border ${
                  pathname === item.href ? "italic" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book"
            className="mt-8 self-start text-base font-medium px-7 py-3 rounded-full bg-foreground text-background"
            onClick={() => setOpen(false)}
          >
            Book a free call →
          </Link>
        </div>
      )}
    </header>
  );
}
