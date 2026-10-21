"use client";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Github } from "@/components/icons";
import { ExternalLink } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";
import StatusBadge from "@/components/StatusBadge";
import { portfolioAsset } from "@/lib/assets";

interface Props {
  project: Project;
  onSelect: (p: Project) => void;
  variant?: "featured" | "compact";
}

export default function PortfolioCard({
  project,
  onSelect,
  variant = "compact",
}: Props) {
  const featured = variant === "featured";
  const image = project.screenshot ?? project.img;
  const imageSrc = image ? portfolioAsset(image) : undefined;
  const monogram = project.title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-pink-200/70 bg-white/85 hover:border-pink-300 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(224,90,154,0.12)] cursor-pointer ${
        featured ? "w-full" : ""
      }`}
      onClick={() => onSelect(project)}
    >
      {/* Product visual */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100/70 border-b border-pink-100 ${
          featured ? "aspect-[16/7]" : "aspect-[16/9]"
        }`}
      >
        {imageSrc ? (
          <ProjectImage
            src={imageSrc}
            alt={project.alt}
            hint={imageSrc}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            placeholderClassName="w-full h-full py-10"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              aria-hidden="true"
              className={`font-heading font-extrabold text-pink-200/90 select-none ${
                featured ? "text-6xl md:text-7xl" : "text-5xl"
              }`}
            >
              {monogram}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className={featured ? "p-7 md:p-9" : "p-6"}>
        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md bg-pink-50 text-pink-600/90 border border-pink-100 font-mono"
            >
              {tag}
            </span>
          ))}
          {project.technologies.length > (featured ? 4 : 3) && (
            <span className="text-[11px] px-2.5 py-1 rounded-md bg-pink-50/60 text-pink-500 border border-pink-100 font-mono">
              +{project.technologies.length - (featured ? 4 : 3)} more
            </span>
          )}
        </div>

        <h3
          className={`font-heading font-bold text-pink-950 tracking-tight mb-2.5 ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-pink-900/75 leading-relaxed mb-5 ${
            featured ? "text-base max-w-2xl" : "text-sm line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {featured && project.role && (
          <p className="text-xs text-pink-900/70 leading-relaxed mb-5">
            <span className="font-mono text-pink-600 uppercase tracking-wider text-[10px] mr-2">
              My role
            </span>
            {project.role}
          </p>
        )}

        <div className="text-[11px] text-pink-600/90 font-mono mb-4">
          {project.category} · {project.projectDate}
        </div>

        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-800 font-medium transition-colors"
            >
              <ExternalLink size={13} /> Live site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-800 font-medium transition-colors"
            >
              <Github size={13} /> Source
            </a>
          )}
          <span
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-800 font-medium transition-colors ml-auto cursor-pointer"
          >
            Case study <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
