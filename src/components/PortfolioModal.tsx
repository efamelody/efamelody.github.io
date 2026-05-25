"use client";
import { useEffect } from "react";
import { Project } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import StarDivider from "./StarDivider";

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
        className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-2xl relative my-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors z-10"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>

        <div className="p-6 md:p-10 text-center font-body">
          <h2 className="text-primary font-heading font-bold text-2xl md:text-3xl mb-4">
            {project.title}
          </h2>
          <StarDivider />

          <img
            src={`/img/portfolio/${project.img}`}
            alt={project.alt}
            className="w-full max-w-lg mx-auto rounded-lg shadow-md mb-8"
          />

          <div className="text-left max-w-xl mx-auto prose prose-sm md:prose prose-primary">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <img
                    src={src?.startsWith("http") ? src : `/${src}`}
                    alt={alt || ""}
                    className="w-full rounded-lg shadow my-4"
                  />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 my-8 text-sm text-gray-500">
            {project.client && (
              <li>
                Client: <strong className="text-secondary">{project.client}</strong>
              </li>
            )}
            <li>
              Date: <strong className="text-secondary">{project.projectDate}</strong>
            </li>
            <li>
              Category: <strong className="text-secondary">{project.category}</strong>
            </li>
          </ul>

          <button
            onClick={onClose}
            className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-6 py-2.5 rounded transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
