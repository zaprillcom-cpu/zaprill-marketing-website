import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import {
  ArrowUpRight,
  Globe2,
  Linkedin,
  Mail,
  Phone,
  QrCode,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    url: siteConfig.url,
  },
};

export const metadata: Metadata = {
  title: "Vishnuraj Vishwakarma",
  description:
    "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
  alternates: {
    canonical: "/links/vishnuraj",
  },
  openGraph: {
    title: "Vishnuraj Vishwakarma — AI Systems Representative",
    description:
      "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
    type: "website",
    url: `${siteConfig.url}/links/vishnuraj`,
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnuraj Vishwakarma — AI Systems Representative",
    description:
      "Online business card for Vishnuraj Vishwakarma, AI Systems Representative at Zaprill.",
    images: ["/og"],
  },
};

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishnuraj-vishwakarma/",
    value: "/vishnuraj-vishwakarma",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:vishnurajvishwakarma@gmail.com",
    value: "vishnurajvishwakarma@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+919322871984",
    value: "+91 93228 71984",
    icon: Phone,
  },
  {
    label: "Zaprill app",
    href: siteConfig.appUrl,
    value: "app.zaprill.com",
    icon: Globe2,
    external: true,
  },
];

const focusPoints = [
  "AI agents",
  "ATS intelligence",
  "Automation",
  "Market intelligence",
];

export default function VishnurajCardPage() {
  return (
    <div className="py-10 md:py-14">
      <Script
        id="vishnuraj-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="container max-w-[1080px]">
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <div className="data-label">Zaprill / Team card</div>
          <div className="data-label">Mumbai, India</div>
        </div>

        <div className="grid border border-border bg-card lg:grid-cols-[1.25fr_0.75fr]">
          <section className="p-6 sm:p-8 lg:border-r lg:border-border lg:p-10">
            <div className="grid gap-8 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start">
              <Image
                src="/founder/visnhuraj.webp"
                alt="Vishnuraj Vishwakarma"
                width={360}
                height={360}
                priority
                className="aspect-square w-full max-w-[200px] rounded-md border border-border object-cover"
              />

              <div>
                <div className="eyebrow">Team Zaprill</div>
                <h1 className="max-w-[12ch] text-[40px] sm:text-[46px]">
                  Vishnuraj Vishwakarma
                </h1>
                <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-signal">
                  AI Systems Representative
                </p>
                <p className="mt-6 max-w-xl">
                  Vishnuraj works across product communication, AI systems, and
                  market intelligence at Zaprill—a career intelligence and salary
                  transparency platform.
                </p>

                <div className="mt-6 border-y border-border py-3">
                  <span className="data-label mr-3">Focus</span>
                  <span className="text-sm text-foreground">
                    {focusPoints.join(" / ")}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/vishnuraj-vishwakarma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "lg" })}
                  >
                    Open LinkedIn
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    Visit Zaprill
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-border">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="grid gap-2 border-b border-border py-4 hover:bg-muted/50 sm:grid-cols-[150px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Icon className="size-4 text-signal" aria-hidden="true" />
                      {link.label}
                    </span>
                    <span className="min-w-0 truncate text-sm text-muted-foreground">
                      {link.value}
                    </span>
                    {link.external ? (
                      <ArrowUpRight
                        className="hidden size-4 text-muted-foreground sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </section>

          <aside className="border-t border-border bg-muted/30 p-6 sm:p-8 lg:border-t-0 lg:p-10">
            <div className="flex items-center gap-2 text-signal">
              <QrCode className="size-4" aria-hidden="true" />
              <div className="data-label text-signal">Open the product</div>
            </div>
            <h2 className="mt-3 text-2xl">Scan to visit app.zaprill.com</h2>
            <p className="mt-3 text-sm leading-6">
              Use the QR code on a phone, or open the direct link below.
            </p>

            <div className="mt-7 max-w-[260px] border border-border bg-white p-4">
              <Image
                src="/zapril-site-qr.png"
                alt="QR code linking to app.zaprill.com"
                width={520}
                height={520}
                className="h-auto w-full"
              />
            </div>

            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-5 h-auto p-0 text-sm",
              )}
            >
              app.zaprill.com
              <ArrowUpRight aria-hidden="true" />
            </a>

            <div className="mt-10 border-l-2 border-signal pl-4">
              <div className="data-label">About Zaprill</div>
              <p className="mt-2 text-sm leading-6">
                Resume analysis, salary benchmarks, explainable job matches,
                skill gaps, and ATS feedback in one career brief.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
