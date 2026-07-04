## 2024-05-24 - Avoid React state for continuous user interactions like mouse movement
**Learning:** Using React `useState` to track continuous, high-frequency user interactions (like `onMouseMove` or `onScroll`) causes excessive React re-renders, creating a performance bottleneck, particularly for UI animations.
**Action:** When tracking continuous interactions like scroll or mouse position for animations, prefer using Framer Motion's `useMotionValue` combined with `useSpring` (or similar tools like GSAP) and bind them directly via the `style` prop to bypass the React render cycle entirely.
