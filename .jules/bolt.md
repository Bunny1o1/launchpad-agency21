## 2026-08-27 - Framer Motion State vs MotionValues
**Learning:** High-frequency events like `onMouseMove` attached to React state (`useState`) cause excessive re-renders, significantly impacting performance. Framer Motion provides `useMotionValue` and `useSpring` which allow directly manipulating styles outside of React's render cycle.
**Action:** Always prefer `useMotionValue` injected directly into a `motion.div` style prop over React state for coordinates bound to continuous DOM events or continuous animations.
