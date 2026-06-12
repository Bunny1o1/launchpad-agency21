"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    // ⚡ Bolt Performance Optimization:
    // Cache the Intl.NumberFormat instance outside the high-frequency animation callback.
    // Creating Intl.NumberFormat instances is expensive (~60x slower than reusing an instance).
    // Doing it inside a requestAnimationFrame loop (Framer Motion spring) causes significant CPU overhead.
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    });

    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatter.format(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <motion.span ref={ref} className="tabular-nums" />;
}
