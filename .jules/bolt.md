## 2024-06-25 - MagneticButton Render Cycle Bypass
**Learning:** For components that track continuous user interactions (like mouse position) in Next.js/React, using `useState` creates an enormous performance bottleneck because it triggers a full component re-render on every frame/pixel movement.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` instead of `useState` to update values directly outside the React render cycle, significantly improving performance without sacrificing the visual effect.
