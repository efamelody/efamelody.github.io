import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import PrintButton from "@/components/cv/PrintButton";
import ResumePrintHeader from "@/components/cv/ResumePrintHeader";
import ContactLinks from "@/components/cv/ContactLinks";
import ResumeSection from "@/components/cv/ResumeSection";
import SkillGroup from "@/components/cv/SkillGroup";
import ExperienceEntry from "@/components/cv/ExperienceEntry";
import ProjectEntry from "@/components/cv/ProjectEntry";
import EducationEntry from "@/components/cv/EducationEntry";
import ResearchEntry from "@/components/cv/ResearchEntry";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "CV — Nur Izfarwiza | Software Engineer",
  description:
    "Curriculum vitae for Nur Izfarwiza, a full-stack software engineer and University of Sheffield computer science graduate with experience in TypeScript, React, Next.js, Node.js and Spring Boot.",
  openGraph: {
    title: "CV — Nur Izfarwiza | Software Engineer",
    description:
      "Full-stack software engineer with production experience across web applications, legacy modernisation and AI-powered automation.",
    type: "profile",
  },
};

export default function CVPage() {
  return (
    <>
      <main className="cv-page min-h-screen bg-background px-4 pb-16 pt-24 sm:px-6 print:bg-white print:px-0 print:pb-0 print:pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-6 flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-700 transition-colors hover:text-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                Back to portfolio
              </Link>
              <p className="mt-2 font-heading text-sm font-extrabold uppercase tracking-[0.22em] text-pink-950">
                Curriculum Vitae
              </p>
            </div>
            <PrintButton />
          </div>

          <article className="cv-sheet overflow-hidden rounded-2xl border border-pink-200/80 bg-white shadow-[0_18px_60px_rgba(232,62,145,0.10)] print:overflow-visible print:rounded-none print:border-0 print:shadow-none">
            <div
              className="h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700 print:h-[2px]"
              aria-hidden="true"
            />

            <div className="cv-sheet-grid grid lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
              <aside className="cv-sidebar border-b border-pink-200/70 bg-pink-50/50 p-6 sm:p-8 lg:border-b-0 lg:border-r print:hidden">
                <div className="flex items-center gap-4 lg:block">
                  <img
                    src={resume.photo}
                    alt={`Portrait of ${resume.name}`}
                    width={112}
                    height={112}
                    className="h-24 w-24 shrink-0 rounded-xl border border-pink-200/80 object-cover object-center shadow-sm lg:h-28 lg:w-28"
                  />
                  <div className="lg:mt-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                      {resume.preferredName}
                    </p>
                    <h1 className="mt-1 font-heading text-3xl font-extrabold leading-[1.05] tracking-tight text-pink-950 sm:text-4xl lg:text-[2.35rem]">
                      {resume.name}
                    </h1>
                    <p className="mt-2 text-[13px] font-semibold leading-snug text-pink-700">
                      {resume.title}
                    </p>
                    <p className="mt-3 text-[12px] leading-relaxed text-pink-950/70">
                      {resume.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-7">
                  <div>
                    <h2 className="font-heading text-[10px] font-extrabold uppercase tracking-[0.18em] text-pink-950">
                      Contact
                    </h2>
                    <div className="mt-3 h-px bg-pink-200/80" aria-hidden="true" />
                    <div className="mt-3">
                      <ContactLinks contacts={resume.contacts} />
                    </div>
                  </div>

                  <div>
                    <h2 className="font-heading text-[10px] font-extrabold uppercase tracking-[0.18em] text-pink-950">
                      Technical Skills
                    </h2>
                    <div className="mt-3 h-px bg-pink-200/80" aria-hidden="true" />
                    <div className="mt-3 space-y-4">
                      {resume.skills.map((group) => (
                        <SkillGroup key={group.title} group={group} />
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="cv-main p-6 sm:p-8 lg:p-10 print:p-0">
                <ResumePrintHeader />
                <div className="mt-6 space-y-8 print:mt-3 print:space-y-4">
                  <ResumeSection number="01" title="Professional Summary">
                    <p className="text-[13px] leading-relaxed text-pink-950/80 print:text-[8.8pt]">
                      {resume.summary}
                    </p>
                  </ResumeSection>

                  <ResumeSection number="02" title="Work Experience">
                    <div>
                      {resume.experience.map((experience) => (
                        <ExperienceEntry
                          key={`${experience.organization}-${experience.role}`}
                          experience={experience}
                        />
                      ))}
                    </div>
                  </ResumeSection>

                  <ResumeSection number="03" title="Selected Projects">
                    <div className="cv-projects-grid space-y-4 print:grid print:grid-cols-2 print:gap-x-6 print:gap-y-4 print:space-y-0">
                      {resume.projects.map((project) => (
                        <ProjectEntry key={project.name} project={project} />
                      ))}
                    </div>
                  </ResumeSection>

                  <ResumeSection number="04" title="Education">
                    <EducationEntry education={resume.education} />
                  </ResumeSection>

                  <ResumeSection number="05" title="Research Experience">
                    <ResearchEntry research={resume.research} />
                  </ResumeSection>
                </div>
              </div>
            </div>
          </article>

          <p className="mx-auto mt-5 max-w-5xl text-center text-[11px] leading-relaxed text-pink-700/70 print:hidden">
            Use “Print / Save as PDF” to download an A4 copy of this CV.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
