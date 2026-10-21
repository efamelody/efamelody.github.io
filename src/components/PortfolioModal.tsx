"use client";
import { useEffect, useCallback } from "react";
import { Project } from "@/types";
import { X, ArrowLeft, ArrowRight, Lock, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ProjectImage from "@/components/ProjectImage";
import StatusBadge from "@/components/StatusBadge";
import { portfolioAsset, publicPath } from "@/lib/assets";

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
  const heroSrc = project.screenshot ?? project.img;
  const hero = heroSrc ? portfolioAsset(heroSrc) : undefined;
  const heroFallback = project.img && heroSrc !== project.img ? portfolioAsset(project.img) : undefined;

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
        <div className="bg-gradient-to-r from-pink-100 to-pink-200/80 px-4 py-2.5 flex items-center gap-3 border-b border-pink-200/70">
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
            {url ? (
              <button
                onClick={openUrl}
                title={isLive ? "Open live site" : "Open GitHub"}
                className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500 transition-colors shadow-sm"
                aria-label={isLive ? "Open live site" : "Open GitHub"}
              />
            ) : (
              <span
                title="No public link"
                className="w-3.5 h-3.5 rounded-full bg-green-200 shadow-sm cursor-default"
              />
            )}
          </div>

          {/* Active tab — short slug, so the project title appears only once */}
          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/80 shadow-sm border border-pink-200/60 max-w-md truncate">
              <span className="text-[10px] font-mono text-pink-400 shrink-0">
                &#128196;
              </span>
              <span className="text-xs font-mono text-pink-800 truncate">
                {project.slug}
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
          <ArrowLeft size={13} className="text-pink-400" />
          <ArrowRight size={13} className="text-pink-400" />
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-pink-100 text-pink-400">
            <span className="text-[9px] font-bold">&#8635;</span>
          </span>
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-pink-200/60 shadow-inner">
            <Lock size={11} className="text-green-500 shrink-0" />
            <span className="text-xs font-mono text-pink-700 truncate">
              {url ? formatUrlForBar(url) : "not published yet"}
            </span>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="bg-white p-6 md:p-10">
          {/* Title + meta */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <StatusBadge status={project.status} />
            <span className="text-xs text-pink-600/90 font-mono">
              {project.context}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-pink-950 tracking-tight mb-2 font-heading">
            {project.title}
          </h2>
          <p className="text-xs text-pink-600/90 font-mono mb-5">
            {project.category} · {project.projectDate}
          </p>

          {/* Short summary */}
          <p className="text-pink-900/80 text-base md:text-[17px] leading-relaxed max-w-2xl mb-7">
            {project.description}
          </p>

          {/* Product image */}
          {hero && (
            <ProjectImage
              src={hero}
              fallbackSrc={heroFallback}
              alt={project.alt}
              hint={hero}
              className="w-full max-w-lg mx-auto rounded-2xl shadow-md border border-pink-100 mb-8"
              placeholderClassName="w-full max-w-lg mx-auto rounded-2xl border border-pink-200 mb-8 py-16"
            />
          )}

          {/* Case study */}
          <div className="text-left max-w-xl mx-auto prose prose-sm md:prose prose-primary">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <ProjectImage
                    src={src ? publicPath(src) : undefined}
                    alt={alt || ""}
                    hint={src}
                    className="w-full rounded-2xl shadow my-4 border border-pink-100"
                    placeholderClassName="w-full rounded-2xl border border-pink-200 my-4 py-12"
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>

          {/* Built with */}
          <div className="max-w-xl mx-auto mt-10 pt-6 border-t border-pink-100">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-pink-600 mb-3">
              Built with
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-pink-50 text-pink-600/90 border border-pink-100 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.role && (
              <p className="text-xs text-pink-900/70 leading-relaxed mt-5">
                <span className="font-mono text-pink-600 uppercase tracking-wider text-[10px] mr-2">
                  My role
                </span>
                {project.role}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center mt-8 gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold text-sm hover:from-pink-400 hover:to-pink-600 transition-all duration-200"
              >
                <ExternalLink size={14} /> Live site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  project.liveUrl
                    ? "border border-pink-200 text-pink-600 hover:bg-pink-50"
                    : "bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-400 hover:to-pink-600"
                }`}
              >
                View source
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
