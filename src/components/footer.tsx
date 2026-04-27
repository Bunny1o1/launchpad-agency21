import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Record<string, FooterLink[]> = {
  services: [
    { label: "Messaging Audit", href: "/services#audit" },
    { label: "Growth Retainer", href: "/services#retainer" },
    { label: "Messaging Sprint", href: "/services#sprint" },
    { label: "Workshops", href: "/services#workshop" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Readiness Score", href: "/readiness-score" },
    { label: "Blog", href: "/blog" },
    { label: "Substack", href: "https://vinod820.substack.com/", external: true },
  ],
  connect: [
    { label: "Book a Call", href: "/book" },
    { label: "Email", href: "mailto:yuvinod@gmail.com", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvinod/", external: true },
    { label: "GitHub", href: "https://github.com/Bunny1o1", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-3">
              <span className="text-accent">Vinod</span> Yadav
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Conversational AI Growth Expert. Helping enterprises drive
              adoption and revenue through WhatsApp Business, RCS, and messaging
              platforms.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {title}
              </h4>
              <div className="flex flex-col gap-2.5">
                {links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vinod Yadav. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/yuvinod/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Bunny1o1", label: "GitHub" },
              { icon: Mail, href: "mailto:yuvinod@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
