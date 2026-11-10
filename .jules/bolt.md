## 2024-03-24 - [Bypass React Renders for Continuous Interactions]
**Learning:** For continuous UI interactions like mouse movements (`onMouseMove`) or scroll events, using React's `useState` triggers unnecessary and expensive re-renders on every event tick.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` hooks over `useState` for tracking dynamic positions/values in these scenarios. This pattern allows direct DOM mutations bypassing the React render cycle, significantly improving smoothness and performance.
