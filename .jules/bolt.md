## 2024-05-18 - [Optimizing Continuous Events in Framer Motion]
**Learning:** For continuous user interactions like mouse movements (`mousemove`) or scrolling, using React's `useState` triggers a component re-render on every frame. This is extremely inefficient and can cause jank.
**Action:** When building custom interactive components (like magnetic buttons), bypass the React render cycle entirely by using Framer Motion's `useMotionValue` and `useSpring`. Bind these values directly to the `style` prop of the `motion.div` instead of using `animate` and `transition` props.
