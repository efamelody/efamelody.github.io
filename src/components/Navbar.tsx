"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { FileText, Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS: { label: string; target: string; isRoute?: boolean }[] = [
  { label: "About", target: "about" },
  { label: "Work", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "University Involvements", target: "university" },
  { label: "Contact", target: "contact" },
  { label: "Blog", target: "blog", isRoute: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (link: (typeof NAV_LINKS)[number]) => {
    const isRouteLink = link.isRoute || !isHome;
    const href = isRouteLink
      ? link.isRoute
        ? `/${link.target}`
        : `/#${link.target}`
      : undefined;

    const className =
      "text-sm text-pink-900/75 hover:text-pink-700 transition-colors duration-200 relative group font-medium whitespace-nowrap";

    if (isRouteLink) {
      return (
        <Link key={link.target} href={href!} className={className}>
          {link.label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-300" />
        </Link>
      );
    }

    return (
      <button
        key={link.target}
        onClick={() => scrollTo(link.target)}
        className={className}
      >
        {link.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-300" />
      </button>
    );
  };

  const renderMobileNavLink = (link: (typeof NAV_LINKS)[number]) => {
    const isRouteLink = link.isRoute || !isHome;
    const href = isRouteLink
      ? link.isRoute
        ? `/${link.target}`
        : `/#${link.target}`
      : undefined;

    const className =
      "text-sm text-pink-700 hover:text-pink-900 font-medium transition-colors text-left";

    if (isRouteLink) {
      return (
        <Link
          key={link.target}
          href={href!}
          onClick={() => setMenuOpen(false)}
          className={className}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <button
        key={link.target}
        onClick={() => {
          scrollTo(link.target);
          setMenuOpen(false);
        }}
        className={className}
      >
        {link.label}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-pink-200/60 shadow-[0_1px_16px_rgba(224,90,154,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {isHome ? (
          <button
            onClick={() => scrollTo("page-top")}
            className="text-sm font-heading font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent"
          >
            Nur Izfarwiza
          </button>
        ) : (
          <Link
            href="/"
            className="text-sm font-heading font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent"
          >
            Nur Izfarwiza
          </Link>
        )}

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {NAV_LINKS.map(renderNavLink)}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/cv"
            aria-label="View my CV"
            aria-current={pathname === "/cv" ? "page" : undefined}
            className="group inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold shadow-[0_4px_16px_rgba(232,62,145,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-pink-400 hover:to-pink-600 hover:shadow-[0_7px_22px_rgba(232,62,145,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            <FileText
              size={12}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            CV
          </Link>

          {isHome ? (
            <button
              onClick={() => scrollTo("contact")}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold transition-all duration-200"
            >
              Hire me <ChevronRight size={12} />
            </button>
          ) : (
            <Link
              href="/#contact"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold transition-all duration-200"
            >
              Hire me <ChevronRight size={12} />
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-pink-500 hover:text-pink-700 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-100 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(renderMobileNavLink)}
          <Link
            href="/cv"
            onClick={() => setMenuOpen(false)}
            aria-label="View my CV"
            aria-current={pathname === "/cv" ? "page" : undefined}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(232,62,145,0.28)] transition-all duration-200 hover:from-pink-400 hover:to-pink-600"
          >
            <FileText size={14} aria-hidden="true" />
            View my CV
          </Link>
        </div>
      )}
    </header>
  );
}
