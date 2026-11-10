## 2026-05-29 - [Framer Motion Optimization]
 **Learning:** Utilizing React `useState` for rapid events like `mousemove` triggers excessive main thread re-renders and degrades visual performance.
 **Action:** Instead of `useState`, use Framer Motion's `useMotionValue` and `useSpring` and pass them into the `style` prop of `motion.div`. This bypasses the React render cycle and updates the DOM directly.
