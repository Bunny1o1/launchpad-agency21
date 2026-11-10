## 2026-08-02 - Use useMotionValue instead of useState for high-frequency events
 **Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers the React render cycle on every update, causing severe performance degradation and unnecessary DOM updates.
 **Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle, mutating the DOM directly for silky-smooth performance.
