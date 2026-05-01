import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import {
  CircleDollarSign,
  SearchX,
  Target,
  Fingerprint
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SpringButton } from "@/components/spring-button";

// Lazy-load framer-motion heavy components to reduce initial JS and TBT
const Float = dynamic(() => import("@/components/float").then(m => ({ default: m.Float })));
const FaqAccordion = dynamic(() => import("@/components/faq-accordion").then(m => ({ default: m.FaqAccordion })));
const NumberTicker = dynamic(() => import("@/components/number-ticker").then(m => ({ default: m.NumberTicker })));
const Typewriter = dynamic(() => import("@/components/typewriter").then(m => ({ default: m.Typewriter })));

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Zaprill — Know Your Worth. Get the Job.",
    description:
      "Upload your resume and instantly discover your real market salary, best-fit job matches, and the exact skills blocking your next raise. Free to start.",
    url: siteConfig.url,
    type: "website",
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaprill — Know Your Worth. Get the Job.",
    description:
      "Upload your resume and instantly discover your real market salary, best-fit job matches, and the exact skills blocking your next raise. Free to start.",
    images: ["/og"]
  }
};

const valueProps = [
  {
    icon: SearchX,
    title: "Market Blindness",
    body: "Most professionals apply without knowing which companies are actually paying top-tier for their exact profile."
  },
  {
    icon: CircleDollarSign,
    title: "Salary Intelligence",
    body: "Real-time compensation data matched against your technical stack. Know your number before you walk into any negotiation."
  },
  {
    icon: Fingerprint,
    title: "ATS Failure Detection",
    body: "We simulate employer ATS filters on your resume to flag exactly what's causing silent rejections before you apply."
  },
  {
    icon: Target,
    title: "Skill Gap Mapping",
    body: "We identify the exact two or three skills blocking your next salary band and provide a path to close them."
  }
];

const processSteps = [
  {
    step: "01",
    title: "We read your resume deeply",
    body: "Not just job titles. We extract your actual skills, years of experience per technology, career progression, and compensation history to build a precise profile of where you stand."
  },
  {
    step: "02",
    title: "We compare you against the live market",
    body: "Your profile is matched against 10,000+ active job listings updated daily. We calculate exactly where you rank — not compared to averages, but against real roles hiring right now."
  },
  {
    step: "03",
    title: "You get a clear, honest report",
    body: "Matched roles with fit scores. Your exact salary gap. The two or three skills that would move you into a higher pay band. No guessing. No vague advice."
  }
];

const faqs = [
  {
    q: "Is my resume data safe?",
    a: "Yes. Your resume is processed through our engine and never shared with third-party employers without your explicit consent. You can request full data deletion from our servers at any time with a single click."
  },
  {
    q: "What happens after I upload my resume?",
    a: "Within 2 minutes, our AI extracts your skills and cross-references them against our live, proprietary database of job listings. You are immediately redirected to a dashboard displaying your calculated market value, exact skill gaps, and roles you match with today."
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can upload your resume and view your first initial analysis completely free and without creating an account. We only require an account if you wish to save your history or utilize our deeper Pro tier features."
  },
  {
    q: "How accurate is the salary gap calculation?",
    a: "Highly accurate. We don't rely on self-reported averages. Our system parses real-time job listings that mandate salary disclosures, cross-referencing your exact technical stack and years of experience to calculate your true 90th percentile earning potential."
  }
];

const pricing = {
  free: [
    "1 job search per month",
    "Ad-supported interface with low ad density",
    "Basic matches only",
    "100% match jobs are Pro-only"
  ],
  pro: [
    "Ad-free experience",
    "Unlimited job searches",
    "Unlock all matches, including 100% match jobs",
    "Quarterly Pro: ₹99 (₹49 for first 500 users)",
    "Yearly Pro: ₹350 (₹175 for first 1000 users)"
  ]
};

