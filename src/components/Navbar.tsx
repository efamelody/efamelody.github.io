"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS: { label: string; target: string; isRoute?: boolean }[] = [
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
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
      "text-sm text-pink-800/55 hover:text-pink-700 transition-colors duration-200 relative group font-medium";

    if (isRouteLink) {
      return (
        <Link key={link.target} href={href!} className={className}>
          {link.label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300" />
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
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300" />
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-pink-200/60 shadow-[0_1px_16px_rgba(224,90,154,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {isHome ? (
          <button
            onClick={() => scrollTo("page-top")}
            className="text-sm font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Nur Izfarwiza
          </button>
        ) : (
          <Link
            href="/"
            className="text-sm font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Nur Izfarwiza
          </Link>
        )}

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(renderNavLink)}
        </nav>

        {isHome ? (
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold transition-all duration-200"
          >
            Hire me <ChevronRight size={12} />
          </button>
        ) : (
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold transition-all duration-200"
          >
            Hire me <ChevronRight size={12} />
          </Link>
        )}

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
        </div>
      )}
    </header>
  );
}
