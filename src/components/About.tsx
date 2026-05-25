import GlowOrb from "./GlowOrb";

const TECH_STACK = [
  { label: "Core Stack", value: "Next.js · React · TypeScript · Node.js" },
  { label: "Languages", value: "Python · Java · C++ · Haskell · Ruby" },
  { label: "Databases", value: "MySQL · PostgreSQL · Prisma" },
  { label: "Tools", value: "Git · Docker · ROS · Linux · Arduino" },
  { label: "Interests", value: "Full-Stack · AI/ML · IoT · Robotics" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px]"
        color="purple"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-pink-800/55 text-base leading-relaxed">
            <p>
              Hi. I am Nur Izfarwiza, but people call me Efa. I&apos;m a fresh
              Computer Science graduate from the University of Sheffield. And I
              am from Malaysia.
            </p>
            <p>
              This page showcases some of the personal and academic projects
              I&apos;ve built — from data-driven research and embedded systems
              to web development. I&apos;m passionate about using technology to
              solve real-world problems and am always eager to learn more.
            </p>
            <p>
              My dissertation explored practical ML at scale, earning a
              distinction. I care deeply about engineering craft: the difference
              between code that works and code that scales, performs, and stays
              maintainable.
            </p>
          </div>

          <div className="space-y-0">
            {TECH_STACK.map((row) => (
              <div
                key={row.label}
                className="flex gap-4 items-baseline py-4 border-b border-pink-100 last:border-0"
              >
                <span className="shrink-0 text-xs font-mono text-pink-400 uppercase tracking-wider w-28 font-semibold">
                  {row.label}
                </span>
                <span className="text-sm text-pink-800/65 leading-relaxed">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
