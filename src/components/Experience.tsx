"use client";
import GlowOrb from "./GlowOrb";
import {
  Clock,
  Brain,
  Zap,
  GitBranch,
  Bot,
  Building2,
  ShieldCheck,
  ArrowLeftRight,
  Truck,
  KeyRound,
  LockKeyhole,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <GlowOrb
        className="bottom-0 left-0 w-[400px] h-[400px]"
        color="rose"
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            Work History
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-pink-400/60 via-purple-300/50 to-transparent" />
          {/* eAuto Sdn Bhd — Most recent */}
          <div className="relative pl-16 md:pl-24 mb-12">
            <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-[0_0_12px_rgba(224,90,154,0.45)]" />

            <div className="rounded-3xl border border-pink-200/70 bg-white/80 p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-pink-950 tracking-tight">
                    Software Engineer
                  </h3>
                  <p className="text-pink-500 font-semibold text-sm mt-1.5">
                    eAuto Sdn Bhd — eAuto Platform (Malaysian vehicle transfer / JPJ-integrated)
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-500/70 font-mono bg-pink-50 px-3 py-2 rounded-full self-start border border-pink-100">
                  <Clock size={11} />
                  Jul 2026 — Sep 2026 · 3 months
                </div>
              </div>
              <p className="text-xs text-pink-700/50 leading-relaxed mb-8">
                Malaysian vehicle-ownership-transfer platform integrating with JPJ. Core is a legacy
                Java 6 / Spring 2.5 / Hibernate 3 / Tomcat 6 monolith, with satellite Spring Boot
                services for search, reporting, cron, notifications, onboarding, e-invoicing, SSM, and
                asset storage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Building2,
                    title: "Strangler-Fig & Microservice Migration",
                    desc: "Architected and deployed backoffice, a modern Kotlin / Spring Boot 3.5 satellite host to incrementally extract features from the 20-year-old monolith; enforced modular boundaries with ArchUnit CI assertions and isolated package structures.",
                  },
                  {
                    Icon: ShieldCheck,
                    title: "Distributed SSO & Session Security",
                    desc: "Engineered cross-app JWT authentication hand-off with single-use signed tokens, JTI replay guards, open-redirect whitelisting, and back-channel SessionRegistry trigger for synchronized session revocation.",
                  },
                  {
                    Icon: ArrowLeftRight,
                    title: "Financial Reconciliation Optimization",
                    desc: "Redesigned the money-critical batch reconciliation engine in eauto-cron (Spring Boot / JPA); eliminated multi-date payment mismatch bugs and deadlock vectors by shifting match logic ahead of writes and folding state flips into existing transaction boundaries.",
                  },
                  {
                    Icon: Truck,
                    title: "End-to-End Logistics Product (eMOVE)",
                    desc: "Led multi-round build of eMOVE (interstate car logistics) across 4 repositories; built 3-step customer portal wizard, integrated FPX/RHB payment gateways, and engineered automated RabbitMQ event pipelines for LHDN e-invoicing write-backs.",
                  },
                  {
                    Icon: KeyRound,
                    title: "Driver App Security & Storage Abstraction",
                    desc: "Designed dual-token driver authentication with independent pickup/drop-off handshake lifecycles; built S3 SDK storage abstraction router enabling seamless runtime switching between local MinIO and production AWS S3 buckets.",
                  },
                  {
                    Icon: LockKeyhole,
                    title: "Self-Service Auth & Session Management",
                    desc: "Built fail-closed Forgot Password recovery in the legacy Java monolith; secured the surface with MD5-hashed OTPs, 24-hour rate-limiting handlers, and session listener registry triggers to invalidate active sessions on password resets.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-pink-50/70 border border-pink-100 hover:border-pink-200 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center">
                      <item.Icon size={14} className="text-pink-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-pink-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-pink-700/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {[
                  "Java 6/21",
                  "Kotlin",
                  "Spring Boot 3.4",
                  "Spring Data JPA",
                  "MySQL",
                  "RabbitMQ",
                  "AWS S3 / MinIO",
                  "OpenPDF",
                  "ArchUnit",
                  "Podman/Docker",
                  "AI-Agent Orchestration (devbox)",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-pink-500/70 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-16 md:pl-24 mb-12">
            <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-[0_0_12px_rgba(224,90,154,0.45)]" />

            <div className="rounded-3xl border border-pink-200/70 bg-white/80 p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-pink-950 tracking-tight">
                    R&D Full-Stack Developer
                  </h3>
                  <p className="text-pink-500 font-semibold text-sm mt-1.5">
                    The D Group
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-500/70 font-mono bg-pink-50 px-3 py-2 rounded-full self-start border border-pink-100">
                  <Clock size={11} />
                  Oct 2025 — May 2026 · 7 months
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Zap,
                    title: "Performance Engineering",
                    desc: "Optimized data-fetching using Prisma ORM and Server-Side Pagination to handle datasets exceeding 10k+ rows.",
                  },
                  {
                    Icon: Brain,
                    title: "AI-Driven Data Processing",
                    desc: "Engineered a bulk SKU management system using Pinecone (Vector Search) to identify duplicate records and match product aliases, ensuring data consistency across large datasets.",
                  },
                  {
                    Icon: GitBranch,
                    title: "Dynamic Auth & Routing",
                    desc: "Developed a context-aware authentication gateway using JWT tokens and dynamic routing; implemented logic to resolve access based on URL query parameters, enforcing strict conditional access for Customer Service modules.",
                  },
                  {
                    Icon: Bot,
                    title: "RAG System & Automation",
                    desc: "Architected a RAG-driven AI agent via n8n, integrating a centralised proprietary Drive API to automate end-user support on WhatsApp; deployed n8n logic to automate retailer verification, reducing manual tracking effort and optimizing Jira sprint workflows.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-pink-50/70 border border-pink-100 hover:border-pink-200 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center">
                      <item.Icon size={14} className="text-pink-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-pink-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-pink-700/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "Node.js",
                  "Prisma ORM",
                  "Tailwind CSS",
                  "n8n",
                  "Postman",
                  "REST APIs",
                  "Git",
                  "Jira",
                  "Pinecone",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-pink-500/70 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
