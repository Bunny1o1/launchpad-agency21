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

  // Performance Optimization: Replacing React state with Framer Motion values.
  // Using useMotionValue and useSpring bypasses the React render cycle during frequent
  // continuous events like onMouseMove. This prevents unnecessary re-renders of this
  // component and its children, significantly reducing JS execution time and main thread blocking.
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(motionX, springConfig);
  const springY = useSpring(motionY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Update values outside of React render cycle
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
