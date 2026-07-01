import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "True Health Lifestyle | Book a Private Consultation",
  description:
    "An intentional conversation about your next chapter in wellness. Book a free, no-obligation 30-minute consultation with True Health Lifestyle.",
  metadataBase: new URL("https://truehealthlifestyle.com"),
  openGraph: {
    title: "True Health Lifestyle | Book a Private Consultation",
    description:
      "An intentional conversation about your next chapter in wellness. Book a free, no-obligation 30-minute consultation.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
