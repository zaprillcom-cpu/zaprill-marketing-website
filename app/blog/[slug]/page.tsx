import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, blogArticles, getRecommendedArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BlogShareButtons } from "@/components/blog-share-buttons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

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

  const recommendations = getRecommendedArticles(params.slug);

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

  // Structured data (@graph pattern)
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
      }
    ]
  };

  return (
    <article className="bg-background transition-colors duration-300">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
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
          
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-y border-border/50 py-8">
            <div className="flex items-center gap-4">
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
            <BlogShareButtons 
              url={`/blog/${article.slug}`} 
              title={article.title} 
              variant="outline" 
              size="default" 
            />
          </div>

          {article.image && (
            <div className="mt-12 md:mt-16">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={630}
                className="w-full h-auto rounded-[2rem] border border-border shadow-md"
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
                
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">
                    Share this article
                  </p>
                  <BlogShareButtons 
                    url={`/blog/${article.slug}`} 
                    title={article.title} 
                    className="flex-col items-start gap-3" 
                    variant="ghost"
                    showLabel={true}
                  />
                </div>
              </div>
            </aside>

            {/* Main Content Body */}
            <div className="min-w-0 flex-1">
              <div className="space-y-16 max-w-3xl">
                {article.sections.map((section, idx) => (
                  <section key={section.heading} id={`section-${idx}`} className="scroll-mt-28 group/section">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h2 className="text-3xl font-bold tracking-tight text-foreground">{section.heading}</h2>
                      <BlogShareButtons 
                        url={`/blog/${article.slug}#section-${idx}`} 
                        title={`${article.title} - ${section.heading}`} 
                        variant="ghost" 
                        size="icon" 
                        showLabel={false}
                        className="opacity-0 group-hover/section:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="space-y-6 text-[18px] leading-[1.8] text-foreground/90 font-medium">
                      {section.paragraphs.map((paragraph) => {
                        paragraphCount += 1;
                        return (
                          <div key={`${section.heading}-${paragraph.slice(0, 24)}`}>
                            <p dangerouslySetInnerHTML={{ __html: paragraph }} />
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

      {/* Recommendations Section */}
      {recommendations.length > 0 && (
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container">
            <Reveal>
              <SectionHeading
                pill="Keep Reading"
                title="Recommended for you"
                description="More insights to help you navigate your career and market value."
              />
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3 mt-16">
              {recommendations.map((item) => (
                <Reveal key={item.slug}>
                  <Card className="h-full group p-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md flex flex-col">
                    <div className={cn("relative w-full aspect-[16/9] bg-muted overflow-hidden", item.tintClass)}>
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <Badge variant="secondary" className={cn("rounded-full px-3 py-1 w-fit mb-4", item.badgeClass)}>
                        {item.category}
                      </Badge>
                      <h4 className="text-xl font-bold tracking-tight leading-[1.35] mb-3">
                        <Link href={`/blog/${item.slug}`} className="hover:text-primary transition-colors">
                          {item.title}
                        </Link>
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground/80 line-clamp-2 mb-6">
                        {item.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                         <span className="text-xs font-medium text-muted-foreground">
                           {new Date(item.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                         </span>
                         <BlogShareButtons 
                           url={`/blog/${item.slug}`} 
                           title={item.title} 
                           variant="ghost" 
                           size="sm" 
                           showLabel={false}
                         />
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
