import type { Metadata } from "next";
import { Montserrat, Lato, Playfair_Display, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import CvFloatingLink from "@/components/CvFloatingLink";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hand",
  weight: ["400", "500", "600"],
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
