## 2025-02-23 - [Framer Motion Render Optimization]
**Learning:** In Framer Motion, using standard React state (`useState`) to drive frequent continuous values like mouse coordinates causes excessive React re-renders on the main thread.
**Action:** Use `useMotionValue` and `useSpring` which bypass the React render cycle, updating styles directly for significantly improved performance during continuous interactions.
