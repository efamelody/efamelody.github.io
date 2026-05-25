import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Efa's Portfolio",
  description:
    "Computer Science graduate from the University of Sheffield. Building projects with code & curiosity.",
  keywords: "portfolio, computer science, university of sheffield, full-stack, AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
