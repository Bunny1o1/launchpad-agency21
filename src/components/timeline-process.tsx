"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MessageSquare, Zap, RefreshCw, BarChart2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "User Sends Message",
    desc: "A customer reaches out on WhatsApp, RCS, Instagram, or any channel you operate.",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10 border-[#25D366]/20",
    lineGlow: "from-transparent to-[#25D366]"
  },
  {
    icon: Zap,
    step: "02",
    title: "AI Understands Intent",
    desc: "NLP classifies the intent — support, purchase, onboarding, complaint — and routes intelligently.",
    color: "text-[#E8A838]",
    bg: "bg-[#E8A838]/10 border-[#E8A838]/20",
    lineGlow: "from-[#25D366] to-[#E8A838]"
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Journey Executes",
    desc: "A pre-built conversational journey triggers — personalized, context-aware, and on-brand.",
    color: "text-[#C4622D]",
    bg: "bg-[#C4622D]/10 border-[#C4622D]/20",
    lineGlow: "from-[#E8A838] to-[#C4622D]"
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Outcome Tracked",
    desc: "Conversion, resolution, or escalation is logged. Health scores update. You prove ROI.",
    color: "text-[#1A73E8]",
    bg: "bg-[#1A73E8]/10 border-[#1A73E8]/20",
    lineGlow: "from-[#C4622D] to-[#1A73E8]"
  },
];

export function TimelineProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !lineRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
    
    // Animate the connecting line
    gsap.fromTo(lineRef.current, 
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Fade in cards as you scroll past them
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0.3, scale: 0.95, x: i % 2 === 0 ? -20 : 20 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "top 40%",
            scrub: true,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12">
      {/* Background Line */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full" />
      {/* Animated Line */}
      <div 
        ref={lineRef} 
        className="absolute left-[24px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-accent to-secondary -translate-x-1/2 rounded-full origin-top"
      />

      <div className="space-y-12 md:space-y-24">
        {steps.map((step, i) => (
          <div key={step.step} className="timeline-card relative flex flex-col md:flex-row items-center w-full group">
            
            {/* Desktop Left / Right positioning */}
            <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-16' : 'order-2 justify-start pl-16'}`}>
              <div className={`p-8 rounded-2xl border bg-card/80 backdrop-blur-sm transition-colors hover:border-accent/50 ${step.bg}`}>
                <span className={`text-xs font-black uppercase tracking-widest mb-3 block ${step.color}`}>
                  Step {step.step}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden pl-16 w-full">
              <div className={`p-6 rounded-2xl border bg-card/80 backdrop-blur-sm transition-colors hover:border-accent/50 ${step.bg}`}>
                <span className={`text-xs font-black uppercase tracking-widest mb-2 block ${step.color}`}>
                  Step {step.step}
                </span>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Center Icon */}
            <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-card flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <step.icon size={20} className={step.color} />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
