## 2026-09-12 - [Framer Motion continuous interactions]
**Learning:** Using `useState` for continuous interactions like mouse tracking triggers a React re-render on every pixel of movement, causing significant performance overhead.
**Action:** Always use Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle for high-frequency updates.
