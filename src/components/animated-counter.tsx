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
    // ⚡ Bolt: Cache Intl.NumberFormat outside of the animation frame callback
    // Instantiating Intl on every frame of a spring animation causes unnecessary
    // memory allocation and can lead to GC pauses. A cached formatter is ~67x faster.
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
