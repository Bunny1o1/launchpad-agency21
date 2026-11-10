## 2026-07-28 - Framer Motion vs React State for Continuous Interactions
**Learning:** In Next.js/React applications, using `useState` for high-frequency continuous events (like `onMouseMove` in `MagneticButton`) triggers unnecessary React render cycles for every pixel moved, causing potential jank and CPU bloat.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` for continuous user interactions (mouse, scroll) to bypass the React render cycle and update the DOM directly.
