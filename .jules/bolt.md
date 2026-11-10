## 2024-05-24 - Bypass React Render Cycle for Continuous Animations
**Learning:** Found a performance bottleneck where continuous user interactions (like `onMouseMove` in `MagneticButton`) trigger React's `useState` state updates, causing rapid and unnecessary re-renders of the component and its children.
**Action:** Use Framer Motion's `useMotionValue` combined with `useSpring` to track continuous values and bind them directly to the `style` prop of `motion.div`. This bypasses the React render cycle, resulting in significantly smoother animations and lower CPU usage during interactions.
