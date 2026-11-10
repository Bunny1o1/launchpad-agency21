## 2026-05-23 - Framer Motion Event Optimization
**Learning:** Using `useState` to handle high-frequency events (like `onMouseMove`) in Framer Motion components causes unnecessary React re-renders.
**Action:** Always prefer `useMotionValue` and `useSpring` directly injected into the `style` prop for continuous pointer tracking to bypass the React render cycle and improve performance.
