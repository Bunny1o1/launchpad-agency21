## 2024-06-21 - [Framer Motion Performance]
**Learning:** Instantiating `Intl.NumberFormat` inside a Framer Motion `springValue.on("change")` listener executes 60 times a second and causes major performance degradation and garbage collection pressure due to expensive object creation.
**Action:** Extract expensive instances (like `Intl.NumberFormat`) outside of the `on("change")` listener to avoid redundant allocation during the animation cycle. Always check high-frequency hooks for costly object creation.
