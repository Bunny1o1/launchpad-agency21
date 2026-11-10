## 2026-07-17 - Framer Motion State Bottlenecks
**Learning:** Using React `useState` to drive high-frequency continuous interactions (like `onMouseMove` in `MagneticButton`) triggers unnecessary React re-renders on every frame, which is a significant performance anti-pattern in this codebase's animation architecture.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` passed directly to `style` props for continuous user interactions to bypass the React render cycle completely.
