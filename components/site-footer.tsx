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
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white border-t border-slate-800/50 dark:border-white/5">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div className="space-y-4">
          <Logo className="[&_span]:text-white" />
          <p className="max-w-xs text-[15px] leading-relaxed text-slate-400 font-light">
            Know Your Worth. Get the Job.
          </p>
          <p className="text-[13px] text-slate-500 font-medium">
            &copy; 2025 Zaprill. All rights reserved.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h2 className="text-base font-semibold text-white">{group.title}</h2>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-slate-400 font-light transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800/50 dark:border-white/5">
        <div className="container py-8">
          <p className="max-w-3xl text-[13px] leading-relaxed text-slate-500 font-medium">
            Zaprill is an AI-powered career platform. Salary data is sourced from
            public job listings and may vary by location and experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
