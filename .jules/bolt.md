
## 2026-09-26 - [Bypass React Render Cycle for Continuous Events]
**Learning:** For continuous user interactions like mouse movements (e.g., in `MagneticButton`), using React's `useState` triggers unnecessary re-renders on every event, leading to performance bottlenecks. Framer Motion's `useMotionValue` and `useSpring` can be bound directly to the `style` prop, entirely bypassing the React render cycle while maintaining smooth animations.
**Action:** When implementing elements that track continuous events (like scrolling or mouse movement), always prefer `useMotionValue` and `useSpring` over `useState` to prevent excessive React component re-renders.
