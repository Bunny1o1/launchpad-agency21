"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // OPTIMIZATION: Use useMotionValue instead of useState to avoid React re-renders on every mouse move
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Apply spring physics directly to the motion values
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mx, springConfig);
  const y = useSpring(my, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Update motion values directly, bypassing React state
    mx.set(middleX * 0.2);
    my.set(middleY * 0.2);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
