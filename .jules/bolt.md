## 2024-03-21 - Framer Motion State Management
**Learning:** High-frequency event listeners (like `onMouseMove`) bound to React state (`useState`) within Framer Motion components trigger unnecessary full component re-renders (60+ frames per second).
**Action:** Always prefer `useMotionValue` and `useSpring` hooks over `useState` to bypass the React render cycle entirely and pipe values directly to `motion` components.
