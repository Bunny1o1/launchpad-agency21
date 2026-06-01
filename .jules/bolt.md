## 2024-06-01 - [Animation Loop Optimization: Intl.NumberFormat Cost]
**Learning:** Instantiating `Intl.NumberFormat` inside a highly frequent animation loop (e.g., `framer-motion`'s `springValue.on("change")` listener) creates a severe performance bottleneck. It runs ~60 times per second, and `Intl.NumberFormat` takes over 1ms per instantiation on some environments, leading to noticeable frame drops.
**Action:** Always extract and cache `Intl.NumberFormat` instantiation outside of any render, event, or animation loops (like inside `useEffect` before the event listener attachment).
