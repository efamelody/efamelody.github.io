"use client";
import { Project, UISystem } from "@/types";
import { 
  Palette, Type, Layout, ExternalLink, 
  Copy, Check, Minus, Code 
} from "lucide-react";

export default function UISystemTab({ project }: { project: Project }) {
  const uiSystem = project.uiSystem;

  if (!uiSystem) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 text-pink-500/60">
          <Palette className="w-12 h-12 mx-auto mb-4 text-pink-300" />
          <h3 className="text-lg font-medium text-pink-900 mb-2">No Design System Documented</h3>
          <p className="text-sm">
            This project doesn't have a formal design system documented. 
            The UI was built using the project's custom styling approach.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <h4 className="text-sm font-semibold text-pink-900 uppercase tracking-wider">Design Approach</h4>
          <p className="text-pink-700/80 prose prose-sm max-w-none">
            {project.content.split('\n').slice(0, 10).join('\n')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-pink-950">Design System</h2>
          <p className="text-pink-600 mt-1">Tokens, components, and patterns used in this project</p>
        </div>
        {uiSystem.figmaUrl && (
          <a
            href={uiSystem.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-pink-600 hover:text-pink-800 bg-pink-50 border border-pink-200/50 transition-colors"
          >
            <ExternalLink size={16} /> View in Figma
          </a>
        )}
      </div>

      {uiSystem.colors.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
            <Palette size={20} className="text-pink-500" />
            Color Palette
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uiSystem.colors.map((color) => (
              <div key={color.name} className="group bg-white border border-pink-100/50 rounded-xl p-4 hover:border-pink-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-pink-900">{color.name}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(color.value)}
                    className="p-1.5 rounded text-pink-400 hover:text-pink-600 hover:bg-pink-100 transition-colors"
                    title="Copy hex value"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                <div 
                  className="w-full h-12 rounded-lg mb-3 border border-pink-100"
                  style={{ backgroundColor: color.value }}
                />
                <div className="flex items-center justify-between text-xs">
                  <code className="font-mono text-pink-600 bg-pink-50 px-2 py-1 rounded">{color.value}</code>
                  <span className="text-pink-500/60">{color.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {uiSystem.typography.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
            <Type size={20} className="text-pink-500" />
            Typography Scale
          </h3>
          <div className="space-y-3">
            {uiSystem.typography.map((type) => (
              <div key={type.name} className="bg-white border border-pink-100/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-pink-900">{type.name}</span>
                  <span className="text-xs text-purple-500 font-mono px-2 py-0.5 rounded bg-purple-50 border border-purple-100">
                    {type.size} · {type.weight}
                  </span>
                </div>
                <p 
                  className="text-pink-700"
                  style={{ 
                    fontSize: type.size, 
                    fontWeight: type.weight as any 
                  }}
                >
                  The quick brown fox jumps over the lazy dog. 1234567890
                </p>
                <p className="text-xs text-pink-500/60 mt-2">{type.usage}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {uiSystem.components.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
            <Layout size={20} className="text-pink-500" />
            Component Library
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {uiSystem.components.map((comp, idx) => (
              <div key={idx} className="bg-white border border-pink-100/50 rounded-xl p-5">
                <h4 className="font-semibold text-pink-950 mb-2">{comp.name}</h4>
                <p className="text-pink-700/80 text-sm mb-4">{comp.description}</p>
                {comp.image && (
                  <div className="aspect-video rounded-lg overflow-hidden bg-pink-50 border border-pink-100">
                    <img 
                      src={comp.image} 
                      alt={comp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {comp.codeSnippet && (
                  <details className="mt-3 group">
                    <summary className="flex items-center gap-2 text-xs font-medium text-pink-600 cursor-pointer">
                      <Code size={12} /> View code
                      <Minus size={12} className="ml-auto transition-transform group-open:rotate-180" />
                    </summary>
                    <pre className="mt-2 p-3 bg-pink-50 rounded-lg overflow-x-auto text-xs">
                      <code>{comp.codeSnippet}</code>
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}