## 2024-05-24 - Framer Motion continuous state updates
**Learning:** For continuous user interactions like mouse movements or scrolling, updating React's `useState` triggers unnecessary re-renders of the component for every frame, which can severely degrade performance.
**Action:** Use Framer Motion's `useMotionValue` combined with `useSpring` or `useTransform` to bypass the React render cycle entirely and manage the state directly in the DOM, improving performance significantly.
