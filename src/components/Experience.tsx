import { experiences } from "@/data/portfolio";
import ExperienceCard from "./ExperienceCard";
import StarDivider from "./StarDivider";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary uppercase">
            Other Experience
          </h2>
          <StarDivider />
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
