## 2024-06-17 - Prevent layout jank by caching Intl.NumberFormat in animations
**Learning:** `Intl.NumberFormat` instantiation is notoriously slow. It should never be instantiated inside a high-frequency loop like Framer Motion's `springValue.on("change")` callback which runs 60 times per second during animation, as it can cause significant layout jank and memory allocations.
**Action:** Extract the formatter initialization to a module-level constant so it is created only once and reused across all instances and frames.
