## 2024-05-24 - [Bypass React State for Continuous Animation]
**Learning:** For continuous user interactions like mouse movements, using React `useState` causes unnecessary component re-renders on every event trigger, which can severely impact framerates.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` for animations tied to rapid events (mouse, scroll) to bypass the React render cycle.
