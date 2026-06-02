## 2026-06-02 - React Framer Motion Formatting Bottleneck
**Learning:** Instantiating `Intl.NumberFormat` inside a Framer Motion `springValue.on("change")` loop causes severe performance degradation, as the callback fires up to 60+ times per second during animations.
**Action:** Always cache `Intl.NumberFormat` and other expensive constructor calls outside of React components or animation loops to avoid unnecessary CPU load and garbage collection churn.
