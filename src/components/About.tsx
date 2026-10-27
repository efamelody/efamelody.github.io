"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  FileText,
  Heart,
  PenLine,
  Sparkles,
  Terminal,
} from "lucide-react";

const TECH_STACK = {
  programming_languages: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C/C++"],
  frameworks_libraries: ["React", "Next.js", "Redux", "Node.js", "Express", "Tailwind CSS", "Prisma ORM"],
  tools_platforms: ["Git", "Linux", "VSCode", "Postman", "DBeaver", "Jira"],
  data_science_vision: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Cartopy", "Geospatial Data Processing"],
};

const LABEL_MAP: Record<string, string> = {
  programming_languages: "programming_languages",
  frameworks_libraries: "frameworks_and_libraries",
  tools_platforms: "tools_and_platforms",
  data_science_vision: "data_science_and_geospatial",
};

const STRENGTHS = [
  {
    icon: Code2,
    title: "Product engineering",
    body: "Full-stack applications, APIs and database-backed systems.",
  },
  {
    icon: Database,
    title: "Data & performance",
    body: "Query optimisation, server-side pagination and large datasets.",
  },
  {
    icon: BrainCircuit,
    title: "AI & research",
    body: "RAG, workflow automation and applied machine learning.",
  },
  {
    icon: PenLine,
    title: "Ownership & learning",
    body: "Building independent projects and learning unfamiliar systems.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<
    "about" | "skills" | "strengths"
  >("about");

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-600 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-pink-950">
            About Me
          </h2>
        </div>

        <div className="w-full rounded-3xl bg-white/70 border border-pink-200/70 shadow-sm backdrop-blur-md overflow-hidden">
          <div className="bg-pink-50/80 px-4 py-3 border-b border-pink-200/60 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-300 block" />
              <span className="w-3 h-3 rounded-full bg-amber-300 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-300 block" />
            </div>
            <span className="text-xs text-pink-500 select-none font-mono">efa@portfolio:~</span>
            <div className="w-12" />
          </div>

          <div className="flex overflow-x-auto border-b border-pink-200/50 bg-pink-50/40 text-xs select-none">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap px-2.5 py-3 text-[11px] border-r border-pink-200/50 transition-colors font-semibold sm:px-5 sm:text-xs ${
                activeTab === "about"
                  ? "bg-white text-pink-600 border-t-2 border-t-pink-400"
                  : "text-pink-500/80 hover:text-pink-600"
              }`}
            >
              <FileText size={14} className="hidden sm:block" aria-hidden="true" /> about_me.md
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap px-2.5 py-3 text-[11px] border-r border-pink-200/50 transition-colors font-semibold sm:px-5 sm:text-xs ${
                activeTab === "skills"
                  ? "bg-white text-pink-600 border-t-2 border-t-pink-400"
                  : "text-pink-500/80 hover:text-pink-600"
              }`}
            >
              <Terminal size={14} className="hidden sm:block" aria-hidden="true" /> tech_stack.json
            </button>

            <button
              onClick={() => setActiveTab("strengths")}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap px-2.5 py-3 text-[11px] border-r border-pink-200/50 transition-colors font-semibold sm:px-5 sm:text-xs ${
                activeTab === "strengths"
                  ? "bg-white text-pink-600 border-t-2 border-t-pink-400"
                  : "text-pink-500/80 hover:text-pink-600"
              }`}
            >
              <Sparkles size={14} className="hidden sm:block" aria-hidden="true" /> strengths.md
            </button>
          </div>

          <div className="p-6 md:p-8 min-h-[360px]">
            {activeTab === "about" && (
              <div className="space-y-6 text-sm md:text-base text-pink-900/75 leading-relaxed max-w-2xl">
                <div className="flex items-center gap-2 text-pink-400 font-mono text-xs mb-4">
                  <span className="text-pink-400">//</span> ~/about_me.md
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-pink-950 tracking-tight">
                  <span className="text-pink-400">#</span> Nur Izfarwiza <span className="text-pink-400 font-mono text-lg">(Efa)</span>
                </h3>

                <p>
                  Hi! I am Nur Izfarwiza, but people call me{" "}
                  <span className="text-pink-600 font-semibold">Efa</span>.
                  I&apos;m a fresh Computer Science graduate from the{" "}
                  <span className="text-pink-900 font-medium underline decoration-pink-300 underline-offset-4">
                    University of Sheffield
                  </span>
                  , originally from Malaysia.
                </p>

                <p>
                  This space showcases the personal and academic projects I&apos;ve
                  built — from full-stack web development and IoT wearables to
                  machine learning research. I love building things that live at the
                  intersection of creative problem-solving and solid engineering.
                </p>

                <p>
                  My dissertation explored practical ML at scale with the Advection
                  Gaussian Process framework, earning a{" "}
                  <span className="text-pink-600 font-mono font-semibold bg-pink-100 border border-pink-200 px-2 py-0.5 rounded-full">
                    Distinction (75)
                  </span>
                  . I care deeply about writing code that is not just functional but
                  clean, maintainable, and thoughtfully architected.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium">
                    <Sparkles size={12} className="inline -mt-0.5" /> full-stack dev
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium">
                    <Cpu size={12} className="inline -mt-0.5" /> AI/ML enthusiast
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium">
                    <Heart size={12} className="inline -mt-0.5" /> lifelong learner
                  </span>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-pink-400 font-mono text-xs mb-4">
                  <span className="text-pink-400">//</span> ~/tech_stack.json
                </div>

                <pre className="text-pink-900/80 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                  <code className="block">
                    <span className="text-pink-400">{"{"}</span>
                    {Object.entries(TECH_STACK).map(([key, values], categoryIdx) => (
                      <span key={key}>
                        {"\n"}  <span className="text-pink-600">&quot;{LABEL_MAP[key]}&quot;</span>: <span className="text-pink-400">[</span>
                        {values.map((item, idx) => (
                          <span key={item}>
                            {"\n"}    <span className="text-pink-600">&quot;{item}&quot;</span>
                            {idx < values.length - 1 ? <span className="text-pink-400">,</span> : ""}
                          </span>
                        ))}
                        {"\n"}  <span className="text-pink-400">]</span>
                        {categoryIdx < Object.keys(TECH_STACK).length - 1 ? <span className="text-pink-400">,</span> : ""}
                      </span>
                    ))}
                    {"\n"}<span className="text-pink-400">{"}"}</span>
                  </code>
                </pre>
              </div>
            )}

            {activeTab === "strengths" && (
              <div className="space-y-6 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-pink-400 font-mono text-xs mb-4">
                  <span className="text-pink-400">//</span> ~/strengths.md
                </div>

                <div className="flex items-center gap-4">
                  <h3 className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-pink-600">
                    What I bring to the table
                  </h3>
                  <span
                    className="h-px flex-1 bg-pink-200/70"
                    aria-hidden="true"
                  />
                </div>

                <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2">
                  {STRENGTHS.map((strength, index) => {
                    const Icon = strength.icon;
                    const topBorder =
                      index === 0
                        ? ""
                        : index < 2
                          ? "border-t border-pink-200/60 pt-5 md:border-t-0 md:pt-0"
                          : "border-t border-pink-200/60 pt-5";
                    const column =
                      index % 2 === 0
                        ? "md:pr-8"
                        : "md:border-l md:border-pink-200/60 md:pl-8";

                    return (
                      <article
                        key={strength.title}
                        className={`flex h-full gap-3.5 ${topBorder} ${column}`}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-pink-600"
                          aria-hidden="true"
                        />

                        <div>
                          <h4 className="font-heading text-[13px] font-bold uppercase tracking-[0.04em] text-pink-950">
                            <span className="mr-2 font-mono text-[10px] font-medium tracking-[0.1em] text-pink-500">
                              {String(index + 1).padStart(2, "0")} —
                            </span>
                            {strength.title}
                          </h4>
                          <p className="mt-2 text-sm leading-[1.7] text-pink-900/75">
                            {strength.body}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-pink-50/40 border-t border-pink-200/40 text-xs text-pink-600 flex items-center gap-2 select-none font-mono">
            <span className="text-pink-600">efa@portfolio:~$</span>
            <span className="text-pink-400">_</span>
            <span className="w-2 h-4 bg-pink-400 animate-pulse block" />
          </div>
        </div>
      </div>
    </section>
  );
}
