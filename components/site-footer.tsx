import Link from "next/link";

import { NewsletterForm } from "@/components/newsletter-form";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Open App", href: siteConfig.appUrl },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/demo" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Legal Disclaimer", href: "/disclaimer" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/20 bg-[var(--footer-bg)] text-foreground dark:border-white/10 dark:text-white">
      <div className="container py-10">
        <div className="mb-8 grid items-center gap-6 lg:grid-cols-[1fr_minmax(560px,640px)]">
          <div className="text-center md:text-left space-y-4">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="max-w-xs mx-auto md:mx-0 text-[15px] leading-relaxed text-muted-foreground/85 font-light dark:text-white/65">
              Know Your Worth. Get the Job.
            </p>
          </div>

          <NewsletterForm
            title=""
            description="Sign up for newsletter and blog updates."
            compact
            className="w-full lg:ml-auto"
          />
        </div>

        {/* Link groups — 2-col on mobile, 3-col on md+ */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {footerGroups.map((group, idx) => (
            <div key={group.title} className={`space-y-3 text-center md:text-left ${idx === footerGroups.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
              <h2 className="text-base font-semibold text-foreground dark:text-white">{group.title}</h2>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted-foreground/80 font-light transition-colors hover:text-foreground dark:text-white/65 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/20 dark:border-white/10">
        <div className="container py-8 text-center">
          <p className="max-w-3xl mx-auto text-[13px] leading-relaxed text-muted-foreground/70 font-medium dark:text-white/50">
            &copy; 2026 Zaprill. All rights reserved. Zaprill is an AI-powered career platform. Salary data is sourced from
            public job listings and may vary by location and experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
