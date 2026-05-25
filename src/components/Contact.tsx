"use client";
import { useState } from "react";
import GlowOrb from "./GlowOrb";
import { siteConfig } from "@/data/portfolio";
import { Github, Linkedin } from "@/components/icons";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px]"
        color="pink"
      />
      <GlowOrb
        className="top-0 right-0 w-[350px] h-[350px]"
        color="purple"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            Let&apos;s Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-pink-800/55 text-lg leading-relaxed mb-10">
              Have a project idea, collaboration opportunity, or just want to
              say hello? Feel free to reach out — I&apos;m always open to
              interesting conversations.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3.5 text-pink-700/60 hover:text-pink-800 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center group-hover:border-pink-300 transition-colors">
                  <Mail size={14} className="text-pink-500" />
                </div>
                <span className="text-sm font-medium">{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-3.5 text-pink-700/60">
                <div className="w-9 h-9 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center">
                  <MapPin size={14} className="text-pink-500" />
                </div>
                <span className="text-sm font-medium">
                  {siteConfig.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/efamelody"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all text-sm font-semibold"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nur-izfarwiza-mohd-talib-383604237/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all text-sm font-semibold"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  required
                  className="px-4 py-3.5 rounded-2xl bg-white border border-pink-200 text-pink-900 placeholder-pink-300 text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  required
                  className="px-4 py-3.5 rounded-2xl bg-white border border-pink-200 text-pink-900 placeholder-pink-300 text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Tell me about the project or opportunity..."
                required
                rows={6}
                className="px-4 py-3.5 rounded-2xl bg-white border border-pink-200 text-pink-900 placeholder-pink-300 text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-400 transition-all duration-200 shadow-[0_8px_28px_rgba(224,90,154,0.25)]"
            >
              {sent ? (
                "Message sent!"
              ) : (
                <>
                  Send Message
                  <Send
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
