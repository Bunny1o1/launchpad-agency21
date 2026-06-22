## 2024-05-18 - Framer Motion Animation Bottleneck
**Learning:** Found an expensive instantiation of `Intl.NumberFormat` inside a Framer Motion `springValue.on("change")` callback. This callback fires up to 60-120 times per second during animation, causing significant garbage collection pressure and CPU overhead.
**Action:** Always cache expensive objects like `Intl.NumberFormat` or `DateFormatter` outside component bodies or use `useMemo`, especially when they are used inside high-frequency animation callbacks.
