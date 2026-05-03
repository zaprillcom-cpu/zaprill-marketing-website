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
  
  // Need 2 related and 1 random
  let recommendations: BlogArticle[] = [];
  
  // Get up to 2 related
  recommendations.push(...related.slice(0, 2));
  
  // Get 1 random from remaining (if we don't have 3 yet)
  const remaining = others.filter((a) => !recommendations.find((r) => r.slug === a.slug));
  if (remaining.length > 0 && recommendations.length < 3) {
    // Pick 1 random from remaining
    const randomIndex = Math.floor(Math.random() * remaining.length);
    recommendations.push(remaining[randomIndex]);
  }
  
  return recommendations;
}
