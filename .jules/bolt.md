## 2024-07-12 - Framer Motion Performance Optimization
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary render cycles, leading to performance bottlenecks.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` over `useState` to bypass the React render cycle when animating properties based on continuous interactions.
