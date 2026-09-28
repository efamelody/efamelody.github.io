"use client";
import { TabKey } from "./TabContainer";

interface TabBarProps {
  tabs: { key: TabKey; label: string }[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50/50 border-b border-pink-200/50 px-4 py-2 overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-white text-pink-900 shadow-sm"
                : "text-pink-500/70 hover:text-pink-700 hover:bg-white/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}