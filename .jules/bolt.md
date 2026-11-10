## 2024-05-24 - Bypassing React Render Cycle for High-Frequency Events
**Learning:** Using `useState` for high-frequency events like `onMouseMove` triggers excessive React re-renders, causing performance bottlenecks, especially in animation-heavy components.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` for continuous user interactions, binding the values directly to the `style` prop to bypass the React render cycle and improve performance.
