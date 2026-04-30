"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AuroraBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      {/* 
        This applies a blurred gradient mesh that smoothly animates 
        its position using framer motion.
      */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0,245,160,1) 0%, rgba(0,217,245,0) 70%)",
        }}
        animate={{
          x: ["0%", "20%", "0%", "-20%", "0%"],
          y: ["0%", "10%", "-10%", "10%", "0%"],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(138,43,226,1) 0%, rgba(65,105,225,0) 70%)",
        }}
        animate={{
          x: ["0%", "-20%", "0%", "20%", "0%"],
          y: ["0%", "-10%", "10%", "-10%", "0%"],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle grid overlay to give an enterprise texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.02]" />
    </div>
  );
}
