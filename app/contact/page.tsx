import type { Metadata } from "next";

import { AdSlot } from "@/components/ad-slot";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zaprill for support, partnerships, press, or general inquiries.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="max-w-md">
            <h2>Get in touch.</h2>
            <p className="mt-4">
              For support, partnerships, or press inquiries.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="label">Email</p>
                <p className="mt-2 text-base text-text-primary">{siteConfig.email}</p>
              </div>
              <div>
                <p className="label">Response time</p>
                <p className="mt-2 text-base text-text-primary">
                  Within 24 hours on business days
                </p>
              </div>
              <div>
                <p className="label">Location</p>
                <p className="mt-2 text-base text-text-primary">India</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <ContactForm />
            <AdSlot slot="contact-below-form" />
          </div>
        </div>
      </section>
    </div>
  );
}
