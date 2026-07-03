import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Claude Token Counter · She Prompts",
  description: "A free Claude token counter from She Prompts. Count tokens for Claude Sonnet 4.5, Opus 4.1, Haiku 4.5, and more — for text, PDFs, and images.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://plausible.io/js/pa-auN1ZdnQVpBz7zZBKuANv.js"
        />
        <Script id="plausible-init">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`}
        </Script>
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${dmMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
