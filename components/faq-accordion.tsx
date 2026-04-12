"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `faq-answer-${i}`;
        const buttonId = `faq-button-${i}`;
        
        return (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] overflow-hidden"
          >
            <h3 className="m-0 p-0 text-[17px] font-bold text-slate-900 dark:text-white">
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-t-2xl"
              >
                <span className="pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200/50 dark:bg-white/5"
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4 text-slate-500 dark:text-white/50" />
                </motion.div>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-7 pb-7 text-slate-500 dark:text-white/50 leading-relaxed text-[15px] font-medium">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
