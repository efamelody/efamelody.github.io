"use client";
import { useEffect } from "react";
import { Project } from "@/types";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  project: Project | null;
  onClose: () => void;
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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/60 py-10"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl mx-4 rounded-3xl shadow-2xl relative my-10 border border-pink-200/70"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-pink-400 hover:text-pink-700 transition-colors z-10 rounded-full bg-pink-50 border border-pink-200"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-10">
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

          <h2 className="text-3xl font-extrabold text-pink-950 tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-xs text-purple-500 font-mono mb-8">
            {project.category} · {project.projectDate}
            {project.client && ` · ${project.client}`}
          </p>

          {project.img && (
            <img
              src={`/img/portfolio/${project.img}`}
              alt={project.alt}
              className="w-full max-w-lg mx-auto rounded-2xl shadow-md border border-pink-100 mb-8"
            />
          )}

          <div className="text-left max-w-xl mx-auto prose prose-sm md:prose prose-pink">
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
