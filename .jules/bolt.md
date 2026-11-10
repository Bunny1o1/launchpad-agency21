## 2024-08-28 - Framer Motion High-Frequency Events
**Learning:** Using React's `useState` for high-frequency events (like mouse movements or scrolling) causes severe performance bottlenecks due to the React render cycle running on every tiny movement.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` to bypass React's render cycle completely. This allows animations to run smoothly without triggering component re-renders.
