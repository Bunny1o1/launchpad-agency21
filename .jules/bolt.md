## 2026-10-29 - Initial check
**Learning:** Found several components using Framer Motion (magnetic-button, animated-counter, aurora-background). MagneticButton uses React state (`useState`) to update `position` continuously `onMouseMove`. This causes unnecessary React render cycles for a continuous interaction.
**Action:** Replace `useState` with Framer Motion's `useMotionValue` and `useSpring` to bypass React's render cycle for continuous user interaction in `MagneticButton` and `AuroraBackground` or anywhere else similar.
