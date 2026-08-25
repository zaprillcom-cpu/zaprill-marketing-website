import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { BlogShareButtons } from "@/components/blog-share-buttons";
import { NewsletterForm } from "@/components/newsletter-form";
import { blogArticles } from "@/lib/blog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Career Guides",
  description:
    "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Career Guides — Zaprill",
    description:
      "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
    type: "website",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Guides — Zaprill",
    description:
      "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
    images: ["/og"],
  },
};

const blogFaqs = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Zaprill calculate market value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zaprill compares a profile's experience, location, and skills with current job listings and disclosed compensation data to produce an estimated market range.",
      },
    },
    {
      "@type": "Question",
      name: "What topics does the Zaprill blog cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Zaprill career guides cover salary negotiation, the Indian technology job market, ATS-ready resumes, and practical career planning.",
      },
    },
  ],
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const pageStr =
    typeof resolvedParams.page === "string" ? resolvedParams.page : "1";
  const postsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(blogArticles.length / postsPerPage));
  const currentPage = Math.min(
    Math.max(1, Number.parseInt(pageStr, 10) || 1),
    totalPages,
  );

  const featuredPost = currentPage === 1 ? blogArticles[0] : null;
  const gridPosts =
    currentPage === 1
      ? blogArticles.slice(1, 10)
      : blogArticles.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage,
        );

  return (
    <div>
      <Script
        id="blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqs) }}
      />

      <section className="border-b border-border py-14 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">Career guides</div>
            <h1>Clear advice for your next move.</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 lg:justify-self-end">
            Practical reporting on salary, resumes, and career growth for
            professionals who want evidence before making a decision.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          {featuredPost ? (
            <article className="grid overflow-hidden border border-border bg-card lg:grid-cols-[1.15fr_0.85fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[430px]"
                aria-label={`Read ${featuredPost.title}`}
              >
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                ) : null}
              </Link>

              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="data-label text-signal">
                    {featuredPost.category}
                  </span>
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                  <span className="data-label">Featured report</span>
                </div>
                <h2 className="mt-6 text-3xl md:text-4xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="decoration-signal decoration-2 underline-offset-4 hover:underline"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-5 line-clamp-4">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time dateTime={featuredPost.publishedAt}>
                      {formatDate(featuredPost.publishedAt)}
                    </time>
                    {featuredPost.readTime ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{featuredPost.readTime}</span>
                      </>
                    ) : null}
                  </div>
                  <BlogShareButtons
                    url={`/blog/${featuredPost.slug}`}
                    title={featuredPost.title}
                    variant="ghost"
                    size="sm"
                    showLabel={false}
                  />
                </div>
              </div>
            </article>
          ) : null}

          <div
            className={cn(
              "grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
              featuredPost && "mt-14",
            )}
          >
            {gridPosts.map((article) => (
              <article key={article.slug} className="flex min-w-0 flex-col">
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative aspect-[16/10] overflow-hidden border border-border bg-muted"
                  aria-label={`Read ${article.title}`}
                >
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : null}
                </Link>
                <div className="flex flex-1 flex-col border-b border-border py-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="data-label text-signal">
                      {article.category}
                    </span>
                    {article.readTime ? (
                      <span className="data-label normal-case tracking-normal">
                        {article.readTime}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 text-2xl leading-[1.16]">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="decoration-signal decoration-2 underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <time
                      dateTime={article.publishedAt}
                      className="text-xs text-muted-foreground"
                    >
                      {formatDate(article.publishedAt)}
                    </time>
                    <BlogShareButtons
                      url={`/blog/${article.slug}`}
                      title={article.title}
                      variant="ghost"
                      size="sm"
                      showLabel={false}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 ? (
            <nav
              className="mt-14 flex items-center justify-center gap-2"
              aria-label="Blog pagination"
            >
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card hover:bg-muted"
                  aria-label="Previous page"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <span
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground opacity-40"
                  aria-hidden="true"
                >
                  <ArrowLeft className="size-4" />
                </span>
              )}

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) =>
                  page === currentPage ? (
                    <span
                      key={page}
                      aria-current="page"
                      className="inline-flex size-10 items-center justify-center rounded-md bg-primary font-mono text-sm font-semibold text-primary-foreground"
                    >
                      {page}
                    </span>
                  ) : (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card font-mono text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </Link>
                  ),
              )}

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card hover:bg-muted"
                  aria-label="Next page"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <span
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground opacity-40"
                  aria-hidden="true"
                >
                  <ArrowRight className="size-4" />
                </span>
              )}
            </nav>
          ) : null}

          <NewsletterForm
            className="mt-16"
            title="The useful part of the job market, once a month."
            description="A short briefing on compensation, hiring signals, and better resume decisions."
          />
        </div>
      </section>
    </div>
  );
}
