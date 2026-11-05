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

  // ⚡ Bolt: Replaced useState with useMotionValue and useSpring to bypass React render cycle.
  // Impact: Reduces re-renders significantly during continuous mouse movement events,
  // as style updates happen directly in the DOM without triggering React re-renders.
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(motionX, springConfig);
  const springY = useSpring(motionY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    motionX.set(middleX * 0.2);
    motionY.set(middleY * 0.2);
  };

  const reset = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
