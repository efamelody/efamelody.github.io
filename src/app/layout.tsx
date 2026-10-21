import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
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
        className={`${montserrat.variable} ${lato.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
