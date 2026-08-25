import type { Metadata } from "next";
import { ArrowRight, Check, Database, ShieldCheck, Target } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Zaprill was built and how it makes salary and career intelligence more useful and accessible.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Zaprill",
    description:
      "Zaprill helps professionals make career decisions with clearer market evidence.",
    type: "website",
    url: `${siteConfig.url}/about`,
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Zaprill",
    description:
      "Zaprill helps professionals make career decisions with clearer market evidence.",
    images: ["/og"],
  },
};

const principles = [
  {
    icon: Database,
    title: "Use current evidence",
    body: "Market signals change quickly. Zaprill uses active listings and disclosed compensation instead of relying only on annual reports.",
  },
  {
    icon: Target,
    title: "Explain every result",
    body: "A useful recommendation shows why it exists. Match scores, salary ranges, and skill gaps should all be traceable to evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Keep candidates in control",
    body: "Your resume is personal. It should not be shared with employers or third parties without a clear reason and your permission.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--home-surface-1)]">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl">
            <div className="eyebrow">Why Zaprill exists</div>
            <h1 className="text-[44px] sm:text-[52px] lg:text-[58px]">
              Job hunting needed better evidence.
            </h1>
            <div className="mt-7 space-y-5">
              <p className="text-lg leading-8">
                Smart people make career decisions with surprisingly little reliable information. Salary conversations stay opaque, resume advice stays generic, and most job platforms ask candidates to do more work without giving them more clarity.
              </p>
              <p className="text-lg leading-8 text-foreground">
                Zaprill was built to turn the evidence already in your resume into decisions you can use: what your experience is worth, which roles fit, and what would improve your options.
              </p>
            </div>
          </div>

          <aside className="self-end border-y border-border py-7" aria-label="Zaprill mission">
            <div className="data-label">Our mission</div>
            <p className="mt-4 font-heading text-2xl font-semibold leading-9 tracking-[-0.025em] text-foreground">
              Give every professional access to career intelligence that was once available only through recruiters and well-connected networks.
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.11em] text-signal">
              Team Zaprill · Mumbai
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--home-surface-2)] py-16 md:py-20" aria-labelledby="principles-title">
        <div className="container">
          <div className="max-w-xl">
            <div className="eyebrow">Product principles</div>
            <h2 id="principles-title">Clarity is a product requirement.</h2>
          </div>

          <div className="mt-10 grid border-t border-border md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className={cn(
                    "border-b border-border py-7 md:px-7",
                    index < principles.length - 1 && "md:border-r",
                    index === 0 && "md:pl-0",
                  )}
                >
                  <Icon className="h-5 w-5 text-signal" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-5">{principle.title}</h3>
                  <p className="mt-3 text-[15px] leading-7">{principle.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20" aria-labelledby="data-title">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="max-w-sm">
            <div className="eyebrow">How the data works</div>
            <h2 id="data-title">Current enough to be useful. Honest about its limits.</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3>What we compare</h3>
              <p className="mt-4 text-[15px] leading-7">
                Zaprill looks at public job listings, disclosed compensation, role requirements, location, and the skills and experience visible in your resume.
              </p>
              <ul className="mt-6 space-y-3">
                {["Role and location", "Years and depth of experience", "Skills repeatedly requested by employers"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>What the result means</h3>
              <p className="mt-4 text-[15px] leading-7">
                A salary benchmark is an informed range—not a promise. Offers still vary with company size, interview performance, negotiation, and benefits.
              </p>
              <div className="mt-6 border-l-2 border-signal bg-accent px-4 py-3 text-sm leading-6 text-foreground">
                We prefer a useful estimate with visible assumptions over false precision.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="data-label">See the product for yourself</div>
            <h2 className="mt-3">Start with the resume you already have.</h2>
            <p className="mt-3">No long profile form. The first analysis is free.</p>
          </div>
          <a href={siteConfig.appUrl} className={cn(buttonVariants({ size: "lg" }), "shrink-0")}>
            Analyze my resume
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
