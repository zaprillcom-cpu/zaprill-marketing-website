const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'data/blog-articles.json');
let articles = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));

// 1. Add 2 New Articles
const newArticle1 = {
  slug: "tech-layoffs-salary-impact-2026",
  title: "How Recent Tech Layoffs Actually Impacted Software Engineering Salaries in India",
  description: "Despite headlines about hiring freezes and layoffs, top-tier engineering talent is seeing a divergence in compensation. Here is the data-driven reality.",
  excerpt: "Despite headlines about hiring freezes, top-tier engineering talent is seeing a divergence in compensation.",
  category: "Salary",
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: "Varun Sharma",
  authorImage: "/images/authors/varun.png",
  authorRole: "Head of Compensation Data",
  readTime: "6 min read",
  image: "/images/blog/layoffs-salary-impact.webp",
  tintClass: "bg-blue-900/20",
  badgeClass: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  sections: [
    {
      heading: "The Myth of the Salary Crash",
      paragraphs: [
        "In the wake of global tech realignments, the dominant narrative suggests that engineering salaries have universally dropped. However, our data reveals a starkly different reality: compensation has not crashed; it has polarized. While average or generic tech roles have seen a stagnation in base pay, specialized engineering talent—particularly in AI, infrastructure, and data—has continued to command a significant premium.",
        "The perceived drop is largely due to the elimination of hyper-inflated, zero-interest-rate era equity packages for mid-level developers. Startups and enterprise firms are now prioritizing profitability, meaning they are highly selective. When they do hire for mission-critical roles, the base compensation remains highly competitive. The market has shifted from a candidate's market for everyone to a candidate's market for top performers."
      ]
    },
    {
      heading: "The Flight to Quality and Security",
      paragraphs: [
        "We are seeing a notable trend where senior engineers are willingly accepting slightly lower equity in exchange for higher base salaries and stronger cash components. This 'flight to quality' means that stable, profitable companies are able to attract top talent without relying solely on the promise of an IPO. Consequently, the cash compensation bands for Senior and Staff engineers at profitable tech firms have actually widened upwards.",
        "Moreover, companies are deploying aggressive retention budgets. If you are an engineer deeply embedded in core product architecture, your employer knows that replacing you in this market is expensive and risky. This is why many top performers are receiving off-cycle adjustments disguised as 'market corrections' just to prevent poaching from aggressive, well-funded competitors."
      ]
    },
    {
      heading: "Navigating the New Compensation Landscape",
      paragraphs: [
        "To navigate this polarized market, engineers must shift their focus from generalist capabilities to measurable business impact. High-paying roles are increasingly tied to revenue generation, cost reduction, or system reliability. If you can directly connect your engineering work to the company's bottom line, you are largely insulated from broader market downward pressure.",
        "When negotiating your salary today, you must come armed with precise market data. Understanding the difference between what a Series B startup pays versus a publicly traded tech giant is crucial. By leveraging accurate career intelligence and salary benchmarking tools, you can confidently navigate offers and ensure you are being compensated for the unique value you bring, regardless of the macroeconomic headlines."
      ]
    }
  ]
};

