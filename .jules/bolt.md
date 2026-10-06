## 2026-10-06 - [Framer Motion Render Optimization]
**Learning:** Using React `useState` for continuous events like `onMouseMove` causes excessive re-renders. Bypassing the React render cycle using Framer Motion's `useMotionValue` and `useSpring` bound directly to the `style` prop provides a significant performance boost.
**Action:** Always prefer `useMotionValue` over `useState` when animating continuous UI interactions with Framer Motion.
