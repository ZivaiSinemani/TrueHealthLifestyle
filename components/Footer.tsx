import Image from "next/image";
import Container from "./ui/Container";
import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-dark py-10">
      <Container className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.webp"
            alt={site.name}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full"
          />
          <span className="font-display text-sm font-semibold text-white">{site.name}</span>
        </div>
        <p className="max-w-sm text-xs text-fog-dim">{footer.tagline}</p>
        <p className="text-xs text-fog-dim">{footer.rightsLine}</p>
      </Container>
    </footer>
  );
}
