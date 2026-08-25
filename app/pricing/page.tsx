import type { Metadata } from "next";
import { headers } from "next/headers";
import { ArrowRight, Check, CircleAlert } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Zaprill Free, Quarterly Pro, and Yearly Pro plans. Start free and upgrade for more searches and full match insights.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Zaprill",
    description: "Compare Zaprill Free, Quarterly Pro, and Yearly Pro plans.",
    type: "website",
    url: `${siteConfig.url}/pricing`,
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Zaprill",
    description: "Compare Zaprill Free, Quarterly Pro, and Yearly Pro plans.",
    images: ["/og"],
  },
};

const freePlan = {
  title: "Free",
  cadence: "No payment required",
  features: [
    "1 job search each month",
    "Basic role matches",
    "Ad-supported experience",
    "Perfect-match roles remain locked",
  ],
};

const proPlans = [
  {
    title: "Quarterly Pro",
    cadence: "Billed every 3 months",
    regularPriceINR: 299,
    offerPriceINR: 199,
    regularPriceUSD: 6,
    offerPriceUSD: 3,
    offerLimit: 500,
    features: [
      "4 included job searches each month",
      "Every match score, including 100% fits",
      "Full salary and skill-gap insights",
      "Lower ad density",
    ],
  },
  {
    title: "Yearly Pro",
    cadence: "Billed every 12 months",
    regularPriceINR: 999,
    offerPriceINR: 555,
    regularPriceUSD: 20,
    offerPriceUSD: 10,
    offerLimit: 1000,
    features: [
      "5 included job searches each month",
      "Every match score, including 100% fits",
      "Full salary and skill-gap insights",
      "No ads and the lowest effective monthly cost",
    ],
  },
];

export default async function PricingPage() {
  const requestHeaders = await headers();
  const countryCode = requestHeaders.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase() || "";
  const inferredIndiaFromLanguage = /\b(en-in|hi-in|bn-in|ta-in|te-in|mr-in)\b/.test(acceptLanguage);
  const isIndia = countryCode ? countryCode === "IN" : inferredIndiaFromLanguage;

  const currencyCode = isIndia ? "INR" : "USD";
  const currencySymbol = isIndia ? "₹" : "$";
  const pricingContext = isIndia
    ? "Showing prices for India in INR"
    : "Showing international prices in USD";

  const plans = proPlans.map((plan) => ({
    ...plan,
    regularPrice: currencyCode === "INR" ? plan.regularPriceINR : plan.regularPriceUSD,
    offerPrice: currencyCode === "INR" ? plan.offerPriceINR : plan.offerPriceUSD,
  }));

  return (
    <div className="bg-[var(--home-surface-1)]">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow">Pricing</div>
            <h1 className="text-[44px] sm:text-[52px] lg:text-[58px]">
              Start free. Upgrade for more searches and deeper answers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8">
              Every plan starts with the same clear product. Pro removes the strict limits and unlocks the complete report.
            </p>
          </div>
          <div className="flex items-center gap-2 border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
            <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
            {pricingContext}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-label="Zaprill plans">
        <div className="container">
          <div className="grid border border-border bg-card lg:grid-cols-3">
            <article className="flex flex-col p-6 md:p-8 lg:border-r lg:border-border">
              <div className="data-label">Free</div>
              <h2 className="mt-3 text-2xl">{freePlan.title}</h2>
              <p className="mt-1 text-sm">{freePlan.cadence}</p>
              <div className="mt-7 font-heading text-4xl font-semibold tracking-[-0.04em]">
                {currencySymbol}0
              </div>
              <div className="mt-7 h-px bg-border" />
              <ul className="mt-7 flex-1 space-y-4">
                {freePlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={siteConfig.appUrl} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8 w-full")}>
                Continue free
              </a>
            </article>

            {plans.map((plan, index) => {
              const bestValue = index === 1;
              return (
                <article
                  key={plan.title}
                  className={cn(
                    "relative flex flex-col border-t border-border p-6 md:p-8 lg:border-t-0",
                    index === 0 && "lg:border-r",
                    bestValue && "border-t-2 border-t-signal lg:border-t-2",
                  )}
                >
                  <div className={cn("data-label", bestValue && "text-signal")}>
                    {bestValue ? "Best value" : "Flexible Pro"}
                  </div>
                  <h2 className="mt-3 text-2xl">{plan.title}</h2>
                  <p className="mt-1 text-sm">{plan.cadence}</p>

                  <div className="mt-7 flex items-end gap-3">
                    <span className="font-heading text-4xl font-semibold tracking-[-0.04em]">
                      {currencySymbol}{plan.offerPrice}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground line-through">
                      {currencySymbol}{plan.regularPrice}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-signal">
                    Launch price · first {plan.offerLimit.toLocaleString("en-IN")} customers
                  </p>

                  <div className="mt-7 h-px bg-border" />
                  <ul className="mt-7 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={siteConfig.appUrl} className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full")}>
                    Choose {plan.title}
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
            {[
              ["Credits", "A search uses one credit. Included credits refresh every month."],
              ["Upgrade timing", "Start free and upgrade only when you need more searches or the full report."],
              ["Need help?", "Contact us before paying if you are unsure which plan fits your job search."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-base">{title}</h3>
                <p className="mt-2 text-sm leading-6">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-start">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-4 hover:decoration-foreground">
              Ask a pricing question <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
