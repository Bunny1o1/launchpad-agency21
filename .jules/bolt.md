## 2024-05-18 - Avoid React State for Continuous Interactions
**Learning:** For continuous user interactions like `mousemove` (e.g., in `MagneticButton`), updating React state on every event triggers an excessive number of render cycles, leading to performance bottlenecks.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` and bind them directly to the `style` prop of the `motion` component. This bypasses the React render cycle, significantly improving performance for smooth animations.
