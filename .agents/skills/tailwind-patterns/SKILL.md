---
name: tailwind-patterns
description: "Modern Tailwind CSS patterns, utility-first UI styling, responsive design, color tokens, and layout guidelines."
---

# Tailwind CSS Patterns Skill

## Overview
Guidelines and best practices for creating responsive, accessible, and performant user interfaces with modern Tailwind CSS.

## Key Principles

### 1. Modern Syntax & Configuration
- Compatible with Tailwind CSS v4 and Next.js Turbopack loaders.
- Keep `@import "tailwindcss";` in `globals.css` with required loader configurations in `next.config.ts`.
- Use CSS variables or `@theme` extensions for coherent color themes and typography tokens.

### 2. Layout & Responsive Design
- **Mobile-first approach**: Base classes apply to mobile (`text-base`, `flex-col`), while breakpoint modifiers (`sm:`, `md:`, `lg:`, `xl:`) progressively enhance the layout.
- Maintain consistent spacing rhythms with standard spacing scales (`gap-4`, `gap-6`, `gap-8`, `py-16`, `py-20`, `py-28`).
- Utilize CSS grid and flexbox for clean alignment across varied device viewports.

### 3. Component Styling Patterns
- Group related classes logically: Layout $\rightarrow$ Sizing $\rightarrow$ Spacing $\rightarrow$ Typography $\rightarrow$ Backgrounds/Borders $\rightarrow$ Effects/Interactivity.
- Ensure interactive elements feature distinct `:hover`, `:focus-visible`, and `:active` states.
- Always provide visible focus rings (`focus:outline-none focus:ring-2 focus:ring-offset-2`) for keyboard accessibility.
