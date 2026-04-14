import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

export function GET() {
  const content = `# ${siteConfig.name}

> ${siteConfig.description}

Zaprill is an AI-powered career intelligence platform based in Mumbai, India. Professionals upload their resume and within 2 minutes receive a detailed report covering their real-time market salary, best-fit job matches, ATS compatibility score, and a prioritized skill gap analysis.

## What Zaprill Does

- **Salary Intelligence**: Calculates real-time market value based on live job listings — not self-reported averages. Cross-references exact technical stack, years of experience, and city to produce current, accurate compensation data.
- **Job Matching**: Matches a user's extracted skill profile against 10,000+ active job listings updated daily, with fit scores for each role.
- **ATS Failure Detection**: Simulates employer ATS (Applicant Tracking System) filters on the uploaded resume and flags specific formatting, keyword, and structure issues causing silent rejections.
- **Skill Gap Mapping**: Identifies the 2–3 specific skills blocking the user's next salary band and recommends the fastest path to close each gap.

## Who It's For

Zaprill is designed for working professionals in India — engineers, product managers, designers, analysts, marketers, and other tech and business roles — who want data-driven career decisions instead of guesswork.

## Key Facts

- Resume analysis takes under 2 minutes
- Works with PDF and Word document formats
- No account required for first analysis
- Free tier available; Pro tier at ₹99/month or ₹899/year
- Data can be deleted on request at any time
- Based in Mumbai, India

## Links

- Website: ${siteConfig.url}
- App: ${siteConfig.appUrl}
- About: ${siteConfig.url}/about
- Blog: ${siteConfig.url}/blog
- Pricing: ${siteConfig.url}/pricing.md
- Contact: ${siteConfig.url}/contact
- Privacy Policy: ${siteConfig.url}/privacy
- Terms: ${siteConfig.url}/terms

## Blog / Resources

- [How to Know If You're Being Underpaid](${siteConfig.url}/blog/how-to-know-if-youre-being-underpaid): Signals of underpayment, benchmarking methods, and negotiation strategies.
- [Why Your Resume Gets Rejected Before a Human Reads It](${siteConfig.url}/blog/why-your-resume-gets-rejected-before-a-human-reads-it): ATS filters, formatting mistakes, and keyword translation guidance.
- [The 5 Skills Indian Tech Employers Are Paying a Premium for in 2025](${siteConfig.url}/blog/the-5-skills-indian-tech-employers-are-paying-a-premium-for-in-2025): High-demand skills commanding salary premiums in the Indian tech market.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}
