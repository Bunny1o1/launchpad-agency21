## 2024-05-24 - Bypass React Render Cycle for Continuous Animations
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary and expensive re-renders across the component tree, leading to janky animations and poor performance.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` (or similar animation library primitives) over React's `useState` for continuous interaction-driven animations to bypass the React render cycle entirely.
