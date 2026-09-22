import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  CreditCard,
  Download,
  HeartPulse,
  Landmark,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ziv Global Digital | Digital Guides & Workbooks",
  description:
    "Practical downloadable guides covering entrepreneurship, personal development, wellness and financial literacy.",
};

const products = [
  {
    title: "Credit Repair Profits",
    category: "Entrepreneurship",
    price: "$37 USD",
    description:
      "An educational guide to the fundamentals of starting, marketing and operating a credit-repair business.",
    href: "https://pdfvault.so/s/credit-repair",
    icon: CreditCard,
  },
  {
    title: "The Provider's Blueprint",
    category: "Personal Development",
    price: "$47 USD",
    description:
      "A practical personal-development guide for men focused on responsibility, purpose, relationships and leadership.",
    href: "https://pdfvault.so/s/providers-blueprint",
    icon: UserRound,
  },
  {
    title: "The Perimenopause Playbook",
    category: "Wellness",
    price: "$29 USD",
    description:
      "An educational wellness resource designed to help readers better understand and navigate perimenopause.",
    href: "https://pdfvault.so/s/perimenopause",
    icon: HeartPulse,
  },
  {
    title: "Storage Wealth Blueprint",
    category: "Financial Literacy",
    price: "$47 USD",
    description:
      "An educational introduction to the self-storage business model, market research and investment fundamentals.",
    href: "https://pdfvault.so/s/storage-wealth-blueprint",
    icon: Landmark,
  },
];

const policies = [
  {
    id: "delivery",
    title: "Digital delivery",
    text: "Products are delivered digitally after successful payment through the applicable product checkout page. No physical item will be shipped. If you do not receive access within 15 minutes, contact us with your name, purchase email and receipt.",
  },
  {
    id: "refunds",
    title: "Refund policy",
    text: "Because access to digital content is provided after purchase, sales are generally final once the product has been delivered. Any product-specific guarantee displayed on its checkout page, and any rights required by applicable law, will still apply. Contact us with your receipt if you believe you qualify.",
  },
  {
    id: "privacy",
    title: "Privacy",
    text: "We use information you provide only to process purchases, deliver products, provide support and meet legal obligations. Payment information is handled by our payment and checkout providers; we do not store complete card details. We do not sell your personal information.",
  },
  {
    id: "terms",
    title: "Terms of use",
    text: "Unless a product page expressly grants additional rights, purchases provide a limited licence for the buyer's personal use. Content may not be copied, redistributed or resold. Prices are shown in USD. Product descriptions, prices and availability may be updated at any time.",
  },
];

export default function ZivGlobalDigitalPage() {
  return (
    <main className="min-h-screen bg-[#070910] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,151,61,0.10),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(45,74,130,0.15),transparent_30%)]" />

      <header className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="font-display text-base font-semibold tracking-wide">
            Ziv Global <span className="text-[#d8ad55]">Digital</span>
          </a>
          <nav className="flex items-center gap-5 text-xs text-white/65 sm:gap-7 sm:text-sm">
            <a className="transition hover:text-white" href="#products">Products</a>
            <a className="transition hover:text-white" href="#policies">Policies</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 text-center sm:px-8 sm:pb-28 sm:pt-28">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8ad55]/30 bg-[#d8ad55]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#e6c77d]">
          <BookOpen className="h-4 w-4" /> Digital guides & workbooks
        </div>
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          Ziv Global Digital
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
          Practical digital guides for personal development, wellness, financial literacy and entrepreneurship.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 text-sm text-white/55 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#d8ad55]" /> One-time purchases</span>
          <span className="flex items-center gap-2"><Download className="h-4 w-4 text-[#d8ad55]" /> Digital delivery</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d8ad55]" /> Secure checkout</span>
        </div>
        <a href="#products" className="mt-11 inline-flex items-center gap-2 rounded-full bg-[#d8ad55] px-7 py-3.5 text-sm font-semibold text-[#080a10] transition hover:bg-[#eccb82]">
          Browse the collection <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0d1019] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ad55]">About the publisher</p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Ziv Global Digital is a Canada-based online publisher and distributor of downloadable ebooks, guides, worksheets and educational resources. Customers make one-time purchases and receive digital access after completing checkout.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ad55]">Our collection</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Choose your next guide</h2>
          <p className="mt-5 leading-7 text-white/60">Select a product to review its full description and complete your purchase through its secure checkout page.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.title} className="group flex flex-col rounded-3xl border border-white/10 bg-[#0d1019] p-7 transition hover:-translate-y-1 hover:border-[#d8ad55]/40 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8ad55]/25 bg-[#d8ad55]/10 text-[#d8ad55]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">{product.category}</span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold">{product.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-white/60">{product.description}</p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-lg font-semibold text-[#e6c77d]">{product.price}</span>
                  <a href={product.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d8ad55]/40 px-5 py-2.5 text-sm font-semibold text-[#e6c77d] transition hover:bg-[#d8ad55] hover:text-[#080a10]">
                    View product <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs text-white/40">All prices are listed in United States dollars (USD). Applicable taxes, if any, are shown at checkout.</p>
      </section>

      <section id="policies" className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ad55]">Customer information</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Clear before you purchase</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {policies.map((policy) => (
              <article id={policy.id} key={policy.title} className="rounded-3xl border border-white/10 bg-[#0d1019] p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{policy.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{policy.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-white/10 bg-[#0d1019] p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ad55]">Important disclaimer</p>
          <h2 className="mt-3 font-display text-2xl font-semibold">Educational information only</h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            Our products are general educational resources and do not constitute medical, legal, tax, investment, credit-repair or other professional advice. Results vary and no income, business, health, credit or investment outcome is promised. Consult a qualified professional before making decisions specific to your circumstances.
          </p>
        </div>
        <div id="contact" className="rounded-3xl border border-[#d8ad55]/30 bg-[#d8ad55]/10 p-7 sm:p-9">
          <Mail className="h-7 w-7 text-[#e6c77d]" />
          <h2 className="mt-5 font-display text-2xl font-semibold">Need help?</h2>
          <p className="mt-4 text-sm leading-7 text-white/65">For product access, purchase or refund questions, email our customer-support inbox.</p>
          <a href="mailto:zivglobalcorp@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e6c77d] underline decoration-[#d8ad55]/40 underline-offset-4">
            zivglobalcorp@gmail.com <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-white/45">We aim to respond within two business days.</p>
        </div>
      </section>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ziv Global Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="#delivery">Delivery</a>
            <a className="hover:text-white" href="#refunds">Refunds</a>
            <a className="hover:text-white" href="#privacy">Privacy</a>
            <a className="hover:text-white" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

