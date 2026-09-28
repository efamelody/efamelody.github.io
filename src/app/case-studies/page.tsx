import { Metadata } from "next";
import DesignJourney from "@/components/portfolio/DesignJourney";

export const metadata: Metadata = {
  title: "Design Journey | Efa's Portfolio",
  description: "Explore the design decisions, process, and impact behind each project. Interactive case studies showcasing UX design thinking and engineering.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <DesignJourney />
    </>
  );
}