"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Calendar } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
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
            About Saasible
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            The founder behind <span className="text-accent">Saasible</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
            
            {/* Left Col: Sticky Info */}
            <motion.div 
              className="md:sticky md:top-32 space-y-8"
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-surface to-border border border-border flex items-center justify-center text-4xl font-bold text-muted-foreground mx-auto md:mx-0 shadow-lg">
                AY
              </div>
              
              <div className="space-y-4">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">Ankit Yadav</h2>
                  <p className="text-sm text-accent font-medium">Founder, Saasible</p>
                  <p className="text-muted-foreground text-sm">Bangalore, India · Working with brands worldwide</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link href="/book" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-sm font-medium">
                    <Calendar size={18} /> Book a call
                  </Link>
                  <a href="https://vinod820.substack.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-sm font-medium">
                    <FileText size={18} /> Substack
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Story & Timeline */}
            <motion.div 
              className="space-y-16"
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="prose prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p className="text-xl text-foreground font-medium mb-8">
                  Ankit Yadav is the founder of Saasible, an AI growth agency for consumer brands.
                </p>
                <p>
                  Saasible pairs AI agents for the work with human experience for the strategy. We design CRM lifecycle journeys, lead generation systems and AI agents across WhatsApp, SMS, RCS, email and voice.
                </p>
                <p>
                  Saasible exists because the same pattern shows up everywhere: brands spend heavily to acquire customers and buy messaging tools, then never build the journeys that bring those customers back.
                </p>
                <p>
                  If that sounds like your business, <Link href="/book" className="text-accent hover:underline">book a call</Link> and we will look at where customers drop after the first purchase.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
