## 2026-09-11 - Framer Motion High-Frequency State Updates
**Learning:** Continuous user interactions like mouse movements that map to state (e.g., in magnetic buttons) trigger excessive React re-renders, degrading performance and causing janky animations on lower-end devices.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle, updating the DOM directly for optimal performance.
