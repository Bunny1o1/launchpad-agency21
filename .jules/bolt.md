## 2024-03-20 - [Performance Optimizations]
**Learning:** Found several performance opportunities:
1. `Navbar` uses `useState` for scroll tracking which triggers React re-renders on every scroll event. This should be debounced or use Framer Motion's `useScroll`.
2. `MagneticButton` uses `useState` to track mouse position on every `onMouseMove` event, causing continuous re-renders of the component tree during the animation. This is an anti-pattern as remembered in the prompt: "Codebase Pattern: For continuous user interactions like mouse movements or scrolling, prefer Framer Motion's useMotionValue and useSpring over React's useState to bypass the React render cycle and improve performance."
**Action:** Update `MagneticButton` to use `useMotionValue` and `useSpring` instead of `useState`.
