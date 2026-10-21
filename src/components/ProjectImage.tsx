"use client";
import { useEffect, useState } from "react";
import { ImageOff } from "lucide-react";
import { publicPath } from "@/lib/assets";

interface Props {
  /** Primary path, relative to /public. */
  src?: string;
  /** Path tried when the primary source fails to load. */
  fallbackSrc?: string;
  alt: string;
  className?: string;
  /** Extra classes for the placeholder panel. */
  placeholderClassName?: string;
  /** Public-relative path shown in the placeholder, e.g. "img/portfolio/x.png". */
  hint?: string;
}

/**
 * Image that degrades gracefully: primary source, then fallback source, then
 * a placeholder naming the expected path. Used for project screenshots so a
 * missing asset never renders as a broken-image icon.
 */
export default function ProjectImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  placeholderClassName = "",
  hint,
}: Props) {
  const sources = [src, fallbackSrc].filter(Boolean) as string[];
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFailed(false);
  }, [src, fallbackSrc]);

  if (failed || sources.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-pink-200 bg-pink-50/60 text-center ${placeholderClassName}`}
      >
        <ImageOff size={18} className="text-pink-400" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-600">
          Screenshot pending
        </span>
        {hint && (
          <code className="text-[10px] font-mono text-pink-500/90 px-2">
            {`public/${hint}`}
          </code>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={publicPath(sources[index])}
      alt={alt}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        } else {
          setFailed(true);
        }
      }}
      className={className}
    />
  );
}
