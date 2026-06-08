## 2024-05-24 - Intl.NumberFormat inside Framer Motion Loop
**Learning:** Instantiating `Intl.NumberFormat` is unexpectedly expensive. When placed inside a high-frequency loop like Framer Motion's `spring.on("change")` event (which runs up to 60fps during animation), it causes significant performance overhead and GC pressure.
**Action:** Always instantiate `Intl.NumberFormat` and similar heavy formatters once, outside of components and render/animation loops, and reuse the instance.
