"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { booking, site } from "@/lib/content";

const REDIRECT_DELAY_MS = 4000;

export default function Booking() {
  const [booked, setBooked] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY_MS / 1000);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (
        typeof e.data === "object" &&
        e.data?.event &&
        e.data.event === "calendly.event_scheduled"
      ) {
        setBooked(true);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (!booked) return;
    if (secondsLeft <= 0) {
      window.location.href = site.educationalUrl;
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [booked, secondsLeft]);

  return (
    <section id="booking" className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grad-radial-glow opacity-60" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {booking.title[0]} <span className="text-gradient">{booking.title[1]}</span>
          </h2>
          <p className="text-balance text-base leading-relaxed text-fog md:text-lg">
            {booking.sub}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-line bg-surface-card/70 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src="/logo.webp"
                  alt={site.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {booking.card.name}
                  </p>
                  <p className="text-xs text-fog-dim">{booking.card.subtitle}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {booking.card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-fog">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface-card/70 p-6">
              <div className="mb-2 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Lock size={15} className="text-fog" />
                </span>
                <p className="font-display text-sm font-semibold text-white">
                  {booking.privacy.title}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-fog">{booking.privacy.body}</p>
            </div>
          </div>

          <div className="relative min-h-[700px] overflow-hidden rounded-2xl border border-line bg-white">
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
            <div
              className="calendly-inline-widget h-full min-h-[700px] w-full"
              data-url={`${site.calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=0b0b12&primary_color=8b5cf6`}
            />

            <AnimatePresence>
              {booked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-surface-dark/97 px-8 text-center backdrop-blur-sm"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-primary"
                  >
                    <CheckCircle2 size={30} className="text-white" />
                  </motion.span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    You&rsquo;re confirmed.
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-fog">
                    We&rsquo;ll see you on the call. In the meantime, we&rsquo;ve put together a
                    short introduction to what we&rsquo;re building — it&rsquo;ll make our
                    conversation much more useful.
                  </p>
                  <Button href={site.educationalUrl} withArrow>
                    Continue ({secondsLeft}s)
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
