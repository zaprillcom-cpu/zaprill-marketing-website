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

export const blogArticles = blogArticlesData as BlogArticle[];

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
