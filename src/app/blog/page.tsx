"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const posts = [
  {
    id: 1,
    title: "Why Customer Success Should Own Expansion, Not Just Retention",
    excerpt:
      "Most CS teams are measured on keeping customers alive — but the real opportunity is in growing them.",
    date: "April 2026",
    category: "Customer Success",
    link: "https://www.linkedin.com/posts/yuvinod_customer-success-teams-should-own-expansion-activity-7429405192749555712-_1o1",
  },
  {
    id: 2,
    title: "The Vibe Coding Platform Crisis: Why Your Growth Is Fragile",
    excerpt:
      "A breakdown of how unclear ICPs and weak retention loops hurt growth even when signups look strong.",
    date: "March 2026",
    category: "Growth Strategy",
    link: "https://www.linkedin.com/posts/yuvinod_the-vibe-coding-platform-crisis-why-your-activity-7422223075079000064-XRGu",
  },
  {
    id: 3,
    title: "Why Most Brands Fail at WhatsApp Business",
    excerpt:
      "Brands invest heavily in WhatsApp Business API but treat it like a broadcast channel. They're paying per message for spam.",
    date: "February 2026",
    category: "Conversational AI",
    link: "https://vinod820.substack.com/",
  },
  {
    id: 4,
    title: "The Enterprise Messaging Playbook: Lessons from Netflix & Google",
    excerpt:
      "What I learned managing WhatsApp Business for two of the world's most sophisticated tech companies.",
    date: "January 2026",
    category: "Enterprise Strategy",
    link: "https://vinod820.substack.com/",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-surface border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Insights & Thinking
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Writing on <span className="text-accent">growth & messaging</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Practical essays, frameworks, and lessons from managing enterprise
            messaging channels at scale.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-surface transition-all flex flex-col h-full"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    {post.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors mt-auto">
                  Read Article <ArrowUpRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Substack CTA */}
          <motion.div
            className="mt-24 p-12 text-center rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/5 to-transparent"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Get new essays in your inbox</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join founders and growth leaders getting practical notes on retention, conversational AI, and scale.
            </p>
            <a
              href="https://vinod820.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-background font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe on Substack <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
