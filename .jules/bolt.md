## 2024-11-20 - [Avoid React State for Continuous Animation Events]
**Learning:** For continuous user interactions like mouse movements (e.g. `onMouseMove`) or scrolling, using React's `useState` triggers unnecessary renders for every single coordinate change, which severely impacts performance and causes layout thrashing.
**Action:** Instead, use Framer Motion's `useMotionValue` and `useSpring` and bind them directly to the `style` prop of the `motion` component. This bypasses the React render cycle completely.
