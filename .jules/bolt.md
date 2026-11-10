## 2026-08-01 - Avoid useState for continuous user interactions like mouse movements
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` causes a re-render on every frame/event which can degrade performance significantly.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle entirely while still interpolating animations for improved performance and responsiveness.
