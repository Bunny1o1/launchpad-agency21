## 2024-07-27 - [useMotionValue vs useState]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary render cycles on every event, leading to performance bottlenecks.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` for frequent, continuous state updates (like mouse tracking in `MagneticButton`). This bypasses the React render cycle and significantly improves performance.
