export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "Salary" | "Resume" | "Career";
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  readTime?: string;
  tintClass: string;
  badgeClass: string;
  image: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "how-to-know-if-youre-being-underpaid",
    title: "How to know if you're being underpaid (and what to do about it)",
    description:
      "Learn the signals that you're underpaid, how to benchmark yourself, and the smartest way to turn salary data into a stronger negotiation.",
    excerpt:
      "Most professionals don’t find out they’re underpaid until after they leave. Here’s how to catch the gap sooner and act on it.",
    category: "Salary",
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-21",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    authorRole: "Head of Compensation Data",
    readTime: "8 min read",
    image: "/blogs/how-to-know-if-youre-being-underpaid.webp",
    tintClass: "bg-[#EFF6FF]",
    badgeClass: "bg-[#DBEAFE] text-[#1E40AF]",
    sections: [
      {
        heading: "Why underpayment is so hard to spot",
        paragraphs: [
          "Most people assume salary is a direct reflection of value. In reality, pay is a lagging indicator. It's often a reflection of timing, negotiation confidence, company budget, location, and how visible your skills are to the market. That is why highly talented people can stay underpaid for years without realizing it.",
          "If your last raise was based on an internal percentage band (like a standard 5% annual hike) instead of current market demand, there is a good chance your compensation is lagging behind what similar candidates can command today. Internal raises happen gradually, while market rates leap in bounds.",
          "The hardest part is that employers rarely volunteer this information. Job descriptions may hide compensation. Internal compensation grids are sealed. Over time, a gap of ten or fifteen percent can quietly become a massive thirty percent deficit, especially in fast-moving fields like product, engineering, analytics, and revenue marketing.",
          "Being underpaid does not mean you made a mistake. It simply means you have been flying blind without access to clean market data. When you know exactly what top-tier employers are paying for your specific combination of title, skills, city, and experience, compensation stops feeling mysterious and starts becoming measurable."
        ]
      },
      {
        heading: "The practical signals you are lagging behind",
        paragraphs: [
          "One of the clearest signals is recruiter behavior. If external outbound recruiters consistently reach out offering roles that pay 20-40% above your current salary, the market has likely re-priced your skills. Do not dismiss these emails. Keep a spreadsheet of the numbers they share—it is raw, valuable market research.",
          "Another signal is 'Pay Compression'. This happens when new hires come in near or above the compensation of existing employees because current market rates moved faster than legacy internal salary reviews. If a junior or mid-level peer joins your team and their perceived lifestyle or accidental salary disclosures hint they are earning more than you, compression is at play.",
          "Finally, watch for 'Skill Premiums'. Employers pay disproportionately more for combinations that are hard to find. A backend developer with deep cloud cost optimization experience, or a marketer with a strong data engineering background, are priced very differently from generic profiles. If you have built a rare skill stack, but your salary is based on an older, generic title, you are almost certainly underpaid."
        ]
      },
      {
        heading: "How to benchmark yourself correctly",
        paragraphs: [
          "Start by collecting multiple reference points. Public job listings can reveal compensation bands, but they often list overly broad ranges (e.g., $100k-$200k). Salary communities, offer-sharing posts like Blind or Reddit, and reports from Zaprill can add critical context.",
          "The most useful benchmark compares like with like. You must index based on similar title, exact years of experience, primary skills, city tier, and company stage (Seed vs Series C vs Public Enterprise).",
          "Do not rely on a single 'Average Salary' headline. Average salaries include poor negotiators, legacy hires, and struggling companies. Instead, look for a percentile range. Ask yourself: what would the 50th percentile (average) pay for my profile, and what would the 90th percentile (top-paying) pay? Aim for the 75th to 90th percentile if your performance reviews regularly rate you as 'Exceeds Expectations'."
        ]
      },
      {
        heading: "Framing the conversation",
        paragraphs: [
          "Once you know there is a salary gap, resist the urge to rush into a confrontation. The goal is not to prove your employer wrong or express anger. The goal is a mutual realignment of value. Update your Zaprill profile, sharpen your 'Win Document' (a list of measurable outcomes you've delivered), and prepare for a business conversation.",
          "When you negotiate, anchor on external data, not individual frustration. A highly effective framing is: 'I’ve been mapping my current scope and outcomes against the broader market for 2026. Based on reliable benchmarking, the market rate for my level of impact is sitting between X and Y. I want to build a long-term trajectory here. How can we work together over the next review cycle to align my compensation with this market reality?'",
          "If the answer is a hard no, ask what concrete business milestones would make a yes possible. If they cannot provide milestones, you now have the ultimate clarity: your fastest path to market rate requires an external move. Use the gap as strategy."
        ]
      }
    ]
  },
  {
    slug: "tech-salary-negotiation-india-2026",
    title: "The complete guide to tech salary negotiation in India (2026)",
    description: "A deep dive into the current state of tech compensation in India and how to negotiate your worth in a changing market.",
    excerpt: "Negotiating in India is different. Understanding the local nuances of CTC, variable flow, and stock options is key.",
    category: "Salary",
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-18",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    authorRole: "Compensation Strategy Team",
    readTime: "7 min read",
    image: "/blogs/tech-salary-negotiation-india-2026.webp",
    tintClass: "bg-[#F0FDF4]",
    badgeClass: "bg-[#DCFCE7] text-[#166534]",
    sections: [
      {
        heading: "The Great Indian Salary Reset of 2026",
        paragraphs: [
          "The landscape of tech compensation in India has undergone a massive shift over the last two years. The era of 'hiring at any cost' driven by zero-interest policy has completely been replaced by 'pay for performance.' While total compensation packages remain high for top-tier talent, the structural payout of these offers has mutated.",
          "Understanding your 'Cost to Company' (CTC) is more critical than ever. In 2026, many Indian firms are padding their offers with 'phantom' benefits—wellness allowances, aggressive variable tranches, and heavily delayed retention bonuses that show up in your headline CTC but never hit your bank account predictably.",
          "Market data from Zaprill suggests that for Senior Engineering roles in Tier-1 cities like Bangalore, Pune, and Hyderabad, base salaries have stabilized, but the gap between 'average' and 'top-tier' pay has widened significantly, often by reaching a 40-50% differential based entirely on niche skill possession and negotiation leverage."
        ]
      },
      {
        heading: "Mastering the Fixed vs. Variable Ratio",
        paragraphs: [
          "One of the most common pitfalls in Indian tech negotiation is blinding yourself to the fixed-to-variable ratio. A shockingly high CTC can be deeply deceptive if 30% of it is tied to performance metrics that depend on overall company performance, which you cannot control.",
          "In the current market, a safe fixed-to-variable ratio is 85:15 or 90:10 for most non-sales engineering and product roles. If a company offers a 70:30 split, you should heavily discount that 30% in your financial planning. Treat it as a moonshot bonus, not guaranteed income.",
          "When negotiating, execute a 'Floor Check'. Use market benchmarks to show that your fixed component must reflect your unquestionable baseline market value. If HR pushes for a highly variable setup, negotiate the 'performance criteria' explicitly into your offer letter. Ensure targets are objective, measurable, and tied only to your direct output."
        ]
      },
      {
        heading: "The Gratuity and EPF Illusion",
        paragraphs: [
          "Don't overlook the 'invisible' deductions. Gratuity and Employer EPF contributions are practically always baked into the headline Indian CTC, but these are statutory requirements, not cash you can invest today.",
          "Always calculate your 'Net Take Home' (NTH) after all taxes, retirals, and variable contingencies before you accept an offer. A 35 Lakh CTC with heavy stock options and high variable might actually yield less monthly liquidity than a 28 Lakh pure-fixed offer from a stable enterprise."
        ]
      }
    ]
  },
  {
    slug: "why-your-resume-gets-rejected-before-a-human-reads-it",
    title: "Why your resume gets rejected before a human reads it",
    description:
      "A practical breakdown of ATS filters, common resume mistakes, and how to make your experience readable to both software and recruiters.",
    excerpt:
      "When a resume disappears into silence, the problem is often format, clarity, or relevance before it is quality. Here’s what really happens.",
    category: "Resume",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    authorRole: "Lead Technical Recruiter",
    readTime: "6 min read",
    image: "/blogs/why-your-resume-gets-rejected-before-a-human-reads-it.webp",
    tintClass: "bg-[#FEF3C7]",
    badgeClass: "bg-[#FEF3C7] text-[#B45309]",
    sections: [
      {
        heading: "The first rejection is usually mechanical",
        paragraphs: [
          "When candidates imagine resume review, they picture a thoughtful recruiter sitting with a cup of coffee, reading line by line. Fast forward to 2026: this almost never happens. The first pass is often performed by an Applicant Tracking System (ATS), whose job is to parse, categorize, and relentlessly filter incoming applications.",
          "If your resume is hard to read structurally, missing the right semantic signals, or misaligned with the job's core requirements, a human will literally never lay eyes on it.",
          "ATS filters are not artificial superintelligence. They are pattern matchers. They look for titles, bounding dates, core skills, and overlapping keywords connected to the job description. If you use bizarre layouts or describe your work using hyper-creative terminology, the parser fails. Legibility beats creativity every single time."
        ]
      },
      {
        heading: "Formatting mistakes that quietly kill strong profiles",
        paragraphs: [
          "Highly designed Canva resumes are a notorious trap. Multi-column layouts, text embedded inside images, graphic skill bars (e.g. 'JavaScript: 4/5 dots'), and icons replacing text may look polished, but they completely confuse legacy and modern parsers alike.",
          "The safest structure is a brutalist, single-column layout with standard headings (Experience, Education, Skills) and plain text. Complex tables and headers often result in your previous job title being merged with your university degree in the ATS backend.",
          "Another major issue is keyword stuffing vs translation. Candidates think they should paste the job description text invisibly in white font. Don't do this. Modern ATS systems flag this instantly. Instead, 'Translate' your impact. If you ran 'Customer Lifecycle', and they ask for 'CRM Engagement', change your bullet points to naturally flow with the phrasing 'CRM Engagement'."
        ]
      },
      {
        heading: "Vague bullets make exceptional people look average",
        paragraphs: [
          "A resume fails when it lists tasks instead of proving economic impact. Sentences starting with 'Responsible for...', 'Worked on...', or 'Helped with...' are incredibly weak because they show zero ownership.",
          "A robust bullet point uses the XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z].' For example: Instead of 'Helped with reporting', write 'Built an automated Looker pipeline in SQL that cut weekly manual effort by six hours and improved executive visibility.'",
          "Specificity creates credibility. When you optimize for exact numbers and explicit tooling, you naturally embed the keywords the ATS is hunting for, solving both the robot problem and the human problem simultaneously."
        ]
      }
    ]
  },
  {
    slug: "the-5-skills-indian-tech-employers-are-paying-a-premium-for-in-2025",
    title: "The 5 skills Indian tech employers are paying a premium for in 2026",
    description:
      "The skills showing up in higher-paying Indian tech roles, why employers value them, and how to position them on your resume.",
    excerpt:
      "Premium pay doesn’t always follow job title. It often follows capability combinations that are rare, current, and commercially useful.",
    category: "Career",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-12",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    authorRole: "Market Research",
    readTime: "5 min read",
    image: "/blogs/the-5-skills-indian-tech-employers-are-paying-a-premium-for-in-2025.webp",
    tintClass: "bg-[#DCFCE7]",
    badgeClass: "bg-[#DCFCE7] text-[#166534]",
    sections: [
      {
        heading: "Why specific skills command outsized salary jumps",
        paragraphs: [
          "Indian tech hiring has become deeply selective, but companies have absolutely not stopped paying for top-tier leverage. They are willing to spend massive premiums when a candidate brings capabilities that reduce ramp-up time, improve decision quality, or unlock immediate revenue.",
          "The critical nuance is that employers rarely pay extra for isolated keywords anymore. A generic AWS certification alone is not enough. The premium flows toward applied, cross-functional skill combinations."
        ]
      },
      {
        heading: "1. Applied AI workflow orchestration",
        paragraphs: [
          "The biggest salary premium today belongs to people who can inject AI practically inside real corporate workflows. That includes prompt evaluation architectures, retrieval-augmented generation (RAG) implementation, and connecting LLM outputs to legacy ERP systems.",
          "Employers do not want hobbyist experimenters. They want engineers and product managers who understand latency, cost-per-token, and fallback mechanisms for production AI."
        ]
      },
      {
        heading: "2. Cloud cost and infrastructure efficiency (FinOps)",
        paragraphs: [
          "Companies are under immense pressure to tighten unit economics. Engineers who understand cloud architecture alongside deep cost-control (FinOps) are commanding massive counter-offers. It is not just about scaling systems; it is about scaling them economically."
        ]
      },
      {
        heading: "3. Revenue-aware technical execution",
        paragraphs: [
          "Whether you are in engineering, data, or product design, if you understand how your code or pixels literally generate revenue or prevent churn, your market value skyrockets. The era of the siloed 'ticket-taker' is dying. 'Business-ready' engineers who ask 'why are we building this?' are the ones reaching staff and principal bands."
        ]
      }
    ]
  },
  {
    slug: "equity-vs-base-pay-startups",
    title: "Understanding equity vs base pay in startups",
    description: "How to value ESOPs, RSUs, and strike price when evaluating a startup offer in the current economic climate.",
    excerpt: "Stock options can be life-changing, but they carry massive risk. How to balance your cash needs with long-term wealth potential.",
    category: "Salary",
    publishedAt: "2026-04-10",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    authorRole: "Editorial",
    readTime: "4 min read",
    image: "/blogs/equity-vs-base-pay-startups.webp",
    tintClass: "bg-[#FAF5FF]",
    badgeClass: "bg-[#F3E8FF] text-[#6B21A8]",
    sections: [
      {
        heading: "The ESOP Paradox",
        paragraphs: [
          "The dream of joining a startup is heavily tied to the potential of Employee Stock Option Plans (ESOPs). However, candidates are becoming cautious. Paper wealth is only valuable if there is a path to liquidity. Look beyond the number of options and understand the 'Percentage of Ownership'. A million options is worthless if there are a billion shares outstanding.",
          "The most important number in your ESOP grant is the 'Strike Price'—the price at which you are allowed to buy the shares. Always ask about the last preferred round price and how the current strike price compares to it."
        ]
      },
      {
        heading: "Risk Tolerance and Cash Flow",
        paragraphs: [
          "The golden rule of startup compensation is: Never take equity in exchange for a base salary that doesn't securely cover your essential living costs and basic savings goals. Equity is a highly volatile 'bonus' for your future self, while base pay is oxygen for your present self.",
          "Ask for a liquidity roadmap during the interview. Does the company have a history of secondary sales? If not, you could be waiting 10 years to see a dime."
        ]
      }
    ]
  },
  {
    slug: "remote-vs-in-office-compensation-trends",
    title: "Remote vs In-office compensation trends (2026)",
    description: "Are companies still paying a premium for in-office talent? How geofencing and cost-of-living adjustments are affecting pay.",
    excerpt: "The 'remote discount' is becoming a reality in some sectors. Learn how your location impacts your earning power today.",
    category: "Salary",
    publishedAt: "2026-04-08",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    readTime: "3 min read",
    image: "/blogs/remote-vs-in-office-compensation-trends.webp",
    tintClass: "bg-[#FFF7ED]",
    badgeClass: "bg-[#FFEDD5] text-[#9A3412]",
    sections: [
      {
        heading: "The Death of 'One Pay Fits All'",
        paragraphs: [
          "'Geographic Pay Differentials' are cementing as the norm. A software engineer living in Bangalore can often expect to earn 20-30% more than someone with the exact same title living in a remote Tier-3 city, depending completely on the firm's remote philosophy.",
          "This shift is driven by 'Location Premiums' for those willing to be in a physical hub. It's about preserving culture density. When calculating your 'Real Income,' don't just look at gross pay. Factor in the brutal rent hikes in hub cities against the commute times."
        ]
      }
    ]
  },
  {
    slug: "resume-red-flags-rejection",
    title: "Common resume red flags that cause instant rejections",
    description: "Even the best candidates get rejected for avoidable errors. Learn what makes a recruiter hit 'Delete' in 6 seconds.",
    excerpt: "Your resume is a marketing document, not a biography. Avoid these 5 deal-breakers.",
    category: "Resume",
    publishedAt: "2026-04-06",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    readTime: "4 min read",
    image: "/blogs/resume-red-flags-rejection.webp",
    tintClass: "bg-[#FEF2F2]",
    badgeClass: "bg-[#FEE2E2] text-[#991B1B]",
    sections: [
      {
        heading: "The Invisible Killers: Formatting and Logic",
        paragraphs: [
          "Recruiters process more applications than ever. The first red flag is 'Inconsistent Logic.' If your job titles don't show a clear progression, or if there are unexplained 2-year gaps without context, the 'Rejection' button is just a click away.",
          "Formatting 'Noise' is the second major flag. Elaborate graphics, massive headshots (if not culturally expected), and un-parseable font choices immediately signal a lack of professional calibration to the tech industry standard."
        ]
      }
    ]
  },
  {
    slug: "ask-for-a-raise-market-data",
    title: "How to ask for a raise using market data",
    description: "Turn your annual review from a 'hope' into a 'negotiation' by using objective salary intelligence.",
    excerpt: "Market data is your best friend when asking for more. Learn how to present it without being confrontational.",
    category: "Salary",
    publishedAt: "2026-04-04",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    readTime: "5 min read",
    image: "/blogs/ask-for-a-raise-market-data.webp",
    tintClass: "bg-[#ECFDF5]",
    badgeClass: "bg-[#D1FAE5] text-[#065F46]",
    sections: [
      {
        heading: "Moving from Emotion to Evidence",
        paragraphs: [
          "Most people ask for a raise because they 'feel' they deserve one or have a personal financial need. A raise is a market correction for the economic value you provide. You must shift the conversation from your needs to the objective market rate.",
          "Build a 'Win Document' that aligns your exact contributions with core company goals—revenue, efficiency, quality, or speed. Combine this with third-party compensation benchmarking, and you transform a pleading request into an undeniable business case."
        ]
      }
    ]
  },
  {
    slug: "data-science-vs-data-engineering-salary",
    title: "Data Science vs Data Engineering: Salary paths",
    description: "Which path is paying more in 2026? A comparison of compensation, skill requirements, and future-proofing.",
    excerpt: "The roles are converging, but the pay scales are migrating toward engineering infrastructure builders.",
    category: "Career",
    publishedAt: "2026-04-03",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    readTime: "4 min read",
    image: "/blogs/data-science-vs-data-engineering-salary.webp",
    tintClass: "bg-[#EFF6FF]",
    badgeClass: "bg-[#DBEAFE] text-[#1E40AF]",
    sections: [
      {
        heading: "The Shift toward Data Engineering",
        paragraphs: [
          "The market has aggressively shifted its premium toward Data Engineering. Companies have realized that even the most advanced AI generation models are totally useless if the data pipelines feeding them are hallucinating, slow, or constantly failing.",
          "A Senior Data Engineer with experience scaling Snowflake, dbt, and Kafka often commands a 15-20% higher base salary than a traditional modeling Data Scientist. The market is brutally rewarding the 'plumbers' over the 'architects'."
        ]
      }
    ]
  },
  {
    slug: "soft-skills-premium-pay-senior-engineering",
    title: "Soft skills commanding premium pay in Senior Engineering roles",
    description: "It is not just about the code. Learn how communication, mentorship, and business intuition increase your market value.",
    excerpt: "The 'Brilliant Jerk' era is over. Resilience, empathy, and clarity are the new currency for Senior Engineers.",
    category: "Career",
    publishedAt: "2026-04-01",
    author: "Zaprill Team",
    authorImage: "/zaprill-logo-2.png",
    readTime: "5 min read",
    image: "/blogs/soft-skills-premium-pay-senior-engineering.webp",
    tintClass: "bg-[#F5F3FF]",
    badgeClass: "bg-[#EDE9FE] text-[#5B21B6]",
    sections: [
      {
        heading: "The 'Force Multiplier' Effect",
        paragraphs: [
          "At the Staff level, technical output is a baseline expectation. What companies pay for is your ability to be a 'Force Multiplier'—making the 5 engineers around you 20% better.",
          "It requires Technical Empathy: the ability to explain complex architectural decisions to non-technical stakeholders in a way that directly aligns with business goals. Translating 'We need to refactor' into 'This reduces feature delivery time by 30%' is exactly how you unlock a compensation breakthrough."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
