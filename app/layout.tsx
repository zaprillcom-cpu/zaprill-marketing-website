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
        alt: "Zaprill"
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
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
