## 2024-08-25 - Prevent React Re-renders on Continuous User Interactions
**Learning:** For continuous user interactions like mouse movements (`onMouseMove`) or scrolling, using React's `useState` triggers a render cycle on every single event, causing significant performance overhead and jankiness in animations.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` over `useState` for animation state driven by continuous user input. This allows bypassing the React render cycle entirely, updating the DOM directly for 60fps performance.
