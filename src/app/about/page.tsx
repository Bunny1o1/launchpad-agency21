"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, FileText } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const timeline = [
  {
    year: "2024 – Present",
    role: "Global Growth Manager",
    company: "Gupshup",
    desc: "Managing post-sales journey and driving adoption for enterprise accounts globally.",
  },
  {
    year: "2021 – 2022",
    role: "Co-Founder & Growth Lead",
    company: "Royalnest.in",
    desc: "Led brand positioning, digital marketing, and GTM for a custom furniture startup.",
  },
  {
    year: "2019 – 2021",
    role: "Performance Marketing Lead",
    company: "Freo",
    desc: "Optimized acquisition channels, reduced CAC by 8%, and spearheaded programmatic adoption.",
  },
  {
    year: "2017 – 2021",
    role: "Operations Control Executive",
    company: "Furlenco",
    desc: "Managed complex daily logistics and maintained 98% fulfillment during peak seasons.",
  },
];

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
            About Me
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            The operator behind the <span className="text-accent">enterprise logos</span>
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
                VY
              </div>
              
              <div className="space-y-4">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">Vinod Yadav</h2>
                  <p className="text-muted-foreground text-sm">Bangalore, India</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/in/yuvinod/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-sm font-medium">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="https://github.com/Bunny1o1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent transition-colors text-sm font-medium">
                    <Github size={18} /> GitHub
                  </a>
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
              <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p className="text-xl text-foreground font-medium mb-8">
                  For the last 8+ years, I've lived at the intersection of customer success, growth marketing, and conversational AI.
                </p>
                <p>
                  I currently work as a Global Growth Manager at Gupshup, where I manage the post-sales journey for enterprise giants like Netflix, Google, YouTube, Bosch, HSBC, and Carl Zeiss. My mandate is simple: make sure these massive brands actually get ROI from WhatsApp Business, RCS, and conversational AI.
                </p>
                <p>
                  I've personally contributed to a ₹10 Crore pipeline, run 60+ enterprise discovery workshops, and designed conversational journeys that boosted engagement by 30%.
                </p>
                <p>
                  I started consulting because I see the exact same pattern everywhere: brands invest millions in acquiring customers and buying messaging tools, but fail entirely at building the actual conversational journeys that retain them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-accent"></span> Experience
                </h3>
                <div className="space-y-10 border-l-2 border-border pl-6 ml-2">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute w-3 h-3 bg-accent rounded-full -left-[31px] top-1.5 ring-4 ring-background" />
                      <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold">{item.role}</h4>
                      <div className="text-sm font-medium text-foreground mb-3">{item.company}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
