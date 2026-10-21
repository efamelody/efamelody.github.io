import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 py-8 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-heading font-extrabold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
          Nur Izfarwiza
        </span>
        <p className="text-xs text-pink-600/90 font-mono">
          &copy; Efa {new Date().getFullYear()} · Built with Next.js
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/efamelody"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nur-izfarwiza-mohd-talib-383604237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
