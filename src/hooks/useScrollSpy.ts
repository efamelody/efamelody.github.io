"use client";
import { useState, useEffect } from "react";

const SECTIONS = ["portfolio", "about", "experience", "dissertation", "contact"];

export function useScrollSpy() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}
