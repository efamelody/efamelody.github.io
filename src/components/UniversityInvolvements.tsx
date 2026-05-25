"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Github } from "@/components/icons";
import {
  Download,
  FileText,
  Globe,
  Wind,
  Cpu,
  Map,
  BarChart3,
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

const TABS = [
  { id: "research", label: "01 // Academic Research" },
  { id: "campus", label: "02 // Campus Involvements" },
];

const PIPELINE_STEPS = [
  { icon: Globe, label: "Satellite Data", desc: "NASA MERRA-2 reanalysis" },
  { icon: BarChart3, label: "AOD Processing", desc: "Aerosol Optical Depth conversion" },
  { icon: Cpu, label: "GP Model", desc: "Advection Gaussian Process" },
  { icon: Wind, label: "Wind Integration", desc: "2D / 3D wind fields" },
  { icon: Map, label: "Source Inference", desc: "Particle-based simulation" },
  { icon: BarChart3, label: "Validation", desc: "Fire anomaly data" },
];

const PARAMETERS = [
  { param: "Model", value: "Advection Gaussian Process" },
  { param: "Data Source", value: "NASA MERRA-2, MODIS AOD" },
  { param: "Wind Fields", value: "2D & 3D vertical transport" },
  { param: "Grid Resolution", value: "0.5° × 0.625°" },
  { param: "Case Study", value: "2019–2020 Australian bushfires" },
  { param: "Validation", value: "Satellite fire anomaly data" },
  { param: "Result", value: "Distinction (75)" },
];

const WORKFLOWS = [
  {
    title: "Data Wrangling",
    items: [
      "Processed 10+ TB of raw satellite and meteorological data",
      "Cleaned and aligned multi-resolution AOD measurements",
      "Handled missing data and temporal gaps in reanalysis records",
    ],
  },
  {
    title: "Geospatial Processing",
    items: [
      "Projected lat/lon coordinates using cartography systems",
      "Interpolated wind vectors across spatial grid cells",
      "Aligned satellite swaths with ground-truth coordinates",
    ],
  },
  {
    title: "Model Adaptation",
    items: [
      "Extended synthetic-only GP model to real-world noisy data",
      "Compared 2D vs 3D wind field integration for transport accuracy",
      "Optimized inference pipeline for limited hardware (8GB RAM)",
    ],
  },
];

export default function UniversityInvolvements() {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <section id="university" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-300/20 pointer-events-none" style={{ filter: "blur(90px)" }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-pink-200/30 pointer-events-none" style={{ filter: "blur(90px)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            University Life
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            University Involvements
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 p-1.5 rounded-2xl bg-pink-100/60 border border-pink-200/70 w-fit mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-pink-900 shadow-sm"
                  : "text-pink-500/70 hover:text-pink-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "research" && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Education banner */}
              <div className="rounded-3xl border border-purple-200/70 bg-gradient-to-br from-purple-50/80 to-pink-50/80 p-6 md:p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <BookOpen size={16} className="text-purple-500" />
                      <span className="text-xs font-mono text-purple-500 tracking-wider uppercase font-semibold">
                        BSc Computer Science
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-pink-950 tracking-tight">
                      University of Sheffield
                    </h3>
                    <p className="text-pink-500/70 text-sm mt-1">2022 — 2025</p>
                    <p className="text-pink-500/70 text-sm mt-1">Focus areas: full-stack systems, data-driven computing, and machine learning</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-purple-600 font-semibold bg-purple-50 border border-purple-100 px-3.5 py-2 rounded-full self-start">
                    YTP MARA Scholar
                  </span>
                </div>
              </div>

              {/* Terminal-style dashboard */}
              <div className="rounded-3xl border border-pink-200/70 bg-white/90 p-6 md:p-8 mb-8 font-mono">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-pink-100">
                  <div className="w-3 h-3 rounded-full bg-rose-300" />
                  <div className="w-3 h-3 rounded-full bg-amber-300" />
                  <div className="w-3 h-3 rounded-full bg-emerald-300" />
                  <span className="text-xs text-pink-400 ml-2">advection_gp_pipeline.sh — zsh</span>
                </div>

                {/* Pipeline flow */}
                <div className="mb-8">
                  <div className="text-xs text-purple-500 font-bold mb-4 tracking-wider">
                    # Pipeline Overview
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                    {PIPELINE_STEPS.map((step, i) => (
                      <div key={step.label} className="relative">
                        <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                          <step.icon size={18} className="text-pink-500 mb-2" />
                          <span className="text-xs font-bold text-pink-900">{step.label}</span>
                          <span className="text-[10px] text-pink-400 mt-0.5">{step.desc}</span>
                        </div>
                        {i < PIPELINE_STEPS.length - 1 && (
                          <ArrowRight size={14} className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-pink-300" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parameters table */}
                <div className="mb-8">
                  <div className="text-xs text-purple-500 font-bold mb-4 tracking-wider">
                    # Configuration Parameters
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {PARAMETERS.map((p) => (
                      <div
                        key={p.param}
                        className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/50 border border-pink-100"
                      >
                        <span className="text-[11px] text-pink-400 font-semibold w-28 shrink-0">
                          {p.param}
                        </span>
                        <span className="text-xs text-pink-800">{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflows */}
                <div>
                  <div className="text-xs text-purple-500 font-bold mb-4 tracking-wider">
                    # Workflow Modules
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {WORKFLOWS.map((wf) => (
                      <div
                        key={wf.title}
                        className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/60 to-pink-50/60 border border-purple-100"
                      >
                        <div className="text-sm font-bold text-pink-900 mb-3">
                          {">"} {wf.title}
                        </div>
                        <ul className="space-y-2">
                          {wf.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-xs text-pink-700/60"
                            >
                              <span className="text-purple-400 mt-0.5">$</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/assets/files/my-dissertation.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-200"
                >
                  <Download size={14} />
                  Download Full PDF
                </a>
                <a
                  href="https://github.com/efamelody/advectionGP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 font-semibold text-sm transition-all duration-200"
                >
                  <Github size={14} />
                  View on GitHub
                </a>
                <a
                  href="https://eprints.whiterose.ac.uk/id/eprint/202658/1/2202.04589v4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 font-semibold text-sm transition-all duration-200"
                >
                  <FileText size={14} />
                  Research Paper
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === "campus" && (
            <motion.div
              key="campus"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-pink-200/70 bg-white/80 p-6 md:p-7 hover:border-pink-300 hover:shadow-[0_8px_32px_rgba(224,90,154,0.08)] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center shrink-0">
                        <Users size={16} className="text-pink-500" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-pink-500/70 font-mono bg-pink-50 px-2.5 py-1.5 rounded-full border border-pink-100 shrink-0">
                        <Calendar size={10} />
                        {exp.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-pink-950 tracking-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-pink-500 font-semibold mb-4">
                      {exp.organization}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-pink-700/60"
                        >
                          <span className="w-1 h-1 rounded-full bg-pink-400 mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.images.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {exp.images.map((src, j) => (
                          <img
                            key={j}
                            src={`/${src}`}
                            alt={exp.title}
                            className="h-20 w-auto object-contain rounded-xl bg-pink-50 border border-pink-100"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
