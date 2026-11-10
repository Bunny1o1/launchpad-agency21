## 2024-10-24 - Framer Motion Render Cycle Optimization
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary re-renders on every update (e.g., every pixel moved). This can cause performance bottlenecks and jankiness in animations.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle and bind the resulting values directly to the `style` prop of the motion component.
