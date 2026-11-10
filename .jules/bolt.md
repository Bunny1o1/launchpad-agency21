## 2024-06-18 - Avoid React Renders for Continuous Interactions
**Learning:** In continuous interaction scenarios (like mouse movements or scroll events), relying on React's `useState` causes a full component re-render on every frame/event update. This causes a major performance bottleneck for rapid updates.
**Action:** Always prefer Framer Motion's `useMotionValue` combined with `useSpring` (or direct `.set()` calls on motion values) for animations driven by rapid, continuous events to bypass the React render cycle entirely.
