"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, Filter } from "@/types";
import { projects } from "@/data/portfolio";
import GlowOrb from "../GlowOrb";
import CategoryFilterBar from "./CategoryFilterBar";
import { Github } from "@/components/icons";
import { ExternalLink, Zap, Code, BookOpen, Calendar, User, Tag, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Target, MessageSquare, Users, TrendingUp, Star, RotateCcw, Layout, Palette, Type, GitBranch, ExternalLink as ExtLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const tagIcons = {
  ongoing: <Zap size={12} className="text-yellow-500" />,
  deployed: <Code size={12} className="text-green-500" />,
  uni: <BookOpen size={12} className="text-blue-500" />,
};

const filterLabels: Record<Filter, string> = {
  all: "All",
  ongoing: "Ongoing",
  deployed: "Deployed",
  uni: "Uni Projects",
};

function getCondensedContent(content: string, maxSections = 2): string {
  const sections = content.split('\n## ');
  return sections.slice(0, maxSections).join('\n## ');
}

export default function RecruiterView() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => 
      new Date(b.sortDate || b.date).getTime() - new Date(a.sortDate || a.date).getTime()
    );
  }, [filteredProjects]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedIds(new Set(sortedProjects.map(p => p.modalId)));
  const collapseAll = () => setExpandedIds(new Set());

  return (
    <section id="portfolio" className="relative py-20 px-6 overflow-hidden">
      <GlowOrb className="top-0 right-0 w-[450px] h-[450px]" color="purple" />
      <GlowOrb className="bottom-0 left-0 w-[350px] h-[350px]" color="rose" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-3 block font-semibold">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
                Projects at a Glance
              </h1>
              <p className="mt-3 text-pink-700/60 max-w-2xl">
                {sortedProjects.length} project{sortedProjects.length !== 1 ? 's' : ''} — click any card to expand. No tabs, no modals, just scroll.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <CategoryFilterBar 
                activeFilter={activeFilter} 
                onFilterChange={setActiveFilter}
                projects={projects}
              />
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm transition-all ${
                    viewMode === "cards"
                      ? "bg-pink-500 text-white border-pink-600 shadow-[3px_3px_0px_0px_#be185d]"
                      : "bg-white text-pink-700 border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]"
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm transition-all ${
                    viewMode === "list"
                      ? "bg-pink-500 text-white border-pink-600 shadow-[3px_3px_0px_0px_#be185d]"
                      : "bg-white text-pink-700 border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]"
                  }`}
                >
                  List
                </button>
                <button
                  onClick={expandedIds.size === sortedProjects.length ? collapseAll : expandAll}
                  className="px-4 py-2 rounded-lg border-2 border-pink-200 bg-white text-pink-700 font-semibold text-sm hover:border-pink-300 hover:bg-pink-50 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] transition-all"
                >
                  {expandedIds.size === sortedProjects.length ? "Collapse All" : "Expand All"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === "cards" ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedProjects.map((project, index) => (
                <ProjectCardRecruiter
                  key={project.modalId}
                  project={project}
                  index={index}
                  isExpanded={expandedIds.has(project.modalId)}
                  onToggle={() => toggleExpand(project.modalId)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {sortedProjects.map((project, index) => (
                <ProjectRowRecruiter
                  key={project.modalId}
                  project={project}
                  index={index}
                  isExpanded={expandedIds.has(project.modalId)}
                  onToggle={() => toggleExpand(project.modalId)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {sortedProjects.length === 0 && (
          <div className="text-center py-16 text-pink-400/60">
            No projects in this category.
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardRecruiterProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCardRecruiter({ project, index, isExpanded, onToggle }: ProjectCardRecruiterProps) {
  const hasDeepContent = project.processSteps?.length || project.uiSystem || project.decisions?.length || project.impact;
  
  const cardShadow = "shadow-[5px_5px_0px_0px_rgba(244,114,182,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(244,114,182,0.5)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200";
  const cardBase = "bg-white rounded-2xl border-2 border-pink-200 p-6 flex flex-col";
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={`group relative ${cardBase} ${cardShadow} ${isExpanded ? "ring-2 ring-pink-400 ring-offset-2" : ""}`}
      onClick={onToggle}
      style={{ cursor: "pointer" }}
    >
      
      {/* Header */}
      <div className="relative flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
<div className="flex flex-wrap gap-2 mb-3">
              {project.filterTag && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
                  {tagIcons[project.filterTag]}
                  {project.filterTag.charAt(0).toUpperCase() + project.filterTag.slice(1)}
                </span>
              )}
              <span className="text-xs px-3 py-1.5 rounded-lg border-2 border-purple-200 bg-purple-50 text-purple-600 font-mono shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)]">
                {project.category}
              </span>
            </div>
          <h3 className="text-xl font-bold text-pink-950 tracking-tight pr-8">
            {project.title}
          </h3>
        </div>
        <motion.button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="flex-shrink-0 p-2 rounded-lg border-2 border-pink-200 bg-white text-pink-500 hover:bg-pink-50 hover:border-pink-300 shadow-[2px_2px_0px_0px_rgba(244,114,182,0.3)] transition-all"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </motion.button>
      </div>

      {/* Quick Stats */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs">
        <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
          <Calendar size={10} /> {project.projectDate}
        </span>
        <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
          <Tag size={10} /> {project.technologies.length} techs
        </span>
        {project.client && (
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
            <User size={10} /> {project.client}
          </span>
        )}
      </div>

      {/* Tech Stack - always visible top 5 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="text-xs px-3 py-1 rounded-lg border-2 border-pink-200 bg-pink-50 text-pink-400">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-pink-700/70 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3 pt-3 border-t border-pink-100/50 mb-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-700 font-medium transition-colors"
          >
            <Github size={12} /> Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs text-purple-500 hover:text-purple-700 font-medium transition-colors"
          >
            <ExternalLink size={12} /> Live
          </a>
        )}
        <span className="flex-1" />
        {hasDeepContent && (
          <span className="inline-flex items-center gap-1 text-xs text-pink-400 font-medium">
            <ChevronDown size={12} className={isExpanded ? "rotate-180" : ""} />
            Details
          </span>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-pink-100/50 space-y-6"
          >
            <ProjectDeepContent project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ProjectRowRecruiterProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectRowRecruiter({ project, index, isExpanded, onToggle }: ProjectRowRecruiterProps) {
  const hasDeepContent = project.processSteps?.length || project.uiSystem || project.decisions?.length || project.impact;
  
  const rowShadow = "shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] hover:shadow-[5px_5px_0px_0px_rgba(244,114,182,0.5)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200";
  const rowBase = "bg-white rounded-xl border-2 border-pink-200 p-4";
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`group relative ${rowBase} ${rowShadow} ${isExpanded ? "ring-2 ring-pink-400 ring-offset-2" : ""}`}
      onClick={onToggle}
      style={{ cursor: "pointer" }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Thumbnail */}
        <div className="relative w-full md:w-32 h-20 md:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-pink-100/50 border border-pink-200/50">
          <img
            src={`/img/portfolio/${project.img}`}
            alt=""
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          {project.filterTag && (
            <div className="absolute top-1 right-1">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-white/90 backdrop-blur-sm shadow-sm border border-pink-200/50">
                {tagIcons[project.filterTag]}
              </span>
            </div>
          )}
        </div>

        {/* Main Info */}
        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.filterTag && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
                  {tagIcons[project.filterTag]}
                  {project.filterTag.charAt(0).toUpperCase() + project.filterTag.slice(1)}
                </span>
              )}
              <span className="text-xs px-3 py-1.5 rounded-lg border-2 border-purple-200 bg-purple-50 text-purple-600 font-mono shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)]">
                {project.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-pink-950 truncate pr-8">{project.title}</h3>
            <p className="text-pink-600/70 text-sm mt-1 line-clamp-2">{project.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
              <Calendar size={10} /> {project.projectDate}
            </span>
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 font-medium shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
              <Tag size={10} /> {project.technologies.length} techs
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs px-3 py-1 rounded-lg border-2 border-pink-200 bg-white text-pink-600 shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-lg border-2 border-pink-200 bg-pink-50 text-pink-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:ml-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg text-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors" title="GitHub"><Github size={16} /></a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg text-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Live"><ExternalLink size={16} /></a>
          )}
          {hasDeepContent && (
            <motion.button
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              className="p-2 rounded-lg text-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}><ChevronDown size={18} /></motion.span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Expanded Row Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-pink-100/50 md:ml-40"
          >
            <ProjectDeepContent project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectDeepContent({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      {/* Full Description (markdown) */}
      <div className="prose prose-sm md:prose prose-pink max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h2 className="text-xl font-bold text-pink-950 mt-6 mb-3">{children}</h2>,
            h2: ({ children }) => <h3 className="text-lg font-semibold text-pink-900 mt-5 mb-2">{children}</h3>,
            p: ({ children }) => <p className="text-pink-700/80 leading-relaxed mb-3">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-3 text-pink-700/80">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-3 text-pink-700/80">{children}</ol>,
            code: ({ children }) => <code className="font-mono text-sm bg-pink-50 px-1.5 py-0.5 rounded text-pink-700">{children}</code>,
            pre: ({ children }) => <pre className="bg-pink-50 rounded-lg p-3 overflow-x-auto mb-3"><code className="text-xs text-pink-800">{children}</code></pre>,
            a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-purple-600 underline">{children}</a>,
            table: ({ children }) => <div className="overflow-x-auto my-3">{children}</div>,
            th: ({ children }) => <th className="bg-pink-50 px-3 py-1.5 font-semibold text-pink-900 border border-pink-100 text-sm">{children}</th>,
            td: ({ children }) => <td className="px-3 py-1.5 border border-pink-100 text-pink-700 text-sm">{children}</td>,
          }}
        >
          {getCondensedContent(project.content, project.filterTag === "ongoing" ? 3 : 10)}
        </ReactMarkdown>
      </div>

      {/* Process Steps - condensed */}
      {project.processSteps && project.processSteps.length > 0 && (
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-pink-200 bg-white font-semibold text-sm text-pink-900 hover:bg-pink-50 hover:border-pink-300 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] transition-all list-none">
            <Layout size={18} className="text-pink-500 flex-shrink-0" />
            <span>Process ({project.processSteps.length} phases)</span>
            <ChevronDown size={16} className="ml-auto text-pink-400 group-open:rotate-180 transition-transform flex-shrink-0" />
          </summary>
          <div className="mt-3 space-y-3 pl-6 border-l-2 border-pink-200">
            {project.processSteps.slice(0, project.filterTag === "ongoing" ? 3 : 99).map((step, i) => (
              <div key={step.phase} className="relative pl-4 pb-4 before:absolute before:left-[-6px] before:top-0 before:w-1.5 before:h-full before:bg-pink-200/50 before:rounded">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-pink-400 px-2 py-0.5 rounded bg-pink-100">{step.phase}</span>
                  <span className="font-medium text-pink-900">{step.title}</span>
                </div>
                <p className="text-pink-700/70 text-sm">{step.description}</p>
                {step.artifacts && step.artifacts.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {step.artifacts.slice(0, 2).map((a, idx) => (
                      <a key={idx} href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-pink-500 hover:text-pink-700 underline">{a.caption}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {project.filterTag === "ongoing" && project.processSteps.length > 3 && (
              <p className="text-xs text-pink-500/70 italic">+ {project.processSteps.length - 3} more phases (ongoing)</p>
            )}
          </div>
        </details>
      )}

      {/* Decisions - condensed */}
      {project.decisions && project.decisions.length > 0 && (
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-pink-200 bg-white font-semibold text-sm text-pink-900 hover:bg-pink-50 hover:border-pink-300 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] transition-all list-none">
            <GitBranch size={18} className="text-pink-500 flex-shrink-0" />
            <span>Key Decisions ({project.decisions.length})</span>
            <ChevronDown size={16} className="ml-auto text-pink-400 group-open:rotate-180 transition-transform flex-shrink-0" />
          </summary>
          <div className="mt-3 space-y-3">
            {project.decisions.slice(0, project.filterTag === "ongoing" ? 2 : 99).map((decision, i) => (
              <div key={decision.id} className="p-4 rounded-lg border-2 border-pink-200 bg-white shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-pink-400 px-2 py-0.5 rounded border border-pink-200 bg-pink-50">#{i + 1}</span>
                  <span className="font-medium text-pink-900">{decision.title}</span>
                </div>
                <p className="text-pink-600/80 text-sm mb-2">{decision.context}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded border border-green-200 bg-green-50 text-green-600 font-medium">{decision.options.find(o => o.chosen)?.label || "—"}</span>
                  <span className="text-pink-500/60">chosen</span>
                </div>
                {decision.outcome && <p className="text-pink-700/70 text-sm mt-2">{decision.outcome}</p>}
              </div>
            ))}
            {project.filterTag === "ongoing" && project.decisions.length > 2 && (
              <p className="text-xs text-pink-500/70 italic">+ {project.decisions.length - 2} more decisions (ongoing)</p>
            )}
          </div>
        </details>
      )}

      {/* UI System - condensed */}
      {project.uiSystem && (
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-pink-200 bg-white font-semibold text-sm text-pink-900 hover:bg-pink-50 hover:border-pink-300 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] transition-all list-none">
            <Palette size={18} className="text-pink-500 flex-shrink-0" />
            <span>Design System</span>
            <ChevronDown size={16} className="ml-auto text-pink-400 group-open:rotate-180 transition-transform flex-shrink-0" />
          </summary>
          <div className="mt-3 space-y-4">
            {project.uiSystem.colors.length > 0 && (
              <div>
                <p className="text-xs font-medium text-pink-500 mb-2">Colors</p>
                <div className="flex flex-wrap gap-2">
                  {project.uiSystem.colors.slice(0, 8).map((c) => (
                    <div key={c.name} className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-pink-200 bg-white shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]" title={c.usage}>
                      <div className="w-8 h-8 rounded border-2 border-pink-200" style={{ backgroundColor: c.value }} />
                      <span className="text-xs font-mono text-pink-600">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.uiSystem.typography.length > 0 && (
              <div>
                <p className="text-xs font-medium text-pink-500 mb-2">Typography</p>
                <div className="space-y-1">
                  {project.uiSystem.typography.slice(0, 5).map((t) => (
                    <div key={t.name} className="flex items-center gap-3 text-xs px-3 py-2 rounded-lg border-2 border-pink-200 bg-white shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">
                      <span className="font-medium text-pink-900 w-24">{t.name}</span>
                      <span className="text-pink-500 font-mono">{t.size} / {t.weight}</span>
                      <span className="text-pink-500/60">{t.usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.uiSystem.components.length > 0 && (
              <div>
                <p className="text-xs font-medium text-pink-500 mb-2">Components</p>
                <div className="flex flex-wrap gap-2">
                  {project.uiSystem.components.slice(0, 6).map((c, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-lg border-2 border-pink-200 bg-white text-pink-600 shadow-[2px_2px_0px_0px_rgba(244,114,182,0.2)]">{c.name}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </details>
      )}

      {/* Impact - condensed */}
      {project.impact && (
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-pink-200 bg-white font-semibold text-sm text-pink-900 hover:bg-pink-50 hover:border-pink-300 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)] transition-all list-none">
            <TrendingUp size={18} className="text-pink-500 flex-shrink-0" />
            <span>Impact & Retrospective</span>
            <ChevronDown size={16} className="ml-auto text-pink-400 group-open:rotate-180 transition-transform flex-shrink-0" />
          </summary>
          <div className="mt-3 space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {project.impact.users && (
                <div className="p-4 rounded-lg border-2 border-pink-200 bg-white shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]">
                  <Users size={16} className="text-pink-500 mb-1" />
                  <p className="text-xs text-pink-500">Users / Reach</p>
                  <p className="font-semibold text-pink-900 text-sm">{project.impact.users}</p>
                </div>
              )}
              {project.impact.performance && (
                <div className="p-4 rounded-lg border-2 border-pink-200 bg-white shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]">
                  <TrendingUp size={16} className="text-pink-500 mb-1" />
                  <p className="text-xs text-pink-500">Performance</p>
                  <p className="font-semibold text-pink-900 text-sm">{project.impact.performance}</p>
                </div>
              )}
              {(project.impact.feedback?.length ?? 0) > 0 && (
                <div className="p-4 rounded-lg border-2 border-pink-200 bg-white shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]">
                  <Star size={16} className="text-pink-500 mb-1" />
                  <p className="text-xs text-pink-500">Feedback</p>
                  <p className="font-semibold text-pink-900 text-sm">{project.impact.feedback!.length} quotes</p>
                </div>
              )}
            </div>
            <div className="p-4 rounded-lg border-2 border-pink-200 bg-white shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]">
              <p className="text-xs font-medium text-pink-500 mb-1">Retrospective</p>
              <p className="text-pink-700/80 text-sm">{project.impact.retrospective}</p>
            </div>
          </div>
        </details>
      )}
    </div>
  );
}