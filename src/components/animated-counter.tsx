"use client";

import { useEffect, useRef, useMemo } from "react";
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

  // BOLT OPTIMIZATION: Memoize Intl.NumberFormat
  // 💡 What: Extracted Intl.NumberFormat instantiation out of the animation loop.
  // 🎯 Why: Intl.NumberFormat is an expensive operation. Creating it on every animation frame
  //        (60+ times per second) blocks the main thread and causes UI stuttering.
  // 📊 Impact: Significantly reduces main thread blocking during scroll animations,
  //           leading to smoother 60fps counter animations.
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    });
  }, []);

  useEffect(() => {
    // 💡 What: Store unsubscribe function
    // 🎯 Why: Prevents memory leaks from multiple event listeners if component re-renders
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatter.format(latest)}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix, formatter]);

  return <motion.span ref={ref} className="tabular-nums" />;
}
