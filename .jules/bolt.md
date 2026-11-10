## 2026-08-05 - [Magnetic Button Performance Optimization]
**Learning:** For continuous user interactions like mouse movements (e.g., magnetic button), using React's `useState` causes continuous unnecessary re-renders of the component and potentially its children.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` for continuous values to bypass the React render cycle and improve performance.
