"use client";
import { Project } from "@/types";

interface Props {
  project: Project;
  onSelect: (p: Project) => void;
}

const techIconMap: Record<string, string> = {
  python: "python",
  pandas: "pandas",
  numpy: "numpy",
  "scikit-learn": "scikit-learn",
  matplotlib: "matplotlib",
  react: "react",
  recharts: "recharts",
  axios: "axios",
  flask: "flask",
  yfinance: "yfinance",
  ccxt: "ccxt",
  dayjs: "dayjs",
  tailwindcss: "tailwindcss",
  nodejs: "nodejs",
  git: "git",
  java: "java",
  mysql: "mysql",
  haskell: "haskell",
  javascript: "javascript",
  html: "html",
  css: "css",
  ruby: "ruby",
  ros: "ros",
  gazebo: "gazebo",
  turtlebot3: "turtlebot3",
  linux: "linux",
  "c++": "c++",
  ESP32: "ESP32",
  "LilyGO T-Watch 2020": "LilyGO T-Watch 2020",
  LVGL: "LVGL",
  PlatformIO: "PlatformIO",
  ArduinoOTA: "ArduinoOTA",
  "BMA423 Accelerometer": "BMA423 Accelerometer",
};

export default function PortfolioCard({ project, onSelect }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4 flex flex-col items-center border border-gray-100">
      <button
        onClick={() => onSelect(project)}
        className="relative group w-full"
      >
        <img
          src={`/img/portfolio/${project.img}`}
          alt={project.alt}
          className="w-full h-48 object-cover rounded"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </button>
      <h4 className="text-lg font-bold text-gray-800 mt-3 mb-2">{project.title}</h4>
      {project.technologies.length > 0 && (
        <div className="flex items-center justify-center gap-1.5 flex-wrap mt-1">
          {project.technologies.map((tech) => {
            const iconName = techIconMap[tech] || tech.toLowerCase().replace(/\s+/g, "-");
            return (
              <img
                key={tech}
                src={`/img/icons/${iconName}.png`}
                alt={tech}
                title={tech}
                className="w-5 h-5 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
