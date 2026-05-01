import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

// Sensitive paths that should never be crawled or indexed
const blockedPaths = [
  "/api/",
  "/_next/",
  "/admin/",
  "/dashboard/",
  "/og",
  "/pricing-md"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: blockedPaths
      },
      // Explicitly allow AI search/citation bots
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/"
      },
      {
        userAgent: "PerplexityBot",
        allow: "/"
      },
      {
        userAgent: "ClaudeBot",
        allow: "/"
      },
      {
        userAgent: "anthropic-ai",
        allow: "/"
      },
      {
        userAgent: "Google-Extended",
        allow: "/"
      },
      {
        userAgent: "Bingbot",
        allow: "/"
      }
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
