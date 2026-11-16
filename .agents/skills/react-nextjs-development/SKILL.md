---
name: react-nextjs-development
description: "React and Next.js modern application development with App Router, Server and Client Components, TypeScript, Tailwind CSS, static export, and clean component patterns."
---

# React & Next.js Development Skill

## Overview
Guides building, maintaining, and refactoring applications using modern Next.js (App Router), React 19, TypeScript, and utility-first styling.

## Best Practices & Guidelines

### 1. App Router Architecture
- **Server Components by default**: Keep pages and layout components as React Server Components unless client interactivity is strictly required.
- **Client Boundary Minimization**: Use `'use client'` only at leaf components that manage local state (e.g., mobile menu toggle, interactive accordions, modals).
- **Directory Structure**:
  - `src/app/`: File-system routing, layouts, error boundaries, and metadata.
  - `src/components/`: Reusable, modular UI components.
  - `src/data/`: Centralized configurations, data models, and static content.

### 2. Static Site Generation (SSG) & Export
- Maintain compatibility with `output: 'export'` in `next.config.ts`.
- Avoid node-only runtime APIs or dynamic route headers (`cookies()`, `headers()`) in static export routes.
- Ensure `images: { unoptimized: true }` is enabled when deploying to static hosting environments (Vercel, Cloudflare Pages, Netlify, GitHub Pages).

### 3. Component Design & TypeScript
- Strongly type all component props with interfaces or type aliases.
- Decouple static text and marketing content into configuration files (e.g., `src/data/site-config.ts`) to allow seamless niche or brand pivoting.
- Favor composition over inheritance; make components small, focused, and single-responsibility.
