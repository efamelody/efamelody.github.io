import { ArrowUpRight } from "lucide-react";
import type { ResumeResearch } from "@/types";

export default function ResearchEntry({
  research,
}: {
  research: ResumeResearch;
}) {
  return (
    <article className="cv-entry relative border-l border-pink-200/80 pl-5 break-inside-avoid">
      <span
        className="absolute -left-[3.5px] top-1.5 h-[7px] w-[7px] rounded-full bg-pink-500 ring-4 ring-white"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between print:flex-row print:items-start print:justify-between">
        <div>
          <h3 className="font-heading text-base font-extrabold leading-snug tracking-tight text-pink-950 print:text-[10.5pt]">
            {research.title}
          </h3>
          <p className="mt-0.5 text-[11px] leading-snug text-pink-900/70 print:text-[8pt]">
            {research.context}
          </p>
        </div>
        <p className="shrink-0 font-mono text-[11px] text-pink-600 sm:text-right print:text-[8pt]">
          {research.period}
        </p>
      </div>

      <p className="mt-2.5 text-[12.5px] leading-relaxed text-pink-950/80 print:text-[8.8pt]">
        {research.summary}
      </p>

      <ul className="mt-2 space-y-1.5">
        {research.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-[12px] leading-relaxed text-pink-950/75 print:text-[8.3pt]"
          >
            <span
              className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-pink-400"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between print:flex-row print:items-end print:justify-between">
        <p className="text-[11px] leading-relaxed text-pink-700 print:text-[7.8pt]">
          <span className="font-semibold text-pink-900/75">Tech:</span>{" "}
          {research.technologies.join(" · ")}
        </p>
        {research.links.length > 0 && (
          <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1">
            {research.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-pink-700 underline decoration-pink-300 underline-offset-2 transition-colors hover:text-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 print:text-[7.8pt]"
              >
                {link.label}
                <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
