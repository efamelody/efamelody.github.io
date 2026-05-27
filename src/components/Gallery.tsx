"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const PHOTOS = [
  { src: "img/experience/cs-ambassador.jpeg", caption: "CS Ambassador — representing the department" },
  { src: "img/experience/cs-ambassador2.jpeg", caption: "CS Ambassador — open day" },
  { src: "img/experience/cs-ambassador3.jpeg", caption: "CS Ambassador — welcome event" },
  { src: "img/experience/iea.jpeg", caption: "IEA — International Evening" },
  { src: "img/experience/sky.jpeg", caption: "Sky — a moment in Sheffield" },
  { src: "img/experience/wie1.jpeg", caption: "WIE — Women in Engineering" },
  { src: "img/experience/wie2.jpeg", caption: "WIE — workshop session" },
  { src: "img/experience/wie3.jpeg", caption: "WIE — group activity" },
  { src: "img/experience/wie4.jpeg", caption: "WIE — celebration" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const current = selected !== null ? PHOTOS[selected] : null;

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const prev = useCallback(() => {
    setSelected((s) => (s !== null ? (s - 1 + PHOTOS.length) % PHOTOS.length : null));
  }, []);

  const next = useCallback(() => {
    setSelected((s) => (s !== null ? (s + 1) % PHOTOS.length : null));
  }, []);

  return (
    <section id="gallery" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-pink-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-pink-500 tracking-[0.2em] uppercase mb-4 block font-semibold">
            Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-950">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              onClick={() => setSelected(i)}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-pink-200/70 bg-white/80 shadow-sm hover:shadow-[0_8px_32px_rgba(224,90,154,0.15)] transition-all duration-300 text-left"
            >
              <img
                src={`/${photo.src}`}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-white/90 font-medium drop-shadow-sm">
                  {photo.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-xs text-pink-400 font-mono">
          <Camera size={13} />
          {PHOTOS.length} photos
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/90 rounded-t-2xl border-b border-pink-200/60">
                <span className="text-xs font-mono text-pink-500">
                  {selected + 1} / {PHOTOS.length}
                </span>
                <span className="text-xs text-pink-700/70 font-medium truncate mx-4">
                  {current.caption}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 text-pink-500 transition-colors"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Image */}
              <div className="bg-black/10 flex-1 flex items-center justify-center p-2 rounded-b-2xl relative">
                <img
                  src={`/${current.src}`}
                  alt={current.caption}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />

                {/* Nav arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-pink-600 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-pink-600 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
