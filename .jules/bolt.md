## 2026-08-22 - React Re-renders on Mouse Events
**Learning:** Using `useState` for continuous user interactions like mouse movements causes unnecessary React re-renders, impacting performance. Framer Motion can update the DOM directly without triggering re-renders.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` for continuous interactions to bypass the render cycle.
