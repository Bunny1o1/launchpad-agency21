
## 2024-05-18 - [Bypass React Render Cycle with Framer Motion `useMotionValue`]
**Learning:** Using `useState` to track continuous user interactions like mouse position triggers expensive React re-renders on every event, leading to choppy animations and poor performance.
**Action:** When implementing continuous animations (e.g., following a cursor, scroll progress) with Framer Motion, prefer `useMotionValue` and `useSpring` to manipulate the DOM directly. Bind the resulting values directly to the `style` prop (e.g., `style={{ x: springX, y: springY }}`) to completely bypass the React component render cycle.
