"use client";

import { FormEvent, useId, useState } from "react";

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
  const emailId = useId();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card",
        compact ? "p-5" : "p-6 md:p-8",
        className
      )}
    >
      {title ? (
        <h2 className={cn("font-heading font-semibold tracking-tight text-foreground", compact ? "text-xl" : "text-2xl md:text-3xl")}>
          {title}
        </h2>
      ) : null}
      <p className={cn("max-w-2xl text-muted-foreground", compact ? "mt-1 text-sm" : "mt-3")}>{description}</p>

      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex max-w-md flex-col items-stretch sm:flex-row",
          compact ? "mt-4 gap-2" : "mt-6 gap-3"
        )}
      >
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <Input
          id={emailId}
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
          className={cn(
            "bg-background px-3",
            compact ? "h-10 text-sm" : "h-11 text-sm"
          )}
        />
        <Button
          type="submit"
          className={cn(
            "shrink-0 px-5",
            compact ? "h-10" : "h-11"
          )}
        >
          Subscribe
        </Button>
      </form>

      <p className={cn("text-muted-foreground", compact ? "mt-3 text-xs leading-5" : "mt-4 text-sm")} aria-live="polite">
        {isSubscribed
          ? "Thanks for subscribing. You'll receive the next issue in your inbox."
          : `We will only send career intelligence updates. Questions? ${siteConfig.email}`}
      </p>
    </div>
  );
}
