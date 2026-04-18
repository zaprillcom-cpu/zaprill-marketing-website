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
    <div className="bg-background transition-colors duration-300">
      <section className="section-padding">
        <div className="container text-center">
          <h1 className="max-w-3xl mx-auto">Built because job hunting deserved better.</h1>
          <div className="mx-auto mt-12 max-w-2xl space-y-8 text-left">
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

      <section className="pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/30 p-10 md:p-14 text-center">
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-foreground balance">
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
