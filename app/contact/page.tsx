import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { DynamicMap as Map } from "@/components/dynamic-map";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zaprill for product support, partnerships, press, or general questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Zaprill",
    description:
      "Contact Zaprill for product support, partnerships, press, or general questions.",
    type: "website",
    url: `${siteConfig.url}/contact`,
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Zaprill",
    description:
      "Contact Zaprill for product support, partnerships, press, or general questions.",
    images: ["/og"],
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock3,
    label: "Typical response",
    value: "Within one business day",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Mumbai, India",
    href: "https://maps.google.com/?q=Mumbai,India",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border py-14 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">Contact Zaprill</div>
            <h1>Tell us what you need.</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 lg:justify-self-end">
            Product question, account issue, partnership, or press request—send
            the relevant details and the right person will reply.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <aside aria-label="Contact details">
            <div className="border-t border-border">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-signal">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="data-label block">{detail.label}</span>
                      <span className="mt-1 flex items-center gap-1.5 font-heading text-lg font-semibold text-foreground">
                        {detail.value}
                        {detail.external ? (
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                        ) : null}
                      </span>
                    </span>
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.external ? "_blank" : undefined}
                    rel={detail.external ? "noopener noreferrer" : undefined}
                    className="flex gap-4 border-b border-border py-5 hover:bg-muted/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="flex gap-4 border-b border-border py-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden border border-border bg-card">
              <div className="h-[240px]">
                <Map
                  latitude={19.076}
                  longitude={72.8777}
                  zoom={11}
                  markerTitle="Zaprill, Mumbai"
                />
              </div>
              <div className="border-t border-border px-4 py-3">
                <p className="text-sm leading-6">
                  Zaprill is a web-first team. Meetings are arranged in advance.
                </p>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-signal pl-4">
              <div className="data-label">Already have an account?</div>
              <p className="mt-1 text-sm leading-6">
                Open Zaprill to review an existing report or manage your plan.
              </p>
              <a
                href={siteConfig.appUrl}
                className={`${buttonVariants({ variant: "link" })} mt-2 h-auto p-0 text-sm`}
              >
                Go to the app
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div className="border border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="border-b border-border pb-6">
              <div className="data-label text-signal">Message form</div>
              <h2 className="mt-2 text-3xl">How can we help?</h2>
              <p className="mt-2 text-sm">
                Include the email tied to your Zaprill account for support
                requests. Please do not send sensitive personal documents here.
              </p>
            </div>
            <div className="pt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
