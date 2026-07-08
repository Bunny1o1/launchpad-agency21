## 2024-03-24 - [Bypass React Render Cycle for Continuous Interactions]
**Learning:** For continuous user interactions like mouse movements (`onMouseMove`) or scrolling, using React's `useState` triggers unnecessary React render cycles for every single event frame, causing severe performance degradation. Framer Motion provides a better approach.
**Action:** Use Framer Motion's `useMotionValue` combined with `useSpring` (or other motion hooks) to manage the state. This updates the DOM directly outside of the React render cycle, significantly improving performance and ensuring 60fps animations.
