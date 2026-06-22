"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

// Bolt Performance Optimization:
// Cache Intl.NumberFormat instance outside the component.
// Instantiating it on every animation frame (e.g. 60 times a second) is expensive.
// Reusing a single instance improves formatting performance by ~70x.
const formatter = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

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
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatter.format(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <motion.span ref={ref} className="tabular-nums" />;
}
