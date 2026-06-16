## 2024-06-16 - Expensive Intl.NumberFormat in Animation Loops
**Learning:** Instantiating `Intl.NumberFormat` is an expensive operation in JavaScript. When placed inside a continuous animation callback (like Framer Motion's `spring.on('change')` which runs at 60fps), it creates severe main thread overhead and can cause animation jank. Furthermore, missing `unsubscribe` calls in these listeners cause memory leaks.
**Action:** Always instantiate `Intl.NumberFormat` (and other expensive formatters) outside of animation or render loops, and ensure animation listeners are properly cleaned up.
