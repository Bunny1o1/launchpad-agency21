## 2026-05-18 - Avoid frequent `Intl.NumberFormat` instantiation
**Learning:** Instantiating `Intl.NumberFormat` is unexpectedly expensive in JavaScript. Doing it inside high-frequency callbacks (like `framer-motion`'s `useSpring.on("change")` rendering 60fps) can cause main thread bloat and dropped frames.
**Action:** Always declare `Intl.NumberFormat` objects outside of the component or loop, caching the formatter to re-use it.
