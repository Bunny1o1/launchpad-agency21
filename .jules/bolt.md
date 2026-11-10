## 2024-05-24 - [Avoid useState for continuous interactions]
**Learning:** For continuous user interactions like mouse movements (`onMouseMove`) or scrolling, using React's `useState` triggers unnecessary render cycles on every frame, which severely degrades performance.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` to bypass the React render cycle and bind the resulting values directly to the `style` prop instead of using `animate` and `transition` props.
