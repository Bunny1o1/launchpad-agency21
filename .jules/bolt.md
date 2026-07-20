## 2024-07-20 - Continuous Interaction Rendering Overhead
**Learning:** Using React's `useState` for high-frequency events like `onMouseMove` triggers a full render cycle on every pixel change, severely degrading performance during interactions.
**Action:** Always prefer `useMotionValue` and `useSpring` from `framer-motion` for continuous interactions (like mouse movements or scrolling) to bypass the React render cycle entirely.
