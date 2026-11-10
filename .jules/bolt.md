## 2026-11-07 - Refactoring MagneticButton with framer-motion springs
**Learning:** Using React `useState` in an `onMouseMove` event triggers frequent render cycles which hurts performance. We can bypass the React render cycle entirely by directly using framer-motion's `useMotionValue` and `useSpring` to animate standard `style` properties.
**Action:** Replaced `useState` with `useMotionValue` and `useSpring` in continuous user interactions.
