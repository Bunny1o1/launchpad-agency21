## 2024-06-06 - Costly Intl.NumberFormat instantiation inside Framer Motion callback
**Learning:** Instantiating `Intl.NumberFormat` is relatively expensive and doing so inside a `framer-motion` `springValue.on("change")` callback which executes 60+ times per second results in hundreds of expensive instantiations. This causes unnecessary high CPU utilization that can drop animation frames or block the main thread.
**Action:** Always instantiate `Intl` formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`, etc.) exactly once outside of high-frequency render loops or animation callbacks.
