## 2024-09-18 - Replacing `useState` with `useMotionValue` for frequent events
**Learning:** Using React's `useState` for rapid, continuous events like `onMouseMove` forces unnecessary re-renders of the component, which can lead to layout thrashing and lower FPS, especially if the component is complex.
**Action:** Always prefer Framer Motion's `useMotionValue` combined with `useSpring` (or similar) over `useState` for visual states updated by high-frequency events. This updates the DOM directly, bypassing the React render cycle entirely.
