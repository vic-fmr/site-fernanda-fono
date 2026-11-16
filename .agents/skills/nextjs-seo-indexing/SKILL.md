---
name: nextjs-seo-indexing
description: "Technical SEO, Schema.org JSON-LD structured data, metadata API, canonical URLs, sitemaps, and robots.txt for Next.js applications."
---

# Next.js SEO & Indexing Skill

## Overview
Technical search engine optimization (SEO) patterns and guidelines for Next.js applications to maximize organic discovery, local search presence, and Google indexing.

## SEO Checklist for Healthcare & Professional Services

### 1. Metadata API (`src/app/layout.tsx` / `page.tsx`)
- Define comprehensive `metadata` objects using Next.js Metadata API:
  - `title`: Primary keyword + Professional name + Location/Specialty.
  - `description`: 150-160 characters describing services, credentials, and call to action.
  - `keywords`: Targeted local and specialty keywords.
  - `openGraph`: Social share title, description, URL, locale (`pt_BR`), and site name.
  - `robots`: `{ index: true, follow: true }`.

### 2. Structured Data (Schema.org JSON-LD)
- Inject valid JSON-LD scripts for healthcare practitioners:
  - `@type: "MedicalBusiness"` or `"Physician"`.
  - Include `name`, `description`, `medicalSpecialty` (e.g., Speech-Language Pathology), `telephone`, and `address`.
  - Test structured data against Google's Rich Results Test tool.

### 3. Crawlability & Indexing Assets
- Provide `sitemap.xml` (or `sitemap.ts`) listing all public routes.
- Provide `robots.txt` (or `robots.ts`) allowing search engine bots.
- Ensure all canonical URLs are fully qualified and consistent.
