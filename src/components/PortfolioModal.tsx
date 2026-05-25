"use client";
import { useEffect, useCallback } from "react";
import { Project } from "@/types";
import { X, ArrowLeft, ArrowRight, Lock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  project: Project | null;
  onClose: () => void;
}

function getUrl(project: Project): string | null {
  return project.liveUrl || project.githubUrl || null;
}

function formatUrlForBar(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export default function PortfolioModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const openUrl = useCallback(() => {
    if (!project) return;
    const url = getUrl(project);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, [project]);

  if (!project) return null;

  const url = getUrl(project);
  const isLive = !!project.liveUrl;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/50 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl mx-4 rounded-2xl shadow-2xl relative my-10 overflow-hidden border border-pink-200/70"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Tab bar ── */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100/80 px-4 py-2.5 flex items-center gap-3 border-b border-pink-200/70">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              title="Close"
              className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm"
              aria-label="Close"
            />
            <span
              title="Minimise (not available)"
              className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm cursor-default"
            />
            <button
              onClick={openUrl}
              title={isLive ? "Open live site" : "Open GitHub"}
              className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500 transition-colors shadow-sm"
              aria-label={isLive ? "Open live site" : "Open GitHub"}
            />
          </div>

          {/* Active tab */}
          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/80 shadow-sm border border-pink-200/60 max-w-md truncate">
              <span className="text-[10px] font-mono text-pink-400 shrink-0">
                &#128196;
              </span>
              <span className="text-sm font-semibold text-pink-900 truncate">
                {project.title}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            title="Close"
            className="w-7 h-7 flex items-center justify-center rounded-md text-pink-400 hover:text-pink-700 hover:bg-pink-200/50 transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* ── URL bar ── */}
        <div className="bg-pink-50/80 px-4 py-2 flex items-center gap-2.5 border-b border-pink-200/50">
          <ArrowLeft size={13} className="text-pink-300" />
          <ArrowRight size={13} className="text-pink-300" />
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-pink-100 text-pink-400">
            <span className="text-[9px] font-bold">&#8635;</span>
          </span>
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-pink-200/60 shadow-inner">
            <Lock size={11} className="text-green-500 shrink-0" />
            <span className="text-xs font-mono text-pink-700 truncate">
              {url ? formatUrlForBar(url) : "about:blank"}
            </span>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="bg-white p-6 md:p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-pink-100 text-pink-600 border border-pink-200 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-pink-950 tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-xs text-purple-500 font-mono mb-8">
            {project.category} · {project.projectDate}
            {project.client && ` · ${project.client}`}
          </p>

          {/* Image */}
          {project.img && (
            <img
              src={`/img/portfolio/${project.img}`}
              alt={project.alt}
              className="w-full max-w-lg mx-auto rounded-2xl shadow-md border border-pink-100 mb-8"
            />
          )}

          {/* Markdown content */}
          <div className="text-left max-w-xl mx-auto prose prose-sm md:prose prose-primary">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <img
                    src={src?.startsWith("http") ? src : `/${src}`}
                    alt={alt || ""}
                    className="w-full rounded-2xl shadow my-4 border border-pink-100"
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-purple-600 transition-colors"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-200"
              >
                View on GitHub
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-semibold text-sm transition-all duration-200"
            >
              <X size={14} /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
