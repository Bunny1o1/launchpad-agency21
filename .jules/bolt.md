## 2024-05-18 - [Framer Motion Render Cycle Bypassing]
**Learning:** For continuous user interactions like mouse movements (`onMouseMove`) in Framer Motion components, using React's `useState` causes a full re-render on every frame/event. This severely degrades performance.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` and bind them directly to the `style` prop to bypass the React render cycle for high-frequency updates.
