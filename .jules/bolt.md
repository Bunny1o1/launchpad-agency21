## 2024-06-25 - Prevent re-renders on continuous mouse interactions
**Learning:** In framer-motion components, tracking continuous mouse events (like `mousemove`) with React's `useState` causes the component to re-render on every single event, creating significant performance overhead.
**Action:** Always prefer `useMotionValue` and `useSpring` (or other motion values) to track fast-changing continuous state. This bypasses the React render cycle entirely while still updating the DOM directly via Framer Motion.
