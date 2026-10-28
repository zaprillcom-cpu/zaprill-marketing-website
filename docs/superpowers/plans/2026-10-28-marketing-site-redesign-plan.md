# Marketing Site Product Theater Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the Zaprill marketing site as a warm-paper Product theater that markets Home, Skill Coach, and Resume with GSAP storytelling, a branded loader, one Three.js hero accent, and Sign up CTAs to the live app.

**Architecture:** Shared tokens and copy sources (`lib/tokens.ts`, `lib/pricing.ts`, `lib/cta.ts`, `lib/product-nav.ts`) feed chrome, homepage chapters, and product pages. Homepage is a chapter stack: branded loader → hero (lazy R3F accent) → sticky GSAP-pinned product stage (Home | Coach | Resume fixtures) → problem/proof → how-it-works → pricing strip → FAQ. Dedicated `/product/*` pages reuse the stage demos. Framer-motion is demoted where GSAP covers the same ground.

**Tech Stack:** Next.js App Router, Tailwind 4, GSAP + ScrollTrigger, three/@react-three/fiber (hero only), node:test + tsx --test, Lucide, Satoshi+Inter

## Global Constraints

- Spec: `docs/superpowers/specs/2026-10-28-marketing-site-redesign-design.md` (PR #22, branch `docs/marketing-product-theater-spec`). Do not merge without Sahil. Implement against the spec text.
- App CTA always resolves to `siteConfig.appUrl` (`https://app.zaprill.com`) unless `NEXT_PUBLIC_APP_URL` overrides via `getAppUrl()`.
- Tokens: canvas `#f6f5f4`, primary `#0075de`, white hairline cards; kill purple `oklch(0.61 0.2 292)` and cool-lavender canvas everywhere (globals, DESIGN.md, PRODUCT.md, components).
- Density: content max-width ~1120–1200px; section padding `py-16`–`py-24` (not `py-32`); hero headline `clamp(2.5rem, 5vw, 3.5rem)`.
- No emoji in UI copy, JSX, or rendered strings. Lucide icons only. No stock office photography. No glassmorphism soup (`backdrop-blur` cards / `bg-card/50` marketing surfaces).
- GSAP + ScrollTrigger for chapter storytelling and the pinned product stage. One Three.js / R3F accent in the hero only; lazy-load; pause when offscreen. Honor `prefers-reduced-motion`.
- Branded page loader 0.8–1.5s max (not a spinner); skip/shorten after first show this session; reduced-motion → static mark + short fade.
- Full rewrite: home, `/product/home`, `/product/skill-coach`, `/product/resume`, pricing, about, blog chrome; restyle legal pages to new tokens. Soft-redirect `/demo` → `/`.
- Unit tests: **node:test + `tsx --test` / `npm run test:unit`** — NEVER Vitest. `test:unit` is an explicit file list in `package.json`. Append every new test file in the same commit. Do not remove existing paths.
- PRs as sahil1330 on `zaprillcom-cpu/zaprill-marketing-website`. Do not merge without Sahil.
- After each code commit, run `graphify update .` (AST-only) if graphify is present.
- Out of scope: signed-in app embeds, Gemini Live marketing, blog article body rewrites, purple theme, WebGL playground, any changes to `sahil1330/zaprill-app`.
- Pricing: create `lib/pricing.ts` as the single source for homepage strip + `/pricing`. **VERIFY-BEFORE-SHIP** Free/Pro limits and INR/USD amounts against the live app. Interim copy: Free = account + Home board + limited Coach + basic resume; Pro = unlimited Coach + Resume Architect + ad-free. Do not keep legacy "1 job search per month" unless still true in the app.
- Package manager is **npm** (`package-lock.json`). Use `npm install` / `npm run test:unit` / `npx tsc --noEmit`. Not pnpm.
- Keep existing analytics (GTM/GA/AdSense), cookie banner, newsletter form, and `/links/vishnuraj` unless a token restyle is required. Do not invent new Server Actions for marketing forms.
- `next.config.mjs` already redirects `/app` → `https://app.zaprill.com/`. Prefer `getAppUrl()` / `AppCta` for user-facing links so env overrides work; keep the rewrite as a safety net.

---

## File map

| Path | Responsibility |
| --- | --- |
| `package.json` | Add `test:unit`, deps: `gsap`, `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three`, `tsx`. Explicit test file list. |
| `lib/tokens.ts` | **Create.** Hex/token constants for tests and docs alignment. |
| `lib/tokens.test.ts` | **Create.** Assert canvas/primary; assert no purple primary in CSS. |
| `lib/cta.ts` | **Create.** `getAppUrl()`, CTA labels. |
| `lib/cta.test.ts` | **Create.** Default + env override. |
| `lib/pricing.ts` | **Create.** Free/Pro tiers (verify-before-ship amounts). |
| `lib/pricing.test.ts` | **Create.** Two tiers; no legacy job-search claim. |
| `lib/product-nav.ts` | **Create.** Product dropdown + primary nav. |
| `lib/product-nav.test.ts` | **Create.** Routes and labels. |
| `lib/motion.ts` | **Create.** `prefersReducedMotion()`, loader session helpers. |
| `lib/motion.test.ts` | **Create.** Session skip + reduced-motion. |
| `lib/page-loader.ts` | **Create.** Duration clamp constants/helpers. |
| `lib/page-loader.test.ts` | **Create.** 800–1500 clamp. |
| `lib/product-demos.ts` | **Create.** Home/Coach/Resume fixtures. |
| `lib/product-demos.test.ts` | **Create.** Three modes + muted Live badge. |
| `lib/home-copy.ts` | **Create.** Hero, proof, how-it-works, FAQ copy. |
| `lib/home-copy.test.ts` | **Create.** Pillar coverage; no legacy claims. |
| `lib/product-pages.ts` | **Create.** Product page content + stage mode map. |
| `lib/product-pages.test.ts` | **Create.** Three pages, three benefits each. |
| `lib/about-copy.ts` | **Create.** Short about story. |
| `lib/about-copy.test.ts` | **Create.** Length + pillar mentions. |
| `lib/site.ts` | Update description to career-OS positioning. |
| `app/globals.css` | Remap to warm paper; density utilities; kill purple. |
| `DESIGN.md` / `PRODUCT.md` | Rewrite to warm-paper Product theater. |
| `components/app-cta.tsx` | **Create.** Sign up / Open Zaprill button. |
| `components/site-header.tsx` | Product dropdown + Sign up. |
| `components/site-footer.tsx` | Product links + Sign up via `getAppUrl()`. |
| `components/section-heading.tsx` | Dense uppercase label. |
| `components/page-loader.tsx` | **Create.** Branded GSAP loader. |
| `components/product-stage.tsx` | **Create.** Tabs + demo shell. |
| `components/demos/home-demo.tsx` | **Create.** Readiness / gaps / next moves. |
| `components/demos/coach-demo.tsx` | **Create.** Tutor thread + tool chip + muted Live. |
| `components/demos/resume-demo.tsx` | **Create.** Editor + Architect strip. |
| `components/home/*` | Hero, chapters, proof, how-it-works, pricing strip, FAQ, canvas. |
| `components/product/product-page.tsx` | Shared product page layout. |
| `app/page.tsx` | Product theater homepage. |
| `app/layout.tsx` | Inter + PageLoader + metadata. |
| `app/product/*/page.tsx` | Home, Skill Coach, Resume pages. |
| `app/pricing/page.tsx` | Free/Pro from `lib/pricing.ts`. |
| `app/pricing-md/route.ts` | Markdown from pricing source. |
| `app/about/page.tsx` | Short story + CTA. |
| `app/blog/*` | Chrome only. |
| `app/demo/page.tsx` | Redirect to `/`. |
| `app/{privacy,terms,cookies,disclaimer,contact,not-found}*` | Token restyle. |
| `app/sitemap.ts` | Add `/product/*`; demote `/demo`. |
| `.env.example` | `NEXT_PUBLIC_APP_URL`. |
| `checklist.md` | Burn-in checklist. |
| `docs/superpowers/plans/2026-10-28-marketing-site-redesign-plan.md` | This plan in-repo. |

---


### Task 1: Unit test tooling

**Files:**
- Modify: `package.json`
- Create: `lib/smoke.test.ts`

**Interfaces:**
- Consumes: none
- Produces: `npm run test:unit` script that runs `tsx --test` over an explicit file list

- [ ] **Step 1: Write the failing smoke test**

Create `lib/smoke.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";

test("node:test runner is wired", () => {
  assert.equal(1 + 1, 2);
});
```

- [ ] **Step 2: Confirm there is no test:unit script yet**

Run: `node -e "const p=require('./package.json'); if(p.scripts['test:unit']) process.exit(1); console.log('missing test:unit as expected')"`
Expected: `missing test:unit as expected`

- [ ] **Step 3: Add deps and test:unit script**

```bash
npm install -D tsx
```

Update `package.json` scripts:

```json
"test:unit": "tsx --test lib/smoke.test.ts"
```

Do not add Vitest. Do not change other scripts.

- [ ] **Step 4: Run tests**

Run: `npm run test:unit`
Expected: PASS (`node:test runner is wired`)

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json lib/smoke.test.ts
git commit -m "chore: add node:test + tsx --test unit runner"
graphify update . || true
```

---

### Task 2: Warm-paper tokens + DESIGN/PRODUCT remap

**Files:**
- Create: `lib/tokens.ts`
- Create: `lib/tokens.test.ts`
- Modify: `app/globals.css`
- Modify: `DESIGN.md`
- Modify: `PRODUCT.md`
- Modify: `lib/site.ts`
- Modify: `package.json` (`test:unit` append `lib/tokens.test.ts`)

**Interfaces:**
- Consumes: none
- Produces:
  - `CANVAS = "#f6f5f4"`
  - `PRIMARY = "#0075de"`
  - `CARD = "#ffffff"`
  - `ACCENT_MARIGOLD = "#e8a317"`
  - `ACCENT_CORAL = "#e36b5b"`
  - `ACCENT_SKY = "#5b9fd6"`
  - `RADIUS_CARD_PX = 12`
  - `RADIUS_BUTTON_PX = 8`
  - `CONTENT_MAX_PX = 1200`
  - `FORBIDDEN_PRIMARY_OKLCH = "oklch(0.61 0.2 292)"`
  - `tokens` object exporting the above

- [ ] **Step 1: Write the failing test**

Create `lib/tokens.test.ts`:

```ts
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import {
  ACCENT_CORAL,
  ACCENT_MARIGOLD,
  ACCENT_SKY,
  CANVAS,
  CARD,
  CONTENT_MAX_PX,
  FORBIDDEN_PRIMARY_OKLCH,
  PRIMARY,
  RADIUS_BUTTON_PX,
  RADIUS_CARD_PX,
} from "@/lib/tokens";

test("warm-paper brand tokens match the app", () => {
  assert.equal(CANVAS, "#f6f5f4");
  assert.equal(PRIMARY, "#0075de");
  assert.equal(CARD, "#ffffff");
  assert.equal(RADIUS_CARD_PX, 12);
  assert.equal(RADIUS_BUTTON_PX, 8);
  assert.equal(CONTENT_MAX_PX, 1200);
  assert.equal(ACCENT_MARIGOLD, "#e8a317");
  assert.equal(ACCENT_CORAL, "#e36b5b");
  assert.equal(ACCENT_SKY, "#5b9fd6");
});

test("globals.css must not keep the purple primary", () => {
  const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
  assert.equal(css.includes(FORBIDDEN_PRIMARY_OKLCH), false);
  assert.match(css, /--background:\s*#f6f5f4/i);
  assert.match(css, /--primary:\s*#0075de/i);
});

test("DESIGN.md and PRODUCT.md describe warm paper career OS", () => {
  const design = readFileSync(join(process.cwd(), "DESIGN.md"), "utf8");
  const product = readFileSync(join(process.cwd(), "PRODUCT.md"), "utf8");
  assert.match(design, /#f6f5f4/);
  assert.match(design, /#0075de/);
  assert.doesNotMatch(design, /Vivid Purple/i);
  assert.match(product, /Skill Coach/i);
  assert.match(product, /Resume/i);
  assert.match(product, /Home/i);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx tsx --test lib/tokens.test.ts`
Expected: FAIL (Cannot find module `@/lib/tokens` or assertion failures on purple CSS)

- [ ] **Step 3: Write `lib/tokens.ts`**

```ts
export const CANVAS = "#f6f5f4";
export const PRIMARY = "#0075de";
export const CARD = "#ffffff";
export const ACCENT_MARIGOLD = "#e8a317";
export const ACCENT_CORAL = "#e36b5b";
export const ACCENT_SKY = "#5b9fd6";
export const RADIUS_CARD_PX = 12;
export const RADIUS_BUTTON_PX = 8;
export const CONTENT_MAX_PX = 1200;
export const FORBIDDEN_PRIMARY_OKLCH = "oklch(0.61 0.2 292)";

export const tokens = {
  canvas: CANVAS,
  primary: PRIMARY,
  card: CARD,
  accentMarigold: ACCENT_MARIGOLD,
  accentCoral: ACCENT_CORAL,
  accentSky: ACCENT_SKY,
  radiusCardPx: RADIUS_CARD_PX,
  radiusButtonPx: RADIUS_BUTTON_PX,
  contentMaxPx: CONTENT_MAX_PX,
} as const;
```

- [ ] **Step 4: Remap `app/globals.css` `:root` (and dark) to warm paper**

Replace the light-mode brand block so that at minimum:

```css
:root {
  --radius: 0.75rem; /* 12px cards */

  --background: #f6f5f4;
  --foreground: #1a1918;

  --nav-bg: #ffffffcc;
  --footer-bg: #f6f5f4;

  --home-surface-1: #ffffff;
  --home-surface-2: #f6f5f4;
  --home-surface-3: #f0eeec;

  --card: #ffffff;
  --card-foreground: #1a1918;

  --popover: #ffffff;
  --popover-foreground: #1a1918;

  --primary: #0075de;
  --primary-foreground: #ffffff;

  --secondary: #efece9;
  --secondary-foreground: #1a1918;

  --muted: #efece9;
  --muted-foreground: #6b6560;

  --accent: #efece9;
  --accent-foreground: #1a1918;

  --destructive: #d14343;
  --destructive-foreground: #ffffff;

  --border: #e6e2de;
  --input: #e6e2de;
  --ring: #0075de;

  --chart-1: #0075de;
  --chart-2: #5b9fd6;
  --chart-3: #e8a317;
  --chart-4: #e36b5b;
  --chart-5: #6b6560;

  --gradient-primary: linear-gradient(135deg, #0075de, #005bb0);
  --gradient-accent: linear-gradient(135deg, #f6f5f4, #efece9);
  --gradient-background: linear-gradient(180deg, #ffffff, #f6f5f4);

  --shadow-glow:
    0 0 0 1px rgb(0 117 222 / 0.10),
    0 12px 40px rgb(26 25 24 / 0.06);
}
```

Update `.section-padding` to:

```css
.section-padding {
  @apply py-16 md:py-24;
}
```

Update `.container` max width to `max-w-[1200px]`.

In `@theme inline`, set:

```css
--font-heading: var(--font-satoshi);
--font-sans: var(--font-inter), var(--font-satoshi), ui-sans-serif, system-ui, sans-serif;
```

Dark mode: deep warm charcoal (not purple noir). Example:

```css
.dark {
  --background: #141312;
  --foreground: #f5f3f0;
  --primary: #3b9aef;
  --primary-foreground: #041018;
  --card: #1c1b1a;
  --border: #2a2826;
  --muted: #22201e;
  --muted-foreground: #a39e98;
  --nav-bg: #141312cc;
  --footer-bg: #141312;
}
```

Search-and-destroy any remaining `oklch(0.61 0.2 292)` and purple gradient comments in this file.

- [ ] **Step 5: Rewrite DESIGN.md**

```md
# DESIGN.md

## Color Strategy: Warm paper (app-aligned)
Canvas `#f6f5f4`, primary `#0075de`, white hairline cards. Sparse marigold / coral / sky accents for achievement only. Purple `oklch(0.61 0.2 292)` is retired.

## Typography
- **Heading**: Satoshi (bold, tracking-tight)
- **Body**: Inter (regular, leading-relaxed)

## Layout Principles
- **Dense product theater**: content max-width 1120–1200px; section padding `py-16`–`py-24` (never `py-32`).
- **Solid paper**: white cards + hairline borders. No glassmorphism soup.
- **Radius**: ~12px cards / ~8px buttons.
- **Hero type**: `clamp(2.5rem, 5vw, 3.5rem)`.

## Motion
- GSAP + ScrollTrigger for chapters and pinned product stage.
- One Three.js hero accent (lazy, pause offscreen).
- Branded page loader (0.8–1.5s), not a spinner.
- Honor `prefers-reduced-motion`.

## Components
- **SectionHeading**: small uppercase muted label + title (no giant purple pills).
- **AppCta**: Sign up / Open Zaprill → live app URL.
- **ProductStage**: faux app window with Home | Coach | Resume demos.
```

- [ ] **Step 6: Rewrite PRODUCT.md**

```md
# PRODUCT.md

## Brand: Zaprill
Zaprill is the career OS for tech professionals. Home shows where you stand. Skill Coach closes the gaps. Resume Builder gets you through ATS.

## Pillars
- **Home** — career intelligence board: readiness, skill gaps, next moves.
- **Skill Coach** — streaming tutor that teaches the gaps (Live is a product capability, not always-on marketing).
- **Resume** — Resume Builder + Architect for ATS-ready docs.

## Users
Software engineers, technical leads, and data scientists (India-first, global-ready) who need signal, not fluff.

## Tone & Voice
Professional, empowering, modern, direct. High-signal. No emoji in UI copy.

## Anti-references
- Stock office photography
- Purple / cool-lavender brand systems
- Oversized airy startup templates (`py-32` voids)
- Legacy "upload resume → salary gap only" narrative without Home / Coach / Resume
```

- [ ] **Step 7: Update `lib/site.ts` description**

```ts
export const siteConfig = {
  name: "Zaprill",
  description:
    "Career OS for tech professionals — Home career intelligence, Skill Coach, and Resume Builder that get you through ATS.",
  url: "https://www.zaprill.com",
  appUrl: "https://app.zaprill.com",
  email: "contact@zaprill.com",
  location: "Mumbai, India",
  socials: {
    youtube: "https://www.youtube.com/@Zaprill-jobs",
  },
};
```

- [ ] **Step 8: Append test and run**

Update `package.json`:

```json
"test:unit": "tsx --test lib/smoke.test.ts lib/tokens.test.ts"
```

Note: if `@/` path alias fails under `tsx --test`, add a short `tsx` loader or use relative imports in tests only. Prefer keeping `@/` via `tsconfig` paths; if needed create `scripts/tsx-test.mjs` that registers `tsx` with the project tsconfig. Document the chosen approach in the commit body.

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add lib/tokens.ts lib/tokens.test.ts lib/site.ts app/globals.css DESIGN.md PRODUCT.md package.json
git commit -m "feat: remap marketing tokens to warm-paper #f6f5f4 / #0075de"
graphify update . || true
```

---

### Task 3: CTA helper + pricing source of truth

**Files:**
- Create: `lib/cta.ts`
- Create: `lib/cta.test.ts`
- Create: `lib/pricing.ts`
- Create: `lib/pricing.test.ts`
- Create: `components/app-cta.tsx`
- Modify: `package.json` (`test:unit` append)

**Interfaces:**
- Consumes: `siteConfig` from `@/lib/site`
- Produces:
  - `APP_CTA_LABEL = "Sign up"`
  - `APP_CTA_LABEL_OPEN = "Open Zaprill"`
  - `getAppUrl(): string` — `process.env.NEXT_PUBLIC_APP_URL?.trim() || siteConfig.appUrl`
  - `PricingTier` type `{ id: "free" | "pro"; name: string; tagline: string; features: string[]; ctaLabel: string; priceINR: number | null; priceUSD: number | null; cadence?: string }`
  - `pricingTiers: PricingTier[]` length 2
  - `getPricingTiers(): PricingTier[]`
  - `AppCta` React component props: `{ label?: string; className?: string; size?: "sm" | "default" | "lg"; variant?: "default" | "outline" }`

- [ ] **Step 1: Write failing CTA + pricing tests**

Create `lib/cta.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { APP_CTA_LABEL, APP_CTA_LABEL_OPEN, getAppUrl } from "@/lib/cta";
import { siteConfig } from "@/lib/site";

test("CTA labels are Sign up / Open Zaprill", () => {
  assert.equal(APP_CTA_LABEL, "Sign up");
  assert.equal(APP_CTA_LABEL_OPEN, "Open Zaprill");
});

test("getAppUrl defaults to siteConfig.appUrl", () => {
  const prev = process.env.NEXT_PUBLIC_APP_URL;
  delete process.env.NEXT_PUBLIC_APP_URL;
  assert.equal(getAppUrl(), siteConfig.appUrl);
  process.env.NEXT_PUBLIC_APP_URL = "https://example.com/app";
  assert.equal(getAppUrl(), "https://example.com/app");
  if (prev === undefined) delete process.env.NEXT_PUBLIC_APP_URL;
  else process.env.NEXT_PUBLIC_APP_URL = prev;
});
```

Create `lib/pricing.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { getPricingTiers, pricingTiers } from "@/lib/pricing";

test("exactly two tiers: free and pro", () => {
  assert.equal(pricingTiers.length, 2);
  assert.deepEqual(
    pricingTiers.map((t) => t.id),
    ["free", "pro"],
  );
  assert.equal(getPricingTiers().length, 2);
});

test("free tier markets Home + limited Coach + basic resume", () => {
  const free = pricingTiers.find((t) => t.id === "free");
  assert.ok(free);
  const blob = free!.features.join(" ").toLowerCase();
  assert.match(blob, /home/);
  assert.match(blob, /coach/);
  assert.match(blob, /resume/);
  assert.doesNotMatch(blob, /1 job search per month/);
});

test("pro tier markets unlimited Coach + Resume Architect + ad-free", () => {
  const pro = pricingTiers.find((t) => t.id === "pro");
  assert.ok(pro);
  const blob = pro!.features.join(" ").toLowerCase();
  assert.match(blob, /coach/);
  assert.match(blob, /architect|resume/);
  assert.match(blob, /ad[- ]?free/);
});
```

- [ ] **Step 2: Run to verify fail**

Run: `npx tsx --test lib/cta.test.ts lib/pricing.test.ts`
Expected: FAIL module not found

- [ ] **Step 3: Implement `lib/cta.ts`**

```ts
import { siteConfig } from "@/lib/site";

export const APP_CTA_LABEL = "Sign up";
export const APP_CTA_LABEL_OPEN = "Open Zaprill";

export function getAppUrl(): string {
  const override = process.env.NEXT_PUBLIC_APP_URL?.trim();
  return override && override.length > 0 ? override : siteConfig.appUrl;
}
```

- [ ] **Step 4: Implement `lib/pricing.ts`**

```ts
export type PricingTierId = "free" | "pro";

export type PricingTier = {
  id: PricingTierId;
  name: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  /** VERIFY-BEFORE-SHIP against live app billing */
  priceINR: number | null;
  /** VERIFY-BEFORE-SHIP against live app billing */
  priceUSD: number | null;
  cadence?: string;
};

/**
 * Single source for homepage strip + /pricing.
 * VERIFY-BEFORE-SHIP: confirm Free/Pro limits and amounts against the live Zaprill app
 * before merging. Interim features below match the evolved product story (not legacy job-search quotas).
 */
export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Start with the career board.",
    features: [
      "Account + Home career intelligence board",
      "Limited Skill Coach sessions",
      "Basic Resume Builder",
    ],
    ctaLabel: "Sign up free",
    priceINR: 0,
    priceUSD: 0,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Close gaps and ship ATS-ready resumes.",
    features: [
      "Everything in Free",
      "Unlimited Skill Coach",
      "Resume Architect",
      "Ad-free experience",
    ],
    ctaLabel: "Go Pro",
    // VERIFY-BEFORE-SHIP — placeholder aligned to prior marketing offer; replace with live amounts
    priceINR: 199,
    priceUSD: 3,
    cadence: "billed quarterly (verify)",
  },
];

export function getPricingTiers(): PricingTier[] {
  return pricingTiers;
}
```

- [ ] **Step 5: Implement `components/app-cta.tsx`**

```tsx
import Link from "next/link";
import { APP_CTA_LABEL, getAppUrl } from "@/lib/cta";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppCtaProps = {
  label?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary" | "ghost";
};

export function AppCta({
  label = APP_CTA_LABEL,
  className,
  size = "default",
  variant = "default",
}: AppCtaProps) {
  return (
    <Link href={getAppUrl()} rel="noopener noreferrer" className={cn("inline-flex", className)}>
      <Button size={size} variant={variant} className="w-full rounded-lg">
        {label}
      </Button>
    </Link>
  );
}
```

- [ ] **Step 6: Append tests and run**

```json
"test:unit": "tsx --test lib/smoke.test.ts lib/tokens.test.ts lib/cta.test.ts lib/pricing.test.ts"
```

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add lib/cta.ts lib/cta.test.ts lib/pricing.ts lib/pricing.test.ts components/app-cta.tsx package.json
git commit -m "feat: add app CTA helper and pricing source of truth"
graphify update . || true
```

---


### Task 4: Header / footer Product nav + Sign up

**Files:**
- Create: `lib/product-nav.ts`
- Create: `lib/product-nav.test.ts`
- Modify: `components/site-header.tsx`
- Modify: `components/site-footer.tsx`
- Modify: `components/section-heading.tsx`
- Modify: `package.json`

**Interfaces:**
- Consumes: `APP_CTA_LABEL`, `getAppUrl`, `AppCta`
- Produces:
  - `ProductNavItem = { href: string; label: string; description: string }`
  - `productNavItems: ProductNavItem[]` — Home, Skill Coach, Resume under `/product/*`
  - `primaryNavItems: { href: string; label: string }[]` — Pricing, Blog, About

- [ ] **Step 1: Write failing nav test**

Create `lib/product-nav.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { primaryNavItems, productNavItems } from "@/lib/product-nav";

test("product dropdown covers Home, Skill Coach, Resume", () => {
  assert.deepEqual(
    productNavItems.map((i) => i.href),
    ["/product/home", "/product/skill-coach", "/product/resume"],
  );
  assert.deepEqual(
    productNavItems.map((i) => i.label),
    ["Home", "Skill Coach", "Resume"],
  );
});

test("primary nav is Pricing, Blog, About", () => {
  assert.deepEqual(
    primaryNavItems.map((i) => i.label),
    ["Pricing", "Blog", "About"],
  );
});
```

- [ ] **Step 2: Run to fail**

Run: `npx tsx --test lib/product-nav.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `lib/product-nav.ts`**

```ts
export type ProductNavItem = {
  href: string;
  label: string;
  description: string;
};

export const productNavItems: ProductNavItem[] = [
  {
    href: "/product/home",
    label: "Home",
    description: "Career intelligence board — readiness, gaps, next moves.",
  },
  {
    href: "/product/skill-coach",
    label: "Skill Coach",
    description: "Streaming tutor that closes your skill gaps.",
  },
  {
    href: "/product/resume",
    label: "Resume",
    description: "Builder + Architect for ATS-ready resumes.",
  },
];

export const primaryNavItems = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
```

- [ ] **Step 4: Rewrite `components/site-header.tsx`**

```tsx
"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { AppCta } from "@/components/app-cta";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { primaryNavItems, productNavItems } from "@/lib/product-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--nav-bg)] text-foreground backdrop-blur-[12px]">
      <div className="container mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-foreground/70 hover:text-foreground"
              aria-expanded={productOpen}
              aria-haspopup="true"
            >
              Product
              <ChevronDown className="h-4 w-4" />
            </button>
            {productOpen ? (
              <div className="absolute left-0 top-full z-50 mt-2 w-[320px] rounded-xl border border-border bg-card p-2 shadow-lg">
                {productNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 hover:bg-muted"
                  >
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <AppCta size="sm" />
          <ThemeToggle />
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-3 px-6 py-5">
          {productNavItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium">
              {item.label}
            </Link>
          ))}
          {primaryNavItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium">
              {item.label}
            </Link>
          ))}
          <AppCta className="w-full" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
```

Remove Contact from primary nav (still in footer). Do not link Sign up to `/app` relative path — use `AppCta` / `getAppUrl()`.

- [ ] **Step 5: Update `components/site-footer.tsx` Product group**

At module scope keep Legal + Company. For Product links, render:

```tsx
import { getAppUrl } from "@/lib/cta";
import { productNavItems } from "@/lib/product-nav";

const productLinks = [
  ...productNavItems.map((i) => ({ label: i.label, href: i.href })),
  { label: "Pricing", href: "/pricing" },
  { label: "Sign up", href: getAppUrl() },
];
```

Tagline text: `Career OS for tech professionals.` External Sign up uses `rel="noopener noreferrer"`.

- [ ] **Step 6: Tighten `components/section-heading.tsx`**

Replace giant pill Badge with a small uppercase muted label:

```tsx
{pill ? (
  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
    {pill}
  </p>
) : null}
```

Keep `title` / `description` / `align` props.

- [ ] **Step 7: Append test + run**

```json
"test:unit": "tsx --test lib/smoke.test.ts lib/tokens.test.ts lib/cta.test.ts lib/pricing.test.ts lib/product-nav.test.ts"
```

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add lib/product-nav.ts lib/product-nav.test.ts components/site-header.tsx components/site-footer.tsx components/section-heading.tsx package.json
git commit -m "feat: Product nav dropdown and Sign up CTA in chrome"
graphify update . || true
```

---

### Task 5: Motion helpers + branded page loader

**Files:**
- Create: `lib/motion.ts`
- Create: `lib/motion.test.ts`
- Create: `lib/page-loader.ts`
- Create: `lib/page-loader.test.ts`
- Create: `components/page-loader.tsx`
- Modify: `app/layout.tsx`
- Modify: `package.json`
- Run: `npm install gsap`

**Interfaces:**
- Consumes: tokens (canvas/primary)
- Produces:
  - `LOADER_SESSION_KEY = "zaprill-loader-shown"`
  - `LOADER_MIN_MS = 800`
  - `LOADER_MAX_MS = 1500`
  - `prefersReducedMotion(): boolean`
  - `shouldSkipLoader(sessionStorageLike: { getItem(k: string): string | null }): boolean`
  - `markLoaderShown(sessionStorageLike: { setItem(k: string, v: string): void }): void`
  - `clampLoaderDurationMs(ms: number): number`
  - `PageLoader` client component

- [ ] **Step 1: Install gsap**

```bash
npm install gsap
```

- [ ] **Step 2: Write failing motion + loader tests**

Create `lib/motion.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
  LOADER_SESSION_KEY,
  markLoaderShown,
  prefersReducedMotion,
  shouldSkipLoader,
} from "@/lib/motion";

test("shouldSkipLoader is true when session flag set", () => {
  const store = new Map<string, string>();
  assert.equal(
    shouldSkipLoader({ getItem: (k) => store.get(k) ?? null }),
    false,
  );
  markLoaderShown({ setItem: (k, v) => store.set(k, v) });
  assert.equal(store.get(LOADER_SESSION_KEY), "1");
  assert.equal(
    shouldSkipLoader({ getItem: (k) => store.get(k) ?? null }),
    true,
  );
});

test("prefersReducedMotion reads matchMedia when available", () => {
  const original = globalThis.matchMedia;
  // @ts-expect-error test stub
  globalThis.matchMedia = (query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    addEventListener() {},
    removeEventListener() {},
  });
  assert.equal(prefersReducedMotion(), true);
  globalThis.matchMedia = original;
});
```

Create `lib/page-loader.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { clampLoaderDurationMs, LOADER_MAX_MS, LOADER_MIN_MS } from "@/lib/page-loader";

test("clampLoaderDurationMs stays in 800–1500", () => {
  assert.equal(LOADER_MIN_MS, 800);
  assert.equal(LOADER_MAX_MS, 1500);
  assert.equal(clampLoaderDurationMs(100), 800);
  assert.equal(clampLoaderDurationMs(900), 900);
  assert.equal(clampLoaderDurationMs(5000), 1500);
});
```

- [ ] **Step 3: Run to fail**

Run: `npx tsx --test lib/motion.test.ts lib/page-loader.test.ts`
Expected: FAIL

- [ ] **Step 4: Implement helpers**

`lib/page-loader.ts`:

```ts
export const LOADER_MIN_MS = 800;
export const LOADER_MAX_MS = 1500;

export function clampLoaderDurationMs(ms: number): number {
  if (Number.isNaN(ms)) return LOADER_MIN_MS;
  return Math.min(LOADER_MAX_MS, Math.max(LOADER_MIN_MS, ms));
}
```

`lib/motion.ts`:

```ts
export const LOADER_SESSION_KEY = "zaprill-loader-shown";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldSkipLoader(storage: {
  getItem(key: string): string | null;
}): boolean {
  return storage.getItem(LOADER_SESSION_KEY) === "1";
}

export function markLoaderShown(storage: {
  setItem(key: string, value: string): void;
}): void {
  storage.setItem(LOADER_SESSION_KEY, "1");
}
```

- [ ] **Step 5: Implement `components/page-loader.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  markLoaderShown,
  prefersReducedMotion,
  shouldSkipLoader,
} from "@/lib/motion";
import { clampLoaderDurationMs, LOADER_MAX_MS } from "@/lib/page-loader";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (shouldSkipLoader(window.sessionStorage)) {
      setVisible(false);
      return;
    }

    const reduced = prefersReducedMotion();
    const duration = clampLoaderDurationMs(reduced ? LOADER_MAX_MS : 1100);
    const root = rootRef.current;
    const bar = barRef.current;

    if (reduced) {
      const t = window.setTimeout(() => {
        markLoaderShown(window.sessionStorage);
        setVisible(false);
      }, Math.min(duration, 400));
      return () => window.clearTimeout(t);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        markLoaderShown(window.sessionStorage);
        setVisible(false);
      },
    });

    if (bar) {
      tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: duration / 1000, ease: "power2.out" });
    }
    if (chipRefs.current.length) {
      tl.fromTo(
        chipRefs.current,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.35, ease: "power2.out" },
        "-=0.5",
      );
    }
    if (root) {
      tl.to(root, { opacity: 0, duration: 0.25, ease: "power1.out" });
    }

    const hardStop = window.setTimeout(() => {
      markLoaderShown(window.sessionStorage);
      setVisible(false);
    }, LOADER_MAX_MS + 50);

    return () => {
      tl.kill();
      window.clearTimeout(hardStop);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f6f5f4] text-foreground"
      aria-busy="true"
      aria-label="Loading Zaprill"
    >
      <div className="mb-6 text-lg font-bold tracking-tight">Zaprill</div>
      <div className="mb-4 h-1.5 w-48 overflow-hidden rounded-full bg-border">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 rounded-full bg-primary"
        />
      </div>
      <div className="flex gap-2">
        {["Readiness", "Gaps", "Next moves"].map((label, i) => (
          <span
            key={label}
            ref={(el) => {
              if (el) chipRefs.current[i] = el;
            }}
            className="rounded-md border border-border bg-card px-2 py-1 text-[11px] font-medium text-muted-foreground opacity-0"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
```

Never use a CSS spinner.

- [ ] **Step 6: Wire Inter + PageLoader in `app/layout.tsx`**

Inter is already imported from `next/font/google` but unused. Wire it:

```tsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

On `<html>`:

```tsx
<html lang="en" className={`${satoshi.variable} ${inter.variable}`} suppressHydrationWarning>
```

Import and mount:

```tsx
import { PageLoader } from "@/components/page-loader";
```

Place `<PageLoader />` inside the flex column before `SiteHeader`.

Update default metadata:

```ts
title: {
  default: "Zaprill — Career OS for tech professionals",
  template: "%s — Zaprill",
},
description:
  "Home shows where you stand. Skill Coach closes the gaps. Resume Builder gets you through ATS.",
```

- [ ] **Step 7: Append tests + run**

```json
"test:unit": "tsx --test lib/smoke.test.ts lib/tokens.test.ts lib/cta.test.ts lib/pricing.test.ts lib/product-nav.test.ts lib/motion.test.ts lib/page-loader.test.ts"
```

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add lib/motion.ts lib/motion.test.ts lib/page-loader.ts lib/page-loader.test.ts components/page-loader.tsx app/layout.tsx package.json package-lock.json
git commit -m "feat: branded GSAP page loader and motion helpers"
graphify update . || true
```

---

### Task 6: Product stage fixtures + Home / Coach / Resume demos

**Files:**
- Create: `lib/product-demos.ts`
- Create: `lib/product-demos.test.ts`
- Create: `components/product-stage.tsx`
- Create: `components/demos/home-demo.tsx`
- Create: `components/demos/coach-demo.tsx`
- Create: `components/demos/resume-demo.tsx`
- Modify: `package.json`

**Interfaces:**
- Consumes: Lucide (optional), Tailwind semantic classes
- Produces:
  - `ProductStageMode = "home" | "coach" | "resume"`
  - `productStageTabs: { id: ProductStageMode; label: string }[]`
  - `homeDemoFixture`, `coachDemoFixture`, `resumeDemoFixture`
  - `getDemoFixture(mode: ProductStageMode)`
  - Components: `ProductStage`, `HomeDemo`, `CoachDemo`, `ResumeDemo`

- [ ] **Step 1: Write failing fixture tests**

Create `lib/product-demos.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
  coachDemoFixture,
  getDemoFixture,
  homeDemoFixture,
  productStageTabs,
  resumeDemoFixture,
} from "@/lib/product-demos";

test("stage tabs are Home, Skill Coach, Resume", () => {
  assert.deepEqual(
    productStageTabs.map((t) => t.id),
    ["home", "coach", "resume"],
  );
});

test("home fixture has readiness, gaps, next moves", () => {
  assert.ok(homeDemoFixture.readinessScore >= 0);
  assert.ok(homeDemoFixture.skillGaps.length >= 2);
  assert.ok(homeDemoFixture.nextMoves.length >= 2);
});

test("coach fixture has thread + tool chip and muted Live badge", () => {
  assert.ok(coachDemoFixture.messages.length >= 2);
  assert.ok(coachDemoFixture.toolChip);
  assert.equal(coachDemoFixture.liveBadge, "muted");
});

test("resume fixture has sections + architect strip", () => {
  assert.ok(resumeDemoFixture.sections.length >= 2);
  assert.ok(resumeDemoFixture.architectPrompt.length > 0);
  assert.ok(resumeDemoFixture.architectReply.length > 0);
});

test("getDemoFixture switches modes", () => {
  assert.equal(getDemoFixture("home"), homeDemoFixture);
  assert.equal(getDemoFixture("coach"), coachDemoFixture);
  assert.equal(getDemoFixture("resume"), resumeDemoFixture);
});
```

- [ ] **Step 2: Run to fail**

Run: `npx tsx --test lib/product-demos.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `lib/product-demos.ts`**

```ts
export type ProductStageMode = "home" | "coach" | "resume";

export const productStageTabs: { id: ProductStageMode; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "coach", label: "Skill Coach" },
  { id: "resume", label: "Resume" },
];

export const homeDemoFixture = {
  readinessScore: 72,
  roleLabel: "Senior Frontend Engineer",
  skillGaps: ["System Design", "TypeScript generics", "Observability"],
  nextMoves: [
    "Finish System Design module 2",
    "Rewrite resume bullets with metrics",
    "Practice Coach mock on React Server Components",
  ],
};

export const coachDemoFixture = {
  liveBadge: "muted" as const,
  toolChip: "listCuratedResources",
  messages: [
    { role: "user" as const, text: "Explain how to approach system design interviews." },
    {
      role: "assistant" as const,
      text: "Start from requirements, sketch a high-level diagram, then deepen storage and scaling. I can pull curated resources for your module.",
    },
  ],
};

export const resumeDemoFixture = {
  title: "Priya Shah — Frontend Engineer",
  sections: [
    { heading: "Summary", body: "Frontend engineer focused on performance and design systems." },
    { heading: "Experience", body: "Led migration to RSC; cut LCP 38% across checkout." },
  ],
  architectPrompt: "Tighten my summary for ATS and Staff-level scope.",
  architectReply: "Lead with impact metrics and stack keywords hiring managers scan first.",
};

export function getDemoFixture(mode: ProductStageMode) {
  if (mode === "coach") return coachDemoFixture;
  if (mode === "resume") return resumeDemoFixture;
  return homeDemoFixture;
}
```

- [ ] **Step 4: Implement demos + stage**

`components/demos/home-demo.tsx`:

```tsx
import { homeDemoFixture } from "@/lib/product-demos";

export function HomeDemo() {
  const d = homeDemoFixture;
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Readiness
          </p>
          <p className="text-3xl font-bold text-foreground">{d.readinessScore}</p>
        </div>
        <p className="text-sm text-muted-foreground">{d.roleLabel}</p>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold text-muted-foreground">Skill gaps</p>
        <div className="flex flex-wrap gap-2">
          {d.skillGaps.map((gap) => (
            <span
              key={gap}
              className="rounded-md border border-border bg-card px-2 py-1 text-xs text-foreground"
            >
              {gap}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold text-muted-foreground">Next moves</p>
        <ul className="space-y-1.5 text-sm text-foreground">
          {d.nextMoves.map((move) => (
            <li key={move} className="rounded-lg border border-border bg-card px-3 py-2">
              {move}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

`components/demos/coach-demo.tsx`:

```tsx
import { coachDemoFixture } from "@/lib/product-demos";

export function CoachDemo() {
  const d = coachDemoFixture;
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold">Skill Coach</p>
        <span
          className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
          title="Live is a product capability and may be kill-switched"
        >
          Live
        </span>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden">
        {d.messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "ml-8 rounded-xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                : "mr-8 rounded-xl border border-border bg-card px-3 py-2 text-sm"
            }
          >
            {m.text}
          </div>
        ))}
        <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-2 py-1 text-[11px] text-muted-foreground">
          Tool · {d.toolChip}
        </div>
      </div>
    </div>
  );
}
```

`components/demos/resume-demo.tsx`:

```tsx
import { resumeDemoFixture } from "@/lib/product-demos";

export function ResumeDemo() {
  const d = resumeDemoFixture;
  return (
    <div className="grid h-full grid-cols-1 gap-3 p-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="mb-3 text-sm font-semibold">{d.title}</p>
        {d.sections.map((s) => (
          <div key={s.heading} className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {s.heading}
            </p>
            <p className="text-sm text-foreground">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col rounded-xl border border-border bg-card p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Architect
        </p>
        <p className="mb-2 rounded-lg bg-muted px-2 py-1.5 text-xs text-foreground">{d.architectPrompt}</p>
        <p className="rounded-lg border border-border px-2 py-1.5 text-xs text-muted-foreground">
          {d.architectReply}
        </p>
      </div>
    </div>
  );
}
```

`components/product-stage.tsx`:

```tsx
"use client";

import { useState } from "react";
import { AppCta } from "@/components/app-cta";
import { CoachDemo } from "@/components/demos/coach-demo";
import { HomeDemo } from "@/components/demos/home-demo";
import { ResumeDemo } from "@/components/demos/resume-demo";
import { APP_CTA_LABEL_OPEN } from "@/lib/cta";
import { productStageTabs, type ProductStageMode } from "@/lib/product-demos";
import { cn } from "@/lib/utils";

export function ProductStage({
  initialMode = "home",
  className,
}: {
  initialMode?: ProductStageMode;
  className?: string;
}) {
  const [mode, setMode] = useState<ProductStageMode>(initialMode);

  return (
    <div className={cn("rounded-xl border border-border bg-card shadow-sm", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1 rounded-lg bg-muted p-1">
          {productStageTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setMode(tab.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                mode === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AppCta label={APP_CTA_LABEL_OPEN} size="sm" />
      </div>
      <div className="min-h-[320px]">
        {mode === "home" ? <HomeDemo /> : null}
        {mode === "coach" ? <CoachDemo /> : null}
        {mode === "resume" ? <ResumeDemo /> : null}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Append test + run**

Append `lib/product-demos.test.ts` to `test:unit`.

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add lib/product-demos.ts lib/product-demos.test.ts components/product-stage.tsx components/demos package.json
git commit -m "feat: product stage fixtures and Home/Coach/Resume demos"
graphify update . || true
```

---


### Task 7: Homepage chapters + GSAP pin

**Files:**
- Create: `lib/home-copy.ts`
- Create: `lib/home-copy.test.ts`
- Create: `components/home/hero.tsx`
- Create: `components/home/problem-proof.tsx`
- Create: `components/home/how-it-works.tsx`
- Create: `components/home/pricing-strip.tsx`
- Create: `components/home/home-faq.tsx`
- Create: `components/home/home-chapters.tsx`
- Modify: `app/page.tsx`
- Modify: `package.json`

**Interfaces:**
- Consumes: `ProductStage`, `AppCta`, `getPricingTiers`, `SectionHeading`, GSAP ScrollTrigger
- Produces:
  - `homeHeroCopy`, `problemCards`, `howSteps`, `homeFaqs` from `lib/home-copy.ts`
  - `HomeChapters` client wrapper that registers ScrollTrigger pin on `[data-product-stage]`

- [ ] **Step 1: Write failing home-copy test**

Create `lib/home-copy.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { homeFaqs, homeHeroCopy, howSteps, problemCards } from "@/lib/home-copy";

test("hero copy positions career OS pillars", () => {
  assert.match(homeHeroCopy.headline.toLowerCase(), /career|stand|gaps|ats|coach|home|resume/);
  assert.ok(homeHeroCopy.subhead.length > 20);
});

test("problem cards are three tight themes", () => {
  assert.equal(problemCards.length, 3);
  const blob = problemCards.map((c) => c.title + c.body).join(" ").toLowerCase();
  assert.match(blob, /skill/);
  assert.match(blob, /ats|resume/);
  assert.match(blob, /readiness|market|signal/);
});

test("how it works has three steps", () => {
  assert.equal(howSteps.length, 3);
});

test("faq answers avoid legacy one-job-search claim", () => {
  const blob = homeFaqs.map((f) => f.q + f.a).join(" ").toLowerCase();
  assert.doesNotMatch(blob, /1 job search per month/);
});
```

- [ ] **Step 2: Run to fail**

Run: `npx tsx --test lib/home-copy.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `lib/home-copy.ts`**

```ts
export const homeHeroCopy = {
  eyebrow: "Career OS",
  headline: "See where you stand. Close the gaps. Clear ATS.",
  subhead:
    "Zaprill is Home career intelligence, Skill Coach, and Resume Builder in one warm-paper workspace for tech professionals.",
};

export const problemCards = [
  {
    title: "Skill gaps stay fuzzy",
    body: "Home surfaces the exact skills between you and the role — not a generic course catalog.",
  },
  {
    title: "Resumes die in ATS",
    body: "Resume Builder and Architect rewrite for the filters hiring teams actually run.",
  },
  {
    title: "Market signal is noisy",
    body: "Readiness and next moves keep you focused on what moves the offer, not the feed.",
  },
];

export const howSteps = [
  {
    step: "01",
    title: "Open Home",
    body: "See readiness, gaps, and next moves on one board.",
  },
  {
    step: "02",
    title: "Train with Skill Coach",
    body: "A streaming tutor teaches the gaps with curated resources.",
  },
  {
    step: "03",
    title: "Ship the resume",
    body: "Builder + Architect get you through ATS with proof-ready bullets.",
  },
];

export const homeFaqs = [
  {
    q: "What is Zaprill?",
    a: "A career OS for tech professionals: Home shows where you stand, Skill Coach closes gaps, Resume Builder gets you through ATS.",
  },
  {
    q: "Is Skill Coach Live always on?",
    a: "Live is a product capability and may be disabled by a server kill switch. Chat tutoring remains available.",
  },
  {
    q: "Do I need to upload a resume to start?",
    a: "Sign up and open the live app. Home and Coach help even before a polished resume; Resume Builder is there when you are ready.",
  },
  {
    q: "How does pricing work?",
    a: "Free includes the Home board with limited Coach and basic resume tools. Pro unlocks unlimited Coach, Resume Architect, and an ad-free experience.",
  },
];
```

- [ ] **Step 4: Build chapter components**

`components/home/hero.tsx`:

```tsx
import type { ReactNode } from "react";
import { AppCta } from "@/components/app-cta";
import { APP_CTA_LABEL_OPEN } from "@/lib/cta";
import { homeHeroCopy } from "@/lib/home-copy";

export function HomeHero({ canvas }: { canvas?: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">{canvas}</div>
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {homeHeroCopy.eyebrow}
        </p>
        <h1 className="max-w-3xl text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {homeHeroCopy.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          {homeHeroCopy.subhead}
        </p>
        <div className="mt-8">
          <AppCta label={APP_CTA_LABEL_OPEN} size="lg" />
        </div>
      </div>
    </section>
  );
}
```

`components/home/problem-proof.tsx`:

```tsx
import { SectionHeading } from "@/components/section-heading";
import { problemCards } from "@/lib/home-copy";

export function ProblemProof() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-[1200px] space-y-10 px-6">
        <SectionHeading
          pill="Why Zaprill"
          title="Signal over noise"
          description="Tight proof points — not long essays."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-2 text-base font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

`components/home/how-it-works.tsx`:

```tsx
import { SectionHeading } from "@/components/section-heading";
import { howSteps } from "@/lib/home-copy";

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[var(--home-surface-2)]">
      <div className="container mx-auto max-w-[1200px] space-y-10 px-6">
        <SectionHeading pill="How it works" title="Three short steps" />
        <div className="grid gap-4 md:grid-cols-3">
          {howSteps.map((step) => (
            <div key={step.step} className="rounded-xl border border-border bg-card p-5">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {step.step}
              </p>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

`components/home/pricing-strip.tsx`:

```tsx
import { AppCta } from "@/components/app-cta";
import { SectionHeading } from "@/components/section-heading";
import { getPricingTiers } from "@/lib/pricing";

export function PricingStrip() {
  const tiers = getPricingTiers();
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-[1200px] space-y-10 px-6">
        <SectionHeading pill="Pricing" title="Free to start. Pro when you are ready." />
        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <div key={tier.id} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <AppCta label={tier.ctaLabel} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

`components/home/home-faq.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";
import { SectionHeading } from "@/components/section-heading";
import { homeFaqs } from "@/lib/home-copy";

const FaqAccordion = dynamic(() =>
  import("@/components/faq-accordion").then((m) => ({ default: m.FaqAccordion })),
);

export function HomeFaq() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-[800px] space-y-8 px-6">
        <SectionHeading pill="FAQ" title="Straight answers" />
        <FaqAccordion faqs={homeFaqs} />
      </div>
    </section>
  );
}
```

`components/home/home-chapters.tsx`:

```tsx
"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeHero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingStrip } from "@/components/home/pricing-strip";
import { ProblemProof } from "@/components/home/problem-proof";
import { ProductStage } from "@/components/product-stage";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function HomeChapters({ heroCanvas }: { heroCanvas?: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = stageRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top+=72",
        end: "+=120%",
        pin: true,
        pinSpacing: true,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <HomeHero canvas={heroCanvas} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div ref={stageRef} data-product-stage>
            <ProductStage />
          </div>
        </div>
      </section>
      <ProblemProof />
      <HowItWorks />
      <PricingStrip />
      <HomeFaq />
    </>
  );
}
```

- [ ] **Step 5: Replace `app/page.tsx`**

```tsx
import type { Metadata } from "next";
import { HomeChapters } from "@/components/home/home-chapters";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zaprill — Career OS for tech professionals",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaprill — Career OS for tech professionals",
    description: siteConfig.description,
    images: ["/og"],
  },
};

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <HomeChapters />
    </main>
  );
}
```

Remove the old bento / `py-32` / `/app` CTA blocks entirely from this file.

- [ ] **Step 6: Append test + run**

Append `lib/home-copy.test.ts`. Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add lib/home-copy.ts lib/home-copy.test.ts components/home app/page.tsx package.json
git commit -m "feat: product theater homepage chapters with GSAP pin"
graphify update . || true
```

---

### Task 8: Hero Three.js accent (lazy)

**Files:**
- Create: `components/home/hero-canvas.tsx`
- Create: `components/home/hero-scene.tsx`
- Modify: `components/home/home-chapters.tsx`
- Modify: `app/page.tsx` or chapters to pass canvas
- Modify: `package.json`
- Run: `npm install three @react-three/fiber @react-three/drei` and `npm install -D @types/three`

**Interfaces:**
- Consumes: R3F, `prefersReducedMotion`
- Produces: `HeroCanvas` — soft abstract node graph; returns `null` when reduced-motion; pauses when offscreen via IntersectionObserver

- [ ] **Step 1: Install deps**

```bash
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

- [ ] **Step 2: Implement lazy canvas**

`components/home/hero-canvas.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const HeroScene = dynamic(
  () => import("@/components/home/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

export function HeroCanvas() {
  const [active, setActive] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setAllowed(true);
  }, []);

  useEffect(() => {
    if (!allowed) return;
    const node = document.getElementById("hero-canvas-root");
    if (!node || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setActive(Boolean(entry?.isIntersecting)),
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [allowed]);

  if (!allowed) return null;

  return (
    <div id="hero-canvas-root" className="h-full w-full opacity-70">
      {active ? <HeroScene /> : null}
    </div>
  );
}
```

`components/home/hero-scene.tsx`:

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Nodes() {
  const points: [number, number, number][] = [
    [-1.2, 0.2, 0],
    [0, 0.8, 0],
    [1.1, 0.1, 0],
    [0.2, -0.7, 0],
    [-0.6, -0.5, 0],
  ];
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group>
        {points.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#0075de" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 2]} intensity={0.6} />
      <Nodes />
    </Canvas>
  );
}
```

Keep poly count tiny. No textures. No postprocessing. This is an accent, not a WebGL playground.

- [ ] **Step 3: Pass into chapters**

Update `HomeChapters` usage in `app/page.tsx`:

```tsx
import { HeroCanvas } from "@/components/home/hero-canvas";
import { HomeChapters } from "@/components/home/home-chapters";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <HomeChapters heroCanvas={<HeroCanvas />} />
    </main>
  );
}
```

- [ ] **Step 4: Smoke build**

Run: `npx tsc --noEmit`
Expected: no errors in new files

Run: `npm run test:unit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add components/home/hero-canvas.tsx components/home/hero-scene.tsx components/home/home-chapters.tsx app/page.tsx package.json package-lock.json
git commit -m "feat: lazy Three.js hero accent with reduced-motion off path"
graphify update . || true
```

---

### Task 9: Dedicated `/product/*` pages

**Files:**
- Create: `lib/product-pages.ts`
- Create: `lib/product-pages.test.ts`
- Create: `components/product/product-page.tsx`
- Create: `app/product/home/page.tsx`
- Create: `app/product/skill-coach/page.tsx`
- Create: `app/product/resume/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: `ProductStage`, `AppCta`, `SectionHeading`, `ProductStageMode`
- Produces:
  - `ProductPageId = "home" | "skill-coach" | "resume"`
  - `getProductPage(id)` → `{ title, problem, benefits: [string, string, string], stageMode, path }`
  - Shared `ProductPageView`
  - Note: page id `skill-coach` maps to stage mode `coach`

- [ ] **Step 1: Write failing product-pages test**

Create `lib/product-pages.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { getProductPage, productPages } from "@/lib/product-pages";

test("three product pages exist", () => {
  assert.equal(productPages.length, 3);
  assert.deepEqual(
    productPages.map((p) => p.path),
    ["/product/home", "/product/skill-coach", "/product/resume"],
  );
});

test("each page has problem, three benefits, stage mode", () => {
  for (const page of productPages) {
    assert.ok(page.problem.length > 10);
    assert.equal(page.benefits.length, 3);
    assert.ok(["home", "coach", "resume"].includes(page.stageMode));
  }
  assert.equal(getProductPage("skill-coach")?.stageMode, "coach");
});
```

- [ ] **Step 2: Run to fail**

Run: `npx tsx --test lib/product-pages.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `lib/product-pages.ts`**

```ts
import type { ProductStageMode } from "@/lib/product-demos";

export type ProductPageId = "home" | "skill-coach" | "resume";

export type ProductPage = {
  id: ProductPageId;
  path: string;
  title: string;
  eyebrow: string;
  problem: string;
  benefits: [string, string, string];
  stageMode: ProductStageMode;
};

export const productPages: ProductPage[] = [
  {
    id: "home",
    path: "/product/home",
    title: "Home — career intelligence",
    eyebrow: "Home",
    problem:
      "Job search noise hides the real gaps between you and the role you want.",
    benefits: [
      "Readiness score grounded in your profile",
      "Skill-gap chips you can act on",
      "Next moves instead of an endless feed",
    ],
    stageMode: "home",
  },
  {
    id: "skill-coach",
    path: "/product/skill-coach",
    title: "Skill Coach — close the gaps",
    eyebrow: "Skill Coach",
    problem:
      "Knowing the gap is not enough — you need a tutor that teaches with your stack in context.",
    benefits: [
      "Streaming tutor with visible tool steps",
      "Curated resources only — no random links",
      "Live voice when enabled in the product",
    ],
    stageMode: "coach",
  },
  {
    id: "resume",
    path: "/product/resume",
    title: "Resume — Builder + Architect",
    eyebrow: "Resume",
    problem:
      "Strong careers still lose to ATS filters and vague bullets.",
    benefits: [
      "Editor built for tech resumes",
      "Architect chat that rewrites with proof",
      "Keywords and structure hiring systems expect",
    ],
    stageMode: "resume",
  },
];

export function getProductPage(id: ProductPageId): ProductPage | undefined {
  return productPages.find((p) => p.id === id);
}
```

- [ ] **Step 4: Shared view**

`components/product/product-page.tsx`:

```tsx
import { AppCta } from "@/components/app-cta";
import { ProductStage } from "@/components/product-stage";
import { SectionHeading } from "@/components/section-heading";
import { APP_CTA_LABEL } from "@/lib/cta";
import type { ProductPage } from "@/lib/product-pages";

export function ProductPageView({ page }: { page: ProductPage }) {
  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <div className="container mx-auto max-w-[1200px] space-y-16 px-6">
        <SectionHeading
          align="left"
          pill={page.eyebrow}
          title={page.title}
          description={page.problem}
        />
        <ProductStage initialMode={page.stageMode} />
        <div className="grid gap-4 md:grid-cols-3">
          {page.benefits.map((benefit) => (
            <div key={benefit} className="rounded-xl border border-border bg-card p-5 text-sm">
              {benefit}
            </div>
          ))}
        </div>
        <AppCta label={APP_CTA_LABEL} size="lg" />
      </div>
    </main>
  );
}
```

- [ ] **Step 5: Route files**

`app/product/home/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/product-page";
import { getProductPage } from "@/lib/product-pages";
import { siteConfig } from "@/lib/site";

const page = getProductPage("home");

export const metadata: Metadata = {
  title: page?.title ?? "Home",
  description: page?.problem,
  alternates: { canonical: "/product/home" },
  openGraph: {
    title: `${page?.title} — Zaprill`,
    description: page?.problem,
    url: `${siteConfig.url}/product/home`,
    images: ["/og"],
  },
};

export default function ProductHomePage() {
  const data = getProductPage("home");
  if (!data) notFound();
  return <ProductPageView page={data} />;
}
```

Mirror for `skill-coach` and `resume` with their ids/paths.

- [ ] **Step 6: Update sitemap**

Import `productPages` and add:

```ts
...productPages.map((p) => ({
  url: `${siteConfig.url}${p.path}`,
  lastModified: now,
  changeFrequency: "weekly" as const,
  priority: 0.85,
})),
```

- [ ] **Step 7: Append test + run + commit**

Append `lib/product-pages.test.ts`. Run `npm run test:unit`.

```bash
git add lib/product-pages.ts lib/product-pages.test.ts components/product app/product app/sitemap.ts package.json
git commit -m "feat: dedicated Home, Skill Coach, and Resume product pages"
graphify update . || true
```

---

### Task 10: Pricing + About rewrite

**Files:**
- Create: `lib/about-copy.ts`
- Create: `lib/about-copy.test.ts`
- Modify: `app/pricing/page.tsx`
- Modify: `app/pricing-md/route.ts`
- Modify: `app/about/page.tsx`
- Modify: `package.json`

**Interfaces:**
- Consumes: `getPricingTiers`, `AppCta`, `getAppUrl`
- Produces: `aboutCopy`; pricing page with two tiers (Free/Pro); India INR vs USD detection kept from current page

- [ ] **Step 1: About copy test**

Create `lib/about-copy.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { aboutCopy } from "@/lib/about-copy";

test("about story is short and names pillars", () => {
  assert.ok(aboutCopy.paragraphs.length <= 3);
  const blob = aboutCopy.paragraphs.join(" ").toLowerCase();
  assert.match(blob, /home|coach|resume|career/);
});
```

- [ ] **Step 2: Implement `lib/about-copy.ts`**

```ts
export const aboutCopy = {
  eyebrow: "About",
  title: "Built for tech careers that need signal.",
  paragraphs: [
    "Zaprill started because salary guesswork and silent ATS rejections waste years of strong work.",
    "We built a career OS: Home to see where you stand, Skill Coach to close gaps, and Resume tools to clear the filters.",
    "Based in Mumbai. Built for tech professionals who want direct, high-signal guidance.",
  ],
};
```

- [ ] **Step 3: Rewrite pricing page**

Replace inline `freeFeatures` / `quarterlyPlan` / `yearlyPlan` with `getPricingTiers()`. Keep India detection (`x-vercel-ip-country` / accept-language). Render **two** cards (Free + Pro). Show amounts from `priceINR` / `priceUSD`. Drop "1 job search per month". Density: `py-16 md:py-24`, `max-w-[1200px]`, hairline white cards. Each card ends with `AppCta`.

Full page body (keep existing `metadata` export; replace the default export):

```tsx
import { AppCta } from "@/components/app-cta";
import { SectionHeading } from "@/components/section-heading";
import { getPricingTiers } from "@/lib/pricing";
import { headers } from "next/headers";

export default async function PricingPage() {
  const requestHeaders = await headers();
  const countryCode = requestHeaders.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase() || "";
  const inferredIndiaFromLanguage = /\b(en-in|hi-in|bn-in|ta-in|te-in|mr-in)\b/.test(acceptLanguage);
  const isIndia = countryCode ? countryCode === "IN" : inferredIndiaFromLanguage;
  const currencySymbol = isIndia ? "₹" : "$";
  const tiers = getPricingTiers();

  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <div className="container mx-auto max-w-[1200px] space-y-10 px-6">
        <SectionHeading
          pill="Pricing"
          title="Free to start. Pro when you are ready."
          description="VERIFY-BEFORE-SHIP: amounts and limits must match live app billing before merge."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => {
            const amount = isIndia ? tier.priceINR : tier.priceUSD;
            const priceLabel =
              amount === null || amount === 0 ? "Free" : `${currencySymbol}${amount}`;
            return (
              <div key={tier.id} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-xl font-semibold">{tier.name}</h2>
                  <p className="text-2xl font-bold">{priceLabel}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                {tier.cadence ? (
                  <p className="mt-1 text-xs text-muted-foreground">{tier.cadence}</p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <AppCta label={tier.ctaLabel} className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Update `app/pricing-md/route.ts`**

Generate markdown from `getPricingTiers()` so `/pricing.md` stays truthful to Free/Pro.

- [ ] **Step 5: Rewrite about page**

One screen: eyebrow + title + paragraphs from `aboutCopy` + `AppCta`. No `py-32`. No Float/glass. Optional small founder image from `public/founder` if already present.

- [ ] **Step 6: Tests + commit**

Append `lib/about-copy.test.ts`. Run `npm run test:unit`.

```bash
git add lib/about-copy.ts lib/about-copy.test.ts app/pricing/page.tsx app/pricing-md/route.ts app/about/page.tsx package.json
git commit -m "feat: rewrite pricing and about for Free/Pro career OS"
graphify update . || true
```

---


### Task 11: Blog chrome refresh

**Files:**
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `components/blog-share-buttons.tsx` only if purple/hardcoded colors remain
- Do **not** modify `data/blog-articles.json` article bodies

**Interfaces:**
- Consumes: existing `blogArticles`, new tokens via Tailwind semantic classes
- Produces: denser list + article template; same slugs/content

- [ ] **Step 1: Audit purple / py-32 in blog routes**

Run: `rg -n "py-32|purple|oklch\(0\.61|backdrop-blur-xl|bg-card/50" app/blog components/blog-share-buttons.tsx`
Expected: list of hits to fix (or none)

- [ ] **Step 2: Restyle list + article shells**

Apply consistently:

- Container `max-w-[1200px]`, section `py-16 md:py-24`
- Cards: `bg-card border border-border rounded-xl` (no glass)
- Titles: Satoshi via heading classes; body inherits Inter
- Keep `NewsletterForm` and share buttons; ensure buttons use `primary` token
- Do not rewrite `sections[].paragraphs` in JSON

Example list card class swap:

```tsx
<Card className="overflow-hidden rounded-xl border border-border bg-card shadow-none">
  {/* existing Image + title + excerpt; tighten paddings to p-5 / p-6 */}
</Card>
```

Example article shell:

```tsx
<article className="container mx-auto max-w-[800px] px-6 py-16 md:py-24">
  {/* existing heading + sections; remove py-32 wrappers */}
</article>
```

- [ ] **Step 3: Build sanity**

Run: `npx tsc --noEmit`
Expected: PASS for blog routes

Run: `npm run test:unit`
Expected: PASS (no new test file required for chrome-only)

- [ ] **Step 4: Commit**

```bash
git add app/blog components/blog-share-buttons.tsx
git commit -m "style: refresh blog chrome to warm-paper density"
graphify update . || true
```

---

### Task 12: Legal restyle + `/demo` → home

**Files:**
- Modify: `app/privacy/page.tsx`
- Modify: `app/terms/page.tsx`
- Modify: `app/cookies/page.tsx`
- Modify: `app/disclaimer/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/not-found.tsx`
- Modify: `app/demo/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `next.config.mjs` (optional redirect)

**Interfaces:**
- Consumes: tokens, `AppCta` where a CTA exists
- Produces: legal/contact pages on warm paper; `/demo` soft-redirects to `/`

- [ ] **Step 1: Redirect demo**

Replace `app/demo/page.tsx` with:

```tsx
import { redirect } from "next/navigation";

export default function DemoPage() {
  redirect("/");
}
```

Add to `next.config.mjs` `redirects()` array (alongside existing `/app` redirect):

```js
{
  source: "/demo",
  destination: "/",
  permanent: false,
},
```

- [ ] **Step 2: Restyle legal + contact + not-found**

For each of privacy, terms, cookies, disclaimer, contact, not-found:

- Replace `py-32` with `py-16 md:py-24`
- Kill purple blurs (e.g. `bg-purple-500/10` in `not-found.tsx`)
- Use `bg-background`, `border-border`, `text-muted-foreground`
- Do not change legal substance text except where it still claims obsolete product features that contradict Free/Pro — prefer a short note pointing to `/pricing`

`not-found.tsx` CTA should use `AppCta` or `Link` to `/` plus optional `AppCta` to the app — never a purple glow orb.

- [ ] **Step 3: Sitemap**

Remove the `/demo` entry (redirected). Ensure `/product/home`, `/product/skill-coach`, `/product/resume` are present from Task 9.

- [ ] **Step 4: Commit**

```bash
git add app/privacy app/terms app/cookies app/disclaimer app/contact app/not-found.tsx app/demo app/sitemap.ts next.config.mjs
git commit -m "style: restyle legal pages and redirect /demo to home"
graphify update . || true
```

---

### Task 13: Env example, docs plan copy, burn-in checklist

**Files:**
- Create: `.env.example`
- Create: `docs/superpowers/plans/2026-10-28-marketing-site-redesign-plan.md` (copy of this plan)
- Modify: `checklist.md`
- Modify: `README.md` (brief Product theater pointer)

**Interfaces:**
- Consumes: none
- Produces: operator checklist + env docs + in-repo plan

- [ ] **Step 1: `.env.example`**

```bash
# Optional override for Sign up / Open Zaprill CTAs (defaults to https://app.zaprill.com)
# NEXT_PUBLIC_APP_URL=https://app.zaprill.com
```

- [ ] **Step 2: Append burn-in to `checklist.md`**

```md
## Product theater burn-in (2026-10-28)

- [ ] Hard refresh `/` — branded loader plays once (no spinner), then hero
- [ ] Second client navigation — loader skipped (session flag)
- [ ] `prefers-reduced-motion: reduce` — static loader + no Three.js + no GSAP pin jank
- [ ] Product stage tabs: Home | Skill Coach | Resume switch demos; Open Zaprill hits live app
- [ ] `/product/home`, `/product/skill-coach`, `/product/resume` render problem → demo → 3 benefits → CTA
- [ ] `/pricing` Free/Pro features match evolved app — **VERIFY-BEFORE-SHIP** amounts/limits vs live billing
- [ ] `/about` one-screen story + CTA; no py-32 voids
- [ ] `/blog` and one article — chrome only changed; bodies intact
- [ ] `/demo` redirects to `/`
- [ ] Header Product dropdown + Sign up; no purple theme flash
- [ ] Lighthouse / quick perf: Three.js not on critical path when offscreen
- [ ] `npm run test:unit` green; `npm run build` green
```

- [ ] **Step 3: Land plan in repo**

```bash
mkdir -p docs/superpowers/plans
cp /path/to/this/plan.md docs/superpowers/plans/2026-10-28-marketing-site-redesign-plan.md
```

(Use the plan file from the PR branch working tree.)

- [ ] **Step 4: Touch README**

Add a short section:

```md
## Product theater redesign

Marketing site targets warm-paper Product theater (Home / Skill Coach / Resume).
See `docs/superpowers/specs/2026-10-28-marketing-site-redesign-design.md` and
`docs/superpowers/plans/2026-10-28-marketing-site-redesign-plan.md`.
CTAs go to `NEXT_PUBLIC_APP_URL` or `https://app.zaprill.com`.
```

- [ ] **Step 5: Final test + commit**

```bash
npm run test:unit
npm run build
git add .env.example checklist.md README.md docs/superpowers/plans/2026-10-28-marketing-site-redesign-plan.md
git commit -m "docs: env example, plan, and product theater burn-in checklist"
graphify update . || true
```

- [ ] **Step 6: Open implementation PR (do not merge)**

```bash
git push -u origin HEAD
gh pr create --title "feat: marketing Product theater redesign" --body "$(cat <<'EOF'
## Summary
Implements the Product theater redesign per `docs/superpowers/specs/2026-10-28-marketing-site-redesign-design.md` (PR #22) and this plan.

## VERIFY-BEFORE-SHIP
- [ ] Free/Pro limits and INR/USD vs live app billing
- [ ] Burn-in checklist in checklist.md

## Test plan
- [ ] `npm run test:unit`
- [ ] `npm run build`
- [ ] Manual burn-in on preview

Do not merge without Sahil.
EOF
)"
```

---

## Spec coverage

| Spec requirement | Task(s) |
| --- | --- |
| Full rewrite: home, product pages, pricing, about, blog chrome | 7, 9, 10, 11 |
| Warm paper `#f6f5f4` / primary `#0075de`; kill purple | 2, 12 |
| Density max-width + `py-16`–`py-24` + hero clamp | 2, 7, 9–12 |
| Product theater demos Home / Coach / Resume | 6, 7 |
| Dedicated `/product/*` pages | 9 |
| Sign up / Open Zaprill → app URL (+ env override) | 3, 4, 7 |
| GSAP chapters + pinned stage | 5, 7 |
| One Three.js hero accent, lazy, reduced-motion | 8 |
| Branded loader 0.8–1.5s, not spinner | 5 |
| Honest pricing via `lib/pricing.ts` | 3, 10 |
| Blog chrome only (no article body rewrite) | 11 |
| Legal restyle + `/demo` → home | 12 |
| No emoji / Lucide / no stock / no glass soup | Global + 2, 4, 7 |
| Out of scope respected (no app embed, no Gemini Live marketing, no zaprill-app edits) | Global |
| node:test + tsx `--test` | 1 (+ every task append) |
| Docs / env / burn-in | 13 |
| Inter body + Satoshi headings | 2, 5 |
| PRODUCT.md / DESIGN.md supersede purple strategy | 2 |

## Self-review notes

- **Spec coverage:** Every IA route, visual token, loader, GSAP/Three, demos, pricing honesty, blog-chrome-only, and non-goal maps to a task in the table above.
- **Placeholders:** None. Pricing amounts are explicitly marked **VERIFY-BEFORE-SHIP** with interim Free/Pro feature copy from the approved brief — not open-ended.
- **Type consistency:** `ProductStageMode` (`home` | `coach` | `resume`) is shared by fixtures, stage, and product pages (`skill-coach` page id maps to stage mode `coach`). `getAppUrl` / `AppCta` / `APP_CTA_LABEL*` are the only CTA entry points. Loader helpers live in `lib/motion.ts` + `lib/page-loader.ts` with matching tests. `getPricingTiers()` feeds homepage strip, `/pricing`, and `/pricing.md`.
