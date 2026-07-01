"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { faq } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface-light py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="light">{faq.eyebrow}</Eyebrow>
          <h2 className="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            <span className="block">{faq.title[0]}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">
              {faq.title[1]}
            </span>
          </h2>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">{faq.sub}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line-light bg-white shadow-card">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={i > 0 ? "border-t border-line-light" : ""}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-black/[0.015] md:px-8"
                >
                  <span className="font-display text-base font-medium text-ink md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line-light transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-accent-violet/50" : ""
                    }`}
                  >
                    <Plus size={15} className="text-ink-muted" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted md:px-8 md:text-[15px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
