## 2024-05-15 - [Framer Motion Render Bypassing]
**Learning:** For continuous user interactions like `mousemove` that drive animations, using React's `useState` triggers unnecessary and expensive render cycles on every frame, degrading performance.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` (bypassing React render cycles completely) by binding values directly to the `style` prop instead of using the `animate` and `transition` props.
