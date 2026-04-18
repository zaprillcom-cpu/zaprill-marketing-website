import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  CircleDollarSign,
  FileText,
  SearchX,
  Target,
  TriangleAlert,
  Fingerprint,
  MessageSquareQuote
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Float } from "@/components/float";
import { FaqAccordion } from "@/components/faq-accordion";
import { NumberTicker } from "@/components/number-ticker";
import { Typewriter } from "@/components/typewriter";
import { SpringButton } from "@/components/spring-button";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Zaprill — Know Your Worth. Get the Job.",
    description:
      "Upload your resume and instantly discover your real market salary, best-fit job matches, and the exact skills blocking your next raise. Free to start.",
    url: siteConfig.url,
    type: "website"
  }
};

const painPoints = [
  {
    icon: SearchX,
    title: "You're applying blind",
    body: "No data on which companies are actually hiring for your exact profile."
  },
  {
    icon: CircleDollarSign,
    title: "You don't know your real worth",
    body: "Most people accept the first offer without knowing the market is paying 30–40% more."
  },
  {
    icon: FileText,
    title: "Your resume gets filtered out",
    body: "ATS systems reject 75% of resumes before a human ever reads them."
  },
  {
    icon: TriangleAlert,
    title: "You don't know what's missing",
    body: "No one tells you which two skills would double your interview rate."
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

const features = [
  {
    icon: BarChart3,
    iconColor: "text-primary",
    title: "Salary Intelligence",
    body: "See what your skills are actually worth today — not last year's data, not industry averages. Real compensation from real job listings, updated daily. Know your number before you walk into any negotiation."
  },
  {
    icon: TriangleAlert,
    iconColor: "text-primary",
    title: "ATS Failure Detection",
    body: "Most resumes are rejected before a human reads them. We simulate employer ATS filters on your resume and flag exactly what's causing silent rejections — so you fix it before it costs you an interview."
  },
  {
    icon: Target,
    iconColor: "text-primary",
    title: "Skill Gap Mapping",
    body: "We don't just tell you what you're missing. We tell you which specific skills are blocking your next salary band, and the fastest path to close each gap."
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
    "Resume analysis (once a month)",
    "3 matched job roles",
    "Basic salary comparison",
    "Skill gap overview"
  ],
  pro: [
    "Unlimited job matching",
    "Full salary intelligence report",
    "AI resume builder (3 per month)",
    "Skill gap map with recommended courses",
    "Priority support"
  ]
};

export default function HomePage() {
  // FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  // HowTo structured data
  const howToSchema = {
    "@context": "https://schema.org",
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
  };

  // SoftwareApplication structured data
  const softwareSchema = {
    "@context": "https://schema.org",
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
        name: "Basic",
        description: "Resume analysis once a month, 3 matched jobs, basic salary comparison"
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
            value: 1,
            unitCode: "MON"
          }
        },
        name: "Professional",
        description: "Unlimited job matching, full salary intelligence, AI resume builder, skill gap map with courses"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5"
    }
  };

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, howToSchema, softwareSchema])
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28">
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
              Upload your resume. In 2 minutes you&apos;ll know your exact market value, which jobs you actually qualify for, and what's silently blocking your next salary jump.
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

      {/* Pain Section */}
      <section className="bg-background py-32">
        <div className="container mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              title="Job hunting is broken."
              className="mb-20 text-center md:text-left [&_h2]:text-foreground [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item, idx) => {
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
      <section className="bg-card border-y border-border py-32">
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

      {/* Salary Hook */}
      <section className="bg-foreground text-backgroundpy-32 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Reveal>
            <Badge className="bg-background/10 text-background/50 border-0 mb-10 font-sans tracking-widest px-3 py-1 text-[10px] uppercase font-bold">Your Salary Gap</Badge>
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tighter text-background mb-8 balanced leading-[1.1]">
              You could be earning more. Right now.
            </h2>
            <p className="text-[19px] text-background/60 mb-16 balanced max-w-2xl mx-auto font-light leading-relaxed">
              The average Zaprill user discovers a ₹2–4 LPA salary gap within 2 minutes of uploading their resume.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mx-auto max-w-[500px]">
            <Card className="rounded-[20px] border border-background/10 bg-background/[0.02] p-10 text-left relative overflow-hidden shadow-2xl">
              <h3 className="text-center text-background/90 mb-10 text-[15px] tracking-wide uppercase font-semibold">Compensation Analysis</h3>
              <div className="space-y-8">
                {[
                  ["Your Current", "₹6,00,000", "text-background/40 max-w-[32%] border-b-2 border-background/20 bg-background/10"],
                  ["Market Average", "₹9,20,000", "text-background/70 max-w-[60%] border-b-2 border-background/40 bg-background/10"],
                  ["Your Potential", "₹11,50,000", "text-background max-w-full border-b-2 border-background font-bold bg-background/20"]
                ].map(([label, value, classes]) => (
                  <div key={label} className="w-full">
                    <div className="flex justify-between text-[13px] mb-2 font-medium">
                      <span className="text-background/60">{label}</span>
                      <span className={`tracking-wide ${classes.includes("text-background ") ? "text-background font-bold" : "text-background/60"}`}>{value}</span>
                    </div>
                    <div className={`h-2 text-transparent rounded-r-md ${classes}`}></div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Link href={siteConfig.appUrl}>
                  <Button className="bg-background hover:bg-background/90 text-foreground border-0 px-8 py-3.5 rounded-full text-[15px] font-bold">
                    Calculate My Gap
                  </Button>
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-background py-32">
        <div className="container mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              pill="Insights"
              pillClassName="bg-muted text-foreground border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Intelligence the other platforms skipped."
              className="mb-20 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={idx * 0.1}>
                  <Card className="h-full rounded-[20px] border border-border bg-card p-10 transition-all hover:-translate-y-[2px] shadow-sm hover:shadow-md">
                    <div className="mb-8">
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[22px] font-bold tracking-tight text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px] font-light">{feature.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speed Proof */}
      <section className="bg-card py-32 border-y border-border relative overflow-hidden">
        <Reveal className="container mx-auto max-w-3xl text-center relative z-10">
          <div className="text-[100px] md:text-[140px] font-bold text-primary leading-none tracking-tighter mb-4 opacity-90">2 <span className="text-[60px] md:text-[80px]">min</span></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">Speed matters.</h2>
          <p className="text-[19px] text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Upload your resume and get immediate insights into your complete market profile.
          </p>
          <Link href={siteConfig.appUrl}>
            <Button className="rounded-full px-10 h-14 text-[15px] font-bold bg-foreground text-background hover:bg-foreground/90 border-0 shadow-sm transition-all active:scale-[0.97]">
              Upload Now
            </Button>
          </Link>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-32">
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
      <section className="bg-card py-32 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              pill="Pricing"
              pillClassName="bg-muted text-foreground border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Start free. Upgrade when you're ready."
              className="mb-20 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <Card className="h-full rounded-[24px] border-border bg-background p-12 flex flex-col">
                <h3 className="text-[28px] font-bold tracking-tight text-foreground mb-2">Basic</h3>
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
                    Get Started
                  </Button>
                </Link>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="h-full relative rounded-[24px] border-border bg-foreground text-background p-12 flex flex-col shadow-xl">
                <div className="absolute top-8 right-10">
                  <Badge className="bg-background/10 text-background border-0 text-[10px] font-bold tracking-widest hover:bg-background/10 uppercase px-3 py-1">Pro</Badge>
                </div>
                <h3 className="text-[28px] font-bold tracking-tight text-background mb-2">Professional</h3>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-[54px] font-bold tracking-tighter leading-none text-background">₹99</div>
                  <div className="text-background/60 mb-2 font-medium">/ month</div>
                </div>
                <div className="text-[13px] font-medium text-background/50 mb-10">or ₹899/year — save 25%</div>
                <ul className="space-y-5 mb-12 flex-1">
                  {pricing.pro.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start text-background">
                      <span className="text-background/20 mt-1 font-bold">—</span>
                      <span className="font-medium text-background text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={siteConfig.appUrl} className="w-full">
                  <Button className="w-full justify-center h-14 rounded-full bg-background text-foreground hover:bg-background/90 border-0 font-bold active:scale-[0.98]">
                    Upgrade to Pro
                  </Button>
                </Link>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background dark:bg-black border-t border-border/20 py-32 relative overflow-hidden">
        <Reveal className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-[64px] font-bold tracking-tighter text-background mb-8 balanced">Stop guessing.<br />Know your worth.</h2>
          <p className="text-[19px] text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-12 balanced">
            Built for professionals who are done leaving money on the table. It takes 2 minutes. It's completely free to start.
          </p>
          <div className="mb-8">
            <SpringButton href={siteConfig.appUrl} className="bg-primary text-primary-foreground hover:bg-primary/90 border-0 h-14 px-10 text-[15px] font-bold rounded-full">
              Upload Your Resume
            </SpringButton>
          </div>
          <div className="text-[13px] text-muted-foreground font-medium tracking-wide">
            Cancel Pro anytime <span className="opacity-40 mx-3">·</span> Data deleted on request
          </div>
        </Reveal>
      </section>

    </main>
  );
}
