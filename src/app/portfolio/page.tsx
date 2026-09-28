import { Metadata } from "next";
import RecruiterView from "@/components/portfolio/RecruiterView";

export const metadata: Metadata = {
  title: "Portfolio | Efa's Projects",
  description: "Browse all projects at a glance — expandable cards with process, decisions, design system, and impact. Recruiter-friendly, zero tabs.",
};

export default function PortfolioPage() {
  return <RecruiterView />;
}