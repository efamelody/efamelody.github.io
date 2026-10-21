export const PORTFOLIO_IMG_DIR = "img/portfolio";

/**
 * Normalise a portfolio asset reference to a path relative to /public.
 * Accepts a bare filename ("mrtquest.png"), a directory path
 * ("img/portfolio/mrtquest.png") or a root-relative path.
 */
export function portfolioAsset(file: string): string {
  const clean = file.replace(/^\/+/, "");
  if (clean.startsWith("img/")) return clean;
  return `${PORTFOLIO_IMG_DIR}/${clean}`;
}

/** Turn a public-relative path into a root-relative URL. */
export function publicPath(path: string): string {
  return `/${path.replace(/^\/+/, "")}`;
}
