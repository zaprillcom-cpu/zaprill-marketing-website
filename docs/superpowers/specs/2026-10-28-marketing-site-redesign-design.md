# Zaprill marketing site redesign — Product theater

**Date:** 2026-10-28  
**Status:** Approved for implementation planning  
**Repo:** [zaprillcom-cpu/zaprill-marketing-website](https://github.com/zaprillcom-cpu/zaprill-marketing-website)  
**Live preview:** https://zaprill-marketing-website.vercel.app  
**App CTA:** Sign up / Open the live Zaprill app (configured production app URL, e.g. zaprill.com / ai-job-god.vercel.app as currently deployed)

## Problem

The current marketing site does not sell the product we ship:

- Components and type are oversized; section padding (`py-32`) leaves large empty voids.
- Theme is purple / cool-lavender (`DESIGN.md`), which the product app rejected in favor of Notion warm-paper.
- Narrative is still “upload resume → salary gap,” with no dedicated Skill Coach, Resume Builder, or Home career-intelligence story.
- Loading UX is a generic spinner feel, not a branded moment.
- Overall density and showmanship lag references like Apple, [neon.com](https://neon.com), and [synclify.ai](https://synclify.ai/).

## Goals

1. Full rewrite of marketing chrome and product story (home, product pages, pricing, about, refreshed blog chrome).
2. Match the app visual system (warm paper, primary `#0075de`).
3. Product theater: interactive sample demos for Home, Skill Coach, and Resume on the homepage.
4. Primary conversion everywhere: **Sign up / Open Zaprill** → live app URL.
5. GSAP scroll storytelling + one Three.js hero accent; performance-first.
6. Custom branded page loader (not a spinner).

## Non-goals (v1)

- Embedding the real signed-in app.
- Gemini Live marketing.
- Rewriting individual blog article bodies.
- Keeping or extending the purple theme.
- A WebGL playground or heavy Three.js throughout.
- Changes to `sahil1330/zaprill-app` (product) in this project.

## Approach (locked): Product theater

Warm-paper Synclify-style marketing: a sticky interactive product stage on the homepage, dedicated product pages, GSAP chapter scrolls, one Three.js accent in the hero, branded loader, sign-up CTAs on every major section.

## Positioning

**Zaprill is the career OS for tech professionals.** Home shows where you stand. Skill Coach closes the gaps. Resume Builder gets you through ATS. Direct, high-signal, no fluff — same tone as `PRODUCT.md`, updated to the evolved product.

## Information architecture

| Route | Purpose |
| --- | --- |
| `/` | Product theater homepage |
| `/product/home` | Career intelligence board |
| `/product/skill-coach` | Streaming tutor (+ Live as a capability) |
| `/product/resume` | Resume Builder / Architect |
| `/pricing` | Free vs Pro, truthful vs live app |
| `/about` | Short product / founder story |
| `/blog`, `/blog/[slug]` | Existing posts; refreshed chrome only |
| `/contact`, `/privacy`, `/terms`, `/cookies`, `/disclaimer` | Keep; restyle to new tokens |
| Legacy `/demo` | Keep or soft-redirect to `/` + CTA — decide in implementation as “redirect to home hero CTA” unless analytics depends on it |

**Nav:** Product (dropdown → Home, Skill Coach, Resume) · Pricing · Blog · About · primary **Sign up**.

## Visual system

Aligned with the product app (Refero Notion warm-paper direction):

| Token | Value |
| --- | --- |
| Canvas | `#f6f5f4` |
| Cards | White + hairline border |
| Primary | `#0075de` |
| Accents | Sparse marigold / coral / sky (achievement only) |
| Headings | Satoshi |
| Body | Inter (add if missing; Satoshi alone today is acceptable interim for body if Inter is not yet loaded — prefer Inter for body in implementation) |
| Radius | ~12px cards / ~8px buttons |

**Density**

- Content max-width ≈ 1120–1200px.
- Section vertical padding `py-16`–`py-24` (not `py-32`).
- Hero headline `clamp` ≈ 2.5rem–3.5rem.
- Solid paper surfaces; no glassmorphism soup.
- No emoji in UI copy; Lucide icons only.
- No stock office photography.

**Supersedes:** `DESIGN.md` purple strategy and cool-lavender canvas. Implementation updates `DESIGN.md`, `PRODUCT.md`, and `app/globals.css` to this system.

## Page loader

On first visit / hard navigation:

1. Full-bleed warm canvas with logo mark.
2. Short GSAP sequence (0.8–1.5s): e.g. readiness bar filling, skill chips stacking, or resume lines drawing.
3. Fade into the hero.

Rules: never a generic CSS spinner; honor `prefers-reduced-motion` (static mark + short fade); do not block interaction longer than 1.5s; skip or shorten on subsequent client navigations if already shown this session.

## Homepage chapters

1. **Hero** — One-line value prop + **Open Zaprill** CTA. Light Three.js accent behind a crisp product frame (lazy-loaded; paused when offscreen).
2. **Sticky product stage** — Tabs: Home | Skill Coach | Resume. Interactive sample data in a faux app window (Synclify pattern). GSAP pin + crossfade between modes. Stage CTA: Open in Zaprill.
3. **Problem → proof** — Tight cards: skill gaps, ATS/resume signal, market / readiness — not long purple essays.
4. **How it works** — Three short steps.
5. **Pricing strip** — Free vs Pro summary + CTA.
6. **FAQ** — Accordion, concise answers aligned to the real product.

## Interactive demos

- Sample / fixture data only; no auth.
- Home: readiness or match score, skill-gap chips, next moves (mirrors the real Home board).
- Skill Coach: short tutor thread with a tool chip; optional muted “Live” badge (do not claim Live is always enabled).
- Resume: editor canvas + Architect chat strip.
- Clicking around the stage should feel like poking a real UI, not flipping static screenshots.

## Product pages

Each `/product/*` page:

1. Problem statement  
2. Demo or staged UI  
3. Three benefits  
4. Sign-up CTA  

Copy must match the evolved app (Home career-intelligence board; Skill Coach ToolLoop streaming tutor; Resume Architect). No legacy free-tier claims that contradict the live app.

## Pricing

Single source of truth in code (e.g. `lib/pricing.ts`) used by `/pricing` and the homepage strip. Align Free / Pro limits and INR pricing with the live product — do not invent or keep outdated “1 job search / month” copy unless that is still true in the app.

## Motion & tech

- **GSAP + ScrollTrigger** for chapter reveals and the pinned product stage.
- **One Three.js** (or R3F) accent in the hero only.
- Stay on **Next.js App Router**; add `gsap` and `three` / `@react-three/fiber` as needed.
- Demote or remove `framer-motion` where GSAP covers the same ground.
- Prefer existing marketing form patterns; avoid new Server Actions sprawl.
- App CTAs are absolute URLs to the production app (config via env, e.g. `NEXT_PUBLIC_APP_URL`).

## Success criteria

- Feels premium and dense (Apple / Neon / Synclify), not sparse startup template.
- Clearly markets Home, Skill Coach, and Resume.
- Theme matches the app warm-paper system.
- Sign up / Open app is the obvious action.
- Loader is branded and intentional.
- Performance-conscious: lazy Three.js, reduced-motion path, no janky scroll.

## Rollout note

This document is the design source of truth for implementation planning. After approval of an implementation plan, one (or stacked) PRs rewrite the site against this spec. Do not implement UI from this docs PR alone until Sahil approves the written spec and the plan.

## Spec coverage checklist

| Requirement | Section |
| --- | --- |
| Full site rewrite scope | Information architecture |
| Warm-paper / kill purple | Visual system |
| Product theater demos | Homepage + Interactive demos |
| Dedicated product pages | Product pages |
| Sign up → app | Goals, Nav, CTAs |
| GSAP + light Three.js | Motion & tech |
| Branded loader | Page loader |
| Honest pricing | Pricing |
| Blog chrome only | IA |
