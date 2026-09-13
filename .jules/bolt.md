## 2024-05-24 - Framer Motion and Continuous Interactions
**Learning:** For continuous user interactions like mouse movements (`onMouseMove`), using React's `useState` to update Framer Motion's `animate` prop causes expensive React re-renders on every event frame.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle entirely. Use `.set()` on motion values and pass them directly to the `style` prop.
