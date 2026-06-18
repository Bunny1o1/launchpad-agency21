# Bolt's Journal
## 2026-06-18 - Avoid Intl.NumberFormat Instantiation in Render/Animation Loops
**Learning:** Instantiating `Intl.NumberFormat` is an expensive operation in JavaScript. Creating a new instance inside a Framer Motion `springValue.on("change")` callback means it is being recreated ~60 times per second during the animation, causing unnecessary CPU load and potential frame drops.
**Action:** Always hoist `Intl.NumberFormat` instantiation outside of rapid callbacks (like render functions, `requestAnimationFrame`, or Framer Motion event listeners) and reuse the formatter instance.
