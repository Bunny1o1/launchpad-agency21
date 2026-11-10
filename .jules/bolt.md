## 2024-03-20 - [Avoid React Renders on Mouse Move]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React `useState` causes a re-render on every frame, which can tank performance (e.g., in `MagneticButton`).
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` for these interactions. This bypasses the React render cycle and updates the DOM directly, drastically improving performance.
