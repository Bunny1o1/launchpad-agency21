## 2024-05-24 - Avoid React state for continuous Framer Motion interactions
**Learning:** Using React state (`useState`) to drive continuous UI updates based on user interaction (like mouse movement) forces a re-render on every event, leading to significant performance degradation.
**Action:** Replace `useState` with Framer Motion's `useMotionValue` and `useSpring`, and bind them directly to the `style` prop of the motion component. This passes updates directly to the DOM and bypasses the React render cycle, providing smooth 60fps animations.
