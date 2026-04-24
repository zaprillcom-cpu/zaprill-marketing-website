import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  let paragraphCount = 0;

  // Calculate word count for schema
  const wordCount = article.sections.reduce(
    (total, section) =>
      total +
      section.paragraphs.reduce(
        (sTotal, p) => sTotal + p.split(/\s+/).length,
        0,
      ),
    0,
  );

  // Enhanced Article schema with all recommended fields
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    wordCount,
    articleSection: article.category,
    inLanguage: "en",
    image: article.image ? `${siteConfig.url}${article.image}` : `${siteConfig.url}/og`,
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
  };

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <article className="bg-background transition-colors duration-300">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />

      <section className="section-padding pb-6 md:pb-12">
        <div className="container max-w-4xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground font-medium">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">/</li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">/</li>
              <li aria-current="page" className="text-foreground font-semibold truncate max-w-[200px] md:max-w-[400px]">
                {article.title}
              </li>
            </ol>
          </nav>

          <Badge className={article.badgeClass}>{article.category}</Badge>
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">{article.title}</h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground/90 max-w-3xl leading-relaxed">{article.description}</p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {article.authorImage && (
              <Image src={article.authorImage} alt={article.author} width={48} height={48} className="rounded-full shadow-sm" />
            )}
            <div>
              <p className="font-bold text-foreground">{article.author}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                {article.readTime && <span>{article.readTime}</span>}
              </div>
            </div>
          </div>

          {article.image && (
            <div className="mt-12 md:mt-16 overflow-hidden rounded-3xl border border-border relative aspect-[2/1] md:aspect-[21/9] bg-muted shadow-md">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-[1100px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Sidebar Table of Contents */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-28 pt-2">
                <p className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground mb-5">
                  In this article
                </p>
                <nav className="flex flex-col gap-3.5">
                  {article.sections.map((section, idx) => (
                    <a 
                      key={idx} 
                      href={`#section-${idx}`} 
                      className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors leading-snug"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Body */}
            <div className="min-w-0 flex-1">
              <div className="space-y-12 max-w-3xl">
                {article.sections.map((section, idx) => (
                  <section key={section.heading} id={`section-${idx}`} className="scroll-mt-28 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">{section.heading}</h2>
                    <div className="space-y-6 text-[18px] leading-[1.8] text-foreground/90 font-medium">
                      {section.paragraphs.map((paragraph) => {
                        paragraphCount += 1;
                        return (
                          <div key={`${section.heading}-${paragraph.slice(0, 24)}`}>
                            <p>{paragraph}</p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Author Footer */}
              <div className="mt-20 border-t border-border pt-12 max-w-3xl">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-muted/40 p-8 rounded-3xl border border-border/50">
                  {article.authorImage && (
                    <Image src={article.authorImage} alt={article.author} width={72} height={72} className="rounded-full shadow-sm shrink-0" />
                  )}
                  <div className="text-center sm:text-left">
                    <p className="text-xl font-bold text-foreground">{article.author}</p>
                    {article.authorRole && (
                      <p className="text-sm font-semibold text-primary mt-1">{article.authorRole}</p>
                    )}
                    <p className="text-muted-foreground mt-3 text-[15px] leading-relaxed max-w-md">
                      Providing market-leading insights on career strategy, technical compensation, and negotiation.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-12 rounded-[2rem] bg-card border border-border shadow-md p-8 md:p-12 text-center relative overflow-hidden max-w-3xl group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">See where your profile can go next.</h3>
                  <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
                    Upload your resume to Zaprill and get salary insight, job matches, and skill gap clarity in minutes.
                  </p>
                  <div className="mt-8">
                    <Link href={siteConfig.appUrl}>
                      <Button size="lg" className="rounded-full px-8 text-base shadow-sm">
                        Open the App
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
