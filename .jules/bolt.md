## 2024-05-18 - MagneticButton Re-render Optimization
**Learning:** Using `useState` to track rapid events like `mousemove` causes continuous React re-renders, impacting frontend performance during animation. In Framer Motion, passing these rapidly updating values into `animate` can be a bottleneck.
**Action:** Used `useMotionValue` and `useSpring` from `framer-motion` to bypass the React render cycle entirely. These values can be directly bound to a `motion.div` via the `style` prop, resulting in buttery smooth animations with no re-render overhead.
