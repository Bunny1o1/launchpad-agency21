## 2024-09-04 - Avoid `useState` for continuous interactions in Framer Motion
**Learning:** For continuous interactions like `onMouseMove` or scrolling, using React's `useState` triggers unnecessary and expensive full component re-renders. This is an anti-pattern when using Framer Motion for animations.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle entirely. Update the `useMotionValue` directly to drive animations without re-rendering the component.
