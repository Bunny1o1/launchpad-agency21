## 2024-05-19 - Bypass React Render Cycle for Continuous Interactions
**Learning:** In Framer Motion, using `useState` for rapidly updating values like mouse coordinates (e.g., in a magnetic button effect) causes a full React component re-render on every tiny movement, leading to severe performance bottlenecks.
**Action:** Always prefer Framer Motion's `useMotionValue` combined with hooks like `useSpring` or `useTransform`. Update the values via their `.set()` method and bind them directly to the `style` prop to update the DOM entirely outside of React's render loop.
