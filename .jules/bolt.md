## 2024-05-24 - [Bypass React Render Cycle with Framer Motion for Continuous Interactions]
**Learning:** Using React's `useState` for highly frequent interactions like `onMouseMove` triggers unnecessary React render cycles (~60fps), which degrades performance.
**Action:** When working with Framer Motion and continuous events (like scrolling or mouse movement), use `useMotionValue` and `useSpring` to bypass React's render cycle completely. This updates the DOM directly without triggering re-renders, significantly improving performance.
