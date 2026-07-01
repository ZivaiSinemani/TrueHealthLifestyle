"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-dark/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.webp"
            alt={site.name}
            width={36}
            height={36}
            className="h-8 w-8 rounded-full md:h-9 md:w-9"
            priority
          />
          <span className="font-display text-sm font-semibold text-white md:text-base">
            {site.name}
          </span>
        </a>
        <Button href="#booking" size="md">
          {nav.cta}
        </Button>
      </Container>
    </header>
  );
}
