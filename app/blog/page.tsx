import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import { AdSlot } from "@/components/ad-slot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogArticles } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { NewsletterForm } from "@/components/newsletter-form";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog — Zaprill",
    description:
      "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
    type: "website",
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Zaprill",
    description:
      "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
    images: ["/og"]
  }
};

const blogFaqs = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Zaprill calculate market value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zaprill uses a multi-layered data aggregation engine that scans thousands of daily job listings, verified recruiter disclosures, and anonymized market offers to provide real-time compensation benchmarking."
      }
    },
    {
      "@type": "Question",
      "name": "What topics does the Zaprill blog cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our blog focuses on salary negotiation strategy, tech market trends in India, resume optimization for ATS systems, and data-driven career planning."
      }
    }
  ]
};

export default function BlogPage() {
  return (
    <div className="bg-background transition-colors duration-300">
      <Script
        id="blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqs) }}
      />
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="max-w-2xl mx-auto">Career clarity, explained.</h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Practical writing on salary, resumes, and career growth for people
              who want better decisions, not generic advice.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {/* Featured Post */}
            {blogArticles.length > 0 && (() => {
              const article = blogArticles[0];
              return (
                <Reveal>
                  <Card className="group p-0 gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row lg:h-[500px]">
                    <div className={cn("relative w-full md:w-3/5 bg-muted overflow-hidden flex-shrink-0 aspect-[16/9] md:aspect-auto", article.tintClass)}>
                      {article.image && (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 60vw"
                          priority
                        />
                      )}
                    </div>
                    <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className={cn("rounded-full px-3 py-1 w-fit", article.badgeClass)}>
                          {article.category}
                        </Badge>
                        {article.readTime && (
                          <span className="text-sm font-semibold tracking-tight text-muted-foreground">{article.readTime}</span>
                        )}
                      </div>
                      <h3 className="mt-6 text-3xl font-bold tracking-tight leading-tight">
                        <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-muted-foreground/80 line-clamp-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-8 border-t border-border pt-6">
                        <p className="text-[13px] font-medium text-muted-foreground">
                          {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })()}

            {/* Sub-grid Posts */}
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
              {blogArticles.slice(1).map((article) => (
                <Reveal key={article.slug}>
                  <Card className="h-full group p-0 gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md flex flex-col">
                    <div className={cn("relative w-full aspect-[2/1] bg-muted overflow-hidden", article.tintClass)}>
                      {article.image && (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className={cn("rounded-full px-3 py-1 w-fit", article.badgeClass)}>
                          {article.category}
                        </Badge>
                        {article.readTime && (
                           <span className="text-xs font-bold text-muted-foreground">{article.readTime}</span>
                        )}
                      </div>
                      <h4 className="mt-5 text-xl font-bold tracking-tight leading-[1.35]">
                        <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground/80 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto border-t border-border pt-6">
                        <p className="text-xs font-medium text-muted-foreground">
                          {new Date(article.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>

          </div>
          <Reveal className="mt-20">
            <NewsletterForm className="bg-muted/30" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
