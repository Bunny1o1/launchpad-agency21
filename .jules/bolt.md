## 2024-05-24 - React `useState` Anti-Pattern for Continuous Events

**Learning:** Using React's `useState` for continuous events like `onMouseMove` triggers a full React component re-render on every single mouse movement. This can cause significant performance bottlenecks and jank, especially when coupled with animations.

**Action:** When working with continuous interactions in Framer Motion, avoid `useState`. Instead, use Framer Motion's `useMotionValue` combined with `useSpring` (or similar hooks). Update the motion values directly using `.set()`. Because these hooks bypass the React render cycle entirely, the animations remain smooth and performant without causing unnecessary DOM re-evaluations.
