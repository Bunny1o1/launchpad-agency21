## 2025-02-27 - [Framer Motion Render Cycle Optimization]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary render cycles on every frame or movement, causing performance bottlenecks in Framer Motion animations.
**Action:** Instead of `useState`, prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle and bind the resulting values directly to the `style` prop of the animated component.
