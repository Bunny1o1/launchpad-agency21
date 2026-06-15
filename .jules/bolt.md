## 2024-06-15 - Intl.NumberFormat Instantiation in Animation Loops
**Learning:** Instantiating `Intl.NumberFormat` (or other `Intl` formatters) is surprisingly expensive in JavaScript. When placed inside a `requestAnimationFrame` callback or Framer Motion's `on("change")` hook, creating a new formatter instance on every frame can cause significant CPU overhead and frame drops (it takes ~1.2s vs 60ms for 10,000 iterations).
**Action:** Always memoize or initialize `Intl.*` formatters outside of fast-running loops or animation callbacks. Only call the `.format()` method inside the loop.
