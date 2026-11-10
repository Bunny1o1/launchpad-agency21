## 2024-05-24 - React Re-renders on Continuous Interactions
**Learning:** Using React's `useState` for high-frequency continuous events (like `mousemove` or `scroll`) triggers a React render cycle on every event update. This causes significant performance bottlenecks and jittery UI updates.
**Action:** Replace `useState` with Framer Motion's `useMotionValue` (and `useSpring` or `useTransform`) to update DOM elements directly, bypassing the React render cycle entirely and improving frame rates.
