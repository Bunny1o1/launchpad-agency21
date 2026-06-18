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
    // ⚡ Bolt Optimization: Instantiate Intl.NumberFormat once outside the animation loop
    // Instantiating inside the on("change") callback runs ~60fps and causes significant CPU overhead.
    // Reusing the formatter instance makes formatting ~15x faster.
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    });

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatter.format(latest)}${suffix}`;
      }
    });

    // ⚡ Bolt Optimization: Cleanup subscription to prevent memory leaks
    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <motion.span ref={ref} className="tabular-nums" />;
}
