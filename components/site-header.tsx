"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--nav-bg)] text-foreground backdrop-blur-[20px] dark:border-white/10 dark:text-white">
      <div className="container mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground dark:text-white/75 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.appUrl}>
            <Button size="sm" className="text-[14px]">
              Open App
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden dark:border-white/20 dark:text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-[var(--nav-bg)] transition-all duration-200 md:hidden dark:border-white/10",
          open ? "max-h-[28rem]" : "max-h-0 border-t-0",
        )}
      >
        <div className="container mx-auto flex flex-col items-center gap-5 px-6 py-6 text-center">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <div key={item.href} className="flex h-10 items-center justify-center">
                <Link
                  href={item.href}
                  className="inline-flex h-full items-center justify-center text-base font-medium text-foreground/80 transition-colors hover:text-foreground dark:text-white/80 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="flex h-10 items-center justify-center">
              <ThemeToggle />
            </div>
            <div className="h-10" aria-hidden="true" />
          </div>
          <div className="mt-1 flex w-full max-w-[260px] flex-col items-center gap-3">
            <Link href={siteConfig.appUrl} className="w-full">
              <Button className="h-11 w-full justify-center rounded-full">Open App</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
