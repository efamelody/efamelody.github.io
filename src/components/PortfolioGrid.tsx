"use client";
import { useState } from "react";
import { Project } from "@/types";
import { projects } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import GlowOrb from "./GlowOrb";

export default function PortfolioGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="top-0 right-0 w-[450px] h-[450px]"
        color="purple"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PortfolioCard
              key={project.modalId}
              project={project}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>
      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
