## 2024-05-24 - Framer Motion High-Frequency Interactions
**Learning:** For continuous user interactions like `mousemove` or `scroll`, using React's `useState` to update Framer Motion's `animate` prop causes a full component re-render on every event (~60fps). This is a significant performance anti-pattern.
**Action:** Always use Framer Motion's `useMotionValue` (and `useSpring` if damping/stiffness is needed) coupled with the `style` prop for continuous interactions to bypass the React render cycle entirely while maintaining smooth animations.
