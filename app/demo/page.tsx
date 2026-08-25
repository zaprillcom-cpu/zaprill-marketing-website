import type { Metadata } from "next";

import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Preview the Zaprill product experience — see how resume analysis, salary intelligence, and skill gap mapping work.",
  alternates: {
    canonical: "/demo"
  },
  openGraph: {
    title: "Demo — Zaprill",
    description:
      "Preview the Zaprill product experience — see how resume analysis, salary intelligence, and skill gap mapping work.",
    type: "website",
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo — Zaprill",
    description:
      "Preview the Zaprill product experience — see how resume analysis, salary intelligence, and skill gap mapping work.",
    images: ["/og"]
  }
};

export default function DemoPage() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <div className="container max-w-3xl">
        <div className="eyebrow">Product preview</div>
        <h1>See the product in action.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8">
          Zaprill turns a resume into salary clarity, ranked job matches, and a
          practical skill-gap plan. The live experience runs on app.zaprill.com.
        </p>
        <div className="mt-8">
          <a href={siteConfig.appUrl} className={buttonVariants({ size: "lg" })}>
            Open the app
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
