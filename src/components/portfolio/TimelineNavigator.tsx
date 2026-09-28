"use client";
import { useMemo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, Filter, ProjectGroup } from "@/types";
import { ChevronRight, Code, Globe, Zap, BookOpen } from "lucide-react";

interface TimelineNavigatorProps {
  projects: Project[];
  activeFilter: Filter;
  selectedId: number | null;
  onSelect: (id: number) => void;
  onFilterChange: (filter: Filter) => void;
}

const FILTERS: { id: Filter; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All", icon: <Globe size={14} /> },
  { id: "ongoing", label: "Ongoing", icon: <Zap size={14} /> },
  { id: "deployed", label: "Deployed", icon: <Code size={14} /> },
  { id: "uni", label: "Uni Projects", icon: <BookOpen size={14} /> },
];

function getYearGroups(projects: Project[]): ProjectGroup[] {
  const sorted = [...projects].sort((a, b) => 
    new Date(b.sortDate || b.date).getTime() - new Date(a.sortDate || a.date).getTime()
  );
  
  const groups: Record<string, Project[]> = {};
  for (const p of sorted) {
    const year = new Date(p.sortDate || p.date).getFullYear().toString();
    if (!groups[year]) groups[year] = [];
    groups[year].push(p);
  }
  
  return Object.entries(groups).map(([year, projs]) => ({
    year,
    projects: projs,
    isGrouped: projs.length > 1 && projs.every(p => p.filterTag === "uni"),
  }));
}

function FilterPill({ filter, activeFilter, onChange, count }: { 
  filter: Filter; 
  activeFilter: Filter; 
  onChange: (f: Filter) => void;
  count: number;
}) {
  const isActive = activeFilter === filter;
  const f = FILTERS.find(f => f.id === filter);
  return (
    <button
      onClick={() => onChange(filter)}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
        isActive
          ? "bg-white text-pink-900 shadow-sm"
          : "text-pink-500/70 hover:text-pink-700 bg-pink-50/50"
      }`}
    >
      {f?.icon}
      {f?.label}
      <span className="text-[10px] text-pink-400/60">({count})</span>
    </button>
  );
}

export default function TimelineNavigator({ 
  projects, 
  activeFilter, 
  selectedId, 
  onSelect, 
  onFilterChange 
}: TimelineNavigatorProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const yearGroups = useMemo(() => getYearGroups(projects), [projects]);
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter(p => p.filterTag === activeFilter);
  }, [projects, activeFilter]);

  const filterCounts = useMemo(() => {
    const counts: Record<Filter, number> = { all: projects.length, uni: 0, ongoing: 0, deployed: 0 };
    for (const p of projects) {
      if (p.filterTag) counts[p.filterTag]++;
    }
    return counts;
  }, [projects]);

  useEffect(() => {
    const selectedEl = listRef.current?.querySelector(`[data-project-id="${selectedId}"]`);
    selectedEl?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedId]);

  const handleKeyDown = (e: React.KeyboardEvent, projectId: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(projectId);
    }
  };

  return (
    <aside className="w-72 lg:w-80 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 border-r border-pink-100/60 bg-gradient-to-b from-pink-50/30 to-transparent relative">
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-50/30 to-transparent pointer-events-none" />
      <div className="mb-6 px-2">
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-pink-100/60 border border-pink-200/70">
          {FILTERS.map(f => (
            <FilterPill
              key={f.id}
              filter={f.id}
              activeFilter={activeFilter}
              onChange={onFilterChange}
              count={filterCounts[f.id]}
            />
          ))}
        </div>
      </div>

      <div ref={listRef} className="space-y-4" role="list" aria-label="Project timeline" style={{ 
        scrollbarWidth: 'thin',
        scrollbarColor: '#f472b6 transparent',
        scrollSnapType: 'y proximity'
      }}>
        {yearGroups.map((group, groupIndex) => (
          <motion.div
            key={group.year}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.05 }}
          >
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-pink-200/50" />
              
              <div className="relative flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-pink-300 flex-shrink-0 border-2 border-white shadow-sm" />
                <span className="text-xs font-mono text-pink-400 font-semibold uppercase tracking-wider">
                  {group.year}
                </span>
                {group.isGrouped && group.projects.length > 1 && (
                  <span className="text-[10px] text-pink-400/60 font-mono">
                    ({group.projects.length} projects)
                  </span>
                )}
              </div>

              <AnimatePresence mode="wait">
                {!group.isGrouped ? (
                  group.projects.map((project, idx) => (
                    <ProjectNode
                      key={project.modalId}
                      project={project}
                      isSelected={selectedId === project.modalId}
                      isDimmed={activeFilter !== "all" && project.filterTag !== activeFilter}
                      index={idx}
                      onSelect={onSelect}
                      onKeyDown={handleKeyDown}
                    />
                  ))
                ) : (
                  <YearGroupNode 
                    group={group} 
                    selectedId={selectedId}
                    activeFilter={activeFilter}
                    onSelect={onSelect}
                    onKeyDown={handleKeyDown}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        {filteredProjects.length === 0 && (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 px-2"
          >
            <p className="text-pink-400/60 text-sm font-mono">
              No projects in this category
            </p>
          </motion.div>
        )}
      </div>
    </aside>
  );
}

interface ProjectNodeProps {
  project: Project;
  isSelected: boolean;
  isDimmed: boolean;
  index: number;
  onSelect: (id: number) => void;
  onKeyDown: (e: React.KeyboardEvent, projectId: number) => void;
}

function ProjectNode({ project, isSelected, isDimmed, index, onSelect, onKeyDown }: ProjectNodeProps) {
  const tagIcons: Record<string, React.ReactNode> = {
    ongoing: <Zap size={10} className="text-yellow-500" />,
    deployed: <Code size={10} className="text-green-500" />,
    uni: <BookOpen size={10} className="text-blue-500" />,
  };

  return (
    <motion.button
      data-project-id={project.modalId}
      onClick={() => onSelect(project.modalId)}
      onKeyDown={(e) => onKeyDown(e, project.modalId)}
      tabIndex={0}
      role="option"
      aria-selected={isSelected}
      className={`relative w-full text-left group flex items-start gap-3 pl-2 pr-3 py-2.5 rounded-xl transition-all duration-200 scroll-snap-align-nearest ${
        isSelected
          ? "bg-white border border-pink-300 shadow-[0_4px_20px_rgba(224,90,154,0.15)]"
          : "hover:bg-pink-50/50 hover:border-pink-200/50 border border-transparent"
      } ${isDimmed ? "opacity-40" : ""}`}
      style={{ 
        opacity: isDimmed ? 0.5 : 1,
        transform: isSelected ? "translateX(4px)" : undefined 
      }}
    >
      <div className="relative flex-shrink-0 w-10 h-10 rounded-xl overflow-hidden bg-pink-100/50 border border-pink-200/50">
        <img
          src={`/img/portfolio/${project.img}`}
          alt=""
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        {project.filterTag && (
          <div className="absolute bottom-1 right-1">
            {tagIcons[project.filterTag]}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold text-pink-950 truncate ${isSelected ? "text-pink-950" : "text-pink-800"}`}>
          {project.title}
        </h4>
        <p className="text-[11px] text-pink-500/70 font-mono truncate">
          {project.projectDate}
        </p>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded bg-pink-100 text-pink-600 border border-pink-200">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-pink-50 text-pink-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {isSelected && (
        <motion.div
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink-500"
        />
      )}
    </motion.button>
  );
}

