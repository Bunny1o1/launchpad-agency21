## 2024-05-24 - Expensive Object Instantiation in Animation Loops
**Learning:** Instantiating objects like `Intl.NumberFormat` inside a Framer Motion or `requestAnimationFrame` tick handler (e.g., `springValue.on("change", ...)`) executes 60 times per second. `Intl` instantiation is particularly heavy and can cause GC pressure and jank during otherwise smooth spring animations.
**Action:** Always memoize computationally expensive formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) or pure calculations outside of rapid event handlers using `useRef` or `useMemo`.
