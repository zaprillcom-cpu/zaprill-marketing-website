import type { Metadata } from "next";
import { notFound } from "next/navigation";

// import { AdSlot } from "@/components/ad-slot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
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
      images: ["/og"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og"],
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
    image: `${siteConfig.url}/og`,
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

      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Breadcrumb navigation (visible) */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground font-medium">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">
                /
              </li>
              <li
                aria-current="page"
                className="text-foreground font-semibold truncate max-w-[300px]"
              >
                {article.title}
              </li>
            </ol>
          </nav>

          <Badge className={article.badgeClass}>{article.category}</Badge>
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight">{article.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground/90 max-w-3xl leading-relaxed">{article.description}</p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground font-medium">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.author}</span>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Updated{" "}
                  <time dateTime={article.updatedAt}>
                    {new Date(article.updatedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-5">
                <h2 className="text-[30px]">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => {
                  paragraphCount += 1;

                  return (
                    <div key={`${section.heading}-${paragraph.slice(0, 24)}`}>
                      <p>{paragraph}</p>
                      {/* {paragraphCount === 3 ? (
                        <div className="mt-8">
                          <AdSlot slot="article-mid" />
                        </div>
                      ) : null} */}
                    </div>
                  );
                })}
              </section>
            ))}
          </div>

          {/* <div className="mt-12">
            <AdSlot slot="article-end" />
          </div> */}

          <div className="mt-16 rounded-3xl bg-muted/30 border border-border p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold">See where your profile can go next.</h3>
            <p className="mx-auto mt-4 max-w-2xl">
              Upload your resume to Zaprill and get salary insight, job matches,
              and skill gap clarity in minutes.
            </p>
            <div className="mt-6">
              <Link href={siteConfig.appUrl}>
                <Button variant={"link"}>Open the App</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
