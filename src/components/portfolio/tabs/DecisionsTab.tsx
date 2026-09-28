"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, Decision } from "@/types";
import { 
  GitBranch, MessageSquare, CheckCircle2, XCircle, 
  Target, ChevronDown
} from "lucide-react";

function getVisibleDecisions(decisions: Decision[], filterTag?: string): Decision[] {
  if (filterTag !== "ongoing") return decisions;
  return decisions.slice(0, 2);
}

export default function DecisionsTab({ project }: { project: Project }) {
  const allDecisions = project.decisions || [];
  const decisions = getVisibleDecisions(allDecisions, project.filterTag);
  const isCondensed = allDecisions.length > decisions.length;

  if (!allDecisions.length) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 text-pink-500/60">
          <GitBranch className="w-12 h-12 mx-auto mb-4 text-pink-300" />
          <h3 className="text-lg font-medium text-pink-900 mb-2">No Decision Log Available</h3>
          <p className="text-sm">
            Key design and architectural decisions for this project haven't been documented yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-pink-950">Decision Log</h2>
          <p className="text-pink-600 mt-1">Key design & architectural choices with rationale</p>
        </div>
        <span className="text-xs text-purple-500 font-mono px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
          {decisions.length} of {allDecisions.length} decisions
        </span>
      </div>

      {isCondensed && (
        <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50 p-4 mb-4">
          <p className="text-sm text-pink-700/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Showing first {decisions.length} decisions. Full decision log will be added as the project progresses.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {decisions.map((decision, index) => (
          <DecisionCard key={decision.id} decision={decision} index={index} />
        ))}
      </div>
    </div>
  );
}

interface DecisionCardProps {
  decision: Decision;
  index: number;
}

function DecisionCard({ decision, index }: DecisionCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="bg-white border border-pink-100/50 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 flex items-start gap-4 text-left hover:bg-pink-50/30 transition-colors"
        aria-expanded={expanded}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-100/50 flex items-center justify-center">
          <GitBranch size={20} className="text-pink-500" />
        </div>
        
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-pink-400 px-2 py-0.5 rounded bg-pink-100">
              #{index + 1}
            </span>
            <h3 className="font-semibold text-pink-950">{decision.title}</h3>
          </div>
          <p className="text-pink-600/80 text-sm">{decision.context}</p>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          className="flex-shrink-0 text-pink-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-pink-100/50 bg-pink-50/30"
          >
            <div className="p-5 pt-0 space-y-4">
              <div className="flex items-center gap-2 text-xs text-pink-500 font-mono px-3 py-1 rounded bg-pink-100 w-fit">
                <MessageSquare size={12} /> Context
              </div>
              
              <div className="space-y-3">
                {decision.options.map((option, optIdx) => (
                  <motion.div
                    key={optIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: optIdx * 0.04 }}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all ${
                      option.chosen
                        ? "bg-green-50 border-green-200"
                        : "bg-pink-50/30 border-pink-100/50"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {option.chosen ? (
                        <CheckCircle2 size={20} className="text-green-500" />
                      ) : (
                        <XCircle size={20} className="text-pink-300" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-pink-900">{option.label}</span>
                        {option.chosen && (
                          <span className="text-xs font-mono text-green-600 px-2 py-0.5 rounded bg-green-100">
                            CHOSEN
                          </span>
                        )}
                      </div>
                      <p className="text-pink-700/80 text-sm">{option.rationale}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {decision.outcome && (
                <div className="pt-4 border-t border-pink-200/50">
                  <div className="flex items-center gap-2 text-xs text-pink-500 font-mono px-3 py-1 rounded bg-pink-100 w-fit mb-2">
                    <Target size={12} /> Outcome
                  </div>
                  <p className="text-pink-700/80">{decision.outcome}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}