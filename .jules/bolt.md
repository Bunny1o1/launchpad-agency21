## 2024-05-25 - GSAP Bundle Size Optimization in Next.js 14 (App Router)
**Learning:** Components utilizing heavy animation libraries like GSAP (`@gsap/react`, `gsap`) dramatically inflate the First Load JS size. If these components are located below the fold (like the `TimelineProcess` component), they represent a major opportunity for code-splitting via lazy loading.
**Action:** Always dynamically import components relying on heavy libraries (e.g., GSAP, Framer Motion) using `next/dynamic` when they are rendered off-screen or below the fold to reduce the critical rendering path bundle size.
