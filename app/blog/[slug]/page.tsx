import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ArrowRight } from "lucide-react";

import { BlogShareButtons } from "@/components/blog-share-buttons";
import { buttonVariants } from "@/components/ui/button";
import {
  blogArticles,
  getArticleBySlug,
  getRecommendedArticles,
} from "@/lib/blog";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: ArticlePageProps,
): Promise<Metadata> {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteConfig.url}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author],
      section: article.category,
      images: [article.image || "/og"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image || "/og"],
    },
  };
}

export default async function ArticlePage(props: ArticlePageProps) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const recommendations = getRecommendedArticles(params.slug);
  const wordCount = article.sections.reduce(
    (total, section) =>
      total +
      section.paragraphs.reduce(
        (sectionTotal, paragraph) =>
          sectionTotal + paragraph.split(/\s+/).length,
        0,
      ),
    0,
  );

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        wordCount,
        articleSection: article.category,
        inLanguage: "en",
        image: article.image
          ? `${siteConfig.url}${article.image}`
          : `${siteConfig.url}/og`,
        author: {
          "@type": "Organization",
          name: article.author,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/og`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Career guides",
            item: `${siteConfig.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${siteConfig.url}/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article>
        <header className="border-b border-border py-12 md:py-16">
          <div className="container max-w-[980px]">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-foreground hover:underline"
                  >
                    Career guides
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="data-label text-signal">{article.category}</div>
            <h1 className="mt-5 max-w-[18ch] text-[40px] sm:text-[48px] lg:text-[54px]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 md:text-xl">
              {article.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-border py-5">
              <div className="flex items-center gap-3">
                {article.authorImage ? (
                  <Image
                    src={article.authorImage}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full border border-border object-cover"
                  />
                ) : null}
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {article.author}
                  </div>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                    {article.readTime ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <BlogShareButtons
                url={`/blog/${article.slug}`}
                title={article.title}
                variant="outline"
                size="sm"
              />
            </div>

            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={630}
                className="mt-10 h-auto w-full border border-border object-cover"
                priority
              />
            ) : null}
          </div>
        </header>

        <div className="container grid max-w-[1080px] gap-12 py-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <aside className="hidden lg:block" aria-label="Article contents">
            <div className="sticky top-24 border-t border-border pt-5">
              <div className="data-label">In this guide</div>
              <nav className="mt-4 flex flex-col">
                {article.sections.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#section-${index}`}
                    className="border-l border-border py-2 pl-3 text-sm leading-5 text-muted-foreground hover:border-signal hover:text-foreground"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
              <div className="mt-8 border-t border-border pt-5">
                <div className="data-label mb-3">Share</div>
                <BlogShareButtons
                  url={`/blog/${article.slug}`}
                  title={article.title}
                  className="flex-col items-start"
                  variant="ghost"
                  size="sm"
                />
              </div>
            </div>
          </aside>

          <div className="min-w-0 max-w-[720px]">
            <div className="space-y-12">
              {article.sections.map((section, index) => (
                <section
                  key={section.heading}
                  id={`section-${index}`}
                  className="scroll-mt-24"
                >
                  <h2 className="border-t border-border pt-6 text-2xl md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-[17px] leading-8 text-foreground/90 [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={`${section.heading}-${paragraph.slice(0, 32)}`}
                        className="text-[17px] leading-8 text-foreground/90"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <footer className="mt-14 border-y border-border py-7">
              <div className="flex gap-4">
                {article.authorImage ? (
                  <Image
                    src={article.authorImage}
                    alt=""
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-full border border-border object-cover"
                  />
                ) : null}
                <div>
                  <div className="data-label">Written by</div>
                  <div className="mt-1 font-heading text-xl font-semibold">
                    {article.author}
                  </div>
                  {article.authorRole ? (
                    <div className="mt-1 text-sm text-signal">
                      {article.authorRole}
                    </div>
                  ) : null}
                  <p className="mt-2 text-sm leading-6">
                    Reporting on career strategy, compensation, and better job
                    decisions.
                  </p>
                </div>
              </div>
            </footer>

            <aside className="mt-10 border border-border bg-card p-6 sm:p-8">
              <div className="data-label text-signal">Use your own evidence</div>
              <h2 className="mt-2 text-2xl">Turn your resume into a career brief.</h2>
              <p className="mt-3 max-w-xl">
                See a salary range, explainable job matches, skill gaps, and ATS
                feedback based on your profile.
              </p>
              <a
                href={siteConfig.appUrl}
                className={cn(buttonVariants({ size: "lg" }), "mt-6")}
              >
                Analyze my resume
                <ArrowRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </article>

      {recommendations.length > 0 ? (
        <section className="border-t border-border bg-muted/40 py-14 md:py-16">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Continue reading</div>
                <h2>Related career guides</h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-semibold text-foreground underline decoration-signal decoration-2 underline-offset-4 sm:block"
              >
                View all guides
              </Link>
            </div>

            <div className="mt-9 grid gap-8 md:grid-cols-3">
              {recommendations.map((item) => (
                <article key={item.slug} className="flex flex-col">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="relative aspect-[16/10] overflow-hidden border border-border bg-muted"
                    aria-label={`Read ${item.title}`}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </Link>
                  <div className="flex flex-1 flex-col border-b border-border py-5">
                    <div className="data-label text-signal">{item.category}</div>
                    <h3 className="mt-3 text-xl">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="decoration-signal decoration-2 underline-offset-4 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <time
                      dateTime={item.publishedAt}
                      className="mt-auto pt-4 text-xs text-muted-foreground"
                    >
                      {formatDate(item.publishedAt)}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
