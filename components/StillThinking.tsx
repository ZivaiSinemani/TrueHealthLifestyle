"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { stillThinking } from "@/lib/content";

export default function StillThinking() {
  return (
    <section className="bg-surface-dark pb-28 pt-4 md:pb-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-line bg-surface-card/40 px-8 py-14 text-center"
        >
          <h3 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
            {stillThinking.title}
          </h3>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-fog md:text-base">
            {stillThinking.body}
          </p>
          <Button href="#booking" size="lg" withArrow>
            {stillThinking.cta}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
