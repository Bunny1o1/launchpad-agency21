"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function BookConfirmedPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Success banner */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-surface border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex justify-center mb-4"
          >
            <CheckCircle size={48} className="text-accent" />
          </motion.div>
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Payment Confirmed
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            You're in. Now pick your slot.
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Payment received — thank you. Choose a time below and Vinod will show
            up ready with your GTM plan.
          </motion.p>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="rounded-2xl border border-border bg-card p-2 md:p-4 shadow-xl shadow-black/5"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {mounted && (
              <div
                className="w-full rounded-xl overflow-hidden"
                style={{ height: "700px" }}
              >
                <iframe
                  src="https://calendly.com/yuvinod/30min?hide_gdpr_banner=1&background_color=1A1712&text_color=F5F0E8&primary_color=E8A838"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Pick your slot with Vinod Yadav"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>

          <motion.p
            className="text-center text-sm text-muted-foreground mt-6"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            A calendar invite will be sent to your email automatically once you book.
            Questions? Email <a href="mailto:yuvinod@gmail.com" className="text-accent underline underline-offset-2">yuvinod@gmail.com</a>
          </motion.p>
        </div>
      </section>
    </>
  );
}
