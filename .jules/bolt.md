## 2024-05-18 - Avoid useState for continuous user interactions like mousemove
**Learning:** Using `useState` inside a rapid event listener like `onMouseMove` triggers continuous React re-renders, causing performance bottlenecks, especially during complex animations.
**Action:** Always use Framer Motion`s `useMotionValue` and `useSpring` to bypass React`s render cycle for continuous user interactions. Bind these values directly to the `style` prop instead of `animate` and `transition`.
