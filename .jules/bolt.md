## 2026-08-14 - Prevent React Renders on Continuous Interaction
**Learning:** Using React's `useState` for high-frequency events like `onMouseMove` triggers excessive re-renders, causing performance bottlenecks, especially with continuous animations.
**Action:** Use Framer Motion's `useMotionValue` combined with `useSpring` to update and animate values directly, bypassing the React render cycle entirely for smoother performance.
