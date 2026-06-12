## 2026-06-12 - Framer Motion High-Frequency Callbacks
**Learning:** In Framer Motion, callbacks like `springValue.on("change", ...)` fire on every single animation frame (typically 60+ times per second). Instantiating expensive built-in objects like `Intl.NumberFormat` inside these callbacks causes significant CPU overhead and can lead to jank in otherwise smooth animations.
**Action:** Always pre-instantiate or cache expensive objects outside of high-frequency animation loops or `requestAnimationFrame` callbacks. Re-using instances is critical for smooth `framer-motion` performance.
