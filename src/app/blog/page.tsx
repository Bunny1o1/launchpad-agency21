import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conversational AI & Messaging Growth",
  description:
    "Practical essays, frameworks, and lessons from managing enterprise WhatsApp Business, RCS, and conversational AI channels at scale.",
  openGraph: {
    title: "Blog — Vinod Yadav",
    description:
      "Practical essays on conversational AI, messaging strategy, and enterprise growth.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-surface border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Insights & Thinking
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Writing on <span className="text-accent">growth & messaging</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical essays, frameworks, and lessons from managing enterprise
            messaging channels at scale. No fluff — just what works.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Clock size={12} />
                      {post.readingTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground">
              Articles coming soon — subscribe below to get notified.
            </div>
          )}

          {/* Substack CTA */}
          <div className="p-12 text-center rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/5 to-transparent">
            <h3 className="text-2xl font-bold mb-4">Get new essays in your inbox</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join founders and growth leaders getting practical notes on
              retention, conversational AI, and scale. Weekly. No spam.
            </p>
            <a
              href="https://vinod820.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-background font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe on Substack <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
