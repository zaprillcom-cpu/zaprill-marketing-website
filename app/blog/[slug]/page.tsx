import type { Metadata } from "next";
import { notFound } from "next/navigation";

// import { AdSlot } from "@/components/ad-slot";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getArticleBySlug, blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`
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
      images: ["/og"]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og"]
    }
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  let paragraphCount = 0;

  // Calculate word count for schema
  const wordCount = article.sections.reduce(
    (total, section) =>
      total + section.paragraphs.reduce((sTotal, p) => sTotal + p.split(/\s+/).length, 0),
    0
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
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`
    }
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
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`
      }
    ]
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema])
        }}
      />

      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Breadcrumb navigation (visible) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
            <ol className="flex items-center gap-1.5">
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="select-none">
                /
              </li>
              <li>
                <a href="/blog" className="hover:text-text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li aria-hidden="true" className="select-none">
                /
              </li>
              <li aria-current="page" className="text-text-primary font-medium truncate max-w-[300px]">
                {article.title}
              </li>
            </ol>
          </nav>

          <Badge className={article.badgeClass}>{article.category}</Badge>
          <h1 className="mt-6">{article.title}</h1>
          <p className="mt-5 max-w-3xl">{article.description}</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric"
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
                      day: "numeric"
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

          <div className="mt-12 rounded-[16px] bg-surface p-8 text-center">
            <h3>See where your profile can go next.</h3>
            <p className="mx-auto mt-4 max-w-2xl">
              Upload your resume to Zaprill and get salary insight, job matches,
              and skill gap clarity in minutes.
            </p>
            <div className="mt-6">
              <ButtonLink href={siteConfig.appUrl}>Open the App</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
