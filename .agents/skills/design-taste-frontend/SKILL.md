---
name: design-taste-frontend
description: "Anti-slop frontend design engineering skill. Enforces art direction, design dials, strict typography, authentic imagery, layout house rules, and pre-flight quality checks to prevent generic AI-generated interfaces."
---

# Design Taste Frontend (Anti-Slop Craft Skill)

## Purpose & Philosophy
AI models tend to converge on a generic, bland aesthetic: centered text, purple/blue gradient meshes, floating cards with arbitrary drop shadows, overused badges, and hollow marketing clichés. 

This skill enforces high-craft, professional art direction, visual discipline, and strict constraints inspired by top-tier agency and product design.

---

## 1. Brief Inference ("Read the Room First")
Before writing any frontend code or component markup:

1. **Classify the Page Kind**:
   - Healthcare / Medical Practice: Needs trust, medical authority, human warmth, calm confidence, clinical precision, high legibility.
   - SaaS / Tech Tool: Product-led, crisp, high-density, interactive previews.
   - Editorial / Culture: Typography-driven, expressive layouts, curated imagery.
   - Consumer / Lifestyle: Emotional, visceral photography, storytelling.
2. **Extract Vibe Signals & Palette Constraints**:
   - For healthcare & clinical rehabilitation: Deep sage, slate, soft medical teal, warm off-white, calm stone. No neon gradients or gamer dark mode.
3. **Formulate the "Design Read"**:
   - State in one line the aesthetic direction, typography personality, and mood before coding.

---

## 2. The Three Design Dials
Calibrate these dials (1 to 10) for every project:

- **DESIGN_VARIANCE (1-10)**:
  - *Low (1-3)*: Predictable, conservative, standard medical/financial corporate layouts.
  - *Balanced (4-6)*: Polished, modern, asymmetric accents, elegant editorial rhythm (recommended for modern healthcare/authority sites).
  - *High (7-10)*: Avant-garde, experimental grid breaking, brutalist or high-fashion.
- **MOTION_INTENSITY (1-10)**:
  - *Low (1-3)*: Subtle, functional state changes, smooth opacity transitions, accessible.
  - *Medium (4-6)*: Smooth micro-interactions, accordion reveals, tactile button depressions.
  - *High (7-10)*: Parallax, magnetic cursors, cinematic view transitions.
- **VISUAL_DENSITY (1-10)**:
  - *Spacious (1-4)*: Generous whitespace, large line heights, breathable reading (ideal for seniors and patient families).
  - *Medium (5-7)*: Balanced content cards with rich detail.
  - *High (8-10)*: Dashboard, analytics, Bloomberg-style density.

---

## 3. The Non-Negotiable House Rules

1. **No Generic AI "Slop" Aesthetics**:
   - ❌ No arbitrary purple/cyan gradient blobs behind everything.
   - ❌ No floating frosted-glass cards without purpose.
   - ❌ No generic "01 / 02 / 03" placeholder feature grids without real context.
   - ❌ No corporate buzzword headings ("Revolutionizing Healthcare", "Next-Gen Therapy"). Use direct, empathetic, benefit-driven language.
2. **Intentional Typographic Hierarchy**:
   - Pick an intentional pairing: a refined serif or structured display grotesque for headings + a clean, highly legible neutral sans-serif for body text.
   - Ensure tight leading on large headlines (`leading-[1.1]`) and comfortable reading leading on paragraphs (`leading-relaxed` or `leading-7`).
3. **Equal Boundaries & Rhythm**:
   - Consistent container max-widths (`max-w-7xl` or `max-w-6xl`).
   - Equal margins across viewport breakpoints (1440px desktop, 1024px tablet landscape, 768px tablet portrait, 390px mobile).
4. **Authentic Imagery & Meaningful Visuals**:
   - Never leave empty placeholder gray boxes.
   - Visuals must support clinical credibility (real clinic setups, human gestures, professional badges, genuine diagrams).
5. **Tactile Micro-Interactions**:
   - Buttons must feel clickable: active states with subtle translation or scale, focus-visible rings with sufficient contrast, and predictable hover treatments.

---

## 4. Pre-Flight Quality Gate
Before considering any frontend page complete, run this mental audit:

- [ ] Does this look like an AI generated it in 10 seconds, or like a senior digital studio designed it?
- [ ] Is there sufficient contrast between background and text for users with impaired vision?
- [ ] Are headings clear, empathetic, and specific to the clinical specialty?
- [ ] Does the page maintain clean layout boundaries at 390px (mobile) and 1440px (desktop) without horizontal scroll?
- [ ] Are all interactive elements fully navigable and functional via keyboard (`Tab` / `Enter` / `Space`)?
