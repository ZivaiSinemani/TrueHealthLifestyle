"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe2, Lightbulb, ShieldCheck, Users2, Zap } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { whoFor } from "@/lib/content";

const icons = {
  shield: ShieldCheck,
  zap: Zap,
  users: Users2,
  book: BookOpen,
  lightbulb: Lightbulb,
  globe: Globe2,
} as const;

export default function WhoFor() {
  return (
    <section className="bg-surface-dark py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{whoFor.eyebrow}</Eyebrow>
          <h2 className="mb-5 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            <span className="block">{whoFor.title[0]}</span>
            <span className="block text-gradient">{whoFor.title[1]}</span>
          </h2>
          <p className="text-balance text-base leading-relaxed text-fog md:text-lg">
            {whoFor.sub}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whoFor.cards.map((card, i) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-line bg-surface-card/60 p-6 transition-colors duration-300 hover:border-accent-violet/40 hover:bg-surface-card"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20">
                  <Icon size={20} className="text-accent-lilac" />
                </span>
                <h3 className="mb-2 font-display text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-fog">{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
