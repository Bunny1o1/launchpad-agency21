## 2024-05-18 - [Optimize Framer Motion Continuous Animations]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary re-renders in components using Framer Motion.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle and bind values directly to the `style` prop for better performance.
