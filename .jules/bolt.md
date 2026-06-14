## 2024-05-15 - Animated Counter Intl Optimization
**Learning:** Instantiating `Intl.NumberFormat` inside a Framer Motion spring animation `on("change")` callback creates a new formatter instance on every frame (~60fps), which is a significant CPU bottleneck since `Intl.NumberFormat` is relatively expensive to instantiate.
**Action:** Always instantiate `Intl.NumberFormat` outside of animation loops, render loops, or frequently called callbacks. Reuse a single instance where possible.
