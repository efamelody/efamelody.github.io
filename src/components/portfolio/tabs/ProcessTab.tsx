"use client";
import { motion } from "framer-motion";
import { Project, ProcessStep } from "@/types";
import { 
  Search, Lightbulb, Edit3, Zap, CheckCircle, Rocket, 
  ExternalLink, Image, Video, Code, Link2 
} from "lucide-react";

const phaseIcons = {
  research: Search,
  ideation: Lightbulb,
  wireframes: Edit3,
  prototyping: Zap,
  testing: CheckCircle,
  launch: Rocket,
};

const phaseLabels: Record<string, string> = {
  research: "Research",
  ideation: "Ideation",
  wireframes: "Wireframes",
  prototyping: "Prototyping",
  testing: "Testing",
  launch: "Launch",
};

const artifactIcons = {
  figma: ExternalLink,
  image: Image,
  video: Video,
  code: Code,
  link: Link2,
};

function getVisibleSteps(steps: ProcessStep[], filterTag?: string): ProcessStep[] {
  if (filterTag !== "ongoing") return steps;
  return steps.slice(0, 3);
}

export default function ProcessTab({ project }: { project: Project }) {
  const allSteps = project.processSteps || [];
  const steps = getVisibleSteps(allSteps, project.filterTag);
  const isCondensed = allSteps.length > steps.length;

  if (!allSteps.length) {
    return (
      <div className="text-center py-12 text-pink-500/60">
        <Lightbulb className="w-12 h-12 mx-auto mb-4 text-pink-300" />
        <p>No process documentation available for this project.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-pink-950">Design & Development Process</h2>
        <span className="text-xs text-purple-500 font-mono px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
          {steps.length} of {allSteps.length} phases
        </span>
      </div>

      {isCondensed && (
        <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50 p-4 mb-4">
          <p className="text-sm text-pink-700/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Showing first {steps.length} phases. Full process documentation will be added as the project progresses.
          </p>
        </div>
      )}

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-pink-200/50" />
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-14"
            >
              <div className="absolute left-6 top-1">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-pink-200 flex items-center justify-center shadow-sm">
                    {(() => {
                      const Icon = phaseIcons[step.phase];
                      return <Icon size={18} className="text-pink-500" />;
                    })()}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-pink-200/50" />
                  )}
                </div>
              </div>

              <div className="bg-pink-50/30 border border-pink-100/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-pink-400 px-2 py-0.5 rounded bg-pink-100">
                    {phaseLabels[step.phase]}
                  </span>
                  <h3 className="text-lg font-semibold text-pink-950">{step.title}</h3>
                </div>
                <p className="text-pink-700/80 leading-relaxed mb-4">{step.description}</p>

                {step.artifacts && step.artifacts.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {step.artifacts.map((artifact, idx) => (
                      <a
                        key={idx}
                        href={artifact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-pink-600 hover:text-pink-800 bg-white/50 border border-pink-200/50 hover:border-pink-300 transition-colors"
                      >
                        {(() => {
                          const Icon = artifactIcons[artifact.type];
                          return <Icon size={12} />;
                        })()}
                        {artifact.caption}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}