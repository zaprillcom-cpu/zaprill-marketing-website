import type { MetadataRoute } from "next";

import { blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: siteConfig.appUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${siteConfig.url}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteConfig.url}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteConfig.url}/disclaimer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3
    },
    {
      url: `${siteConfig.url}/llms-txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4
    },
    ...blogArticles.map((article) => ({
      url: `${siteConfig.url}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt || article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
