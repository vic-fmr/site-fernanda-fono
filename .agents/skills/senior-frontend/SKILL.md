---
name: senior-frontend
description: "Senior frontend engineering standards: clean architecture, performance optimization, web vitals, error handling, and robust maintainability."
---

# Senior Frontend Engineering Skill

## Overview
Architectural guidelines and engineering standards for building robust, maintainable, and high-performance frontend applications.

## Engineering Standards

### 1. Data-Driven Architecture
- Centralize all configurable site texts, branding, service definitions, contact info, and media into dedicated data files (e.g., `src/data/site-config.ts`).
- UI components should act as presentation layers consuming structured data models.
- Future brand, niche, or copy changes should require zero modifications to component logic or JSX templates.

### 2. Core Web Vitals & Performance
- **Largest Contentful Paint (LCP)**: Prioritize critical above-the-fold content; preconnect fonts and critical assets.
- **Cumulative Layout Shift (CLS)**: Reserve explicit dimensions for images, icons, and dynamic widgets to prevent layout shifts.
- **Interaction to Next Paint (INP)**: Keep client-side state transitions fast, responsive, and lightweight.

### 3. Verification & Code Quality
- Enforce strict TypeScript types with no `any`.
- Keep ESLint rules passing with 0 warnings/errors.
- Verify clean production builds with `npm run build` before pushing changes.
