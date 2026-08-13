## 2024-05-15 - [Refactoring Continuous User Interactions]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes unnecessary component re-renders on every update, heavily impacting performance.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle and improve performance, setting the values directly.
