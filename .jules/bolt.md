## 2024-07-26 - [Bypass React Render Cycle with Framer Motion values]
**Learning:** For continuous interactions like `onMouseMove`, updating React state (`useState`) on every event triggers excessive re-renders.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` and pass them directly to the `style` prop to update the DOM without triggering React render cycles.