## 2024-05-18 - [Framer Motion Render Bypassing]
**Learning:** Using React's `useState` for continuous interactions like `onMouseMove` triggers a React re-render on every tiny mouse movement, creating significant performance overhead.
**Action:** When animating values that update frequently (like mouse tracking, scrolling), prefer Framer Motion's `useMotionValue` and `useSpring`. Bind the resulting spring values directly to the `style` prop of `motion.div`. This updates the DOM directly, completely bypassing the React render cycle and providing a much smoother, 60fps experience.
