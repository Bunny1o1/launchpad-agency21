## 2024-05-24 - Optimizing Framer Motion continuous interactions
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers rapid, unnecessary render cycles that can bottleneck UI performance.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over `useState` to completely bypass the React render cycle, significantly improving performance.
