## 2024-05-25 - Framer Motion continuous state
**Learning:** Using `useState` for continuous user interactions like mouse movements in Framer Motion causes unnecessary React re-renders on every frame, which hurts performance.
**Action:** Use `useMotionValue` and `useSpring` to update animation values outside the React render cycle.
