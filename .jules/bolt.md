## 2024-05-24 - [Avoid React re-renders on continuous interaction]
**Learning:** Using React's `useState` for continuous interactions (like `onMouseMove` in `magnetic-button.tsx`) causes excessive re-renders that hurt main thread performance, especially on a framework heavily reliant on Framer Motion.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` to bypass React's render cycle completely during continuous interactions.
