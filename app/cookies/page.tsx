import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how Zaprill uses cookies for essential functionality, analytics, and advertising.",
  alternates: {
    canonical: "/cookies"
  }
};

export default function CookiePolicyPage() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-[720px]">
        <h1>Cookie Policy</h1>
        <p className="mt-6">
          Zaprill uses cookies and similar technologies to keep the site working,
          understand traffic patterns, and support advertising on permitted pages.
          Essential cookies help with security and navigation. Analytics cookies
          help us measure performance through tools such as Google Analytics 4.
          Advertising cookies may be used by Google AdSense and its partners to
          personalise or measure ads where applicable.
        </p>
        <p className="mt-4">
          You can manage cookies through your browser settings. Blocking some
          categories may affect your experience on the site. For more information
          about how data is processed, please review our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
