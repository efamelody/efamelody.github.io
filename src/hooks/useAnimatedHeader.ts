"use client";
import { useState, useEffect } from "react";

export function useAnimatedHeader(threshold = 300) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY >= threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return shrink;
}
