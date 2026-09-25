## 2026-09-25 - Framer Motion Performance Optimization
**Learning:** For continuous user interactions like mouse movements or scrolling in Framer Motion components, using React's `useState` triggers unnecessary React render cycles on every frame, which can cause significant performance bottlenecks and jitter.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle entirely and directly update the DOM for a massive performance improvement.
