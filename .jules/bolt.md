## 2024-05-24 - React Render Cycle with Framer Motion
**Learning:** For components relying on continuous user interactions like mouse movements (e.g., `MagneticButton`), relying on React's `useState` causes the entire component to re-render constantly during the movement. This is a common performance anti-pattern.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` to track state for fast-updating values and bind them directly to `motion` elements. This bypasses the React render cycle completely and significantly improves performance during animations/interactions.
