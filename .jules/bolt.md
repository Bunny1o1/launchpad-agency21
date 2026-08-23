## 2024-08-23 - [Optimize Continuous User Interactions]
 **Learning:** Using React `useState` for continuous user interactions like `onMouseMove` triggers unnecessary render cycles on every mouse move, which can severely degrade performance.
 **Action:** Instead of `useState`, use Framer Motion's `useMotionValue` and `useSpring` for frequent updates. This bypasses the React render cycle and updates the DOM directly, improving performance for animations.
