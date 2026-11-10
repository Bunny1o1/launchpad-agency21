## 2024-05-24 - Bypass React Render Cycle for Continuous Interactions
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes unnecessary re-renders of the component and its children on every event fire, leading to poor performance.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` for continuous interactions to bypass the React render cycle and improve performance.
