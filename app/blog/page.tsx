import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import { AdSlot } from "@/components/ad-slot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogArticles } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

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

export default function BlogPage() {
  return (
    <div className="bg-background transition-colors duration-300">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="max-w-2xl mx-auto">Career clarity, explained.</h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Practical writing on salary, resumes, and career growth for people
              who want better decisions, not generic advice.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {blogArticles.map((article) => (
              <Reveal key={article.slug}>
                <Card className="h-full group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md flex flex-col">
                  <div className={cn("relative w-full aspect-[16/9] bg-muted overflow-hidden", article.tintClass)}>
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
                  <div className="p-7 flex-1 flex flex-col">
                    <Badge variant="secondary" className={cn("rounded-full px-3 py-1 w-fit", article.badgeClass)}>
                      {article.category}
                    </Badge>
                    <h4 className="mt-6 text-xl font-bold tracking-tight">
                      <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h4>
                    <p className="mt-4 text-sm text-muted-foreground font-medium">
                      {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground/80 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-8">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                      >
                        Read full article 
                        <span className="transition-transform group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
