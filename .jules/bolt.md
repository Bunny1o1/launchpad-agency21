## 2024-05-24 - Framer Motion vs React State
**Learning:** Using React `useState` inside continuous event listeners (like `onMouseMove`) triggers a full React component render cycle on every pixel of movement. In framer-motion components, this causes significant performance bottlenecks.
**Action:** For continuous interactions like mouse movement or scrolling, always use framer-motion's `useMotionValue` and bind it directly to the `style` prop. This bypasses the React render cycle completely and updates the DOM directly.
