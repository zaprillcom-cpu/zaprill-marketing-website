import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

export function GET() {
  const content = `# Pricing — ${siteConfig.name}

Last updated: 2026-04-14

## Basic (Free)
- Price: ₹0/month
- Resume analysis: Once per month
- Job matches: 3 matched roles
- Salary comparison: Basic market comparison
- Skill gap: Overview only
- Account required: No
- Sign up: ${siteConfig.appUrl}

## Professional (Pro)
- Price: ₹99/month (billed monthly) | ₹899/year (billed annually — save 25%)
- Resume analysis: Unlimited
- Job matches: Unlimited
- Salary intelligence: Full detailed report with percentile rankings
- AI resume builder: 3 optimized resumes per month
- Skill gap: Detailed map with recommended courses and learning paths
- Priority support: Yes
- Cancel anytime: Yes
- Sign up: ${siteConfig.appUrl}

## Enterprise
- Contact: ${siteConfig.email}
- Custom pricing for teams and organizations
- Bulk employee career intelligence reports
- API access for HR platforms

## Notes
- All plans include data deletion on request
- No credit card required for the free tier
- Pro plan can be cancelled at any time with no penalty
- Salary data sourced from real-time public job listings, updated daily
- Currency: Indian Rupees (₹ / INR)
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}
