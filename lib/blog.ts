import blogArticlesData from "@/data/blog-articles.json";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "Salary" | "Resume" | "Career";
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  readTime?: string;
  tintClass: string;
  badgeClass: string;
  image: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogArticles = (blogArticlesData as BlogArticle[]).sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRecommendedArticles(currentSlug: string) {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  const others = blogArticles.filter((a) => a.slug !== currentSlug);
  
  // Related: same category
  const related = others.filter((a) => a.category === current.category);
  
  // Keep recommendations stable across builds: two related guides, then the
  // newest remaining guide.
  const recommendations: BlogArticle[] = [];
  
  // Get up to 2 related
  recommendations.push(...related.slice(0, 2));
  
  // Add the newest remaining guide if the category has fewer than three posts.
  const remaining = others.filter((a) => !recommendations.find((r) => r.slug === a.slug));
  if (remaining.length > 0 && recommendations.length < 3) {
    recommendations.push(remaining[0]);
  }
  
  return recommendations;
}
