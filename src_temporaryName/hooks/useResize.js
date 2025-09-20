import { useEffect, useState } from "react";

export const useResize = () => {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth >= 1023.9) {
        setScreenType("desktop");
      } else if (currentWidth >= 767.9) {
        setScreenType("tablet");
      } else {
        setScreenType("mobile");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return screenType;
};
