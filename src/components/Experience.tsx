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
      <GlowOrb className="bottom-0 left-0 w-[400px] h-[400px]" tone="soft" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-pink-600 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-pink-950">
            Engineering Experience
          </h2>
          <p className="text-pink-900/75 text-base md:text-lg leading-relaxed max-w-2xl mt-4">
            Two employed roles, both spent on production systems — modernising
            a platform that could not be changed safely, and building AI
            automation that had to answer customers correctly.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-pink-400/60 via-pink-300/50 to-transparent" />
          {/* eAuto Sdn Bhd — Most Recent */}
          <div className="relative pl-16 md:pl-24 mb-12">
            <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-pink-700 shadow-[0_0_12px_rgba(232,62,145,0.45)]" />

            <div className="rounded-3xl border border-pink-200/70 bg-white/85 p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-pink-950 tracking-tight">
                    Software Engineer
                  </h3>
                  <p className="text-pink-700 font-semibold text-sm mt-1.5">
                    eAuto Sdn Bhd — eAuto Platform (Malaysian vehicle transfer /
                    JPJ-integrated)
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-600/90 font-mono bg-pink-50 px-3 py-2 rounded-full self-start border border-pink-100">
                  <Clock size={11} />
                  Jul 2026 — Sep 2026 · 3 months
                </div>
              </div>
              <p className="text-xs text-pink-900/75 leading-relaxed mb-4">
                A platform for Malaysian vehicle ownership transfers, integrated
                with JPJ. The core is a legacy Java 6 / Spring 2.5 / Hibernate 3
                / Tomcat 6 monolith, with satellite Spring Boot services for
                search, reporting, cron, notifications, onboarding,
                e-invoicing, SSM and asset storage. I worked here as a
                Software Engineer on both the modernisation and the
                customer-facing product.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-8">
                <span className="text-[11px] font-mono text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full">
                  Employed role
                </span>
                <span className="text-[11px] font-mono text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full">
                  Production platform
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Building2,
                    title: "Modernising a monolith that could not be changed safely",
                    desc: "The oldest features were locked inside a 20-year-old Java codebase, so every change carried risk. I architected and deployed `backoffice`, a Kotlin / Spring Boot 3.5 satellite host that extracts features one at a time, and enforced the module boundaries with ArchUnit assertions in CI so they could not quietly erode.",
                  },
                  {
                    Icon: ShieldCheck,
                    title: "One identity across several applications",
                    desc: "Staff needed a single sign-in, and a sign-out in one app had to take effect everywhere. I built a JWT hand-off with single-use signed tokens, JTI replay guards and an open-redirect whitelist, plus a back-channel SessionRegistry trigger that revokes the other sessions at the same moment.",
                  },
                  {
                    Icon: ArrowLeftRight,
                    title: "Payments matched to the wrong date",
                    desc: "The nightly reconciliation batch could match a payment against the wrong date, which produced mismatches and deadlocks in money-critical flows. I reordered the engine so match logic resolves before any write happens, and folded the state flips into the existing transaction boundaries rather than opening new ones.",
                  },
                  {
                    Icon: Truck,
                    title: "eMOVE — moving a car between states",
                    desc: "Customers needed to move a car interstate, and the platform had to carry payments and regulatory invoicing end to end. I led a multi-round build across 4 repositories: a three-step customer portal wizard, FPX/RHB payment gateway integration, and RabbitMQ event pipelines for LHDN e-invoicing write-backs.",
                  },
                  {
                    Icon: KeyRound,
                    title: "Driver handovers and storage that works in both environments",
                    desc: "Drivers authenticate and hand over vehicles at pickup and drop-off, and files need to sit in local storage during development but in S3 in production. I designed dual-token authentication with independent pickup and drop-off handshake lifecycles, and built an S3 SDK storage router that switches between MinIO and AWS S3 at runtime.",
                  },
                  {
                    Icon: LockKeyhole,
                    title: "Self-service password recovery on a legacy surface",
                    desc: "Forgotten-password recovery was a weak point in the old monolith. I built a fail-closed recovery flow with MD5-hashed OTPs and 24-hour rate limiting, and wired a session-listener trigger so a reset invalidates every active session rather than only changing the credential.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-pink-50/70 border border-pink-100 hover:border-pink-200 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-200 flex items-center justify-center">
                      <item.Icon size={14} className="text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-pink-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-pink-900/75 leading-relaxed">
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
                  "Spring Boot 3.5",
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
                    className="text-[11px] font-mono text-pink-600/90 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-16 md:pl-24 mb-12">
            <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-pink-700 shadow-[0_0_12px_rgba(232,62,145,0.45)]" />

            <div className="rounded-3xl border border-pink-200/70 bg-white/85 p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-pink-950 tracking-tight">
                    R&amp;D Full-Stack Developer
                  </h3>
                  <p className="text-pink-700 font-semibold text-sm mt-1.5">
                    The D Group
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-600/90 font-mono bg-pink-50 px-3 py-2 rounded-full self-start border border-pink-100">
                  <Clock size={11} />
                  Oct 2025 — May 2026 · 7 months
                </div>
              </div>
              <p className="text-xs text-pink-900/75 leading-relaxed mb-4">
                Commercial e-commerce platform work, spanning the retailer-facing
                catalogue, the support tooling, and the automation layer behind
                both.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-8">
                <span className="text-[11px] font-mono text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full">
                  Employed role
                </span>
                <span className="text-[11px] font-mono text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full">
                  Client platform
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    Icon: Zap,
                    title: "Product tables that outgrew the queries",
                    desc: "The catalogue had grown past 10,000 rows and the client-side fetches could not keep up. I moved the data access onto Prisma with server-side pagination, so a list view loads a bounded page instead of the whole table.",
                  },
                  {
                    Icon: Brain,
                    title: "Near-duplicate SKUs breaking reporting",
                    desc: "The same product was listed under several names, which made every downstream report disagree. I built a bulk SKU management flow using Pinecone vector search to match product aliases and flag duplicates, so the catalogue converges on one consistent record.",
                  },
                  {
                    Icon: GitBranch,
                    title: "Access rules that depend on context",
                    desc: "Customer Service modules were only meant to be reachable by the right people, and the rule varied by context. I built a JWT-based authentication gateway with dynamic routing that resolves access from the request context — including URL parameters — and enforces conditional access centrally, rather than leaving it to each screen.",
                  },
                  {
                    Icon: Bot,
                    title: "Support over WhatsApp, without a spreadsheet",
                    desc: "Retailer questions were answered by hand and retailer verification was tracked manually. I architected a RAG-driven AI agent in n8n, wired to the internal Drive API, that answers end-user questions over WhatsApp, and automated the retailer verification flow so the results feed straight into Jira sprint tracking.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-pink-50/70 border border-pink-100 hover:border-pink-200 transition-colors"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 border border-pink-200 flex items-center justify-center">
                      <item.Icon size={14} className="text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-pink-900 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-pink-900/75 leading-relaxed">
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
                    className="text-[11px] font-mono text-pink-600/90 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full"
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
