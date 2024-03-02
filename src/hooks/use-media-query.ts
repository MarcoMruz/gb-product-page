import { useEffect, useState } from "react";

type AllowedMediaQuery = "desktop" | "tablet" | "mobile";

const mediaQueries: Record<AllowedMediaQuery, string> = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  mobile: "(max-width: 767px)",
};

export const useMediaQuery = (query: AllowedMediaQuery) => {
  const allowedQuery = mediaQueries[query];
  const [matches, setMatches] = useState(
    window.matchMedia(allowedQuery).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(allowedQuery);
    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [allowedQuery]);

  return matches;
};
