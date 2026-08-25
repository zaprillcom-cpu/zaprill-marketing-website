import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Gauge,
  ScanSearch,
  Target,
} from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zaprill — Know what your experience is worth",
    description:
      "Turn one resume into a clear salary benchmark, explainable job matches, skill gaps, and ATS feedback.",
    url: siteConfig.url,
    type: "website",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaprill — Know what your experience is worth",
    description:
      "Turn one resume into a clear salary benchmark, explainable job matches, skill gaps, and ATS feedback.",
    images: ["/og"],
  },
};

const outputs = [
  {
    icon: Gauge,
    label: "Salary benchmark",
    title: "See a realistic market range",
    body: "Compare your experience, location, and stack with roles hiring now—not a broad industry average.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Job matches",
    title: "Know why a role fits",
    body: "Each match shows the skills you already have, what is missing, and how the score was calculated.",
  },
  {
    icon: Target,
    label: "Skill gaps",
    title: "Focus on the gap that matters",
    body: "Find the few skills that repeatedly appear in higher-paying roles for your profile.",
  },
  {
    icon: ScanSearch,
    label: "ATS review",
    title: "Catch avoidable resume issues",
    body: "Flag missing role keywords, unclear experience, and formatting that can reduce your chances.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Upload your resume",
    body: "Use a PDF or Word document. There is no long profile form to complete first.",
  },
  {
    step: "02",
    title: "Zaprill reads the evidence",
    body: "Your skills, experience, role progression, and location are compared with active job listings.",
  },
  {
    step: "03",
    title: "Review your career brief",
    body: "Get a salary range, explainable matches, ATS feedback, and the next skills worth learning.",
  },
];

