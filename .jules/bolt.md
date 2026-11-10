## 2024-05-24 - React state for continuous mouse interactions
**Learning:** Using `useState` inside a mouse move handler combined with Framer Motion triggers React re-renders on every pixel of movement, destroying performance and causing noticeable jitter.
**Action:** For continuous interactions like scrolling or mouse movement, always use Framer Motion's `useMotionValue` (and `useSpring` if damping/stiffness is needed) instead of `useState`. This bypasses the React render cycle entirely and updates styles directly, keeping animations silky smooth.
