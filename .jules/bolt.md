## 2024-06-03 - Optimize Continuous User Interactions

**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes excessive and unnecessary re-renders. Framer Motion's `useMotionValue` and `useSpring` allow updating values outside the React render cycle, significantly improving performance.

**Action:** Prefer `useMotionValue` and `useSpring` over `useState` for frequently changing values tied to continuous events like `onMouseMove` or `onScroll` to bypass the React render cycle.
