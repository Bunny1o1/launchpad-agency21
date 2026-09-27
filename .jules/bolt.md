## 2024-05-24 - Framer Motion Performance Optimization
**Learning:** For continuous user interactions like mouse movements in Framer Motion, binding values via `useState` triggers unnecessary React renders on every frame/event update, creating a significant performance bottleneck.
**Action:** Use `useMotionValue` and `useSpring` from `framer-motion` to bypass the React render cycle entirely. Bind the resulting motion values directly to the `style` prop (e.g., `style={{ x: springX, y: springY }}`) instead of using the `animate` and `transition` props.
