"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { agenda } from "@/lib/content";

export default function Agenda() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow tone="light">{agenda.eyebrow}</Eyebrow>
          </div>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {agenda.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            {agenda.sub}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {agenda.steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-6 border-b border-line-light py-7 first:pt-0 last:border-b-0"
            >
              <span className="font-mono text-sm font-semibold text-accent-violet md:text-base">
                {step.n}
              </span>
              <div className="flex-1">
                <h3 className="mb-1.5 font-display text-lg font-semibold text-ink md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted md:text-[15px]">
                  {step.body}
                </p>
              </div>
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
                <path
                  d="M6.5 10.3l2.2 2.2 4.8-5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 flex max-w-3xl items-center gap-4 rounded-2xl bg-white p-5 shadow-card md:p-6"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-grad-primary">
            <Clock size={18} className="text-white" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-ink md:text-base">
              {agenda.footNote.title}
            </p>
            <p className="text-sm text-ink-muted">{agenda.footNote.body}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
