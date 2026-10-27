import { ArrowRight } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";
import { Project } from "@/types";
import { portfolioAsset } from "@/lib/assets";

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
}

const FEATURED_TITLE = "WhatsApp AI Receptionist";
const SUMMARY =
  "A multi-tenant SaaS that puts an AI receptionist on a wedding vendor's own WhatsApp number — grounded answers, tentative holds, and one dashboard for bookings, deposits and finances.";
const TECHNOLOGIES = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "Tailwind CSS",
  "n8n",
];

export default function FeaturedProject({ project, onSelect }: Props) {
  const image = project.screenshot ?? project.img;
  const screenshot = image ? portfolioAsset(image) : undefined;
  const fallback =
    project.img && project.img !== project.screenshot
      ? portfolioAsset(project.img)
      : undefined;

  return (
    <article aria-labelledby="featured-project-heading" className="relative">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <figure className="relative order-2 lg:order-1">
          <div
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-pink-200/70 via-pink-100/30 to-pink-300/50 blur-[1px]"
            aria-hidden="true"
          />
          <div className="relative -rotate-2 bg-white p-2 shadow-[0_25px_60px_-30px_rgba(75,16,41,0.45)] md:p-3">
            <span
              className="tape absolute -top-3 left-10 z-10 h-6 w-24 -rotate-3 rounded-[1px]"
              aria-hidden="true"
            />
            <ProjectImage
              src={screenshot}
              fallbackSrc={fallback}
              alt={project.alt}
              hint={screenshot}
              className="block h-auto w-full"
              placeholderClassName="aspect-[16/9] w-full"
            />
          </div>
          <figcaption className="sr-only">
            Aida landing page screenshot from the WhatsApp AI Receptionist
            project.
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-pink-600 md:text-[11px]">
            Featured project
          </p>
          <h4
            id="featured-project-heading"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-pink-950 md:text-4xl"
          >
            {FEATURED_TITLE}
          </h4>
          <p className="mt-4 max-w-lg text-base leading-[1.8] text-pink-900/80">
            {SUMMARY}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-pink-100/80 px-3 py-1.5 text-xs font-medium text-pink-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:ml-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-pink-700 transition-colors hover:text-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                >
                  View project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </a>
              )}

              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex min-h-[44px] items-center text-sm font-semibold text-pink-700 underline decoration-pink-300 decoration-1 underline-offset-4 transition-colors hover:text-pink-900 hover:decoration-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
