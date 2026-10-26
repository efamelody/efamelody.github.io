import type { ReactNode } from "react";

interface ResumeSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ResumeSection({
  number,
  title,
  children,
  className = "",
}: ResumeSectionProps) {
  const headingId = `cv-section-${number}`;

  return (
    <section
      aria-labelledby={headingId}
      className={`cv-section ${className}`}
    >
      <div className="cv-section-heading mb-4 flex items-center gap-3 break-after-avoid print:mb-2.5">
        <span
          className="font-mono text-[10px] font-semibold tracking-[0.14em] text-pink-500 print:text-[7.5pt]"
          aria-hidden="true"
        >
          {number}
        </span>
        <h2
          id={headingId}
          className="font-heading text-[11px] font-extrabold uppercase tracking-[0.2em] text-pink-950 print:text-[8.8pt]"
        >
          {title}
        </h2>
        <span
          className="h-px flex-1 bg-pink-200/90 print:bg-pink-200"
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
