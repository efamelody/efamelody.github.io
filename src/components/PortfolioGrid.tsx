"use client";
import { useState } from "react";
import { Project } from "@/types";
import { projects } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import StarDivider from "./StarDivider";

export default function PortfolioGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 uppercase">
            Portfolio
          </h2>
          <StarDivider />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-grid mx-auto">
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
