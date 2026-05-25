import GlowOrb from "./GlowOrb";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const METRICS = [
  { val: "7+", label: "Projects Built" },
  { val: "4", label: "Programming Languages" },
  { val: "BSc", label: "Computer Science" },
  { val: "Distinction", label: "ML Dissertation" },
];

export default function Hero() {
  return (
    <section
      id="page-top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <GlowOrb
        className="top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[650px]"
        color="pink"
      />
      <GlowOrb
        className="top-1/3 left-1/4 w-[450px] h-[450px]"
        color="purple"
      />
      <GlowOrb
        className="bottom-1/4 right-1/4 w-[350px] h-[350px]"
        color="rose"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300/70 bg-pink-100/80 text-pink-600 text-xs font-semibold mb-10">
            <Sparkles size={12} className="text-pink-400" />
            Computer Science Graduate · Sheffield, UK
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.0] mb-8">
            <span className="text-pink-950/90 block">Building Creative</span>
            <span className="text-pink-950/90 block">Solutions with</span>
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent block mt-1">
              Code & Curiosity.
            </span>
          </h1>

          <p className="text-pink-800/55 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            CS graduate from the University of Sheffield with an ML dissertation
            at distinction. Passionate about full-stack development, AI, and
            building projects that make a difference.
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-extrabold text-pink-900 tracking-tight">
                  {m.val}
                </div>
                <div className="text-xs text-pink-500/70 mt-0.5 font-mono">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-200 shadow-[0_8px_28px_rgba(224,90,154,0.30)]"
            >
              View My Projects
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
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
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
