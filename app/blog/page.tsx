import type { Metadata } from "next";
import Link from "next/link";

// import { AdSlot } from "@/components/ad-slot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Career, salary, and resume advice from Zaprill to help professionals make smarter job decisions.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  return (
    <div className="bg-surface">
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1>Career clarity, explained.</h1>
            <p className="mx-auto mt-5 max-w-2xl">
              Practical writing on salary, resumes, and career growth for people
              who want better decisions, not generic advice.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <div key={article.slug} className="contents">
                <Card className="overflow-hidden rounded-[12px] border border-border shadow-none">
                  <div className={`h-[100px] ${article.tintClass}`} />
                  <div className="p-5">
                    <Badge className={article.badgeClass}>{article.category}</Badge>
                    <h4 className="mt-4">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h4>
                    <p className="mt-3 text-sm text-text-muted">
                      {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                    <p className="mt-4">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-4 inline-flex text-sm font-medium text-primary"
                    >
                      Read more →
                    </Link>
                  </div>
                </Card>
                {/* {index === 1 ? (
                  <div className="lg:col-span-3">
                    <AdSlot slot="blog-index-mid" />
                  </div>
                ) : null} */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
