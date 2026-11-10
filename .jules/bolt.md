## 2024-05-14 - Bypassing React Render Cycle for Continuous Interactions
**Learning:** For continuous user interactions like `onMouseMove` or scrolling, using React's `useState` triggers a render cycle on every event, which can lead to significant performance bottlenecks, especially in components that animate.
**Action:** Instead of `useState`, use Framer Motion's `useMotionValue` combined with `useSpring` (or other motion values). This bypasses the React render cycle entirely, allowing Framer Motion to update the DOM nodes directly and improving performance (reducing re-renders).
