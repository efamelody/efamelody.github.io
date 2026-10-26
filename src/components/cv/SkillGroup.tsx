import type { ResumeSkillGroup } from "@/types";

export default function SkillGroup({ group }: { group: ResumeSkillGroup }) {
  return (
    <div className="cv-skill-group break-inside-avoid">
      <h3 className="font-heading text-[10px] font-extrabold uppercase tracking-[0.16em] text-pink-700 print:text-[7.5pt]">
        {group.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-relaxed text-pink-950/75 print:mt-0.5 print:text-[8pt] print:leading-snug">
        {group.items.join(" · ")}
      </p>
    </div>
  );
}
