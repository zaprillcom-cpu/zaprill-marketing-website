import { Plus } from "lucide-react";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-border">
      {faqs.map((faq, i) => {
        return (
          <details key={faq.q} className="group border-t border-border" open={i === 0}>
            <summary className="flex min-h-16 list-none items-center justify-between gap-6 py-5 text-left font-heading text-lg font-semibold marker:content-none">
              <span>{faq.q}</span>
              <Plus
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-7">{faq.a}</p>
          </details>
        );
      })}
    </div>
  );
}
