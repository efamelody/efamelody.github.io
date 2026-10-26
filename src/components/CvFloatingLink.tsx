"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

export default function CvFloatingLink() {
  const pathname = usePathname();
  const isCvPage = pathname === "/cv" || pathname === "/cv.html";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isCvPage) return;

    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isCvPage]);

  if (isCvPage) return null;

  return (
    <Link
      href="/cv"
      aria-label="View my CV"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed bottom-5 right-4 z-40 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-pink-200/90 bg-white/80 px-4 py-2.5 text-xs font-semibold text-pink-700 shadow-[0_8px_28px_rgba(232,62,145,0.18)] backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-pink-900 hover:shadow-[0_10px_32px_rgba(232,62,145,0.24)] focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:text-sm print:hidden ${
        visible
          ? "translate-y-0 opacity-[0.85] hover:opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-sm">
        <FileText size={12} aria-hidden="true" />
      </span>
      <span>View my CV</span>
      <ArrowUpRight
        size={12}
        className="text-pink-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </Link>
  );
}
