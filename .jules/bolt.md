
## 2024-05-18 - [Framer Motion Optimization] Bypass React Render Cycle
**Learning:** For continuous interactions like `onMouseMove` or `onScroll` driving Framer Motion animations, using React's `useState` causes the component to unnecessarily re-render on every event trigger, which can severely degrade performance.
**Action:** Always prefer `useMotionValue` combined with `useSpring` (or other Framer hooks) bound directly to the `style` prop to bypass the React render cycle for high-frequency updates.
