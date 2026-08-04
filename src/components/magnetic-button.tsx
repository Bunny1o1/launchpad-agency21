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

  // Optimization: Replaced useState with useMotionValue/useSpring to bypass React's render cycle during continuous interaction (onMouseMove), eliminating re-renders.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    mouseX.set(middleX * 0.2);
    mouseY.set(middleY * 0.2);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
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
