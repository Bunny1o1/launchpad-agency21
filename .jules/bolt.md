## 2024-07-06 - [Framer Motion Optimization Pattern]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes a render cycle on every event, leading to performance bottlenecks.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle and improve performance, as demonstrated in components like `AnimatedCounter` and refactored `MagneticButton`.
