## 2024-11-05 - [Framer Motion React Cycle Bypass]
 **Learning:** For continuous user interactions like mouse movements or scrolling, using React's `useState` triggers unnecessary React render cycles.
 **Action:** Prefer Framer Motion's `useMotionValue` and `useSpring` over React's `useState` to bypass the React render cycle and improve performance. Bind the resulting values directly to the 'style' prop (e.g., `style={{ x: springX, y: springY }}`) and remove the corresponding 'animate' and 'transition' props.
