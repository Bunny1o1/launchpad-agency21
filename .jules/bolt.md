## 2024-06-26 - Framer Motion Continuous Interaction Pattern
**Learning:** Using React `useState` to drive continuous interactions like mouse tracking (`onMouseMove`) inside `framer-motion` components creates a severe performance bottleneck. React triggers a re-render on every frame (~60fps), which blocks the main thread.
**Action:** Always use `useMotionValue` combined with `useSpring` and pass them directly to the `style` prop for high-frequency continuous interactions, completely bypassing the React render cycle.
