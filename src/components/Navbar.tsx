"use client";
import { useState } from "react";
import { useAnimatedHeader } from "@/hooks/useAnimatedHeader";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const LINKS = [
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "dissertation", label: "Dissertation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const shrink = useAnimatedHeader();
  const active = useScrollSpy();
  const scrollTo = useSmoothScroll();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading font-bold uppercase ${
        shrink
          ? "bg-white/95 backdrop-blur shadow-md py-2"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("page-top")}
          className={`text-lg md:text-2xl transition-all duration-300 ${
            shrink ? "text-primary" : "text-white"
          }`}
        >
          Efa's Personal Projects
        </button>

        <button
          className={`md:hidden ${shrink ? "text-gray-700" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`md:flex items-center gap-6 ${open ? "block" : "hidden"} absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => {
                  scrollTo(link.id);
                  setOpen(false);
                }}
                className={`block w-full text-left py-2 md:py-0 text-sm tracking-wider transition-colors ${
                  active === link.id
                    ? "text-primary"
                    : shrink
                    ? "text-gray-600 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
