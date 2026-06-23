## 2024-05-24 - Initial Run
**Learning:** Started tracking performance learnings.
**Action:** Will update this file with critical performance findings.

## 2024-05-24 - AnimatedCounter Intl.NumberFormat optimization
**Learning:** Recreating `Intl.NumberFormat` in a high-frequency animation loop (like `framer-motion`'s `springValue.on("change")`) causes significant performance overhead (~40x slower per frame). It's constantly garbage collected and reinstantiated on every single tick of the animation.
**Action:** Always instantiate `Intl.NumberFormat` outside of hot paths, animation loops, and render functions, and reuse the instance.
