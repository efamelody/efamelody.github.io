import { ProjectStatus } from "@/types";

const STYLES: Record<
  ProjectStatus,
  { label: string; chip: string; dot: string }
> = {
  live: {
    label: "Live",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
  beta: {
    label: "Beta",
    chip: "text-amber-700 bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
  },
  "in-development": {
    label: "In development",
    chip: "text-sky-700 bg-sky-50 border-sky-200",
    dot: "bg-sky-500",
  },
  prototype: {
    label: "Prototype",
    chip: "text-rose-700 bg-rose-50 border-rose-200",
    dot: "bg-rose-500",
  },
  archived: {
    label: "Archived",
    chip: "text-slate-600 bg-slate-50 border-slate-200",
    dot: "bg-slate-400",
  },
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${s.chip} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
