## 2024-05-13 - [Framer Motion Render Cycle Bypass]
**Learning:** For continuous user interactions like mouse movements, using `useState` triggers unnecessary React re-renders which degrades performance. Framer Motion provides `useMotionValue` and `useSpring` to bypass React's render cycle completely.
**Action:** When creating tracking animations (like magnetic buttons), use `useMotionValue` for raw values, `useSpring` for smoothing, and bind directly to the `style` prop instead of `useState` and `animate`/`transition` props.
