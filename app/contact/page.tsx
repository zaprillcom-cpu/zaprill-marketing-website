import type { Metadata } from "next";
import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zaprill for support, partnerships, press, or general inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Zaprill",
    description: "Get in touch with Zaprill for support, partnerships, press, or general inquiries.",
    type: "website",
    url: `${siteConfig.url}/contact`,
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Zaprill",
    description: "Get in touch with Zaprill for support, partnerships, press, or general inquiries.",
    images: ["/og"]
  }
};

export default function ContactPage() {
  return (
    <div className="bg-background transition-colors duration-300 min-h-screen">
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 items-start">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Contact Us
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-8">
                  Let&apos;s talk about <br/>your future.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Have a question about our data? Need support with your account? Or just want to say hi? We&apos;re here.
                </p>
              </Reveal>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <Reveal delay={0.1}>
                  <div className="group flex items-start gap-5 p-2 rounded-2xl transition-all">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted/50 border border-border/50 text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</h3>
                      <p className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="group flex items-start gap-5 p-2 rounded-2xl transition-all">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted/50 border border-border/50 text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Response Time</h3>
                      <p className="text-lg font-bold text-foreground">Within 24 business hours</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="group flex items-start gap-5 p-2 rounded-2xl transition-all">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted/50 border border-border/50 text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</h3>
                      <p className="text-lg font-bold text-foreground">Mumbai, India</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.4}>
                <div className="pt-8 border-t border-border/50">
                  <p className="text-[13px] font-medium text-muted-foreground flex items-center gap-2">
                    Looking for the app? <ArrowRight className="h-3 w-3" /> 
                    <a href={siteConfig.appUrl} className="text-primary font-bold hover:underline underline-offset-4">Sign in here</a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <Reveal delay={0.2}>
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[40px] blur-3xl opacity-30"></div>
                <div className="relative rounded-[32px] border border-border bg-card/50 backdrop-blur-sm p-2 shadow-2xl">
                  <div className="rounded-[24px] bg-background p-8 md:p-12 border border-border/50">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
