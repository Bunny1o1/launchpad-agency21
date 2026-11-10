## 2024-10-07 - Optimize framer motion interactions
**Learning:** Using `useState` to drive framer-motion animations on continuous events (like `onMouseMove` for a magnetic button effect) triggers an expensive React render cycle for every pixel moved.
**Action:** Always use Framer Motion's `useMotionValue` combined with `useSpring` (bound directly to the `style` prop) for continuous user interactions to bypass the render cycle completely, dramatically improving frame rates during interaction.
