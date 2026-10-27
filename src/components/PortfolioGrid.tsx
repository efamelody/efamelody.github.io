"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { projects } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import GlowOrb from "./GlowOrb";
import FeaturedProject from "./FeaturedProject";

type Filter = "all" | "work" | "research";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "work", label: "Selected Work" },
  { id: "research", label: "Research & Exploration" },
];

const LEAD_PROJECT_SLUG = "whatsapp-receptionist";

function GroupHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-xs font-mono text-pink-600 tracking-[0.2em] uppercase mb-2 font-semibold">
        {index}
      </div>
      <h3 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-pink-950">
        {title}
      </h3>
      <p className="text-sm text-pink-900/80 mb-2 max-w-xl">{hint}</p>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("work");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.track === activeFilter);
  }, [activeFilter]);

  const selectedWork = filtered.filter((p) => p.track === "work");
  const research = filtered.filter((p) => p.track === "research");
  const leadProject = selectedWork.find((p) => p.slug === LEAD_PROJECT_SLUG);
  const remainingWork = leadProject
    ? selectedWork.filter((p) => p.modalId !== leadProject.modalId)
    : selectedWork;
  const isEmpty = selectedWork.length === 0 && research.length === 0;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb className="top-0 right-0 w-[450px] h-[450px]" tone="deep" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-600 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-pink-950">
            Selected Work &amp; Research
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 p-1.5 rounded-2xl bg-pink-100/60 border border-pink-200/70 w-fit mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === f.id
                  ? "bg-white text-pink-900 shadow-sm"
                  : "text-pink-600 hover:text-pink-700"
              }`}
            >
              {f.label}
              {f.id !== "all" && (
                <span className="ml-1 text-[10px] text-pink-600/90">
                  ({projects.filter((p) => p.track === f.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {isEmpty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-pink-600 text-sm font-mono">
                No projects in this category yet.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="space-y-16"
            >
              {selectedWork.length > 0 && (
                <section>
                  <GroupHeading
                    index="01"
                    title="Selected Work"
                    hint="Products and client work I designed, built and shipped."
                  />

                  {leadProject && (
                    <FeaturedProject
                      project={leadProject}
                      onSelect={setSelected}
                    />
                  )}

                  {remainingWork.length > 0 && (
                    <div className={leadProject ? "mt-14" : ""}>
                      {leadProject && (
                        <div className="mb-6 flex items-center gap-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-pink-600">
                            More selected work
                          </span>
                          <span
                            className="h-px flex-1 bg-pink-200/70"
                            aria-hidden="true"
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {remainingWork.map((project) => (
                          <PortfolioCard
                            key={project.modalId}
                            project={project}
                            onSelect={setSelected}
                            variant="compact"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {research.length > 0 && (
                <section>
                  <GroupHeading
                    index="02"
                    title="Research &amp; Exploration"
                    hint="University projects and experiments — smaller in scope, but where the foundations were built."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {research.map((project) => (
                      <PortfolioCard
                        key={project.modalId}
                        project={project}
                        onSelect={setSelected}
                        variant="compact"
                      />
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