interface YearGroupNodeProps {
  group: ProjectGroup;
  selectedId: number | null;
  activeFilter: Filter;
  onSelect: (id: number) => void;
  onKeyDown: (e: React.KeyboardEvent, projectId: number) => void;
}

function YearGroupNode({ group, selectedId, activeFilter, onSelect, onKeyDown }: YearGroupNodeProps) {
  const [expanded, setExpanded] = useState(true);
  const [expandedOnce, setExpandedOnce] = useState(false);
  
  const matchingProjects = group.projects.filter(p => 
    activeFilter === "all" || p.filterTag === activeFilter
  );
  const hasSelection = group.projects.some(p => p.modalId === selectedId);

  useEffect(() => {
    if (hasSelection && !expandedOnce) {
      setExpanded(true);
      setExpandedOnce(true);
    }
  }, [hasSelection, expandedOnce]);

  return (
    <div className="pl-2">
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full flex items-center gap-2 pl-2 pr-3 py-2 rounded-xl hover:bg-pink-50/50 transition-colors"
        aria-expanded={expanded}
      >
        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          className="w-4 h-4 flex items-center justify-center text-pink-400"
        >
          <ChevronRight size={12} />
        </motion.div>
        <span className="text-xs font-medium text-pink-600">
          {group.year} ({matchingProjects.length} projects)
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 space-y-2 border-l border-pink-100/50 pl-4"
          >
            {group.projects.map((project, idx) => (
              <ProjectNode
                key={project.modalId}
                project={project}
                isSelected={selectedId === project.modalId}
                isDimmed={activeFilter !== "all" && project.filterTag !== activeFilter}
                index={idx}
                onSelect={onSelect}
                onKeyDown={onKeyDown}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}