"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import ConversationField from "./ui/ConversationField";
import { hero, site } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-surface-dark pt-28 pb-20 md:pt-32"
    >
      <ConversationField />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-8"
          >
            <Image
              src="/logo.webp"
              alt={site.name}
              width={84}
              height={84}
              className="mx-auto h-16 w-16 drop-shadow-[0_0_30px_rgba(139,92,246,0.45)] md:h-20 md:w-20"
              priority
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog">
              {hero.eyebrow}
            </span>
          </motion.div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {hero.headline.map((line, i) => (
              <motion.span
                key={line.text}
                initial="hidden"
                animate="show"
                custom={2 + i}
                variants={fadeUp}
                className={`block ${line.gradient ? "text-gradient" : ""}`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="mb-10 max-w-2xl text-balance text-base leading-relaxed text-fog md:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={6}
            variants={fadeUp}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#booking" size="lg" withArrow>
              {hero.ctaPrimary}
            </Button>
            <span className="text-sm text-fog-dim">{hero.ctaNote}</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={7}
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            {hero.trustRow.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-white/20" />}
                <span className="text-xs tracking-wide text-fog-dim">{item}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
