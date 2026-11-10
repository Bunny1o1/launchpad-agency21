## 2026-08-30 - Framer Motion Optimization
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes unnecessary re-renders of the component and its children on every frame.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle and improve performance by updating the DOM directly.
