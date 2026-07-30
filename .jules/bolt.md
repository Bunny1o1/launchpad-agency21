## 2026-07-30 - [Framer Motion Render Optimization]
**Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` for animation values triggers expensive React render cycles 60+ times per second.
**Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to directly update DOM values and bypass the React render cycle, improving performance significantly during continuous interactions.
