"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, Filter } from "@/types";
import { projects } from "@/data/portfolio";
import GlowOrb from "../GlowOrb";
import CategoryFilterBar from "./CategoryFilterBar";
import TimelineNavigator from "./TimelineNavigator";
import Workbench from "./Workbench";

export default function DesignJourney() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => 
      new Date(b.sortDate || b.date).getTime() - new Date(a.sortDate || a.date).getTime()
    );
  }, [filteredProjects]);

  const selectedProject = sortedProjects.find(p => p.modalId === selectedId) || null;

  useEffect(() => {
    if (sortedProjects.length > 0 && !selectedId) {
      setSelectedId(sortedProjects[0].modalId);
    } else if (!sortedProjects.some(p => p.modalId === selectedId)) {
      setSelectedId(sortedProjects[0]?.modalId || null);
    }
  }, [activeFilter, sortedProjects]);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <section id="case-studies" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb className="top-0 right-0 w-[450px] h-[450px]" color="purple" />
      <GlowOrb className="bottom-0 left-0 w-[350px] h-[350px]" color="rose" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            Design Journey
          </h2>
          <p className="mt-4 text-pink-700/60 max-w-2xl">
            Explore the design decisions, process, and impact behind each project. 
            Select a project from the timeline to dive deep.
          </p>
        </div>

        <CategoryFilterBar 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange}
          projects={projects}
        />

        <div className="flex lg:flex-row flex-col gap-8">
          <TimelineNavigator
            projects={sortedProjects}
            activeFilter={activeFilter}
            selectedId={selectedId}
            onSelect={handleSelect}
            onFilterChange={handleFilterChange}
          />

          <Workbench 
            selectedProject={selectedProject}
            onClose={handleClose}
          />
        </div>
      </div>
    </section>
  );
}