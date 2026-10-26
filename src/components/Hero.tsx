import GlowOrb from "./GlowOrb";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  ExternalLink,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Product engineering",
    body: "Full-stack applications, APIs and database-backed systems.",
  },
  {
    icon: Database,
    title: "Data & performance",
    body: "Query optimisation, server-side pagination and large datasets.",
  },
  {
    icon: BrainCircuit,
    title: "AI & research",
    body: "RAG, workflow automation and applied machine learning.",
  },
  {
    icon: Wrench,
    title: "Ownership & learning",
    body: "Building independent projects and learning unfamiliar systems.",
  },
];

export default function Hero() {
  return (
    <section
      id="page-top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <GlowOrb className="top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[650px]" tone="mid" />
      <GlowOrb className="top-1/3 left-1/4 w-[450px] h-[450px]" tone="deep" />
      <GlowOrb className="bottom-1/4 right-1/4 w-[350px] h-[350px]" tone="soft" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300/70 bg-pink-100/80 text-pink-700 text-xs font-semibold mb-8">
              <Sparkles size={12} className="text-pink-500" />
              Full-Stack Developer · AI Automation · Applied ML
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] mb-4 text-pink-950">
              Nur Izfarwiza
            </h1>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.12] mb-6 max-w-3xl bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 bg-clip-text text-transparent">
              Fullstack Developer
            </h2>

            <p className="text-pink-900/75 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
              I&apos;m a Computer Science graduate from the University of
              Sheffield with hands-on experience building full-stack products,
              data-intensive applications and AI-powered automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-3xl">
              {CAPABILITIES.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="group relative overflow-hidden rounded-2xl border border-pink-200/70 bg-white/70 backdrop-blur-sm p-5 shadow-[0_2px_16px_rgba(232,62,145,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_14px_34px_rgba(232,62,145,0.16)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-[0_4px_14px_rgba(232,62,145,0.28)] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={1.9} />
                      </span>
                      <div>
                        <h3 className="text-base md:text-lg font-heading font-extrabold text-pink-950 mb-1 leading-snug">
                          {c.title}
                        </h3>
                        <p className="text-sm text-pink-900/70 leading-relaxed">
                          {c.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold text-sm hover:from-pink-400 hover:to-pink-600 transition-all duration-200 shadow-[0_8px_28px_rgba(232,62,145,0.30)]"
              >
                Explore my work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/efamelody"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-pink-300 text-pink-700 font-semibold text-sm hover:border-pink-400 hover:bg-pink-50 transition-all duration-200"
              >
                GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="shrink-0 -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl p-2 pb-8 shadow-[0_12px_40px_rgba(232,62,145,0.18)] border border-pink-100/80 relative">
              <img
                src="/img/profile.JPG"
                alt="Nur Izfarwiza"
                width={176}
                height={176}
                fetchPriority="high"
                className="w-36 md:w-44 h-36 md:h-44 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-pink-600 font-mono tracking-widest select-none">
                efa, 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
