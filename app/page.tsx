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
import { ButtonLink } from "@/components/ui/button";
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
    iconColor: "text-slate-900 dark:text-white",
    title: "Salary Intelligence",
    body: "See what your skills are actually worth today — not last year's data, not industry averages. Real compensation from real job listings, updated daily. Know your number before you walk into any negotiation."
  },
  {
    icon: TriangleAlert,
    iconColor: "text-slate-900 dark:text-white",
    title: "ATS Failure Detection",
    body: "Most resumes are rejected before a human reads them. We simulate employer ATS filters on your resume and flag exactly what's causing silent rejections — so you fix it before it costs you an interview."
  },
  {
    icon: Target,
    iconColor: "text-slate-900 dark:text-white",
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
  return (
    <main className="bg-[#fcfcfc] dark:bg-[#070707] text-slate-900 dark:text-white transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-32">
        <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr] max-w-[1200px]">
          <Reveal delay={0.1} className="max-w-2xl">
            <h1 className="text-5xl md:text-[68px] leading-[1.05] tracking-tighter text-slate-900 dark:text-white mb-6">
              <Typewriter text="You're probably underpaid." delay={0.1} />
              <br/>
              <span className="text-slate-400 dark:text-white/40">
                <Typewriter text="We can prove it." delay={1.4} />
              </span>
            </h1>
            
            <p className="mt-8 text-[19px] text-slate-600 dark:text-white/60 max-w-lg balanced leading-relaxed font-light">
              Upload your resume. In 2 minutes you'll know your exact market value, which jobs you actually qualify for, and what's silently blocking your next salary jump.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 mb-8">
              <SpringButton href={siteConfig.appUrl} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-all hover:bg-slate-800 dark:hover:bg-slate-200 border-0 h-14 px-8 text-base font-semibold rounded-full min-w-[200px]">
                Upload Resume — Free
              </SpringButton>
              <a
                href="#report"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md h-14 px-8 text-base font-medium text-slate-700 dark:text-white/90 transition-all hover:bg-white dark:hover:bg-white/10 active:scale-[0.97]"
              >
                See a Sample Report
              </a>
            </div>
            
            <div className="text-[13px] text-slate-400 dark:text-white/30 font-medium tracking-wide">
              No account needed <span className="opacity-40 mx-2">·</span> Works with PDF and Word <span className="opacity-40 mx-2">·</span> 2 min to results
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative w-full max-w-md mx-auto lg:ml-auto">
            <Float>
              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 p-1.5 backdrop-blur-[30px] shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                <div className="rounded-[14px] bg-white dark:bg-[#0A0A0A] overflow-hidden border border-slate-50 dark:border-white/5 relative">
                  {/* Structural highlight */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 dark:ring-white/5 rounded-[14px]"></div>
                  
                  <div className="relative flex items-center justify-between border-b border-slate-100 dark:border-white/5 px-5 py-3.5 bg-slate-50/50 dark:bg-transparent">
                    <div className="text-xs font-semibold text-slate-500 dark:text-white/50 tracking-wide uppercase">System Output</div>
                    <div className="flex gap-2 items-center">
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-slate-900 dark:bg-white opacity-80"></span>
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-900 dark:text-white font-bold ml-1">Live</span>
                    </div>
                  </div>
                  
                  <div className="relative p-6 px-7">
                    <div className="mb-8">
                      <div className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white">Full-Stack Engineer</div>
                      <div className="text-sm text-slate-500 dark:text-white/40 font-medium mt-1">Based in Mumbai</div>
                    </div>
                    
                    <div className="space-y-4 text-[13px] mb-8 tracking-wide font-medium">
                      <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                        <span className="text-slate-500 dark:text-white/40">Current salary</span>
                        <span className="text-slate-900 dark:text-white"><NumberTicker value={1400000} prefix="₹" delay={0.3} /></span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                        <span className="text-slate-500 dark:text-white/40">Market average</span>
                        <span className="text-slate-900 dark:text-white"><NumberTicker value={1980000} prefix="₹" delay={0.6} /></span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                        <span className="text-slate-500 dark:text-white/40">Your potential</span>
                        <span className="text-slate-900 dark:text-white font-bold"><NumberTicker value={2450000} prefix="₹" delay={0.9} /></span>
                      </div>
                      <div className="flex justify-between pb-1 pt-1">
                        <span className="text-slate-900 dark:text-white font-bold">Gap identified</span>
                        <span className="text-slate-900 dark:text-white font-bold text-emerald-600 dark:text-emerald-400"><NumberTicker value={1050000} prefix="+₹" suffix=" / yr" delay={1.4} /></span>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-white/[0.03] rounded-xl p-5 text-xs text-slate-700 dark:text-white/80 mt-2">
                      <div className="flex items-center gap-2 mb-5">
                        <Fingerprint className="h-4 w-4 text-slate-400 dark:text-white/30" />
                        <span className="text-slate-400 dark:text-white/30 font-bold tracking-widest uppercase text-[10px]">Skill Check</span>
                      </div>
                      <div className="space-y-3.5">
                        <div className="flex gap-4 items-center">
                          <span className="text-slate-900 dark:text-white text-sm font-bold opacity-70">✓</span>
                          <div className="flex-1 flex justify-between">
                            <span className="text-slate-900 dark:text-white font-semibold">React.js</span>
                            <span className="text-slate-500 dark:text-white/40">Strong</span>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-slate-900 dark:text-white text-sm font-bold opacity-70">✓</span>
                          <div className="flex-1 flex justify-between">
                            <span className="text-slate-900 dark:text-white font-semibold">Node OS</span>
                            <span className="text-slate-500 dark:text-white/40">Strong</span>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <span className="text-slate-400 dark:text-white/30 text-sm font-bold">−</span>
                          <div className="flex-1">
                            <span className="text-slate-900 dark:text-white font-semibold">System Design</span>
                            <p className="text-slate-500 dark:text-white/40 mt-1.5 leading-relaxed">Missing structural experience. Blocking ₹4L+ mid-level roles.</p>
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

      {/* Social Proof */}
      <section className="bg-white dark:bg-[#0A0A0A] border-y border-slate-200/60 dark:border-white/5 py-24">
        <Reveal className="container max-w-3xl text-center">
          <MessageSquareQuote className="h-8 w-8 text-slate-200 dark:text-white/10 mx-auto mb-8" />
          <blockquote className="text-[22px] md:text-[28px] font-medium leading-normal tracking-tight text-slate-900 dark:text-white/90">
            "I didn't realize I was underpaid by ₹4L until I mapped out my skill gaps with Zaprill. The report gave me the exact, concrete data I needed to negotiate my next offer confidently."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-[15px] font-bold text-slate-900 dark:text-white">Arjun M.</div>
              <div className="text-[13px] text-slate-500 dark:text-white/40 mt-1 font-medium tracking-wide">Senior Developer, Bangalore</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pain Section */}
      <section className="bg-[#fcfcfc] dark:bg-[#070707] py-32">
        <div className="container max-w-[1200px]">
          <Reveal>
            <SectionHeading
              title="Job hunting is broken."
              className="mb-20 text-center md:text-left [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <Card className="h-full p-8 rounded-2xl border-slate-200/60 dark:border-white/5 bg-white dark:bg-[#0A0A0A] hover:bg-slate-50 dark:hover:bg-white/[0.02] shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-10 w-10 flex items-center justify-center mb-8">
                      <Icon className="h-6 w-6 text-slate-900 dark:text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white/90 mb-3">{item.title}</h3>
                    <p className="text-slate-500 dark:text-white/50 text-[15px] leading-relaxed font-light">{item.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dark:bg-[#0A0A0A] border-y border-slate-200/60 dark:border-white/5 py-32">
        <div className="container max-w-[1200px]">
          <Reveal>
            <SectionHeading
              pill="Process"
              pillClassName="bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white dark:border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Three steps. One honest answer."
              description="No forms. No profile to fill. Just your resume."
              className="mb-24 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px] [&_p]:text-[19px] [&_p]:font-light [&_p]:mt-6"
            />
          </Reveal>
          <div className="relative mt-20 grid gap-16 lg:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-6 hidden border-t border-slate-200 dark:border-white/10 lg:block" />
            {processSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.15} className="relative flex flex-col items-center text-center max-lg:pb-12">
                {item.step !== "03" ? (
                  <div className="absolute left-1/2 top-12 h-full -translate-x-1/2 border-l border-slate-200 dark:border-white/10 lg:hidden" />
                ) : null}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-[15px] font-bold text-white dark:text-slate-900 shadow-[0_0_0_12px_#ffffff] dark:shadow-[0_0_0_12px_#0A0A0A]">
                  {item.step}
                </div>
                <h3 className="mt-10 text-[22px] font-bold tracking-tight text-slate-900 dark:text-white/90">{item.title}</h3>
                <p className="mt-5 max-w-sm text-slate-500 dark:text-white/50 text-[15px] leading-relaxed font-light">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Hook */}
      <section className="bg-slate-900 dark:bg-black text-white py-32 relative overflow-hidden">
        <div className="container max-w-4xl text-center relative z-10">
          <Reveal>
            <Badge className="bg-white/10 text-white/50 border-0 mb-10 font-sans tracking-widest px-3 py-1 text-[10px] uppercase font-bold">Your Salary Gap</Badge>
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tighter text-white mb-8 balanced leading-[1.1]">
              You could be earning more. Right now.
            </h2>
            <p className="text-[19px] text-slate-400 mb-16 balanced max-w-2xl mx-auto font-light leading-relaxed">
              The average Zaprill user discovers a ₹2–4 LPA salary gap within 2 minutes of uploading their resume.
            </p>
          </Reveal>
          
          <Reveal delay={0.2} className="mx-auto max-w-[500px]">
            <Card className="rounded-[20px] border border-white/10 bg-white/[0.02] p-10 text-left relative overflow-hidden shadow-2xl">
              <h3 className="text-center text-white/90 mb-10 text-[15px] tracking-wide uppercase font-semibold">Compensation Analysis</h3>
              <div className="space-y-8">
                {[
                  ["Your Current", "₹6,00,000", "text-slate-400 max-w-[32%] border-b-2 border-slate-600 bg-slate-600/10"],
                  ["Market Average", "₹9,20,000", "text-white/70 max-w-[60%] border-b-2 border-slate-400 bg-slate-400/10"],
                  ["Your Potential", "₹11,50,000", "text-white max-w-full border-b-2 border-white font-bold bg-white/10"]
                ].map(([label, value, classes]) => (
                  <div key={label} className="w-full">
                    <div className="flex justify-between text-[13px] mb-2 font-medium">
                      <span className="text-slate-400">{label}</span>
                      <span className={`tracking-wide ${classes.includes("text-white ") ? "text-white font-bold" : "text-white/60"}`}>{value}</span>
                    </div>
                    <div className={`h-2 text-transparent rounded-r-md ${classes}`}></div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <ButtonLink href={siteConfig.appUrl} className="bg-white hover:bg-slate-200 text-slate-900 border-0 px-8 py-3.5 rounded-full text-[15px] font-bold">
                  Calculate My Gap
                </ButtonLink>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-[#fcfcfc] dark:bg-[#070707] py-32">
        <div className="container max-w-[1200px]">
          <Reveal>
            <SectionHeading
              pill="Insights"
              pillClassName="bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white dark:border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Intelligence the other platforms skipped."
              className="mb-20 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={idx * 0.1}>
                  <Card className="h-full rounded-[20px] border border-slate-200/60 dark:border-white/5 bg-white dark:bg-[#0A0A0A] p-10 transition-all hover:-translate-y-[2px] shadow-sm hover:shadow-md">
                    <div className="mb-8">
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white/90 mb-4">{feature.title}</h3>
                    <p className="text-slate-500 dark:text-white/50 leading-relaxed text-[15px] font-light">{feature.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speed Proof */}
      <section className="bg-white dark:bg-[#0A0A0A] py-32 border-y border-slate-200/60 dark:border-white/5 relative overflow-hidden">
        <Reveal className="container max-w-3xl text-center relative z-10">
          <div className="text-[100px] md:text-[140px] font-bold text-slate-900 dark:text-white leading-none tracking-tighter mb-4 opacity-90">2 <span className="text-[60px] md:text-[80px]">min</span></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Speed matters.</h2>
          <p className="text-[19px] text-slate-500 dark:text-white/50 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            No account required. Upload your resume and get immediate insights into your complete market profile.
          </p>
          <ButtonLink href={siteConfig.appUrl} className="rounded-full px-10 h-14 text-[15px] font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 border-0 shadow-sm transition-all active:scale-[0.97]">
            Upload Now
          </ButtonLink>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fcfcfc] dark:bg-[#070707] py-32">
        <div className="container max-w-3xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-[48px] tracking-tighter font-bold text-slate-900 dark:text-white">Common Questions</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white dark:bg-[#0A0A0A] py-32 border-t border-slate-200/60 dark:border-white/5">
        <div className="container max-w-5xl">
          <Reveal>
            <SectionHeading
              pill="Pricing"
              pillClassName="bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white dark:border-0 uppercase tracking-widest text-[10px] font-bold"
              title="Start free. Upgrade when you're ready."
              className="mb-20 text-center [&_h2]:tracking-tighter [&_h2]:text-4xl md:[&_h2]:text-[48px]"
            />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <Card className="h-full rounded-[24px] border-slate-200/60 dark:border-white/10 bg-[#fcfcfc] dark:bg-transparent p-12 flex flex-col">
                <h3 className="text-[28px] font-bold tracking-tight text-slate-900 dark:text-white mb-2">Basic</h3>
                <div className="flex items-end gap-2 mb-10">
                  <div className="text-[54px] font-bold tracking-tighter leading-none text-slate-900 dark:text-white">₹0</div>
                  <div className="text-slate-500 dark:text-white/40 mb-2 font-medium">/ month</div>
                </div>
                <ul className="space-y-5 mb-12 flex-1">
                  {pricing.free.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start text-slate-600 dark:text-white/60">
                      <span className="text-slate-300 dark:text-white/20 mt-1 font-bold">—</span>
                      <span className="text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={siteConfig.appUrl} variant="secondary" className="w-full justify-center h-14 rounded-full border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white bg-white dark:bg-transparent dark:hover:bg-white/5 hover:bg-slate-50 font-bold active:scale-[0.98]">
                  Get Started
                </ButtonLink>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="h-full relative rounded-[24px] border-0 bg-slate-900 dark:bg-[#1A1A1A] p-12 flex flex-col shadow-xl">
                <div className="absolute top-8 right-10">
                  <Badge className="bg-white/10 text-white border-0 text-[10px] font-bold tracking-widest hover:bg-white/10 uppercase px-3 py-1">Pro</Badge>
                </div>
                <h3 className="text-[28px] font-bold tracking-tight text-white mb-2">Professional</h3>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-[54px] font-bold tracking-tighter leading-none text-white">₹499</div>
                  <div className="text-slate-400 mb-2 font-medium">/ month</div>
                </div>
                <div className="text-[13px] font-medium text-white/50 mb-10">or ₹4,499/year — save 25%</div>
                <ul className="space-y-5 mb-12 flex-1">
                  {pricing.pro.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start text-slate-300">
                      <span className="text-white mt-1 font-bold">—</span>
                      <span className="font-medium text-white text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={siteConfig.appUrl} className="w-full justify-center h-14 rounded-full bg-white text-slate-900 hover:bg-slate-100 border-0 font-bold active:scale-[0.98]">
                  Upgrade to Pro
                </ButtonLink>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 dark:bg-black border-t border-slate-800/50 dark:border-white/5 py-32 relative overflow-hidden">
        <Reveal className="container max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-[64px] font-bold tracking-tighter text-white mb-8 balanced">Stop guessing.<br/>Know your worth.</h2>
          <p className="text-[19px] text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 balanced">
            Built for professionals who are done leaving money on the table. It takes 2 minutes. It's completely free to start.
          </p>
          <div className="mb-8">
            <SpringButton href={siteConfig.appUrl} className="bg-white hover:bg-slate-200 text-slate-900 border-0 h-14 px-10 text-[15px] font-bold rounded-full">
              Upload Your Resume
            </SpringButton>
          </div>
          <div className="text-[13px] text-slate-500 font-medium tracking-wide">
            No account needed <span className="opacity-40 mx-3">·</span> Cancel Pro anytime <span className="opacity-40 mx-3">·</span> Data deleted on request
          </div>
        </Reveal>
      </section>
      
    </main>
  );
}
