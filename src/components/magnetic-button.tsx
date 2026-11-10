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

  // ⚡ Bolt Optimization: Replace useState with useMotionValue and useSpring
  // Why: useState inside a onMouseMove handler triggers React re-renders for the
  // component and its children on every single pixel of mouse movement.
  // Impact: By using motion values and updating them directly (x.set), we bypass
  // the React render cycle completely and offload the animation to Framer Motion's
  // optimized render loop. Reduces re-renders to 0 during hover.
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mX, springConfig);
  const y = useSpring(mY, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    mX.set(middleX * 0.2);
    mY.set(middleY * 0.2);
  };

  const reset = () => {
    mX.set(0);
    mY.set(0);
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
