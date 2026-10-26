import { resume } from "@/data/resume";
import SkillGroup from "./SkillGroup";

export default function ResumePrintHeader() {
  return (
    <header className="cv-print-header hidden break-inside-avoid border-b border-pink-200 pb-3 print:block print:pb-2.5">
      <div className="flex items-start gap-4">
        <img
          src={resume.photo}
          alt={`Portrait of ${resume.name}`}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-lg border border-pink-200 object-cover"
        />
        <div>
          <p className="font-mono text-[7.5pt] font-semibold uppercase tracking-[0.18em] text-pink-600">
            {resume.preferredName}
          </p>
          <h1 className="mt-0.5 font-heading text-[17pt] font-extrabold leading-tight tracking-tight text-pink-950">
            {resume.name}
          </h1>
          <p className="text-[9.5pt] font-semibold text-pink-700">
            {resume.title}
          </p>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-0.5">
        {resume.contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex items-baseline gap-1.5 text-[8pt] leading-snug text-pink-950/80"
          >
            <span className="font-semibold text-pink-900/70">
              {contact.label}:
            </span>
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {contact.value}
              </a>
            ) : (
              <span>{contact.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2.5">
        <h2 className="font-heading text-[8pt] font-extrabold uppercase tracking-[0.16em] text-pink-950">
          Technical Skills
        </h2>
        <div className="mt-1.5 grid grid-cols-2 gap-x-6 gap-y-1.5">
          {resume.skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </header>
  );
}
