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
    // ⚡ Bolt Optimization: Instantiate expensive NumberFormat outside the high-frequency animation loop
    // Expected impact: Eliminates up to 60 object allocations per second per counter during animation,
    // significantly reducing garbage collection pressure and main thread blocking time.
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    });

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatter.format(latest)}${suffix}`;
      }
    });

    // Clean up listener to prevent memory leaks when component unmounts
    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <motion.span ref={ref} className="tabular-nums" />;
}
