import Link from "next/link";

import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { siteConfig } from "@/lib/site";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Analyze your resume", href: siteConfig.appUrl },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Career guides", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--footer-bg)] text-foreground">
      <div className="container grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6">
            Clear salary benchmarks, explainable job matches, and practical skill-gap guidance from one resume.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-block text-sm font-semibold underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            {siteConfig.email}
          </a>
        </div>

        <NewsletterForm
          title="Career notes worth opening"
          description="Practical guidance on salaries, resumes, and the Indian tech job market."
          compact
          className="border-0 bg-transparent p-0"
        />
      </div>

      <div className="border-t border-border">
        <div className="container grid gap-10 py-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="data-label text-foreground">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

      <div className="border-t border-border">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">© {new Date().getFullYear()} Zaprill. All rights reserved.</p>
          <p className="text-xs">Salary estimates vary by role, location, and experience.</p>
        </div>
      </div>
    </footer>
  );
}
