"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheckCircle, faFilePdf, faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Dissertation() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="dissertation"
      className="py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #b0b2ff 0%, #eea9c4 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-2">
          Dissertation
        </h2>
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-[3px] w-16 sm:w-24 bg-white/60" />
          <FontAwesomeIcon icon={faStar} className="text-2xl text-white" />
          <div className="h-[3px] w-16 sm:w-24 bg-white/60" />
        </div>

        <div className="bg-white/95 rounded-2xl p-8 md:p-10 shadow-2xl text-left text-gray-800">
          <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
            Air Pollution Modelling and Source Inference using the Advection Gaussian Process Framework
          </h3>

          <p className="text-base leading-relaxed mb-4">
            This project applied a cutting-edge probabilistic model — the Advection Gaussian Process (Advection GP) — to infer pollution sources from real-world satellite and meteorological data. While the model had previously only been tested on synthetic data, my dissertation explored its effectiveness in a real case study: the 2019–2020 Australian bushfires.
          </p>
          <p className="text-base leading-relaxed mb-6">
            The project involved substantial data wrangling, geospatial processing, and adapting the modelling pipeline to real-world uncertainties. It was awarded a <strong className="text-secondary font-bold">Distinction (75)</strong>.
          </p>

          <div className="mb-6">
            <button
              onClick={() => setOpen(!open)}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-3 font-semibold text-left flex items-center gap-3"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
              Key Contributions
            </button>
            {open && (
              <div className="bg-gray-50 rounded-b-lg p-5">
                <ul className="space-y-2">
                  {[
                    "Adapted a research-level Gaussian Process model for real-world application",
                    "Converted satellite-derived AOD data into actionable pollution concentration estimates",
                    "Explored the impact of vertical transport by comparing 2D vs 3D wind field integration",
                    "Preprocessed NASA MERRA-2 reanalysis data and managed its limitations in resolution and accuracy",
                    "Handled spatial referencing using geospatial projection systems (cartography)",
                    "Built custom workflows to interpolate wind data for particle-based source inference simulations",
                    "Validated results against satellite fire anomaly data from the 2019–2020 bushfires",
                    "Documented challenges with model uncertainty, altitude effects, and computational performance on limited hardware",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="text-center mb-6 text-base">
            <FontAwesomeIcon icon={faFilePdf} className="mr-2 text-primary" />
            Read the research paper my project builds on:{" "}
            <a
              href="https://eprints.whiterose.ac.uk/id/eprint/202658/1/2202.04589v4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:text-secondary transition-colors"
            >
              Adjoint-aided inference of Gaussian process driven differential equations
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/assets/files/my-dissertation.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm uppercase tracking-wide"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Full PDF
            </a>
            <a
              href="https://github.com/efamelody/advectionGP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm uppercase tracking-wide"
            >
              <FontAwesomeIcon icon={faGithub} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


