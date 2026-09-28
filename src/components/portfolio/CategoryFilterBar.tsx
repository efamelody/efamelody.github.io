"use client";
import { Filter } from "@/types";

interface CategoryFilterBarProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  projects: Array<{ filterTag?: Filter }>;
}

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "uni", label: "Uni Projects" },
  { id: "ongoing", label: "Ongoing" },
  { id: "deployed", label: "Deployed" },
];

export default function CategoryFilterBar({ 
  activeFilter, 
  onFilterChange, 
  projects 
}: CategoryFilterBarProps) {
  const filterCounts = FILTERS.reduce((acc, f) => {
    if (f.id === "all") {
      acc[f.id] = projects.length;
    } else {
      acc[f.id] = projects.filter(p => p.filterTag === f.id).length;
    }
    return acc;
  }, {} as Record<Filter, number>);

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm transition-all ${
            activeFilter === f.id
              ? "bg-pink-500 text-white border-pink-600 shadow-[3px_3px_0px_0px_#be185d]"
              : "bg-white text-pink-700 border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-[3px_3px_0px_0px_rgba(244,114,182,0.3)]"
          }`}
        >
          {f.label}
          {f.id !== "all" && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-pink-100 text-pink-600 border border-pink-200">
              {filterCounts[f.id]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}