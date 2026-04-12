import type { Metadata } from "next";

import { AdSlot } from "@/components/ad-slot";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Zaprill was built and the mission behind making salary and career intelligence more accessible.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container max-w-4xl text-center">
          <h1>Built because job hunting deserved better.</h1>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left">
            <p>
              Zaprill started from a frustration that felt strangely universal:
              smart, hardworking people were making career decisions with almost
              no real information. You could spend years building valuable skills
              and still have no idea whether your salary was fair, whether your
              resume was being filtered out, or which roles you were actually a
              strong fit for.
            </p>
            <p>
              The job hunt was full of guesswork. Salary conversations were opaque.
              Resume advice was generic. Most tools expected candidates to do even
              more work just to maybe get clarity. That never felt right. Career
              growth should not depend on being well-connected, unusually
              confident, or lucky enough to know someone on the inside.
            </p>
            <p>
              Zaprill is being built to change that. The idea is simple: your
              resume should already contain enough signal to help you understand
              your market value, your strongest opportunities, and the smallest
              skill changes that could meaningfully improve your path forward.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <div className="rounded-r-xl border-l-4 border-primary bg-[#EFF6FF] p-8">
            <p className="text-[24px] font-semibold leading-[1.5] text-text-primary">
              “Our mission is to give every professional — at every level — access
              to the salary data and career intelligence that was previously
              available only to the well-connected.”
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <h2 className="text-center">Team</h2>
          <Card className="mx-auto mt-10 max-w-xl rounded-[16px] p-8 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />
            <h4 className="mt-5">Vishnu Raj Vishwakarma</h4>
            <p className="mt-1 text-sm text-text-muted">Founder</p>
            <p className="mt-4">
              Building Zaprill with a focus on practical clarity: better salary
              visibility, better job matching, and less guesswork for candidates
              trying to move forward.
            </p>
          </Card>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-[22px]">Advertising disclosure</h3>
            <p className="mt-3">
              Zaprill.com displays third-party advertisements served by Google
              AdSense. These ads help keep our tools free. We do not control ad
              content and are not responsible for advertiser claims. Ad
              personalisation is governed by our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl">
          <AdSlot slot="about-disclosure" />
        </div>
      </section>
    </div>
  );
}
