"use client";
import { Project } from "@/types";
import { Github } from "@/components/icons";
import { ExternalLink, Zap, Code, BookOpen, Calendar, User, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const tagIcons = {
  ongoing: <Zap size={14} className="text-yellow-500" />,
  deployed: <Code size={14} className="text-green-500" />,
  uni: <BookOpen size={14} className="text-blue-500" />,
};

function getCondensedContent(content: string, filterTag?: string): string {
  if (filterTag !== "ongoing") return content;
  // For ongoing projects, show only first 3 sections
  const sections = content.split('\n## ');
  return sections.slice(0, 3).join('\n## ') + '\n\n*... (ongoing project - full details coming soon)*';
}

export default function OverviewTab({ project }: { project: Project }) {
  const displayContent = getCondensedContent(project.content, project.filterTag);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {project.filterTag && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 border border-pink-200 text-xs font-medium">
            {tagIcons[project.filterTag as keyof typeof tagIcons]}
            {project.filterTag.charAt(0).toUpperCase() + project.filterTag.slice(1)}
          </span>
        )}
        <span className="text-xs text-purple-500 font-mono px-3 py-1 rounded-xl bg-purple-50 border border-purple-100">
          {project.category}
        </span>
      </div>

      <h2 className="text-3xl font-extrabold text-pink-950 tracking-tight">
        {project.title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        <div className="flex items-center gap-2 text-pink-600">
          <Calendar size={16} className="text-pink-400" />
          <span>{project.projectDate}</span>
        </div>
        {project.client && (
          <div className="flex items-center gap-2 text-pink-600">
            <User size={16} className="text-pink-400" />
            <span>{project.client}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-pink-600">
          <Tag size={16} className="text-pink-400" />
          <span>{project.technologies.length} technologies</span>
        </div>
      </div>

      <div className="prose prose-sm md:prose prose-pink max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h2 className="text-2xl font-bold text-pink-950 mt-8 mb-4">{children}</h2>,
            h2: ({ children }) => <h3 className="text-xl font-semibold text-pink-900 mt-6 mb-3">{children}</h3>,
            h3: ({ children }) => <h4 className="text-lg font-medium text-pink-800 mt-4 mb-2">{children}</h4>,
            p: ({ children }) => <p className="text-pink-700/80 leading-relaxed mb-4">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-pink-700/80">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-pink-700/80">{children}</ol>,
            li: ({ children }) => <li className="ml-4">{children}</li>,
            code: ({ children }) => <code className="font-mono text-sm bg-pink-50 px-1.5 py-0.5 rounded text-pink-700">{children}</code>,
            pre: ({ children }) => <pre className="bg-pink-50 rounded-lg p-4 overflow-x-auto mb-4"><code className="text-sm text-pink-800">{children}</code></pre>,
            blockquote: ({ children }) => <blockquote className="border-l-4 border-pink-300 pl-4 italic text-pink-600/80 my-4">{children}</blockquote>,
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-purple-600 underline underline-offset-2 transition-colors">
                {children}
              </a>
            ),
            img: ({ src, alt }) => (
              <img src={src?.startsWith("http") ? src : `/${src}`} alt={alt || ""} className="w-full rounded-xl my-4 border border-pink-100" />
            ),
            table: ({ children }) => <div className="overflow-x-auto my-4">{children}</div>,
            th: ({ children }) => <th className="bg-pink-50 px-4 py-2 font-semibold text-pink-900 border border-pink-100">{children}</th>,
            td: ({ children }) => <td className="px-4 py-2 border border-pink-100 text-pink-700">{children}</td>,
            tr: ({ children }) => <tr>{children}</tr>,
            thead: ({ children }) => <thead>{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
          }}
        >
          {displayContent}
        </ReactMarkdown>
      </div>

      {project.filterTag === "ongoing" && (
        <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50 p-4">
          <p className="text-sm text-pink-700/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            This project is actively in development. Case study will be updated as milestones are reached.
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-6 border-t border-pink-100/50">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-200"
          >
            <Github size={16} /> View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-semibold text-sm transition-all duration-200"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}