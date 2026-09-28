"use client";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Github } from "../icons";
import { ExternalLink, Zap, Code, BookOpen } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isSelected?: boolean;
  onSelect?: () => void;
}

const tagIcons = {
  ongoing: <Zap size={12} className="text-yellow-500" />,
  deployed: <Code size={12} className="text-green-500" />,
  uni: <BookOpen size={12} className="text-blue-500" />,
};

export default function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  const handleClick = () => onSelect?.();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative flex flex-col rounded-3xl border p-6 lg:p-8 ${
        isSelected
          ? "bg-white border-pink-300 shadow-[0_8px_40px_rgba(224,90,154,0.12)]"
          : "bg-white/80 border-pink-200/70 hover:border-pink-300 transition-all duration-300 cursor-pointer"
      } ${onSelect ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-pink-50/80 to-purple-50/50" />
      
      <div className="relative mb-6">
        <div className="aspect-video rounded-2xl overflow-hidden bg-pink-100/50 border border-pink-200/50">
          <img
            src={`/img/portfolio/${project.img}`}
            alt={project.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {project.filterTag && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm border border-pink-200/50">
              {tagIcons[project.filterTag as keyof typeof tagIcons] || null}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium"
          >
            {tag}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-pink-50 text-pink-400 border border-pink-100 font-medium">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-pink-950 mb-3 tracking-tight">
        {project.title}
      </h3>
      <p className="text-pink-800/50 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="text-xs text-purple-500 font-mono py-2.5 px-3.5 rounded-xl bg-purple-50 border border-purple-100 mb-6">
        {project.category} · {project.projectDate}
        {project.client && ` · ${project.client}`}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-pink-100/50">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-700 font-medium transition-colors"
          >
            <Github size={13} /> Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-purple-500 hover:text-purple-700 font-medium transition-colors"
          >
            <ExternalLink size={13} /> Live
          </a>
        )}
        <span className="flex-1" />
        {isSelected && (
          <span className="inline-flex items-center gap-1.5 text-xs text-pink-400 font-medium">
            <ExternalLink size={12} /> Details
          </span>
        )}
      </div>
    </motion.div>
  );
}