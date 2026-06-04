## 2024-05-24 - Framer Motion State Management
**Learning:** Using React's `useState` to drive high-frequency events like `onMouseMove` triggers unnecessary render cycles for the component and its children, leading to noticeable performance degradation.
**Action:** Always prefer Framer Motion's `useMotionValue` and `useSpring` hooks for high-frequency updates. Directly set values (`mX.set(value)`) and pass the sprung values to `style={{ x, y }}`. This bypasses React's render loop entirely, offloading animation directly to Framer Motion's optimized loop.
