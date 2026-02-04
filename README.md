# Trina Requena Website

A Next.js (App Router) marketing site built with TypeScript and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- `src/app` — Pages, route metadata, sitemap, robots, and server actions
- `src/components` — Reusable UI components
- `src/lib` — Brand tokens, content, metadata helpers, structured data
- `public/brand` — Logos and brand marks
- `public/textures` — Background textures
- `public/illustrations` — Decorative SVGs

## Update Copy

All copy lives in `src/lib/content.ts`. Update content there and the pages will reflect the changes.

## Brand Tokens

Design tokens live in `src/lib/brand.ts` and are mirrored in Tailwind config and CSS variables.

## Contact Form

The contact form uses a server action in `src/app/contact/actions.ts` and currently logs submissions to the console.

To wire it to an email provider later:
1. Replace the console log with a call to your email API.
2. Store API keys in environment variables.
3. Validate and sanitize inputs before sending.

## Assets

Logos and textures are sourced from the provided brand files and copied into `public/` for optimized usage.

