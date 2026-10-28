import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Handwritten from "@/components/Handwritten";

function SmileIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.3c.9 1.2 2.1 1.9 3.5 1.9s2.6-.7 3.5-1.9" />
      <path d="M9 9.8h.01M15 9.8h.01" />
    </svg>
  );
}

function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.4 7.2 9.6 14a2.1 2.1 0 0 0 3 3l7.3-7.3a4.2 4.2 0 0 0-5.9-5.9l-8.4 8.4a6.3 6.3 0 0 0 8.9 8.9l6.7-6.7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="page-top"
      className="relative overflow-hidden px-6 pb-8 pt-20 md:pb-8 md:pt-24"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14">
        <div className="relative">
          <p className="mb-2 pl-1 font-hand text-xl leading-[1.15] text-pink-700/90 md:-ml-2 md:pl-0 md:text-2xl">
            <span className="inline-block rotate-[1.2deg]">
              computer science
            </span>
            <br />
            <span className="inline-block -rotate-[1deg]">
              + real world <span className="highlighter">impact</span>
            </span>{" "}
            <span className="font-sans" aria-hidden="true">
              ♡
            </span>
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-pink-600 md:text-[11px]">
            Hi, I&apos;m
          </p>

          <h1 className="mt-2 font-display text-[clamp(3.4rem,6.6vw,6.2rem)] font-black leading-[0.95] tracking-[-0.045em] text-pink-950">
            Nur Izfarwiza
          </h1>

          <p className="mt-1.5 font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-pink-700">
            Fullstack Developer
          </p>

          <p className="mt-5 max-w-[560px] text-base leading-[1.75] text-pink-900/80 md:text-[17px]">
            I&apos;m a Computer Science graduate from the University of
            Sheffield with hands-on experience building full-stack web
            applications, and a growing interest in using machine learning to
            solve real-world problems — from business automation to
            understanding air pollution sources.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(200,44,111,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:from-pink-500 hover:to-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 motion-reduce:hover:translate-y-0"
            >
              Explore my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
            <Link
              href="/cv"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-pink-400 bg-white/50 px-7 py-3 text-sm font-semibold text-pink-700 transition-colors duration-200 hover:border-pink-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
            >
              View CV
              <FileText size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="absolute -right-1 -top-9 hidden md:block" aria-hidden="true">
            <div className="-rotate-[7deg] rounded-[3px] border border-pink-300/70 bg-white/40 px-3 py-1.5 text-center font-hand text-[15px] leading-tight text-pink-600/90 shadow-[inset_0_0_0_3px_rgba(255,253,251,0.55)]">
              <span className="block">Sheffield, UK</span>
              <span className="mt-0.5 block font-mono text-[7.5px] uppercase tracking-[0.28em] text-pink-500/80">
                journal vol. 02
              </span>
            </div>
          </div>

          <div className="absolute -left-10 -top-12 hidden -rotate-3 lg:block">
            <p className="font-hand text-xl leading-[1.15] text-pink-700/90">
              <Handwritten text={"same girl,\nbigger dreams"} seed={1} />{" "}
              <SmileIcon className="mb-0.5 inline-block h-4 w-4" />
            </p>
            <svg
              viewBox="0 0 128 8"
              fill="none"
              className="mt-1 h-2 w-32 text-pink-400"
              aria-hidden="true"
            >
              <path
                d="M2 5.5C25 2.5 61 2 126 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <figure className="photo-shadow relative mx-auto w-[min(100%,340px)] -rotate-2 lg:mx-0">
            <span
              className="tape absolute -top-3 left-10 z-10 h-6 w-24 -rotate-3 rounded-[1px]"
              aria-hidden="true"
            />
            <span
              className="tape-alt absolute -bottom-2 right-6 z-10 h-6 w-20 rotate-6 rounded-[1px]"
              aria-hidden="true"
            />
            <Paperclip className="absolute -left-3 -top-5 z-20 h-10 w-10 -rotate-[14deg] text-pink-300 drop-shadow-[0_1px_1px_rgba(75,16,41,0.18)]" />

            <div className="deckled bg-[#fffdfb] p-3 pb-12 ring-1 ring-inset ring-pink-100/80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/profile.JPG"
                alt="Nur Izfarwiza in graduation robes on a wooden bridge"
                width={674}
                height={1200}
                fetchPriority="high"
                className="block aspect-square w-full object-cover object-[50%_78%]"
              />
              <figcaption className="absolute inset-x-0 bottom-3 px-4 text-center font-hand text-[19px] text-pink-700">
                <Handwritten text="Sheffield, July 2025" seed={2} />{" "}
                <span className="font-sans" aria-hidden="true">
                  ♡
                </span>
              </figcaption>
            </div>
          </figure>

          <aside className="paper-note relative mx-auto mt-7 w-[190px] rotate-1 lg:absolute lg:-right-6 lg:top-10 lg:mt-0 lg:w-[165px] lg:rotate-2">
            <span
              className="coffee-ring pointer-events-none absolute -left-8 -top-6 h-20 w-20 -rotate-12"
              aria-hidden="true"
            />
            <div className="torn-note bg-[#fbe3e5] px-5 pb-7 pt-5">
              <p className="font-hand text-[20px] leading-[1.4] text-pink-900/90">
                <Handwritten
                  text="build useful things, learn constantly, make an impact."
                  seed={3}
                  maxTilt={0.9}
                />
              </p>
              <span
                className="mt-3 block text-right font-sans text-sm text-pink-600"
                aria-hidden="true"
              >
                ♡
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
