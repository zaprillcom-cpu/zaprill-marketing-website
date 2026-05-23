# Graph Report - .  (2026-05-23)

## Corpus Check
- 97 files · ~209,741 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 277 nodes · 527 edges · 27 communities (20 shown, 7 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 1% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Primitives (Input, Select, Card)|UI Primitives (Input, Select, Card)]]
- [[_COMMUNITY_Page Components & Layouts|Page Components & Layouts]]
- [[_COMMUNITY_Docs, Design & Product Strategy|Docs, Design & Product Strategy]]
- [[_COMMUNITY_Blog & Content Infrastructure|Blog & Content Infrastructure]]
- [[_COMMUNITY_Root Layout & Site Shell|Root Layout & Site Shell]]
- [[_COMMUNITY_Blog Career Content Topics|Blog Career Content Topics]]
- [[_COMMUNITY_Dropdown Menu Components|Dropdown Menu Components]]
- [[_COMMUNITY_Navigation & Core UI|Navigation & Core UI]]
- [[_COMMUNITY_Blog Header Images (Compensation)|Blog Header Images (Compensation)]]
- [[_COMMUNITY_Add Articles Script|Add Articles Script]]
- [[_COMMUNITY_Brand Assets & Logos|Brand Assets & Logos]]
- [[_COMMUNITY_Cookies Policy Page|Cookies Policy Page]]
- [[_COMMUNITY_Disclaimer Page|Disclaimer Page]]
- [[_COMMUNITY_OG Image Route|OG Image Route]]
- [[_COMMUNITY_Graphify  AGENTS.md Config|Graphify / AGENTS.md Config]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_IndexNow Submission Script|IndexNow Submission Script]]
- [[_COMMUNITY_Tailwind Configuration|Tailwind Configuration]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 61 edges
2. `siteConfig` - 16 edges
3. `Button()` - 13 edges
4. `Zaprill Deployment & AdSense Checklist` - 11 edges
5. `Badge()` - 9 edges
6. `Card()` - 8 edges
7. `Reveal()` - 7 edges
8. `Zaprill Brand` - 7 edges
9. `Tech Salary Negotiation India 2026 - Blog Header` - 7 edges
10. `SectionHeading()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Career Intelligence Platform` --semantically_similar_to--> `Career Intelligence / Tech Salary Niche`  [INFERRED] [semantically similar]
  PRODUCT.md → checklist.md
- `DropdownMenuLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuSubTrigger()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuSubContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts

## Hyperedges (group relationships)
- **Zaprill Design System** — design_committed_color_strategy, design_satoshi_typography, design_bento_glassmorphism_layout, design_ui_components_trio [INFERRED 0.80]
- **Zaprill Product Identity** — product_zaprill_brand, product_career_intelligence_platform, product_target_users, product_user_pain_points, product_brand_tone, product_anti_references [INFERRED 0.85]
- **Critical Deployment Requirements** — checklist_adsense_integration, checklist_https_requirement, checklist_privacy_policy_page, checklist_about_page, checklist_contact_page, checklist_cookie_consent_integration, checklist_mobile_responsiveness [INFERRED 0.80]
- **Zaprill Logo Variant Family** — logo_primary, zaprill_logo_secondary, zaprill_logo_circle [EXTRACTED 1.00]
- **Zaprill Brand Identity System** — logo_primary, zaprill_logo_secondary, zaprill_logo_circle, zaprill_brand [INFERRED 0.85]
- **Salary & Compensation Blog Collection** — ask-for-a-raise-market-data_header, ask-for-salary-review-off-cycle-tech_header, data-science-vs-data-engineering-salary_header, equity-vs-base-pay-startups_header, fresher-salary-expectations-india-2026_header, hidden-cost-signing-bonuses_header, how-to-answer-expected-salary_header, how-to-know-if-youre-being-underpaid_header [EXTRACTED 1.00]
- **ATS & Resume Optimization Blog Pair** — ats-formatting-rules-ignore_header, ats-keywords-resume-optimization_header [EXTRACTED 1.00]
- **Salary Negotiation Core Topics** — ask-for-a-raise-market-data_header, how-to-answer-expected-salary_header, how-to-know-if-youre-being-underpaid_header [INFERRED 0.75]
- **Salary & Compensation Blog Series** — tech_salary_negotiation_india_2026_blog, salary_india_city_comparison_blog, remote_vs_in_office_compensation_trends_blog, product_manager_vs_software_engineer_salary_blog, soft_skills_premium_pay_senior_engineering_blog, five_skills_indian_tech_employers_premium_2025_blog, tech_layoffs_salary_impact_blog, how_to_negotiate_job_offer_blog, negotiating_tech_offers_buyers_market_2026_blog [INFERRED 0.85]
- **Resume & Job Application Optimization Series** — how_to_write_resume_no_experience_blog, resume_red_flags_rejection_blog, why_resume_rejected_before_human_reads_blog, optimize_linkedin_profile_for_recruiters_blog [INFERRED 0.90]
- **Career Navigation in Indian Tech Market** — how_to_switch_careers_into_tech_india_blog, navigating_career_progression_ic_vs_em_india_blog, product_manager_vs_software_engineer_salary_blog, soft_skills_premium_pay_senior_engineering_blog, five_skills_indian_tech_employers_premium_2025_blog [INFERRED 0.75]

## Communities (27 total, 7 thin omitted)

### Community 0 - "UI Primitives (Input, Select, Card)"
Cohesion: 0.1
Nodes (29): AdSlot(), AdSlotProps, Window, FormState, initialState, Logo(), NewsletterForm(), NewsletterFormProps (+21 more)

### Community 1 - "Page Components & Layouts"
Cohesion: 0.09
Nodes (22): metadata, values, FaqAccordion, faqs, metadata, pricing, processSteps, valueProps (+14 more)

### Community 2 - "Docs, Design & Product Strategy"
Cohesion: 0.08
Nodes (30): Google AdSense Publisher ID, About Us Page, Google AdSense Integration, Career Intelligence / Tech Salary Niche, Contact Us Page, Content Standards, Cookie Consent Integration, Google Search Console Setup (+22 more)

### Community 3 - "Blog & Content Infrastructure"
Cohesion: 0.11
Nodes (11): blockedPaths, BlogArticle, blogArticles, getArticleBySlug(), getRecommendedArticles(), siteConfig, metadata, ArticlePage() (+3 more)

### Community 4 - "Root Layout & Site Shell"
Cohesion: 0.11
Nodes (16): globalSchema, metadata, satoshi, DynamicCookieBanner, footerGroups, SiteFooter(), socialLinks, ThemeProvider() (+8 more)

### Community 5 - "Blog Career Content Topics"
Cohesion: 0.32
Nodes (20): Career Growth & Role Transitions, 5 Skills Indian Tech Employers Pay Premium for in 2025 - Blog Header, How to Negotiate a Job Offer - Blog Header, How to Switch Careers into Tech in India - Blog Header, How to Write a Resume with No Experience - Blog Header, India Tech Job Market Dynamics, Navigating Career Progression IC vs EM in India - Blog Header, Negotiating Tech Offers in a Buyers Market 2026 - Blog Header (+12 more)

### Community 6 - "Dropdown Menu Components"
Cohesion: 0.14
Nodes (12): BlogShareButtonsProps, DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator() (+4 more)

### Community 7 - "Navigation & Core UI"
Cohesion: 0.2
Nodes (8): NotFound(), navItems, SiteHeader(), ThemeToggle(), metadata, Button(), buttonVariants, Card()

### Community 8 - "Blog Header Images (Compensation)"
Cohesion: 0.28
Nodes (15): Header image depicting salary growth chart with market data dashboard, upward trend arrows, and professional negotiating imagery for blog about using compensation market data to negotiate a raise, Header image depicting off-sync calendar juxtaposed with tech office/code backdrop and salary review document for blog about requesting off-cycle salary reviews in the technology sector, Header image depicting resume document with red strike-through marks over common formatting elements and ATS parsing interface for blog debunking ATS formatting myths, Header image depicting resume with highlighted keywords and magnifying glass over optimized text with ATS scoring dashboard for blog about keyword-driven resume optimization for applicant tracking systems, Header image depicting digital portfolio website mockup transforming from or replacing traditional paper resume for blog about building a portfolio that substitutes a conventional CV, Header image depicting side-by-side comparison of data science and data engineering roles with salary bar charts for blog comparing compensation between DS and DE career paths, Header image depicting balance scale weighing stock certificates and equity grants against cash salary in startup office setting for blog about evaluating equity versus base pay in startup compensation, Header image depicting Indian rupees currency notes with graduation caps and young professionals against 2026 calendar backdrop for blog about entry-level salary expectations for Indian graduates (+7 more)

### Community 9 - "Add Articles Script"
Cohesion: 0.22
Nodes (7): articles, FILE_PATH, fs, linkTargets, newArticle1, newArticle2, path

### Community 10 - "Brand Assets & Logos"
Cohesion: 0.8
Nodes (5): Zap / Lightning Motif, Primary Zaprill Logo (logo.png), Zaprill Brand, Zaprill Circular Logo Icon (zaprill-logo-circle.webp), Secondary Zaprill Logo Variant (zaprill-logo-2.png)

### Community 14 - "Graphify / AGENTS.md Config"
Cohesion: 0.67
Nodes (3): GRAPH_REPORT.md, graphify CLI Tool, Graphify Knowledge Graph

## Ambiguous Edges - Review These
- `Header image depicting balance scale weighing stock certificates and equity grants against cash salary in startup office setting for blog about evaluating equity versus base pay in startup compensation` → `Header image depicting signing bonus check with hidden fine print, strings attached, and trap imagery for blog exposing less-known drawbacks and hidden costs of signing bonuses`  [AMBIGUOUS]
  public/blogs/hidden-cost-signing-bonuses.webp · relation: semantically_similar_to
- `Header image depicting Indian rupees currency notes with graduation caps and young professionals against 2026 calendar backdrop for blog about entry-level salary expectations for Indian graduates` → `Header image depicting person holding salary slip next to market-rate benchmark showing visible pay gap for blog about identifying and confirming if one is being underpaid`  [AMBIGUOUS]
  public/blogs/fresher-salary-expectations-india-2026.webp · relation: semantically_similar_to
- `How to Switch Careers into Tech in India - Blog Header` → `Resume Optimization & ATS Strategies`  [AMBIGUOUS]
  public/blogs/ · relation: conceptually_related_to
- `Optimize LinkedIn Profile for Recruiters - Blog Header` → `Career Growth & Role Transitions`  [AMBIGUOUS]
  public/blogs/ · relation: conceptually_related_to

## Knowledge Gaps
- **65 isolated node(s):** `fs`, `path`, `FILE_PATH`, `articles`, `newArticle1` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Header image depicting balance scale weighing stock certificates and equity grants against cash salary in startup office setting for blog about evaluating equity versus base pay in startup compensation` and `Header image depicting signing bonus check with hidden fine print, strings attached, and trap imagery for blog exposing less-known drawbacks and hidden costs of signing bonuses`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Header image depicting Indian rupees currency notes with graduation caps and young professionals against 2026 calendar backdrop for blog about entry-level salary expectations for Indian graduates` and `Header image depicting person holding salary slip next to market-rate benchmark showing visible pay gap for blog about identifying and confirming if one is being underpaid`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `How to Switch Careers into Tech in India - Blog Header` and `Resume Optimization & ATS Strategies`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Optimize LinkedIn Profile for Recruiters - Blog Header` and `Career Growth & Role Transitions`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `cn()` connect `UI Primitives (Input, Select, Card)` to `Page Components & Layouts`, `Blog & Content Infrastructure`, `Root Layout & Site Shell`, `Dropdown Menu Components`, `Navigation & Core UI`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **Why does `siteConfig` connect `Blog & Content Infrastructure` to `UI Primitives (Input, Select, Card)`, `Page Components & Layouts`, `Root Layout & Site Shell`, `Navigation & Core UI`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `Button()` connect `Navigation & Core UI` to `UI Primitives (Input, Select, Card)`, `Page Components & Layouts`, `Blog & Content Infrastructure`, `Root Layout & Site Shell`, `Dropdown Menu Components`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._