export default function HomePage() {
  // Structured data (@graph pattern)
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      },

      {
        "@type": "HowTo",
        name: "How to Find Your Real Market Salary with Zaprill",
        description:
          "Upload your resume to Zaprill and get your exact market value, job matches, and skill gap analysis in 2 minutes.",
        totalTime: "PT2M",
        step: processSteps.map((step, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: step.title,
          text: step.body
        }))
      },

      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.appUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
            name: "Free",
            description:
              "1 job search monthly, low ad-supported experience, basic matches only, 100% matches locked."
          },
          {
            "@type": "Offer",
            price: "99",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "99",
              priceCurrency: "INR",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 3,
                unitCode: "MON"
              }
            },
            name: "Pro Quarterly",
            description:
              "Ad-free, unlimited searches, unlock all matches including 100% scores."
          },
          {
            "@type": "Offer",
            price: "350",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "350",
              priceCurrency: "INR",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 12,
                unitCode: "MON"
              }
            },
            name: "Pro Yearly",
            description:
              "All Pro features with priority support and discounted annual billing."
          }
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "150",
          bestRating: "5"
        }
      }
    ]
  };

  return (
    <main className="bg-[var(--home-surface-1)] text-foreground transition-colors duration-300">
      <Script id="home-schema" strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema)
        }}
      />

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--home-surface-1)] pt-20 pb-28">
        <div className="container mx-auto relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] max-w-[1200px]">
          <Reveal delay={0.1} className="max-w-2xl text-center lg:text-left">
            <h1 className="text-5xl md:text-[68px] leading-[1.05] tracking-tighter text-foreground mb-6">
              <Typewriter text="You're probably underpaid." delay={0.1} />
              <br />
              <span className="text-primary/60 dark:text-primary/40">
                <Typewriter text="We can prove it." delay={1.4} />
              </span>
            </h1>

            <p className="mt-8 text-[19px] text-muted-foreground max-w-lg mx-auto lg:mx-0 balanced leading-relaxed font-light">
              Stop applying blind. Upload your resume and instantly discover your market value, hidden ATS filters, and the skills blocking your next 30% raise.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mb-8">
              <SpringButton href={siteConfig.appUrl} className="bg-primary text-primary-foreground transition-all hover:opacity-90 border-0 h-14 px-8 text-base font-semibold rounded-full min-w-[200px]">
                Upload Resume — Free
              </SpringButton>
              <a
                href="#report"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-md h-14 px-8 text-base font-medium text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground active:scale-[0.97]"
              >
                See a Sample Report
              </a>
            </div>

            <div className="text-[13px] text-muted-foreground font-medium tracking-wide">
              Works with PDF and Word <span className="opacity-40 mx-2">·</span> 2 min to results
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative w-full max-w-md mx-auto lg:ml-auto">
            <Float>
              <div className="rounded-2xl border border-border bg-card/80 p-1.5 backdrop-blur-[30px] shadow-2xl">
                <div className="rounded-[14px] bg-card overflow-hidden border border-border relative">
                  {/* Structural highlight */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[14px]"></div>

                  <div className="relative flex items-center justify-between border-b border-border px-5 py-3.5 bg-muted/30">
                    <div className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">System Output</div>
                    <div className="flex gap-2 items-center">
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-foreground opacity-80"></span>
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold ml-1">Live</span>
                    </div>
                  </div>

                  <div className="relative p-6 px-7">
                    <div className="mb-8">
                      <div className="text-[22px] font-bold tracking-tight text-foreground">Full-Stack Engineer</div>
                      <div className="text-sm text-muted-foreground font-medium mt-1">Based in Mumbai</div>
                    </div>

                    <div className="space-y-4 text-[13px] mb-8 tracking-wide font-medium">
                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Current salary</span>
                        <span className="text-foreground"><NumberTicker value={1400000} prefix="₹" delay={0.3} /></span>
                      </div>

                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Market average</span>
                        <span className="text-foreground"><NumberTicker value={1980000} prefix="₹" delay={0.6} /></span>
                      </div>

                      <div className="flex justify-between border-b border-border pb-3">
                        <span className="text-muted-foreground">Your potential</span>
                        <span className="text-foreground font-bold"><NumberTicker value={2450000} prefix="₹" delay={0.9} /></span>
                      </div>

                      <div className="flex justify-between pb-1 pt-1">
                        <span className="text-foreground font-bold">Gap identified</span>
                        <span className="text-primary font-bold"><NumberTicker value={1050000} prefix="+₹" suffix=" / yr" delay={1.4} /></span>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-5 text-xs text-foreground mt-2">
                      <div className="flex items-center gap-2 mb-5">
                        <Fingerprint className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-bold tracking-widest uppercase text-[10px]">Skill Check</span>
                      </div>
                      <div className="space-y-3.5">
                        <div className="flex gap-4 items-center">
                          <span className="text-foreground text-sm font-bold opacity-70">✓</span>
                          <div className="flex flex-col">
                            <span className="text-foreground font-semibold">React.js</span>
                            <span className="text-muted-foreground">Strong</span>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-foreground text-sm font-bold opacity-70">✓</span>
                          <div className="flex flex-col">
                            <span className="text-foreground font-semibold">Node OS</span>
                            <span className="text-muted-foreground">Strong</span>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <span className="text-muted-foreground text-sm font-bold">−</span>
                          <div className="flex flex-col">
                            <span className="text-foreground font-semibold">System Design</span>
                            <p className="text-muted-foreground mt-1.5 leading-relaxed">Missing structural experience. Blocking ₹4L+ mid-level roles.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Float>
          </Reveal>
        </div>
      </section>
      {/* Trust Bar */}
      <section className="border-y border-border/50 bg-background/50 py-10 backdrop-blur-sm">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              Trusted by professionals at
            </span>
            <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale transition-all hover:grayscale-0">
              {["Google", "Microsoft", "Meta", "Amazon", "Netflix"].map((brand) => (
                <span key={brand} className="text-xl font-bold tracking-tighter text-foreground">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-[var(--home-surface-2)] py-32">
        <div className="container mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              title="Career intelligence that actually works."
              description="Stop leaving money on the table. Zaprill gives you the data employers use, finally in your hands."
              className="mb-20 text-center md:text-left [&_h2]:text-foreground [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <Card className="h-full p-8 rounded-2xl border-border bg-card hover:bg-accent transition-all duration-300">
                    <div className="h-10 w-10 flex items-center justify-center mb-8">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed font-light">{item.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="border-y border-border bg-[var(--home-surface-3)] py-32">
        <div className="container mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              pill="Process"
              pillClassName="bg-muted text-foreground border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Three steps. One honest answer."
              description="No forms. No profile to fill. Just your resume."
              className="mb-24 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px] [&_p]:text-[19px] [&_p]:font-light [&_p]:mt-6"
            />
          </Reveal>
          <div className="relative mt-20 grid gap-0 lg:gap-16 lg:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-6 hidden border-t border-border lg:block" />
            {processSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.15} className="relative flex max-lg:flex-row max-lg:gap-6 max-lg:pb-10 lg:flex-col lg:items-center lg:text-center">
                {item.step !== "03" ? (
                  <div className="absolute left-[27px] top-14 bottom-0 w-px bg-border lg:hidden" />
                ) : null}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-primary-foreground shadow-[0_0_0_12px_var(--card)]">
                  {item.step}
                </div>
                <div className="max-lg:pt-1">
                  <h3 className="text-[22px] lg:mt-10 font-bold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 lg:mt-5 max-w-sm text-muted-foreground text-[15px] leading-relaxed font-light">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Intelligence Hook */}
      <section className="bg-foreground text-background py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Reveal>
            <Badge className="bg-background/10 text-background/50 border-0 mb-10 font-sans tracking-widest px-3 py-1 text-[10px] uppercase font-bold">Live Market Data</Badge>
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tighter text-background mb-8 balanced leading-[1.1]">
              The market is moving faster than your HR.
            </h2>
            <p className="text-[19px] text-background/60 mb-16 balanced max-w-2xl mx-auto font-light leading-relaxed">
              Zaprill scans 10,000+ daily job listings to find the real ceiling for your technical profile. Most users find a ₹3L+ gap in minutes.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mx-auto max-w-[500px]">
            <Card className="rounded-[24px] border border-background/10 bg-background/[0.03] backdrop-blur-xl p-10 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px]"></div>
              <h3 className="text-center text-background/90 mb-10 text-[13px] tracking-[0.2em] uppercase font-bold">Compensation Benchmarking</h3>
              <div className="space-y-8">
                {[
                  ["Current Market Value", "₹18,40,000", "text-background/40 max-w-[50%] border-b-2 border-background/20 bg-background/5"],
                  ["Top 10% Potential", "₹26,50,000", "text-background max-w-full border-b-2 border-primary/60 font-bold bg-primary/10"]
                ].map(([label, value, classes]) => (
                  <div key={label} className="w-full">
                    <div className="flex justify-between text-[13px] mb-2 font-medium">
                      <span className="text-background/50">{label}</span>
                      <span className={`tracking-wide ${classes.includes("text-background ") ? "text-background font-bold" : "text-background/50"}`}>{value}</span>
                    </div>
                    <div className={`h-2.5 text-transparent rounded-full ${classes}`}></div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link href={siteConfig.appUrl} className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 h-14 rounded-full text-[15px] font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    Verify My Market Value
                  </Button>
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--home-surface-1)] py-32">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-[48px] tracking-tighter font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-[19px] text-muted-foreground font-light leading-relaxed">Everything you need to know about Zaprill.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border bg-[var(--home-surface-2)] py-32">
        <div className="container mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              pill="Pricing"
              pillClassName="bg-muted text-foreground border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Free gives a taste. Pro unlocks the full picture."
              description="Compare plans and launch offers in INR (₹)."
              className="mb-20 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <Card className="h-full rounded-[24px] border-border bg-background p-12 flex flex-col">
                <h3 className="text-[28px] font-bold tracking-tight text-foreground mb-2">Free</h3>
                <div className="flex items-end gap-2 mb-10">
                  <div className="text-[54px] font-bold tracking-tighter leading-none text-foreground">₹0</div>
                  <div className="text-muted-foreground mb-2 font-medium">/ month</div>
                </div>
                <ul className="space-y-5 mb-12 flex-1">
                  {pricing.free.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start text-muted-foreground">
                      <span className="text-muted/30 mt-1 font-bold">—</span>
                      <span className="text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={siteConfig.appUrl} className="w-full">
                  <Button variant="secondary" className="w-full justify-center h-14 rounded-full border-border text-foreground bg-background hover:bg-accent font-bold active:scale-[0.98]">
                    Start Free
                  </Button>
                </Link>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="h-full relative rounded-[24px] border-border bg-foreground text-background p-12 flex flex-col shadow-xl">
                <div className="absolute top-8 right-10">
                  <Badge className="bg-background/10 text-background border-0 text-[10px] font-bold tracking-widest hover:bg-background/10 uppercase px-3 py-1">Pro</Badge>
                </div>
                <h3 className="text-[28px] font-bold tracking-tight text-background mb-2">Pro Plans</h3>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-[54px] font-bold tracking-tighter leading-none text-background">₹49</div>
                  <div className="text-background/60 mb-2 font-medium">/ quarter intro</div>
                </div>
                <div className="text-[13px] font-medium text-background/50 mb-10">Regular: ₹99 quarterly or ₹350 yearly</div>
                <ul className="space-y-5 mb-12 flex-1">
                  {pricing.pro.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start text-background">
                      <span className="text-background/20 mt-1 font-bold">—</span>
                      <span className="font-medium text-background text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="w-full">
                  <Button className="w-full justify-center h-14 rounded-full bg-background text-foreground hover:bg-background/90 border-0 font-bold active:scale-[0.98]">
                    Compare Plans
                  </Button>
                </Link>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="mt-10 text-center">
            <Link href="/pricing">
              <Button variant="outline" className="h-12 rounded-full px-8">
                View Full Pricing Breakdown
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
