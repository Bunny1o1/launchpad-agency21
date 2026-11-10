## 2026-08-10 - [Framer Motion Performance]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` to update Framer Motion properties causes excessive re-renders and potential frame drops.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle and improve performance.
