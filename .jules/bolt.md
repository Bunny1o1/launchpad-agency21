## 2024-05-18 - Framer Motion interaction performance
 **Learning:** React's `useState` for frequent interaction states like `onMouseMove` triggers unnecessary render cycles and hurts performance.
 **Action:** For continuous interactions like mouse movements and scroll, prefer Framer Motion's `useMotionValue` and `useSpring` to bypass React's render loop and update the DOM directly.
