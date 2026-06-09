## 2026-06-09 - [Framer Motion Frame Drops]
**Learning:** Instantiating objects like `Intl.NumberFormat` inside a framer-motion `springValue.on("change")` callback is a significant performance bottleneck. The callback runs on every frame of the animation (~60fps), and `Intl` instantiation is expensive, leading to stuttering counters.
**Action:** Always extract static instantiations (`Intl.NumberFormat`, complex objects, etc.) outside of animation callbacks, or memoize them to reuse the same instance across frames.
