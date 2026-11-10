## 2024-05-18 - Framer Motion anti-pattern: useState vs useMotionValue
**Learning:** For continuous user interactions like `onMouseMove` or scrolling, using React `useState` to update values triggers a React re-render cycle on every event. This leads to performance bottlenecks and jankiness in animations, especially rapid, sequential events.
**Action:** Always prefer Framer Motion`s `useMotionValue` (and derived hooks like `useSpring` or `useTransform`) over React`s `useState` for continuous, high-frequency updates to bypass the React render cycle and improve animation performance.
