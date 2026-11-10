## 2024-05-14 - [Framer Motion Optimization]
**Learning:** For continuous user interactions like mouse movements (`mousemove`) or scrolling, using React's `useState` triggers unnecessary and expensive re-renders on every event.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` to track these values. They bypass the React render cycle while still allowing smooth animations, significantly improving performance for interactive components.
