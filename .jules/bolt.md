## 2025-03-01 - Initial Setup
**Learning:** Initializing Bolt journal for the Next.js 14 project.
**Action:** Always check src/ components for potential performance improvements.
## 2025-03-01 - Avoid setState for Continuous Animations
**Learning:** Using `useState` to track high-frequency events like `mousemove` for hover effects (e.g., `MagneticButton`) causes severe performance bottlenecks due to constant React re-renders.
**Action:** Always use Framer Motion's `useMotionValue` combined with `useSpring` (or similar) to handle continuous updates. This updates the DOM node directly without triggering the React render cycle.
