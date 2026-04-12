import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Zaprill collects, uses, stores, and protects personal data on the marketing site and app.",
  alternates: {
    canonical: "/privacy"
  }
};

const lastUpdated = "April 12, 2026";

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-[720px]">
        <h1>Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: {lastUpdated}</p>
        <div className="mt-10 space-y-10">
          <PolicySection title="1. Introduction">
            Zaprill is an AI-powered career platform operated through zaprill.com
            and app.zaprill.com. This Privacy Policy explains what data we
            collect, how we use it, and the choices available to you when you use
            our website and services.
          </PolicySection>
          <PolicySection title="2. What data we collect">
            We may collect uploaded resumes, email addresses when you create an
            account or contact us, usage analytics collected through Google
            Analytics 4, IP address, browser type, device information, and
            interactions with our pages and forms.
          </PolicySection>
          <PolicySection title="3. How we use your data">
            We use your data to process resumes and generate AI-powered career
            insights, improve job matching accuracy, monitor product performance,
            maintain site security, and send product emails where you have opted
            in to receive them.
          </PolicySection>
          <PolicySection title="4. Third-party advertising">
            We use Google AdSense to serve advertisements. Google may use cookies
            and web beacons to serve ads based on your visits to this and other
            websites. Google&apos;s use of advertising cookies enables it and its
            partners to serve ads based on your visit. You can opt out via
            Google&apos;s Ads Settings.
          </PolicySection>
          <PolicySection title="5. Cookies">
            We use essential cookies for core site functionality, analytical
            cookies for aggregated traffic measurement, and advertising cookies
            when AdSense is enabled. You can control cookies through your browser
            settings, though disabling essential cookies may affect site behavior.
          </PolicySection>
          <PolicySection title="6. Data retention">
            Resume data is retained for up to 90 days unless you create or
            maintain an account that requires longer retention for service access,
            history, or compliance purposes. Contact messages and analytics may be
            kept for operational, legal, and security reasons for a reasonable
            period.
          </PolicySection>
          <PolicySection title="7. User rights">
            Subject to applicable law, you may request access to, deletion of, or
            export of your personal data. To make a request, contact us at{" "}
            <a className="text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </PolicySection>
          <PolicySection title="8. Children">
            Zaprill is not intended for individuals under 18 years of age, and we
            do not knowingly collect personal information from children.
          </PolicySection>
          <PolicySection title="9. Changes to this policy">
            We may update this Privacy Policy from time to time to reflect product,
            legal, or operational changes. Updates will be posted on this page
            with a revised last updated date.
          </PolicySection>
          <PolicySection title="10. Contact">
            If you have questions about this Privacy Policy or how your data is
            handled, email{" "}
            <a className="text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-[28px]">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
