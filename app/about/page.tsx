import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Zaprill was built and the mission behind making salary and career intelligence more accessible.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About — Zaprill",
    description:
      "Learn why Zaprill was built and the mission behind making salary and career intelligence accessible to every professional.",
    type: "website",
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Zaprill",
    description:
      "Learn why Zaprill was built and the mission behind making salary and career intelligence accessible to every professional.",
    images: ["/og"]
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

      <section className="pb-24">
        <div className="container max-w-4xl">
          <div className="rounded-r-xl border-l-4 border-primary bg-[#EFF6FF] p-8">
            <p className="text-[24px] font-semibold leading-[1.5] text-text-primary">
              "Our mission is to give every professional — at every level — access
              to the salary data and career intelligence that was previously
              available only to the well-connected."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
