import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
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
    <section className="section-padding bg-surface">
      <div className="container max-w-3xl text-center">
        <h1>See the product in action.</h1>
        <p className="mx-auto mt-5 max-w-2xl">
          Zaprill turns a resume into salary clarity, ranked job matches, and a
          practical skill-gap plan. The live experience runs on app.zaprill.com.
        </p>
        <div className="mt-8">
          <ButtonLink href={siteConfig.appUrl}>Open App</ButtonLink>
        </div>
      </div>
    </section>
  );
}
