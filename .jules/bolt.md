## 2024-05-14 - Optimize continuous interactions with Framer Motion
**Learning:** Using `useState` for continuous interactions like `onMouseMove` triggers excessive React re-renders on every mouse movement, which is a performance bottleneck in this codebase's architecture.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` instead of `useState` for continuous user interactions to bypass the React render cycle and improve performance.
