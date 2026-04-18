import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { AdsenseScript } from "@/components/adsense-script";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zaprill — Know Your Worth. Get the Job.",
    template: "%s — Zaprill"
  },
  description:
    "Upload your resume and instantly see salary potential, best-fit job matches, and the skills holding you back.",
  keywords: [
    "salary calculator India",
    "resume analysis",
    "ATS checker",
    "skill gap analysis",
    "salary benchmarking",
    "career intelligence",
    "job matching",
    "market value calculator",
    "resume optimization",
    "salary negotiation"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: "Zaprill — Know Your Worth. Get the Job.",
    description:
      "Upload your resume and instantly see salary potential, best-fit job matches, and the skills holding you back.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Zaprill — AI-Powered Career Intelligence Platform"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaprill — Know Your Worth. Get the Job.",
    description:
      "Upload your resume and instantly see salary potential, best-fit job matches, and the skills holding you back.",
    images: ["/og"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "r7wL5AWlqdyv31Tom9GqzZjV4bYNUifr1EWkAS-eRkw"
  },
  other: {
    "google-adsense-account": "ca-pub-4010004205574660"
  }
};

// Organization + WebSite structured data (global)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og`,
  description: siteConfig.description,
  email: siteConfig.email,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN"
  },
  sameAs: []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.appUrl}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen bg-background text-foreground antialiased">
        <GoogleAnalytics />
        <AdsenseScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
