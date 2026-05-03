"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const REDIRECT_SECONDS = 5;

export default function NotFound() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      router.replace("/");
    }, REDIRECT_SECONDS * 1000);

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((previous) => (previous <= 1 ? 0 : previous - 1));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
    };
  }, [router]);

  const progress = useMemo(
    () => ((REDIRECT_SECONDS - secondsLeft) / REDIRECT_SECONDS) * 100,
    [secondsLeft]
  );

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.replace("/");
  };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--home-surface-1)]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[110px]" />
      </div>

      <div className="container flex min-h-[70vh] items-center justify-center py-16 md:py-24">
        <Card className="w-full max-w-2xl border border-border/70 bg-card/85 py-0 backdrop-blur-xl">
          <CardContent className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Error 404
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              This page took a wrong turn.
            </h1>

            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              The link may be outdated or the page may have moved. We will
              automatically take you back home.
            </p>

            <div className="mt-7 rounded-3xl border border-border/60 bg-background/70 p-5">
              <p className="text-sm font-medium text-foreground">
                Redirecting in{" "}
                <span className="font-bold text-primary">{secondsLeft}s</span>
              </p>
              <div
                aria-hidden="true"
                className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted"
              >
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "rounded-full px-5"
                )}
              >
                <Home className="mr-1 size-4" />
                Go home now
              </Link>

              <button
                type="button"
                onClick={handleBack}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-5"
                )}
              >
                <ArrowLeft className="mr-1 size-4" />
                Go back
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
