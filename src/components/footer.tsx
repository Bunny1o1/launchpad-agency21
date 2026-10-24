import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "The work",
    links: [
      { label: "Lifecycle Audit", href: "/services#audit" },
      { label: "AI Growth Build", href: "/services#build" },
      { label: "Growth Retainer", href: "/services#retainer" },
      { label: "Team Workshops", href: "/book?service=workshop" },
    ],
  },
  {
    title: "The library",
    links: [
      { label: "Portfolio", href: "/case-studies" },
      { label: "Lifecycle Score", href: "/readiness-score" },
      { label: "WhatsApp Template Checker", href: "/whatsapp-template-rejection-checker" },
      { label: "Blog", href: "/blog" },
      { label: "Substack", href: "https://vinod820.substack.com/", external: true },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Book a call", href: "/book" },
      { label: "Email", href: "mailto:yuvinod@gmail.com", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvinod/", external: true },
      { label: "GitHub", href: "https://github.com/Bunny1o1", external: true },
    ],
  },
];

const linkClass =
  "text-[15px] text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors";

export function Footer() {
  return (
    <footer className="border-t border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Masthead */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-5xl leading-none tracking-tight">
              Saas<em className="italic">ible</em>
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-3 mb-5">
              AI growth agency · est. Bengaluru
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xs">
              AI agents for the work, human experience for the strategy. CRM
              lifecycle, lead generation and AI agents for consumer brands
              worldwide, led by Vinod Yadav.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display italic text-[22px] font-normal tracking-normal mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-border gap-3 font-mono text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saasible · All rights reserved</p>
          <p>Made in Bengaluru, for brands everywhere · ✦</p>
        </div>
      </div>
    </footer>
  );
}
