"use client";
import { useState } from "react";
import { Experience } from "@/types";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {experience.images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto md:w-72 shrink-0">
              {experience.images.map((src, i) => (
                <img
                  key={i}
                  src={`/${src}`}
                  alt={experience.title}
                  className="h-28 w-auto object-contain rounded bg-gray-50"
                />
              ))}
            </div>
          )}
          <div className="flex-1">
            <div className="experience-header">
              <h4 className="text-xl font-bold text-primary mb-1">{experience.title}</h4>
              <p className="text-secondary font-medium mb-1">{experience.organization}</p>
              <p className="text-gray-400 italic text-sm">{experience.date}</p>
            </div>
            <ul
              className={`mt-4 space-y-2 ${
                open ? "block" : "hidden"
              }`}
            >
              {experience.details.map((detail, i) => (
                <li key={i} className="text-gray-700 pl-5 relative before:content-['•'] before:text-primary before:font-bold before:absolute before:left-0">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
