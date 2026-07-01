"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { whyBook } from "@/lib/content";

export default function WhyBook() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow tone="light">{whyBook.eyebrow}</Eyebrow>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              <span className="block">{whyBook.title[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">
                {whyBook.title[1]}
              </span>
            </h2>
            <p className="mb-5 text-base leading-relaxed text-ink-muted md:text-[17px]">
              {whyBook.bodyA}
            </p>
            <p className="mb-10 text-base leading-relaxed text-ink-muted md:text-[17px]">
              {whyBook.bodyB}
            </p>

            <div className="flex gap-10">
              {whyBook.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-ink md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {whyBook.quotes.map((quote, i) => (
              <motion.div
                key={quote.line}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <Quote size={18} className="mb-3 text-accent-violet" />
                <p className="mb-1.5 font-display text-[15px] font-semibold leading-snug text-ink">
                  &ldquo;{quote.line}&rdquo;
                </p>
                <p className="text-sm text-ink-muted">{quote.reply}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
