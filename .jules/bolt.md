## 2023-10-27 - [Framer Motion Render Optimization]
**Learning:** Using React `useState` to track mouse position for Framer Motion continuous animations (like `onMouseMove` on `MagneticButton`) triggers unnecessary re-renders of the component and its children on every frame/mouse movement.
**Action:** Always prefer Framer Motion's `useMotionValue` combined with `useSpring` and binding directly to the `style` prop for continuous interactive animations to completely bypass the React render cycle while maintaining smooth 60fps animations.
