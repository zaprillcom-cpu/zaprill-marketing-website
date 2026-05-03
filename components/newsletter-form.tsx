"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type NewsletterFormProps = {
  className?: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

export function NewsletterForm({
  className,
  title = "Stay Ahead",
  description = "Get practical salary, resume, and market updates from Zaprill. No spam. Unsubscribe any time.",
  compact = false
}: NewsletterFormProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card",
        compact ? "rounded-2xl p-4 md:p-4" : "p-8 md:p-10",
        className
      )}
    >
      {title ? (
        <h2 className={cn("font-bold tracking-tight text-foreground", compact ? "text-2xl" : "text-3xl md:text-4xl")}>
          {title}
        </h2>
      ) : null}
      <p className={cn("max-w-2xl text-muted-foreground mx-auto text-center", compact ? "mt-2 text-sm" : "mt-4")}>{description}</p>

      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex items-center mx-auto max-w-sm",
          compact ? "mt-4 gap-2" : "mt-7 gap-3"
        )}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
          className={cn(
            "rounded-full bg-background px-4",
            compact ? "h-9 text-xs" : "h-12 text-sm"
          )}
        />
        <Button
          type="submit"
          className={cn(
            "rounded-full px-4 text-[10px] font-bold uppercase tracking-widest shrink-0",
            compact ? "h-9" : "h-12"
          )}
        >
          Subscribe
        </Button>
      </form>

      <p className={cn("text-muted-foreground mx-auto text-center", compact ? "mt-3 text-xs" : "mt-4 text-sm")} aria-live="polite">
        {isSubscribed
          ? "Thanks for subscribing. You'll receive the next issue in your inbox."
          : `We will only send career intelligence updates. Questions? ${siteConfig.email}`}
      </p>
    </div>
  );
}
