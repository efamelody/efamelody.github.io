"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import TabContainer from "./tabs/TabContainer";

interface WorkbenchProps {
  selectedProject: Project | null;
  onClose: () => void;
}

export default function Workbench({ selectedProject, onClose }: WorkbenchProps) {
  return (
    <div className="flex-1 min-w-0 lg:pl-8">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key={selectedProject.modalId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-[calc(100vh-10rem)] lg:h-[calc(100vh-8rem)] flex flex-col"
          >
            <div className="lg:hidden mb-4">
              <button
                onClick={onClose}
                className="text-pink-400 hover:text-pink-600 text-sm font-medium flex items-center gap-1"
              >
                ← Back to timeline
              </button>
            </div>
            
            <div className="flex-1 flex lg:flex-row flex-col overflow-hidden">
              <div className="lg:w-2/5 flex-shrink-0 lg:flex-none">
                <ProjectCard project={selectedProject} isSelected={true} />
              </div>
              <div className="lg:w-3/5 flex-1 min-w-0 overflow-hidden">
                <div className="h-full overflow-y-auto" style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#f472b6 transparent'
                }}>
                  <TabContainer project={selectedProject} />
                  <div className="h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex items-center justify-center bg-pink-50/30 rounded-2xl border border-pink-100/50"
          >
            <div className="text-center px-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-100/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-900 mb-2">Select a Project</h3>
              <p className="text-pink-500/60">
                Choose a project from the timeline to view its case study
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}