---
name: ui-a11y
description: "Web accessibility (a11y) guidelines, WCAG 2.1 AA compliance, ARIA attributes, semantic HTML, keyboard navigation, and contrast standards."
---

# Web Accessibility (A11y) Skill

## Overview
Standards and testing patterns to ensure web interfaces comply with WCAG 2.1 Level AA, making clinical and professional healthcare services accessible to all users, including older adults and individuals with motor or visual impairments.

## Accessibility Requirements

### 1. Semantic Structure & Navigation
- Use meaningful HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Maintain a logical heading hierarchy (`<h1>` through `<h4>`) without skipping levels.
- Provide descriptive `aria-label` or text content on all interactive buttons and links.

### 2. Keyboard Navigation & Focus
- Every interactive element (links, buttons, accordion toggles) must be reachable via the `Tab` key.
- Provide visible, high-contrast focus rings (`focus:ring-2 focus:ring-teal-600 focus:ring-offset-2`).
- Interactive widgets (e.g., accordions) must toggle `aria-expanded="true|false"` and identify their target panel using `aria-controls`.

### 3. Color Contrast & Readability
- Normal text requires a minimum contrast ratio of 4.5:1 against its background.
- Large text (18pt / 24px or bold 14pt / 18.5px) requires a minimum ratio of 3:1.
- Avoid conveying information solely through color; pair color indicators with icons or descriptive text.
- Ensure touch targets on mobile devices are at least 44x44 CSS pixels.