const newArticle2 = {
  slug: "how-to-answer-expected-salary-question",
  title: "How to Answer 'What is Your Expected Salary?' Without Losing Leverage",
  description: "The expected salary question is a trap. Here is the step-by-step psychological framework to handle it effectively and maximize your offer.",
  excerpt: "The expected salary question is a trap. Here is how to handle it effectively.",
  category: "Career",
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: "Priya Desai",
  authorImage: "/images/authors/priya.png",
  authorRole: "Career Strategist",
  readTime: "7 min read",
  image: "/images/blog/salary-expectation.webp",
  tintClass: "bg-purple-900/20",
  badgeClass: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  sections: [
    {
      heading: "Why the Question is a Trap",
      paragraphs: [
        "Every job seeker dreads the moment a recruiter asks, 'What are your salary expectations?' It is a classic information asymmetry problem. If you say a number that is too low, you leave money on the table and anchor your worth to an artificial floor. If you say a number that is too high, you risk pricing yourself out of the process before you have even had the chance to demonstrate your value.",
        "The recruiter's goal is to ensure you fit within their approved budget band early on. However, your goal is to delay naming a price until they have fallen in love with your candidacy. The person who names the number first loses leverage. To navigate this, you must shift the conversation from your past compensation to the market value of the role itself."
      ]
    },
    {
      heading: "The Pivot Strategy",
      paragraphs: [
        "When asked for your expected salary, the most effective response is the Pivot. Instead of giving a number, you respond by asking about their approved budget. A strong script looks like this: 'I am highly interested in finding a role that is a great mutual fit. Right now, I am more focused on the scope of the role and the team. Could you share the approved salary band for this position?'",
        "Most seasoned recruiters will respect this pivot and share the range. If they push back and insist on a number from you, you employ the Range Strategy. This involves giving a wide, market-researched range, heavily caveated with the need to understand the total compensation package. For instance: 'Based on my market research for similar roles in this city, I am seeing base salaries between X and Y. However, my expectation is flexible depending on equity, bonus structures, and benefits.'"
      ]
    },
    {
      heading: "Leveraging Market Data",
      paragraphs: [
        "You can only successfully pivot or provide a confident range if you have done your homework. This is where precise salary benchmarking becomes your superpower. You must know the 50th, 75th, and 90th percentiles for your specific role, experience level, and location. Armed with this career intelligence, your response transforms from a guess into a data-backed business statement.",
        "Ultimately, negotiating salary is about managing perception and demonstrating confidence. By refusing to blindly anchor yourself to a low number and instead relying on objective market data, you signal to the employer that you are a high-value professional who understands their worth. This approach not only protects your financial interests but also positions you as a strategic thinker from day one."
      ]
    }
  ]
};

articles.push(newArticle1, newArticle2);


// 2. Internal Linking Strategy
const linkTargets = [
  { keyword: 'salary negotiation', targetSlug: 'tech-salary-negotiation-india-2026' },
  { keyword: 'salary benchmarking', targetSlug: 'how-to-know-if-youre-being-underpaid' },
  { keyword: 'resume optimization', targetSlug: 'ats-keywords-resume-optimization' },
  { keyword: 'career intelligence', targetSlug: 'the-5-skills-indian-tech-employers-are-paying-a-premium-for-in-2025' },
  { keyword: 'market value', targetSlug: 'ask-for-a-raise-market-data' },
  { keyword: 'software engineer salary', targetSlug: 'average-software-engineer-salary-india-by-city' },
  { keyword: 'equity', targetSlug: 'equity-vs-base-pay-startups' },
  { keyword: 'resume', targetSlug: 'why-your-resume-gets-rejected-before-a-human-reads-it' },
  { keyword: 'remote', targetSlug: 'remote-vs-in-office-compensation-trends' },
];

function injectLinks(text, currentSlug) {
  let newText = text;
  let linkedKeywords = new Set();

  for (let target of linkTargets) {
    if (target.targetSlug === currentSlug) continue; // Don't link to self
    if (linkedKeywords.has(target.keyword)) continue;

    // Use a regex that finds the keyword but only if it's not already inside an anchor tag
    // This is tricky in regex, but since we are applying them sequentially, we can just replace the first occurrence
    const regex = new RegExp(`\\b(${target.keyword})\\b`, 'i');
    
    if (regex.test(newText) && !newText.includes(`href="/blog/${target.targetSlug}"`)) {
       newText = newText.replace(regex, `<a href="/blog/${target.targetSlug}" class="text-primary hover:underline font-medium">$1</a>`);
       linkedKeywords.add(target.keyword);
    }
  }
  return newText;
}

articles = articles.map(article => {
  article.sections = article.sections.map(section => {
    section.paragraphs = section.paragraphs.map(p => injectLinks(p, article.slug));
    return section;
  });
  return article;
});

fs.writeFileSync(FILE_PATH, JSON.stringify(articles, null, 2), 'utf8');
console.log('Added 2 articles and injected internal links successfully. Total articles:', articles.length);
