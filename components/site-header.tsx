"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 dark:bg-black/85 backdrop-blur-[20px]">
      <div className="container mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.appUrl}>
            <Button size="sm" className="text-[14px]">
              Open App
            </Button>
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-primary md:hidden"
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
          "overflow-hidden border-t border-border bg-white transition-all duration-200 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-text-secondary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.appUrl}>
            <Button className="mt-2 size-max">Open App</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
