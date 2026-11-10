## 2024-08-29 - [Framer Motion continuous interactions performance]
**Learning:** For continuous interactions like `onMouseMove` with Framer Motion elements, using React's `useState` causes the entire component to re-render constantly (e.g. 60 times a second).
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` hooks, and pass them to the `style` prop of `motion.div`. This updates the styles directly and bypasses the React render cycle, providing significantly better performance.
