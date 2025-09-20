import { useEffect } from "react";

export const useTrackLocation = (setCurrentRoute) => {
  const onPopState = () => {
    const url = new URL(location);
    setCurrentRoute(url.pathname);
  };
  useEffect(() => {
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  });
};
