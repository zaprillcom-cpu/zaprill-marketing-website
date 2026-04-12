import type { MetadataRoute } from "next";

import { blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/demo"
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date("2026-04-12")
    })),
    ...blogArticles.map((article) => ({
      url: `${siteConfig.url}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt)
    }))
  ];
}