const faqs = [
  {
    q: "What do I get after uploading my resume?",
    a: "You receive a career brief with an estimated market salary range, matching roles, skill gaps, and ATS feedback. Each section explains the evidence behind the result.",
  },
  {
    q: "Is my resume data private?",
    a: "Your resume is used to generate your analysis and is not shared with employers without your permission. You can request deletion of your stored data.",
  },
  {
    q: "How is the salary range calculated?",
    a: "Zaprill compares your location, experience, and skill profile with current job listings and disclosed compensation data. It is an estimate, not a guaranteed offer.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. A free account keeps your report available so you can return to it and compare future searches.",
  },
];

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to create a Zaprill career brief",
        description:
          "Upload a resume and receive a salary benchmark, job matches, skill gaps, and ATS feedback.",
        totalTime: "PT2M",
        step: processSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.body,
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.appUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: [
          { "@type": "Offer", price: "0", priceCurrency: "INR", name: "Free" },
          { "@type": "Offer", price: "199", priceCurrency: "INR", name: "Quarterly Pro" },
          { "@type": "Offer", price: "555", priceCurrency: "INR", name: "Yearly Pro" },
        ],
      },
    ],
  };

  return (
    <div className="bg-[var(--home-surface-1)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <section className="border-b border-border py-14 md:py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16">
          <div className="max-w-2xl">
            <div className="eyebrow">Career intelligence from one resume</div>
            <h1 className="text-[44px] sm:text-[52px] lg:text-[60px]">
              Know what your experience is worth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8">
              Zaprill turns your resume into a clear market salary range, explainable job matches, ATS feedback, and the skills most likely to improve your next move.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.appUrl}
                className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
              >
                Analyze my resume
                <ArrowRight aria-hidden="true" />
              </a>
              <Link
                href="#how-it-works"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
              >
                See how it works
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {["PDF or DOCX", "About 2 minutes", "Free to start"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card shadow-[0_20px_45px_rgb(20_28_24/0.08)]" aria-label="Example Zaprill career brief">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <div className="data-label">Career brief</div>
                <div className="mt-1 font-heading text-lg font-semibold">Full-stack engineer · Mumbai</div>
              </div>
              <span className="border border-border bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                Example
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="data-label">Estimated market range</div>
                  <div className="mt-2 font-heading text-3xl font-semibold tracking-tight">₹18.4L–₹24.5L</div>
                </div>
                <div className="text-right">
                  <div className="data-label">Market position</div>
                  <div className="mt-2 font-mono text-sm font-semibold text-signal">Above median</div>
                </div>
              </div>

              <div className="mt-8" aria-label="Salary market range visualization">
                <div className="relative h-2 bg-muted">
                  <div className="absolute inset-y-0 left-[22%] right-[9%] bg-foreground" />
                  <div className="absolute -top-1.5 left-[22%] h-5 w-px bg-foreground" />
                  <div className="absolute -top-2 right-[9%] h-6 w-0.5 bg-signal" />
                </div>
                <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                  <span>₹14L</span>
                  <span>₹18.4L market</span>
                  <span className="text-signal">₹24.5L potential</span>
                </div>
              </div>

              <dl className="mt-7 grid grid-cols-2 border-y border-border sm:grid-cols-3">
                <div className="border-r border-border py-4 pr-4">
                  <dt className="data-label">Role matches</dt>
                  <dd className="mt-2 font-mono text-xl font-semibold">38</dd>
                </div>
                <div className="border-r border-border px-4 py-4">
                  <dt className="data-label">Best fit</dt>
                  <dd className="mt-2 font-mono text-xl font-semibold">92%</dd>
                </div>
                <div className="col-span-2 border-t border-border py-4 sm:col-span-1 sm:border-t-0 sm:pl-4">
                  <dt className="data-label">ATS flags</dt>
                  <dd className="mt-2 font-mono text-xl font-semibold">03</dd>
                </div>
              </dl>

              <div className="mt-6 border-l-2 border-signal bg-accent px-4 py-3">
                <div className="data-label text-accent-foreground">Priority skill gap</div>
                <p className="mt-1 text-sm leading-6 text-foreground">
                  System design appears in 7 of your 10 highest-paying matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="outputs-title">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-sm">
            <div className="eyebrow">What you get</div>
            <h2 id="outputs-title">Answers you can use, not another score.</h2>
            <p className="mt-4">
              Every result tells you what it means and what to do next.
            </p>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2">
            {outputs.map((output, index) => {
              const Icon = output.icon;
              return (
                <article
                  key={output.title}
                  className={cn(
                    "border-b border-border py-7 sm:px-7",
                    index % 2 === 0 && "sm:border-r sm:pl-0",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-signal" strokeWidth={1.8} aria-hidden="true" />
                    <span className="data-label">{output.label}</span>
                  </div>
                  <h3 className="mt-5">{output.title}</h3>
                  <p className="mt-3 text-[15px] leading-7">{output.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border bg-[var(--home-surface-2)] py-16 md:py-20" aria-labelledby="process-title">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="max-w-sm">
            <div className="eyebrow">How it works</div>
            <h2 id="process-title">From resume to a useful decision.</h2>
            <p className="mt-4">No long questionnaire. No unexplained black-box result.</p>
          </div>

          <ol className="border-t border-border">
            {processSteps.map((item) => (
              <li key={item.step} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[52px_1fr] sm:gap-5">
                <span className="font-mono text-sm font-semibold text-signal">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-7">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="matches-title">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-md">
            <div className="eyebrow">Explainable matches</div>
            <h2 id="matches-title">A match score should show its work.</h2>
            <p className="mt-4">
              Zaprill separates strong evidence from missing requirements so you can decide whether to apply, prepare, or skip the role.
            </p>
            <a
              href={siteConfig.appUrl}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-7")}
            >
              Find my matches
              <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="border border-border bg-card">
            <div className="grid grid-cols-[1fr_auto] border-b border-border px-5 py-3">
              <span className="data-label">Roles hiring now</span>
              <span className="data-label">Fit</span>
            </div>
            {[
              ["Backend engineer", "Node.js · PostgreSQL · APIs", "92%", "Strong match"],
              ["Full-stack engineer", "React · Node.js · TypeScript", "88%", "Strong match"],
              ["Platform engineer", "Cloud · CI/CD · Kubernetes", "74%", "1 key gap"],
            ].map(([role, skills, score, note], index) => (
              <div key={role} className={cn("grid grid-cols-[1fr_auto] items-center gap-6 px-5 py-5", index < 2 && "border-b border-border")}>
                <div>
                  <h3 className="text-base">{role}</h3>
                  <p className="mt-1 text-sm leading-5">{skills}</p>
                  <span className={cn("mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.08em]", note === "1 key gap" ? "text-signal" : "text-muted-foreground")}>
                    {note}
                  </span>
                </div>
                <span className="font-mono text-xl font-semibold">{score}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--home-surface-2)] py-16 md:py-20" aria-labelledby="pricing-title">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="eyebrow">Simple pricing</div>
              <h2 id="pricing-title">Start free. Pay when you need more depth.</h2>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-4 hover:decoration-foreground">
              Compare every plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid border border-border bg-card lg:grid-cols-2">
            <div className="p-6 md:p-8 lg:border-r lg:border-border">
              <div className="data-label">Free</div>
              <div className="mt-3 font-heading text-3xl font-semibold">₹0</div>
              <p className="mt-3 max-w-md text-sm leading-6">Try the core experience with one monthly search and basic matches.</p>
              <a href={siteConfig.appUrl} className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>Start free</a>
            </div>
            <div className="border-t border-border p-6 md:p-8 lg:border-t-0">
              <div className="data-label text-signal">Pro</div>
              <div className="mt-3 font-heading text-3xl font-semibold">From ₹199 / quarter</div>
              <p className="mt-3 max-w-md text-sm leading-6">Get more searches, every match score, full salary insights, and fewer ads.</p>
              <Link href="/pricing" className={cn(buttonVariants(), "mt-6")}>See Pro plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="faq-title">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-sm">
            <div className="eyebrow">Common questions</div>
            <h2 id="faq-title">Before you upload.</h2>
            <p className="mt-4">The essentials about results, privacy, and accuracy.</p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="border-t border-border bg-foreground py-14 text-background">
        <div className="container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-background/60">Your next move, with evidence</div>
            <h2 className="mt-3 max-w-xl text-background">Turn your resume into a clear career brief.</h2>
          </div>
          <a
            href={siteConfig.appUrl}
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 bg-background text-foreground hover:bg-background/90")}
          >
            Analyze my resume
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
