import type { ResumeExperience } from "@/types";

export default function ExperienceEntry({
  experience,
}: {
  experience: ResumeExperience;
}) {
  return (
    <article className="cv-entry relative border-l border-pink-200/80 pb-6 pl-5 last:pb-0 print:pb-3">
      <span
        className="absolute -left-[3.5px] top-1.5 h-[7px] w-[7px] rounded-full bg-pink-500 ring-4 ring-white"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between print:flex-row print:items-start print:justify-between">
        <div>
          <h3 className="font-heading text-base font-extrabold leading-snug tracking-tight text-pink-950 print:text-[10.5pt]">
            {experience.role}
          </h3>
          <p className="text-[13px] font-semibold text-pink-700 print:text-[9.5pt]">
            {experience.organization}
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-pink-900/70 print:text-[8pt]">
            {experience.context}
          </p>
        </div>
        <p className="shrink-0 font-mono text-[11px] text-pink-600 sm:text-right print:text-[8pt]">
          {experience.period}
        </p>
      </div>

      <p className="mt-2.5 text-[13px] leading-relaxed text-pink-950/80 print:text-[8.8pt]">
        {experience.summary}
      </p>

      <ul className="mt-2 space-y-1.5">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-[12.5px] leading-relaxed text-pink-950/75 print:text-[8.3pt]"
          >
            <span
              className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-pink-400"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-[11px] leading-relaxed text-pink-700 print:text-[7.8pt]">
        <span className="font-semibold text-pink-900/75">Tech:</span>{" "}
        {experience.technologies.join(" · ")}
      </p>
    </article>
  );
}
