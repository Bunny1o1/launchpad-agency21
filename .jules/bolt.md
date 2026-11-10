## 2024-05-24 - [Framer Motion Re-renders]
**Learning:** Using React `useState` to track high-frequency events (like `onMouseMove`) in Framer Motion components triggers a full React re-render on every event, leading to severe performance bottlenecks.
**Action:** Always prefer `useMotionValue` and `useSpring` to track and animate continuously changing values, as they bypass the React render cycle and update the DOM directly.
