
## 2023-10-30 - Continuous Interaction Rendering Overhead
**Learning:** In highly interactive components (like a `MagneticButton` following the mouse), using React's `useState` for rapid coordinate updates (e.g. `onMouseMove`) causes aggressive full component re-renders that can degrade visual performance.
**Action:** For continuous interactions like scrolling or pointer tracking, bypass the React render cycle entirely by using Framer Motion's `useMotionValue` (and derived hooks like `useSpring`). Bind these values directly to the `style` prop of `motion` components to let Framer Motion handle DOM updates independently of React.
