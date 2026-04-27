"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let title = "Strategy Call";
  if (serviceParam === "audit") title = "Audit Discovery Call";
  if (serviceParam === "retainer") title = "Retainer Discovery Call";
  if (serviceParam === "sprint") title = "Sprint Discovery Call";
  if (serviceParam === "workshop") title = "Workshop Planning Call";

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
            Let's Talk
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Book a <span className="text-accent">{title}</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A free, 30-minute conversation. No pitch, no pressure. We'll discuss
            your current messaging setup and identify the top 3 quick wins you can
            implement immediately.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="rounded-2xl border border-border bg-card p-2 md:p-4 shadow-xl shadow-black/5"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {/* Calendly Inline Widget */}
            {mounted && (
              <div
                className="w-full rounded-xl overflow-hidden"
                style={{ height: "700px" }}
              >
                <iframe
                  src="https://calendly.com/yuvinod/30min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1&background_color=1A1712&text_color=F5F0E8&primary_color=E8A838"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a strategy call with Vinod Yadav"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-soft text-accent">Loading...</div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
