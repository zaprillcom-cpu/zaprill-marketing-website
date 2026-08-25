import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import { DynamicCookieBanner as CookieBanner } from "@/components/dynamic-cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site";
import { Toaster } from "sonner";

import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  display: "swap",
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
    "Zaprill",
    "Zapril",
    "Zaprll",
    "Zarpril",
    "Zaprill Tech",
    "Zapril Tech",
    "Zapril salary",
    "Zaprill career",
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
        alt: "Zaprill career brief with salary and job-match evidence"
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "google-adsense-account": "ca-pub-4010004205574660"
  }
};

// Organization + WebSite structured data (global, @graph pattern)
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      alternateName: ["Zapril", "Zaprll", "Zarpril", "Zaprill Tech", "Zapril Tech", "Zaprill.com", "Zapril.com"],
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
      sameAs: Object.values(siteConfig.socials),
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"]
      }
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      alternateName: ["Zapril", "Zaprll", "Zarpril", "Zaprill Tech", "Zapril Tech", "Zaprill.com", "Zapril.com"],
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
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      alternateName: ["Zapril", "Zaprll", "Zarpril", "Zaprill Tech", "Zapril Tech", "Zaprill.com", "Zapril.com"],
      url: siteConfig.url,
      image: `${siteConfig.url}/og`,
      description: siteConfig.description,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mumbai",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.076,
        longitude: 72.8777
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      },
      priceRange: "₹0 - ₹555",
      sameAs: Object.values(siteConfig.socials),
      areaServed: {
        "@type": "Country",
        name: "India"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delay={100}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(globalSchema)
              }}
            />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main id="main-content" tabIndex={-1} className="flex-1">
                {children}
              </main>
              <SiteFooter />
            </div>
            <CookieBanner />
            <Toaster position="top-center" richColors />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
