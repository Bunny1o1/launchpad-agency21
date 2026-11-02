## 2024-05-24 - Avoiding useState for Continuous Interactions

**Learning:** Using React's `useState` for continuous user interactions like mouse movements (e.g., in `MagneticButton`) triggers unnecessary re-renders of the component and its children on every frame. This can lead to significant performance degradation, especially in complex components or when multiple instances exist.

**Action:** Bypass React's render cycle for animations and continuous interactions by using Framer Motion's `useMotionValue` and `useSpring`. Bind these values directly to the `style` prop (e.g., `style={{ x, y }}`) instead of relying on `animate` and `transition` props driven by state. This approach updates the DOM directly, resulting in smoother animations and improved performance.
