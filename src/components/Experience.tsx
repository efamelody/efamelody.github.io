"use client";
import GlowOrb from "./GlowOrb";
import { Clock, Brain, Zap, GitBranch, Bot } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="bottom-0 left-0 w-[400px] h-[400px]"
        color="rose"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            Work History
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-pink-400/60 via-purple-300/50 to-transparent" />
          <div className="relative pl-16 md:pl-24 mb-12">
            <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-[0_0_12px_rgba(224,90,154,0.45)]" />

            <div className="rounded-3xl border border-pink-200/70 bg-white/80 p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-pink-950 tracking-tight">
                    R&D Full-Stack Developer
                  </h3>
                  <p className="text-pink-500 font-semibold text-sm mt-1.5">
                    The D Group
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-500/70 font-mono bg-pink-50 px-3 py-2 rounded-full self-start border border-pink-100">
                  <Clock size={11} />
                  Oct 2025 — May 2026 · 7 months
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Zap,
                    title: "Performance Engineering",
                    desc: "Optimized data-fetching using Prisma ORM and Server-Side Pagination to handle datasets exceeding 10k+ rows.",
                  },
                  {
                    Icon: Brain,
                    title: "AI-Driven Data Processing",
                    desc: "Engineered a bulk SKU management system using Pinecone (Vector Search) to identify duplicate records and match product aliases, ensuring data consistency across large datasets.",
                  },
                  {
                    Icon: GitBranch,
                    title: "Dynamic Auth & Routing",
                    desc: "Developed a context-aware authentication gateway using JWT tokens and dynamic routing; implemented logic to resolve access based on URL query parameters, enforcing strict conditional access for Customer Service modules.",
                  },
                  {
                    Icon: Bot,
                    title: "RAG System & Automation",
                    desc: "Architected a RAG-driven AI agent via n8n, integrating a centralised proprietary Drive API to automate end-user support on WhatsApp; deployed n8n logic to automate retailer verification, reducing manual tracking effort and optimizing Jira sprint workflows.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-pink-50/70 border border-pink-100 hover:border-pink-200 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center">
                      <item.Icon size={14} className="text-pink-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-pink-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-pink-700/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
