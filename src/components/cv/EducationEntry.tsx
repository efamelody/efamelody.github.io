import type { ResumeEducation } from "@/types";

export default function EducationEntry({
  education,
}: {
  education: ResumeEducation;
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
            {education.degree}
          </h3>
          <p className="text-[13px] font-semibold text-pink-700 print:text-[9.5pt]">
            {education.institution}
          </p>
        </div>
        <p className="shrink-0 font-mono text-[11px] text-pink-600 sm:text-right print:text-[8pt]">
          {education.period}
        </p>
      </div>

      <p className="mt-2 text-[12.5px] font-semibold text-pink-900/80 print:text-[8.8pt]">
        {education.grade}
      </p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-pink-950/75 print:text-[8.5pt]">
        {education.summary}
      </p>
    </article>
  );
}
