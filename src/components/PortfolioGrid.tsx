"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { projects } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import GlowOrb from "./GlowOrb";

type Filter = "all" | "uni" | "ongoing" | "deployed";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "uni", label: "Uni Projects" },
  { id: "ongoing", label: "Ongoing Projects" },
  { id: "deployed", label: "Deployed Projects" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const isEmpty = filtered.length === 0;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="top-0 right-0 w-[450px] h-[450px]"
        color="purple"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            My Projects
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 p-1.5 rounded-2xl bg-pink-100/60 border border-pink-200/70 w-fit mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === f.id
                  ? "bg-white text-pink-900 shadow-sm"
                  : "text-pink-500/70 hover:text-pink-700"
              }`}
            >
              {f.label}
              {f.id !== "all" && (
                <span className="ml-1 text-[10px] text-pink-400/60">
                  ({projects.filter((p) => p.filterTag === f.id).length})
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
              <p className="text-pink-400/60 text-sm font-mono">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <PortfolioCard
                  key={project.modalId}
                  project={project}
                  onSelect={setSelected}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
