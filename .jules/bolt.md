## 2024-07-13 - Avoid useState for High-Frequency Events
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary render cycles, causing performance bottlenecks. Framer Motion's `useMotionValue` combined with `useSpring` can bypass the React render cycle entirely.
**Action:** Whenever a component animates or updates based on rapid events (e.g., `onMouseMove`, scroll), use motion values rather than `useState` to keep animations smooth and avoid re-renders.
