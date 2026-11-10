## 2024-03-21 - [Framer Motion Optimization]
 **Learning:** For continuous user interactions like mouse movements or scrolling, prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle and improve performance.
 **Action:** Apply `useMotionValue` and `useSpring` in the `MagneticButton` component instead of `useState` and `animate`.
