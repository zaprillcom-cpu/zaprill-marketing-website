import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important legal disclaimers regarding salary estimates, data accuracy, and career outcome guarantees on Zaprill.",
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <section className="bg-background py-20 transition-colors duration-300">
      <div className="container max-w-[720px]">
        <h1 className="text-4xl font-bold tracking-tight">Legal Disclaimer</h1>
        
        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Accuracy of Salary Estimates</h2>
            <p>
              All salary figures, compensation ranges, and financial projections provided on Zaprill are 
              <strong> estimates only</strong>. These figures are generated using AI models that aggregate 
              anonymized public job listings, self-reported data, and market trends. They do not constitute 
              an offer of employment or a guarantee of what any specific company will pay.
            </p>
            <p>
              Actual compensation depends on numerous factors including, but not limited to, specific 
              interview performance, company budget, negotiation, benefits packages, and individual 
              circumstances. Zaprill is not responsible for any discrepancy between our estimates and 
              actual offers received by users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. No Career or Financial Advice</h2>
            <p>
              The content provided by Zaprill, including blog articles, resume feedback, and skill gap 
              analyses, is for <strong>informational purposes only</strong>. It does not constitute 
              professional career coaching, legal advice, or financial advice. 
            </p>
            <p>
              Users are encouraged to consult with professional career advisors, legal counsel, or financial 
              planners before making significant life or career decisions. Reliance on any information 
              provided by Zaprill is solely at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Resume Analysis & ATS Matching</h2>
            <p>
              Our resume analysis and ATS (Applicant Tracking System) simulation tools are designed to 
              help you improve the legibility of your experience. We do not guarantee that following 
              our suggestions will result in an interview or a job offer. Hiring decisions are made 
              solely by human recruiters and hiring managers at their respective organizations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. External Links & Third-Party Services</h2>
            <p>
              Zaprill may contain links to external websites or job boards. We do not control, endorse, 
              or assume responsibility for the content, privacy policies, or practices of any 
              third-party sites. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Limitiation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Zaprill and its founders shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, or any loss 
              of profits or revenues, whether incurred directly or indirectly, or any loss of data, 
              use, goodwill, or other intangible losses, resulting from your access to or use of 
              or inability to access or use the platform.
            </p>
          </section>

          <p className="pt-8 text-sm italic">
            Last updated: April 20, 2026. If you have any questions regarding this disclaimer, please 
            contact us at hello@zaprill.com.
          </p>
        </div>
      </div>
    </section>
  );
}
