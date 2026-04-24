import type { Metadata } from "next";
import { 
  Database, 
  Target, 
  ShieldCheck, 
  Rocket, 
  Globe2, 
  Users2 
} from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { NumberTicker } from "@/components/number-ticker";
import { Float } from "@/components/float";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Zaprill was built and the mission behind making salary and career intelligence more accessible.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About — Zaprill",
    description:
      "Learn why Zaprill was built and the mission behind making salary and career intelligence accessible to every professional.",
    type: "website",
    images: ["/og"]
  }
};

const stats = [
  { label: "Active Listings", value: 12000, suffix: "+", icon: Database },
  { label: "Daily Updates", value: 24, suffix: "h", icon: Rocket },
  { label: "Career Paths", value: 150, suffix: "+", icon: Target },
  { label: "Global Reach", value: 45, suffix: "%", icon: Globe2 },
];

const values = [
  {
    title: "Data Transparency",
    description: "We don't believe in black boxes. Our salary intelligence is aggregated from real-world disclosures and verified public listings, updated daily to reflect the actual market.",
    icon: ShieldCheck,
  },
  {
    title: "Human-Centric AI",
    description: "Technology should serve professionals, not filter them out. Our AI is designed to decode your true skill potential and translate it into clear, actionable career moves.",
    icon: Users2,
  },
  {
    title: "Global Intelligence",
    description: "Whether you're in Mumbai, New York, or London, we normalize data across locations and currencies to give you a truly objective view of your worth.",
    icon: Globe2,
  }
];

export default function AboutPage() {
  return (
    <main className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-border/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          <Reveal className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary uppercase tracking-widest text-[10px] font-bold px-3 py-1">
              Our Mission
            </Badge>
            <h1 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.95] mb-8">
              Built because job hunting <br />
              <span className="text-primary/60 dark:text-primary/40 italic">deserved better.</span>
            </h1>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] items-center">
            <Reveal delay={0.2}>
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                <p>
                  Zaprill started from a frustration that felt strangely universal:
                  smart, hardworking people were making career decisions with almost
                  no real information.
                </p>
                <p className="text-foreground font-normal">
                  The job hunt was full of guesswork. Salary conversations were opaque.
                  Resume advice was generic. Most tools expected candidates to do even
                  more work just to maybe get clarity.
                </p>
                <p>
                  We built Zaprill to flip the script. We believe your resume should be your 
                  strongest ally, instantly revealing your market value and the exact path 
                  to your next breakthrough.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Float>
                <Card className="p-8 md:p-12 rounded-[40px] border-border bg-card/50 backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket className="h-32 w-32 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">The Vision</h3>
                    <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">
                      By 2027, we aim to bridge the "worth gap" for 1 million professionals, 
                      ensuring that skill—not just connections—dictates compensation.
                    </p>
                    <div className="h-px w-full bg-border/50 mb-8" />
                    <div className="flex gap-4 items-center">
                      <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center overflow-hidden">
                        <Image 
                          src="/zaprill-logo-circle.webp" 
                          alt="Zaprill Logo" 
                          width={40} 
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-foreground">Team Zaprill</span>
                    </div>
                  </div>
                </Card>
              </Float>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/20 border-b border-border/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1} className="text-center">
                <div className="mb-4 flex justify-center">
                  <stat.icon className="h-6 w-6 text-primary/60" />
                </div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container">
          <Reveal>
            <SectionHeading
              pill="Our DNA"
              pillClassName="bg-muted text-foreground border-0 uppercase tracking-widest text-[10px] font-bold"
              title="How we're changing the game."
              description="Transparency isn't just a word at Zaprill—it's how our data is built."
              className="mb-20 text-center [&_h2]:text-4xl md:[&_h2]:text-5xl"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.1}>
                <Card className="h-full p-8 md:p-10 rounded-[32px] border-border bg-card hover:bg-accent transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] font-light">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-12 bg-[var(--home-surface-1)] border-y border-border/10">
        <div className="container max-w-4xl">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter">How we source our data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trust starts with transparency. Zaprill’s salary intelligence is powered by a multi-layered 
                  data aggregation engine. We collect and anonymize information from thousands of verified 
                  public job listings, recruitment disclosures, and real-time market offers.
                </p>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 italic text-sm text-foreground/80">
                  "Unlike static reports that are updated once a year, our models reflect current demand."
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter">Expertise & Accuracy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our team consists of recruitment specialists, data engineers, and career consultants 
                  who understand that a job is more than just a title. We factor in city-specific cost 
                  of living, niche skill premiums, and company-stage valuations.
                </p>
                <ul className="space-y-3 flex flex-col items-center md:items-start">
                  {["City-specific adjustments", "Skill-premium normalization", "Real-time market depth"].map((item) => (
                    <li key={item} className="flex gap-3 items-center text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final Mission Quote */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground balance">
              "Our mission is to give every professional access to the intelligence that was previously available only to the well-connected."
            </p>
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="h-14 w-px bg-gradient-to-b from-primary to-transparent" />
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">The Zaprill Standard</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
