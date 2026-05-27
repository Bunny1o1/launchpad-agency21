## 2024-05-27 - [Framer Motion] Instantiating Objects in Animation Frame
**Learning:** Instantiating slow objects like `Intl.NumberFormat` inside Framer Motion's `springValue.on('change')` callback causes severe performance regressions due to continuous memory allocations on every frame.
**Action:** Always extract expensive instantiations outside of animation frame callbacks. Use module-level constants or component-level refs/state.
