import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, Globe2, Linkedin, Mail, Phone, QrCode, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishnuraj Vishwakarma",
  jobTitle: "AI Systems Representative",
  image: `${siteConfig.url}/founder/visnhuraj.webp`,
  url: `${siteConfig.url}/links/vishnuraj`,
  sameAs: ["https://www.linkedin.com/in/vishnuraj-vishwakarma/"],
  email: "vishnurajvishwakarma@gmail.com",
  telephone: "+91 93228 71984",
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  }
};

export const metadata: Metadata = {
  title: "Vishnuraj Vishwakarma",
  description:
    "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
  alternates: {
    canonical: "/links/vishnuraj"
  },
  openGraph: {
    title: "Vishnuraj Vishwakarma — AI Systems Representative",
    description:
      "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
    type: "website",
    url: `${siteConfig.url}/links/vishnuraj`,
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnuraj Vishwakarma — AI Systems Representative",
    description:
      "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
    images: ["/og"]
  }
};

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishnuraj-vishwakarma/",
    value: "linkedin.com/in/vishnuraj-vishwakarma",
    icon: Linkedin
  },
  {
    label: "Email",
    href: "mailto:vishnurajvishwakarma@gmail.com",
    value: "vishnurajvishwakarma@gmail.com",
    icon: Mail
  },
  {
    label: "Phone",
    href: "tel:+919322871984",
    value: "+91 93228 71984",
    icon: Phone
  },
  {
    label: "App",
    href: "https://app.zaprill.com",
    value: "app.zaprill.com",
    icon: Globe2
  }
];

const focusPoints = ["AI Agents", "ATS Intelligence", "Automation", "Market Intelligence"];

export default function VishnurajCardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--home-surface-1)] text-foreground transition-colors duration-300">
      <Script id="vishnuraj-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(161,125,255,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(161,125,255,0.10),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(246,243,255,0.92))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(161,125,255,0.20),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(161,125,255,0.08),_transparent_28%),linear-gradient(180deg,_rgba(16,15,30,0.96),_rgba(16,15,30,0.90))]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#A17DFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#A17DFF]/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-[1480px] items-center px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid w-full gap-8 xl:grid-cols-[1.12fr_0.88fr] xl:gap-10">
          <Card className="relative overflow-hidden rounded-[32px] border border-border/70 bg-card/85 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8 lg:min-h-[760px] lg:p-10 xl:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A17DFF] via-[#c0a9ff] to-[#7aa8ff]" />
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#A17DFF]/10 blur-3xl" />

            <div className="flex flex-wrap items-center gap-3">
              <Badge className="rounded-full border-0 bg-[#A17DFF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-[#7E5BFF] hover:bg-[#A17DFF]/10 dark:text-[#D8CBFF]">
                Online Business Card
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-[#A17DFF]" />
                Zaprill
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <div className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px]">
                <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white bg-[#A17DFF] shadow-[0_20px_60px_rgba(161,125,255,0.28)] dark:border-white/10">
                  <Image
                    src="/founder/visnhuraj.webp"
                    alt="Vishnuraj Vishwakarma portrait"
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="mt-8 w-full space-y-6 text-center">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/80">Team Zaprill</p>
                  <h1 className="mx-auto max-w-[18ch] text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] leading-[1.1] tracking-tight">
                    Vishnuraj Vishwakarma
                  </h1>
                  <p className="text-lg font-semibold text-[#7E5BFF] dark:text-[#D8CBFF] sm:text-xl">
                    AI Systems Representative
                  </p>
                </div>

                <div className="mx-auto max-w-[44rem] space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-[16px]">
                  <p>
                    Zaprill.com is an AI-powered career intelligence and salary transparency platform.
                  </p>
                  <p className="text-foreground/90">
                    AI Agents, ATS Intelligence, Automation, and Market Intelligence shape the way we help people understand their career value and make faster decisions.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {focusPoints.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[#A17DFF]/20 bg-[#A17DFF]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-foreground/80"
                    >
                      {point}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 justify-center sm:flex-row sm:flex-wrap">
                  <Link href="https://www.linkedin.com/in/vishnuraj-vishwakarma/" target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 rounded-full px-5 font-bold">
                      Open LinkedIn
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://app.zaprill.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="h-12 rounded-full px-5 font-bold">
                      Visit app.zaprill.com
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                    rel={link.label === "Email" || link.label === "Phone" ? undefined : "noopener noreferrer"}
                    className="group flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A17DFF]/30 hover:bg-[#A17DFF]/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-[#7E5BFF] group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-foreground">
                        {link.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>

          <div className="grid gap-8">
            <Card className="overflow-hidden rounded-[32px] border border-border/70 bg-card/90 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8 xl:min-h-[460px]">
              <div className="flex flex-col items-center w-full">
                {/* QR Code Container at Top */}
                <div className="w-full max-w-[200px] rounded-[28px] border border-border bg-white p-4 shadow-sm">
                  <div className="overflow-hidden rounded-[20px] bg-white p-2">
                    <Image
                      src="/zapril-site-qr.png"
                      alt="QR code for app.zaprill.com"
                      width={520}
                      height={520}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Title Section below QR */}
                <div className="mt-6 flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A17DFF]/10 text-[#7E5BFF] dark:text-[#D8CBFF]">
                    <QrCode className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.34em] text-muted-foreground">Scan the card</p>
                    <h2 className="mt-1 text-2xl font-black tracking-tight">Open the site instantly</h2>
                  </div>
                </div>

                {/* Rest of the content down */}
                <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-muted/35 p-5 xl:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Primary link</p>
                    <a
                      href="https://app.zaprill.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-xl font-black tracking-tight text-foreground hover:text-[#7E5BFF] dark:hover:text-[#D8CBFF]"
                    >
                      app.zaprill.com
                    </a>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Use this QR or the direct link to open the app and explore Zaprill from any device.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
                    <div className="mt-4 space-y-3.5 text-[15px]">
                      <div className="flex flex-col gap-0.5 border-b border-border/70 pb-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">LinkedIn</span>
                        <a className="break-all font-semibold text-foreground hover:text-[#7E5BFF] dark:hover:text-[#D8CBFF]" href="https://www.linkedin.com/in/vishnuraj-vishwakarma/" target="_blank" rel="noopener noreferrer">
                          /vishnuraj-vishwakarma
                        </a>
                      </div>
                      <div className="flex flex-col gap-0.5 border-b border-border/70 pb-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                        <a className="break-all font-semibold text-foreground hover:text-[#7E5BFF] dark:hover:text-[#D8CBFF]" href="mailto:vishnurajvishwakarma@gmail.com">
                          vishnurajvishwakarma@gmail.com
                        </a>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Phone</span>
                        <a className="break-all font-semibold text-foreground hover:text-[#7E5BFF] dark:hover:text-[#D8CBFF]" href="tel:+919322871984">
                          +91 93228 71984
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-[32px] border border-border/70 bg-[linear-gradient(135deg,rgba(161,125,255,0.11),rgba(161,125,255,0.04))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-muted-foreground">Brand line</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">
                AI-powered career intelligence and salary transparency platform.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                Vishnuraj helps connect the product story to users, partners, and teams through a simple contact-first card that works on phones, laptops, and QR scans.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}