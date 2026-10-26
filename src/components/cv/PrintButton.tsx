"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print this CV or save it as a PDF"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(232,62,145,0.24)] transition-all duration-200 hover:from-pink-400 hover:to-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 print:hidden"
    >
      <Printer size={15} aria-hidden="true" />
      Print / Save as PDF
    </button>
  );
}
