"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(() => {
    try {
      const savedConsent = localStorage.getItem("zaprill_cookie_consent");
      return savedConsent === "accepted" || savedConsent === "declined"
        ? savedConsent
        : null;
    } catch {
      return null;
    }
  });

  const handleConsent = (type: "accepted" | "declined") => {
    try {
      localStorage.setItem("zaprill_cookie_consent", type);
    } catch {
      // Continue with an in-memory choice when storage is unavailable.
    }
    setConsent(type);
  };

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src="https://www.googletagmanager.com/gtm.js?id=GTM-5QS3N5ZL"
            strategy="lazyOnload"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6NL8LQDZBV"
            strategy="lazyOnload"
          />
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4010004205574660"
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        </>
      ) : null}

      {consent === null ? (
        <aside
          className="fixed inset-x-4 bottom-4 z-50 ml-auto max-w-lg rounded-lg border border-border bg-card p-5 shadow-[0_18px_50px_rgb(0_0_0/0.16)] sm:left-auto sm:right-5"
          aria-label="Cookie preferences"
        >
          <h2 className="text-lg">Cookies on Zaprill</h2>
          <p className="mt-2 text-sm leading-6">
            We use optional analytics and advertising cookies to understand site usage. You can decline them and still use Zaprill. Read our{" "}
            <Link href="/cookies" className="font-medium text-foreground underline underline-offset-4">
              cookie policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={() => handleConsent("declined")}>
              Decline optional cookies
            </Button>
            <Button onClick={() => handleConsent("accepted")}>Allow cookies</Button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
