"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("zaprill_cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: "accepted" | "declined") => {
    localStorage.setItem("zaprill_cookie_consent", type);
    setShowBanner(false);
    
    // In a real strict implementation, you would trigger/block scripts here.
    // For now, we are providing the disclosure and user choice as required by AdSense guidelines.
    if (type === "accepted") {
      window.location.reload();
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-2xl border border-border bg-background/80 p-6 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight">Cookie Consent</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use cookies to enhance your experience, analyze site traffic, and serve personalized ads.
                By clicking "Accept", you consent to our use of cookies. Read our{" "}
                <Link href="/cookies" className="underline underline-offset-4 hover:text-primary">
                  Cookie Policy
                </Link>{" "}
                for more details.
              </p>
            </div>
            <div className="flex w-full shrink-0 gap-3 sm:w-auto sm:items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleConsent("declined")}
                className="flex-1 sm:flex-none"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={() => handleConsent("accepted")}
                className="flex-1 sm:flex-none"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
