"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import TabBar from "./TabBar";
import OverviewTab from "./OverviewTab";
import ProcessTab from "./ProcessTab";
import UISystemTab from "./UISystemTab";
import DecisionsTab from "./DecisionsTab";
import ImpactTab from "./ImpactTab";

export type TabKey = "overview" | "process" | "ui-system" | "decisions" | "impact";

const ALL_TABS: { key: TabKey; label: string; hasContent: (p: Project) => boolean }[] = [
  { key: "overview", label: "Overview", hasContent: () => true },
  { key: "process", label: "Process", hasContent: (p) => !!p.processSteps?.length },
  { key: "ui-system", label: "UI System", hasContent: (p) => !!p.uiSystem },
  { key: "decisions", label: "Decisions", hasContent: (p) => !!p.decisions?.length },
  { key: "impact", label: "Impact", hasContent: (p) => !!p.impact },
];

const ONGOING_TABS: TabKey[] = ["overview", "process"];

function getAvailableTabs(project: Project): { key: TabKey; label: string }[] {
  const isOngoing = project.filterTag === "ongoing";
  const baseTabs = isOngoing ? ONGOING_TABS : ALL_TABS.map(t => t.key);
  
  return baseTabs
    .map(key => {
      const tabDef = ALL_TABS.find(t => t.key === key);
      if (!tabDef) return null;
      if (!tabDef.hasContent(project)) return null;
      return { key, label: tabDef.label };
    })
    .filter(Boolean) as { key: TabKey; label: string }[];
}

export default function TabContainer({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const availableTabs = useMemo(() => getAvailableTabs(project), [project]);

  useEffect(() => {
    if (!availableTabs.some(t => t.key === activeTab)) {
      setActiveTab(availableTabs[0]?.key || "overview");
    }
  }, [project, availableTabs]);

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl border border-pink-200/70 overflow-hidden">
      <TabBar tabs={availableTabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="p-6 lg:p-10"
          >
            {activeTab === "overview" && <OverviewTab project={project} />}
            {activeTab === "process" && <ProcessTab project={project} />}
            {activeTab === "ui-system" && <UISystemTab project={project} />}
            {activeTab === "decisions" && <DecisionsTab project={project} />}
            {activeTab === "impact" && <ImpactTab project={project} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}