"use client";

interface Props {
  url: string;
  title?: string;
}

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return u.pathname.replace(/^\/+/, "").split("/")[0] || null;
    }

    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.replace(/^\/shorts\//, "").split("/")[0] || null;
      }
      return u.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

function isShort(url: string): boolean {
  try {
    return new URL(url).pathname.startsWith("/shorts/");
  } catch {
    return false;
  }
}

/**
 * Responsive YouTube embed. Renders Shorts in a portrait (9:16) frame and
 * regular videos in a 16:9 frame, using the privacy-enhanced no-cookie domain.
 */
export default function YouTubeEmbed({ url, title }: Props) {
  const id = extractVideoId(url);
  if (!id) return null;

  const short = isShort(url);
  const embed = `https://www.youtube-nocookie.com/embed/${id}`;

  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl shadow-md border border-pink-100 bg-pink-50/40 ${
        short ? "aspect-[9/16] max-w-[280px]" : "aspect-video w-full max-w-xl"
      }`}
    >
      <iframe
        className="h-full w-full"
        src={embed}
        title={title || "Demo video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
