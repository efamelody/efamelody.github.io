"use client";
import { Project } from "@/types";
import { Github } from "@/components/icons";
import { ExternalLink } from "lucide-react";

interface Props {
  project: Project;
  onSelect: (p: Project) => void;
}

export default function PortfolioCard({ project, onSelect }: Props) {
  return (
    <div
      className="group relative flex flex-col rounded-3xl border border-pink-200/70 bg-white/80 p-7 hover:border-pink-300 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(224,90,154,0.12)] cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-pink-50/80 to-purple-50/50" />

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium"
          >
            {tag}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-pink-50 text-pink-400 border border-pink-100 font-medium">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-pink-950 mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-pink-800/50 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="text-xs text-purple-500 font-mono py-2.5 px-3.5 rounded-xl bg-purple-50 border border-purple-100 mb-6">
        {project.category} · {project.projectDate}
      </div>

      <div className="flex items-center gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-700 font-medium transition-colors"
          >
            <Github size={13} /> Source
          </a>
        )}
        <span
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-purple-600 font-medium transition-colors ml-auto cursor-pointer"
        >
          Details <ExternalLink size={12} />
        </span>
      </div>
    </div>
  );
}
