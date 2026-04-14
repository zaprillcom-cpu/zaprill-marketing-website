export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "Salary" | "Resume" | "Career";
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tintClass: string;
  badgeClass: string;
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
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-14",
    author: "Zaprill Team",
    tintClass: "bg-[#EFF6FF]",
    badgeClass: "bg-[#DBEAFE] text-primary",
    sections: [
      {
        heading: "Why underpayment is so hard to spot",
        paragraphs: [
          "Most people assume salary is a direct reflection of value. In reality, pay is often a reflection of timing, negotiation confidence, company budget, location, and how visible your skills are to the market. That is why talented people can stay underpaid for years without realizing it. If your last raise was based on an internal percentage band instead of current demand, there is a good chance your compensation is lagging behind what similar candidates can command today.",
          "The hardest part is that employers rarely volunteer this information. Job descriptions may hide compensation. Recruiters may ask for salary expectations before sharing their range. Internal raises happen gradually enough that they feel normal. Over time, a gap of ten or fifteen percent can quietly become thirty percent or more, especially in fast-moving fields like product, engineering, analytics, design, and performance marketing.",
          "Being underpaid does not necessarily mean you made a mistake. It often means you have not had access to clean market data. That is exactly why salary intelligence matters. When you know what employers are paying for your exact combination of title, skills, city, and experience, compensation stops feeling mysterious and starts becoming measurable."
        ]
      },
      {
        heading: "The practical signs you may be underpaid",
        paragraphs: [
          "One of the clearest signals is recruiter behavior. If recruiters consistently reach out with roles that pay far above your current salary, the market may already value you more than your employer does. Another signal is mismatch between responsibility and compensation. If you are leading projects, mentoring newer teammates, shipping business-critical work, or owning stakeholder communication without a corresponding salary jump, your role may have grown faster than your pay.",
          "Pay compression is another common issue. This happens when new hires come in near or above the compensation of existing employees because market rates moved faster than internal salary reviews. It can leave loyal, high-performing people earning less than peers doing similar work. If you hear ranges in the market that feel surprisingly high, do not dismiss them immediately. They may reflect a broader reset that your company has not caught up with yet.",
          "Finally, watch for skill premiums. Employers pay more for combinations that are hard to find, not just titles. A backend developer with cloud cost optimization experience, a recruiter who understands analytics tooling, or a marketer who can own lifecycle and product-led growth may be priced very differently from someone with a more generic profile. If you have built a rare skill stack, your salary should reflect it."
        ]
      },
      {
        heading: "How to benchmark yourself without guessing",
        paragraphs: [
          "Start by collecting multiple reference points. Public job listings can reveal compensation bands, especially when remote-friendly or global employers publish ranges transparently. Salary communities, offer-sharing posts, and trusted compensation reports can add more context. But the most useful benchmark compares like with like: similar title, similar experience, similar skills, similar city, and similar company stage.",
          "Do not rely on one headline number. Average salary can be misleading because the market is wide. Instead, look for a range and place yourself within it. Ask: what would a conservative employer pay for my profile today, what would the average market pay, and what would a top-paying company pay? Those three numbers give you a more realistic picture than any single figure.",
          "This is also where your resume matters. Market value is partly determined by how clearly your experience translates into keywords employers recognize. If you have done strong work but your resume undersells the outcomes, tools, scope, or domain complexity, you may appear cheaper than you should. Benchmarking is not only about the work you have done. It is also about how legible that work is."
        ]
      },
      {
        heading: "What to do if the numbers confirm a gap",
        paragraphs: [
          "Once you know there is a salary gap, resist the urge to rush into a confrontation. The goal is not to prove your employer wrong. The goal is to build options. Update your resume, sharpen your evidence, and clarify the story of your impact. Gather examples of measurable wins: revenue influenced, systems improved, costs reduced, cycles shortened, quality increased, or teams unblocked. Specific proof turns compensation conversations from emotional to business-focused.",
          "Next, decide whether to pursue an internal raise, an external offer, or both. Internal conversations work best when your manager values retention and has a real budget path. External interviews are useful because they reveal what the market will actually pay you now, not in theory. Even if you prefer to stay, outside demand creates leverage and confidence.",
          "When you negotiate, anchor on value and range, not desperation. A strong framing might be: based on current market data, the scope of my work, and the outcomes I have delivered, I believe a package in this range would better reflect the role. This keeps the discussion grounded in evidence rather than emotion. If the answer is no, ask what concrete milestones or timing would make a yes possible."
        ]
      },
      {
        heading: "Use the gap as a strategy signal",
        paragraphs: [
          "Sometimes the most valuable outcome is not an immediate raise. It is clarity. If you discover that one missing skill could move your profile into a much better pay band, that is actionable. If you learn that a different title or industry values your background more highly, that is actionable too. Salary intelligence is not just a negotiation tool. It is a career planning tool.",
          "The strongest professionals treat compensation as feedback from the market. Not feedback on their worth as people, but feedback on how their skills are being priced right now. That mindset creates calm. Instead of wondering whether you are lucky to have your current salary, you start asking better questions: what is my profile worth today, what is keeping me below that number, and what change would move me fastest?",
          "If you suspect you are underpaid, do not wait for annual review season to explore it. A clear benchmark, a stronger resume, and a better understanding of your skill premiums can change how you approach every next step. That is how you stop drifting into compensation decisions and start navigating them intentionally."
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
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-14",
    author: "Zaprill Team",
    tintClass: "bg-[#FEF3C7]",
    badgeClass: "bg-[#FEF3C7] text-[#B45309]",
    sections: [
      {
        heading: "The first rejection is usually mechanical",
        paragraphs: [
          "When candidates imagine resume review, they picture a recruiter reading line by line and deciding who looks promising. In many cases, that is not the first step at all. The first pass is often performed by an applicant tracking system, or ATS, whose job is to parse, categorize, and filter incoming applications. If your resume is hard to read structurally, missing the right signals, or misaligned with the role, a human may never see your best work.",
          "This is where frustration grows. Candidates assume silence means they are not qualified. Often it means their resume is not machine-readable enough, not role-specific enough, or not communicating relevance quickly enough. That distinction matters because the fix is usually tactical. You do not need to become a different person. You need a document that maps your experience into language hiring systems and recruiters can understand instantly.",
          "ATS filters are not magical intelligence. They look for patterns: titles, dates, core skills, locations, degrees, certifications, and keywords connected to the job description. If your resume uses unusual layouts, hides important keywords in graphics, or describes your work in vague language, the software has less to work with. The result can feel arbitrary, but the underlying problem is usually legibility."
        ]
      },
      {
        heading: "Formatting mistakes that quietly kill strong resumes",
        paragraphs: [
          "Highly designed resumes are a common trap. Multi-column layouts, text embedded inside images, decorative progress bars, icons replacing words, and fancy charts may look polished to a human, but they often confuse parsers. If the ATS reads your job title in the wrong order or misses your skills because they are placed in a graphic, your application starts with incomplete data.",
          "File choice matters too. PDFs are usually safe when exported cleanly, but not all PDFs are equal. A PDF created from an image scan or design tool can flatten text into something the system cannot interpret. Word documents are also commonly accepted, but they must still be straightforward. The safest structure is a simple, single-column layout with clear headings, consistent dates, and plain text for critical information.",
          "Another formatting issue is density. Some resumes hide value by packing too much into too little space. Recruiters spend seconds, not minutes, on the first review. If every bullet looks equally important, nothing stands out. Good formatting is not just about surviving software. It also helps humans identify outcomes, scope, and relevance in a short scan."
        ]
      },
      {
        heading: "Keyword mismatch is usually a translation problem",
        paragraphs: [
          "Candidates often hear that they need more keywords and conclude they should stuff their resume with repeated phrases. That usually backfires. The real issue is translation. Employers describe roles using the language they need to search and filter by. If your resume describes similar work using entirely different terms, the system may not make the connection.",
          "For example, one company may search for customer lifecycle marketing while another uses CRM, retention, and engagement. One engineering role may mention distributed systems while another emphasizes high-scale backend architecture. If your resume only uses internal company jargon, your experience can seem narrower than it is. The goal is not to game the system with nonsense repetition. The goal is to represent your work in market-recognizable language.",
          "The job description is your clearest clue. Read it closely and identify the recurring themes in tools, responsibilities, and outcomes. Then compare that to your current resume. Are the important overlaps visible? If you have the experience, make the wording easier to connect. Tailoring is not dishonesty. It is translation."
        ]
      },
      {
        heading: "Vague bullets make good experience look average",
        paragraphs: [
          "A resume fails when it lists tasks instead of proving contribution. Phrases like responsible for, worked on, helped with, and involved in are weak because they do not show scope, ownership, or effect. Recruiters are trying to understand whether you can create value in a similar environment. They need evidence, not placeholders.",
          "A stronger bullet usually includes three things: what you did, where or how you did it, and what changed because of it. Built a reporting workflow is better than helped with reporting. Built an automated reporting workflow in SQL and Looker that cut weekly manual effort by six hours is much stronger. Specificity creates credibility.",
          "This matters for ATS too. Detailed bullets naturally include technologies, responsibilities, and outcomes that align with search criteria. When your bullets are specific, you improve both machine matching and human trust at the same time. That is why resume optimization is not about tricks. It is about clarity."
        ]
      },
      {
        heading: "How to make your resume pass the first screen",
        paragraphs: [
          "Use a clean one-column layout with standard headings like Summary, Experience, Skills, Education, and Projects if relevant. Put critical information in plain text. Match your recent title and responsibilities to the roles you are targeting, without exaggeration. Rework bullets so they emphasize measurable outcomes, tools, domains, and decision-making scope.",
          "Tailor the top third of the resume first. That section shapes both parsing and quick human review. A concise summary can help if it is specific, but generic statements about being passionate, motivated, or results-driven do little. Instead, use that space to define your profile clearly: years of experience, core function, strongest domains, and a few high-signal tools or capabilities.",
          "Finally, test relevance role by role. A good general resume is useful, but a strong targeted resume performs better. If you are applying across multiple job families, create separate versions. The resume that lands interviews is the one that makes the match obvious. Your job is not to make recruiters infer your fit. Your job is to show it fast."
        ]
      }
    ]
  },
  {
    slug: "the-5-skills-indian-tech-employers-are-paying-a-premium-for-in-2025",
    title: "The 5 skills Indian tech employers are paying a premium for in 2025",
    description:
      "The skills showing up in higher-paying Indian tech roles, why employers value them, and how to position them on your resume.",
    excerpt:
      "Premium pay doesn’t always follow job title. It often follows capability combinations that are rare, current, and commercially useful.",
    category: "Career",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-14",
    author: "Zaprill Team",
    tintClass: "bg-[#DCFCE7]",
    badgeClass: "bg-[#DCFCE7] text-accent-greenDark",
    sections: [
      {
        heading: "Why specific skills command outsized salary jumps",
        paragraphs: [
          "Indian tech hiring has become more selective, but selectivity does not mean employers have stopped paying. It means they are paying more carefully. Companies are willing to spend when a candidate brings capabilities that reduce ramp-up time, improve decision quality, or unlock revenue faster. In other words, premium pay is flowing toward skill combinations that create leverage, not just seniority on paper.",
          "This is good news for professionals who want to increase earning power without waiting years for a title change. The right skill can widen your opportunity set, strengthen your resume, and make you more attractive across multiple categories of company at once. Startups, growth-stage firms, and enterprise teams may look different on the surface, but they often overpay for the same high-leverage abilities.",
          "The important nuance is that employers rarely pay extra for isolated keywords. They pay for usable combinations. A cloud certification alone is not enough. A data skill alone is not enough. A skill becomes premium when it maps to a business problem companies urgently need solved."
        ]
      },
      {
        heading: "1. Applied AI workflow skills",
        paragraphs: [
          "The biggest salary premium is going to people who can apply AI practically inside real workflows. That includes prompt design for production tasks, evaluation thinking, model orchestration, retrieval-augmented patterns, automation design, and the ability to connect AI output to business systems. Employers do not only want experimentation. They want people who can move from prototype to reliable internal use cases.",
          "This matters across functions, not just engineering. Product managers who can define AI-assisted experiences, marketers who can build repeatable AI content operations with review layers, analysts who can combine LLMs with structured data, and recruiters who can automate screening support all benefit from the same market shift. The premium comes from implementation, not from simply being interested in AI.",
          "If you have used AI to reduce turnaround time, improve accuracy, increase throughput, or open a new offering, make those results explicit. Premium compensation follows business impact. The technology label gets attention, but the measured outcome gets the offer."
        ]
      },
      {
        heading: "2. Cloud cost and infrastructure efficiency",
        paragraphs: [
          "Companies are under pressure to do more with better unit economics. That is why engineers and platform specialists who understand cloud architecture and cost control are commanding stronger compensation. It is one thing to scale systems. It is another to scale them responsibly, with observability, resilience, and cost awareness built in.",
          "Skills in AWS, GCP, Kubernetes, infrastructure as code, performance tuning, and cloud spend optimization are especially valuable when paired with ownership. Employers want people who can not only maintain infrastructure, but improve it. If you can prevent waste, increase reliability, or shorten deployment cycles, you are contributing directly to margin and delivery speed.",
          "On a resume, this should never appear as a shopping list of tools. Show the operational result. Reduced compute cost by twenty percent. Improved deployment frequency from weekly to daily. Increased service uptime. Those are the lines that make infrastructure work legible to non-specialist hiring teams."
        ]
      },
      {
        heading: "3. Data storytelling tied to decision-making",
        paragraphs: [
          "Data roles are maturing. Employers are less impressed by dashboards alone and more interested in whether insights influence action. Analysts and data professionals who can connect data work to product decisions, revenue growth, risk reduction, or operational efficiency are seeing stronger salary upside than peers who only report metrics.",
          "This premium often shows up in hybrid profiles: SQL plus experimentation design, analytics engineering plus stakeholder communication, BI tooling plus product intuition, or machine learning plus business framing. The market rewards people who can move fluidly between technical work and strategic interpretation.",
          "If you work in data, your resume should answer a simple question: what decisions changed because of your work? When that answer is visible, your value becomes easier to price at the higher end of the market."
        ]
      },
      {
        heading: "4. Security and compliance readiness",
        paragraphs: [
          "As more companies sell into global markets or enterprise buyers, security maturity has become revenue-critical rather than purely technical. Skills in application security, IAM, cloud security posture, compliance workflows, audit readiness, and secure development practices are now linked directly to customer trust and deal velocity.",
          "This creates salary premiums for engineers, platform teams, and security specialists who can embed protection into the product lifecycle instead of treating it as an afterthought. Employers especially value candidates who can translate risk into practical operating decisions and collaborate well with product and engineering leads.",
          "Even if your title is not security-focused, relevant experience can still boost your market value. Led SOC 2 readiness, tightened access controls, automated vulnerability checks, or improved secure deployment standards are all meaningful signals. They show you can help the business grow safely."
        ]
      },
      {
        heading: "5. Revenue-aware product and growth execution",
        paragraphs: [
          "Product, marketing, and customer-facing roles are getting paid more when they understand revenue mechanics deeply. Employers want people who can connect acquisition, activation, retention, monetization, and expansion instead of working in isolated silos. That is why growth-minded product managers, lifecycle marketers, RevOps professionals, and customer success leaders with analytical strength are becoming more valuable.",
          "The premium comes from being able to identify leverage points. If you can improve onboarding completion, reduce drop-off, increase conversion, raise expansion revenue, or create better feedback loops between teams, you are influencing the economics of the company. That is premium work.",
          "To position this skill, highlight funnels improved, experiments run, conversion lifts achieved, or retention outcomes moved. The more you connect your work to commercial impact, the more clearly employers can justify paying above baseline."
        ]
      },
      {
        heading: "How to use this information in your own career",
        paragraphs: [
          "You do not need all five premium skills to raise your market value. Usually one adjacent upgrade is enough to change the quality of roles you qualify for. Start by identifying the overlap between your current strengths and the market areas above. Then ask which one is most realistic to build into your day-to-day work over the next three to six months.",
          "The fastest path is often not a course alone. It is a project. Build a portfolio item, lead a small internal initiative, document a measurable win, or collaborate on a stretch assignment that lets you claim real experience. Employers pay for demonstrated capability faster than theoretical interest.",
          "When you update your resume, frame the new skill through outcomes rather than labels. That is how you turn a trend into an advantage. In a tighter hiring market, clear proof of high-leverage capability is what separates average opportunities from premium ones."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
