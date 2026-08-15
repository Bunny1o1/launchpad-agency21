## 2024-05-30 - Refactoring MagneticButton state for continuous user interactions
**Learning:** Using `useState` to track high-frequency continuous interactions, such as mouse movements, forces React to re-render the component constantly, which is a significant performance anti-pattern.
**Action:** Replace `useState` with `useMotionValue` and `useSpring` from Framer Motion for continuous event tracking. These motion values can be passed directly to `motion` components to update styles bypassing the React render cycle completely.
