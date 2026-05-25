"use client";

import { useState } from "react";
import { FileText, Terminal, Sparkles, Cpu, Heart } from "lucide-react";

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

export default function About() {
  const [activeTab, setActiveTab] = useState<"about" | "skills">("about");

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
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
            <span className="text-xs text-pink-400 select-none font-mono">efa@portfolio:~</span>
            <div className="w-12" />
          </div>

          <div className="flex border-b border-pink-200/50 bg-pink-50/40 text-xs select-none">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-2 px-5 py-3 border-r border-pink-200/50 transition-colors font-semibold ${
                activeTab === "about"
                  ? "bg-white text-pink-600 border-t-2 border-t-pink-400"
                  : "text-pink-400/70 hover:text-pink-600"
              }`}
            >
              <FileText size={14} /> about_me.md
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 px-5 py-3 border-r border-pink-200/50 transition-colors font-semibold ${
                activeTab === "skills"
                  ? "bg-white text-pink-600 border-t-2 border-t-pink-400"
                  : "text-pink-400/70 hover:text-pink-600"
              }`}
            >
              <Terminal size={14} /> tech_stack.json
            </button>
          </div>

          <div className="p-6 md:p-8 min-h-[360px]">
            {activeTab === "about" && (
              <div className="space-y-6 text-sm md:text-base text-pink-800/60 leading-relaxed max-w-2xl">
                <div className="flex items-center gap-2 text-pink-400 font-mono text-xs mb-4">
                  <span className="text-pink-400">//</span> ~/about_me.md
                </div>

                <h3 className="text-2xl font-extrabold text-pink-950 tracking-tight">
                  <span className="text-pink-400">#</span> Nur Izfarwiza <span className="text-pink-400 font-mono text-lg">(Efa)</span>
                </h3>

                <p>
                  Hi! I am Nur Izfarwiza, but people call me{" "}
                  <span className="text-pink-500 font-semibold">Efa</span>.
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
                  <span className="text-pink-500 font-mono font-semibold bg-pink-100 border border-pink-200 px-2 py-0.5 rounded-full">
                    Distinction (75)
                  </span>
                  . I care deeply about writing code that is not just functional but
                  clean, maintainable, and thoughtfully architected.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-500 border border-pink-200 font-medium">
                    <Sparkles size={12} className="inline -mt-0.5" /> full-stack dev
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-purple-100 text-purple-500 border border-purple-200 font-medium">
                    <Cpu size={12} className="inline -mt-0.5" /> AI/ML enthusiast
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-500 border border-pink-200 font-medium">
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

                <pre className="text-pink-800/70 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                  <code className="block">
                    <span className="text-pink-300">{"{"}</span>
                    {Object.entries(TECH_STACK).map(([key, values], categoryIdx) => (
                      <span key={key}>
                        {"\n"}  <span className="text-purple-400">&quot;{LABEL_MAP[key]}&quot;</span>: <span className="text-pink-300">[</span>
                        {values.map((item, idx) => (
                          <span key={item}>
                            {"\n"}    <span className="text-pink-500">&quot;{item}&quot;</span>
                            {idx < values.length - 1 ? <span className="text-pink-300">,</span> : ""}
                          </span>
                        ))}
                        {"\n"}  <span className="text-pink-300">]</span>
                        {categoryIdx < Object.keys(TECH_STACK).length - 1 ? <span className="text-pink-300">,</span> : ""}
                      </span>
                    ))}
                    {"\n"}<span className="text-pink-300">{"}"}</span>
                  </code>
                </pre>
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-pink-50/40 border-t border-pink-200/40 text-xs text-pink-400 flex items-center gap-2 select-none font-mono">
            <span className="text-pink-500">efa@portfolio:~$</span>
            <span className="text-pink-300">_</span>
            <span className="w-2 h-4 bg-pink-400 animate-pulse block" />
          </div>
        </div>
      </div>
    </section>
  );
}
