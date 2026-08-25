"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.replace("/");
  };

  return (
    <div className="container flex min-h-[64vh] items-center py-14 md:py-20">
      <div className="grid w-full border-y border-border py-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-14">
        <div>
          <div className="font-mono text-6xl font-semibold tracking-[-0.06em] text-signal md:text-8xl">
            404
          </div>
          <div className="data-label mt-3">Page not found</div>
        </div>

        <div className="mt-8 max-w-2xl lg:mt-0">
          <h1 className="text-4xl md:text-5xl">This page took a wrong turn.</h1>
          <p className="mt-5 text-lg leading-8">
            The address may be incorrect, or the page may have moved. Choose
            where you want to go next—we will not redirect you automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className={buttonVariants({ size: "lg" })}>
              <Home aria-hidden="true" />
              Go home
            </Link>
            <button
              type="button"
              onClick={handleBack}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <ArrowLeft aria-hidden="true" />
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
