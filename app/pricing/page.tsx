import type { Metadata } from "next";
import Link from "next/link";
import { Check, CircleAlert, Info, Lock, Sparkles } from "lucide-react";
import { headers } from "next/headers";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose between Free, Quarterly Pro, and Yearly Pro plans in INR. Start free and upgrade when you want more searches and full match unlocks.",
  alternates: {
    canonical: "/pricing"
  },
  openGraph: {
    title: "Pricing — Zaprill",
    description:
      "Free tier with strict limits, or unlock Pro with Quarterly and Yearly INR plans.",
    type: "website",
    url: `${siteConfig.url}/pricing`,
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Zaprill",
    description:
      "Free tier with strict limits, or unlock Pro with Quarterly and Yearly INR plans.",
    images: ["/og"]
  }
};

const freeFeatures = [
  "1 job search per month",
  "High ad density across the experience",
  "Basic matches only",
  "100% match jobs stay locked"
];

const quarterlyPlan = {
  title: "Quarterly Pro",
  cadence: "billed every 3 months",
  regularPriceINR: 99,
  offerPriceINR: 49,
  regularPriceUSD: 6,
  offerPriceUSD: 3,
  offerLimit: 500,
  claimed: 0,
  features: [
    "Low Ad-density across the experience",
    "Credit based job searches (free 4 a month)",
    "Unlock all matches, including 100% match jobs",
    "Full salary intelligence + skill insights"
  ]
};

const yearlyPlan = {
  title: "Yearly Pro",
  cadence: "billed every 12 months",
  regularPriceINR: 350,
  offerPriceINR: 175,
  regularPriceUSD: 20,
  offerPriceUSD: 10,
  offerLimit: 1000,
  claimed: 0,
  features: [
    "Ad free experience",
    "Credit based job searches (free 5 a month)",
    "Unlock all matches, including 100% match jobs",
    "Full salary intelligence + skill insights",
    "Lowest effective monthly cost"
  ]
};

function OfferProgress({
  claimed,
  offerLimit
}: {
  claimed: number;
  offerLimit: number;
}) {
  const progress = Math.min(100, Math.round((claimed / offerLimit) * 100));

  return (
    <div className="mt-7 rounded-2xl border border-border/60 bg-muted/40 p-4">
      <div className="mb-2 flex items-center justify-between text-[12px] font-semibold tracking-wide text-muted-foreground">
        <span>Limited Offer Progress</span>
        <span>
          {claimed}/{offerLimit} claimed
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border/70">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-[12px] text-muted-foreground">
        Offer closes once the first {offerLimit} upgrades are completed.
      </p>
    </div>
  );
}

export default async function PricingPage() {
  const requestHeaders = await headers();
  const countryCode = requestHeaders.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase() || "";
  const inferredIndiaFromLanguage = /\b(en-in|hi-in|bn-in|ta-in|te-in|mr-in)\b/.test(acceptLanguage);
  const isIndia = countryCode ? countryCode === "IN" : inferredIndiaFromLanguage;

  const currencyCode = isIndia ? "INR" : "USD";
  const currencySymbol = isIndia ? "₹" : "$";
  const pricingContext = isIndia
    ? "India detected: showing INR pricing"
    : "Outside India detected: showing USD pricing";

  const plans = [quarterlyPlan, yearlyPlan].map((plan) => ({
    ...plan,
    regularPrice: currencyCode === "INR" ? plan.regularPriceINR : plan.regularPriceUSD,
    offerPrice: currencyCode === "INR" ? plan.offerPriceINR : plan.offerPriceUSD
  }));

  return (
    <main className="bg-background py-20 text-foreground md:py-28">
      <section>
        <div className="container mx-auto max-w-[1200px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge className="border-0 bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
              {currencyCode === "INR" ? "All Pricing in INR (₹)" : "All Pricing in USD ($)"}
            </Badge>
            <h1 className="mt-6 text-5xl tracking-tighter md:text-[60px]">
              Pick your plan based on how fast you want to move.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] text-muted-foreground">
              Start free with strict limits, or unlock Pro to reduce ads, get more searches, and access locked 100% match roles.
            </p>
            <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
              <CircleAlert className="h-3.5 w-3.5 shrink-0" />
              <span>{pricingContext}</span>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal delay={0.05}>
              <Card className="flex h-full flex-col rounded-[24px] border-border bg-card p-8">
                <div className="mb-8">
                  <h2 className="text-[28px] font-bold tracking-tight">Free</h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">restricted tier</p>
                </div>
                <div className="mb-8 flex items-end gap-2">
                  <span className="text-[52px] font-bold leading-none tracking-tighter">₹0</span>
                  <span className="mb-2 text-muted-foreground">/ month</span>
                </div>
                <ul className="flex-1 space-y-4">
                  {freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={siteConfig.appUrl} className="mt-10">
                  <Button variant="secondary" className="h-12 w-full rounded-full font-bold">
                    Continue on Free
                  </Button>
                </Link>
              </Card>
            </Reveal>

            {plans.map((plan, index) => (
              <Reveal key={plan.title} delay={0.12 + index * 0.08}>
                <Card className="relative flex h-full flex-col rounded-[24px] border border-primary/25 bg-card p-8 text-card-foreground shadow-xl">
                  <div className="absolute right-6 top-6">
                    <Badge className="border-0 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/15">
                      Limited Offer
                    </Badge>
                  </div>
                  <div className="mb-7">
                    <h2 className="text-[28px] font-bold tracking-tight">{plan.title}</h2>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{plan.cadence}</p>
                  </div>

                  <div className="mb-3 flex items-end gap-2">
                    <span className="text-[52px] font-bold leading-none tracking-tighter">{currencySymbol}{plan.offerPrice}</span>
                    <span className="mb-2 text-muted-foreground">launch offer</span>
                  </div>
                  <div className="mt-3 inline-flex w-fit items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                    Original {currencySymbol}{plan.regularPrice}
                  </div>

                  <OfferProgress claimed={plan.claimed} offerLimit={plan.offerLimit} />

                  <ul className="mt-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="flex items-center gap-1.5">
                          {feature}
                          {feature.includes("salary intelligence") && (
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-3.5 w-3.5 text-muted-foreground/60 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="font-medium text-xs">If available</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={siteConfig.appUrl} className="mt-10">
                    <Button className="h-12 w-full rounded-full border-0 bg-primary font-bold text-primary-foreground hover:bg-primary/90">
                      Upgrade to Pro
                    </Button>
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25} className="mt-12">
            <Card className="rounded-[22px] border-border bg-muted/40 p-7">
              <SectionHeading
                pill="Why Pro"
                pillClassName="bg-background border border-border text-foreground uppercase tracking-widest text-[10px] font-bold"
                title="The difference is simple: access."
                description="Free is for one quick check. Pro is for serious job search momentum."
                className="mb-6 [&_h2]:text-3xl"
              />
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  "Unlock every match score, including perfect 100% fits.",
                  "Get more job searches instead of stopping at one per month.",
                  "Reduced or no ads to stay focused on decision-quality data."
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-border bg-background p-5 text-[15px] text-muted-foreground">
                    <div className="mb-3 flex items-center gap-2 text-foreground">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest">Pro Edge</span>
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
