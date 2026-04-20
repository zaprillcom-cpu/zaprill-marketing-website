import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Open App", href: siteConfig.appUrl },
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
    <footer className="bg-background text-foreground border-t border-border/10">
      <div className="container py-16">
        {/* Logo & tagline — centered on mobile, left on desktop */}
        <div className="text-center md:text-left space-y-4 mb-12">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <p className="max-w-xs mx-auto md:mx-0 text-[15px] leading-relaxed text-muted-foreground/80 font-light">
            Know Your Worth. Get the Job.
          </p>
        </div>

        {/* Link groups — 2-col on mobile, 3-col on md+ */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerGroups.map((group, idx) => (
            <div key={group.title} className={`space-y-4 text-center md:text-left ${idx === footerGroups.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
              <h2 className="text-base font-semibold text-foreground">{group.title}</h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-muted-foreground/70 font-light transition-colors hover:text-primary"
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

      <div className="border-t border-border/10">
        <div className="container py-8 text-center md:text-left">
          <p className="max-w-3xl mx-auto md:mx-0 text-[13px] leading-relaxed text-muted-foreground/60 font-medium">
            &copy; 2026 Zaprill. All rights reserved. Zaprill is an AI-powered career platform. Salary data is sourced from
            public job listings and may vary by location and experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
