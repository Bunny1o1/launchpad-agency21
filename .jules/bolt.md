## 2024-10-21 - [Framer Motion Optimization]
**Learning:** For continuous user interactions like mouse movements (e.g. `onMouseMove`), relying on React's `useState` triggers unnecessary and expensive re-renders for every single mouse event, which degrades performance and smoothness.
**Action:** Replace `useState` with Framer Motion's `useMotionValue` and `useSpring` and bind them directly to the `style` prop of the motion component. This bypasses the React render cycle completely and delegates the animation to the browser's compositor.
