import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import CvFloatingLink from "@/components/CvFloatingLink";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  weight: "600 800",
  display: "swap",
  variable: "--font-heading",
  adjustFontFallback: "Arial",
});

const lato = localFont({
  src: [
    { path: "./fonts/lato-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-700-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
  adjustFontFallback: "Arial",
});

const playfair = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  weight: "600 900",
  display: "swap",
  variable: "--font-display",
  adjustFontFallback: "Times New Roman",
});

const caveat = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "400 600",
  display: "swap",
  variable: "--font-hand",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Efa's Portfolio",
  description:
    "Computer Science graduate from the University of Sheffield. Building projects with code & curiosity.",
  keywords: "portfolio, computer science, university of sheffield, full-stack, AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${playfair.variable} ${caveat.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
        <CvFloatingLink />
      </body>
    </html>
  );
}
