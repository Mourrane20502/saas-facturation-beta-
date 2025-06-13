"use client";

import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleSize);
    return () => {
      window.removeEventListener("scroll", handleSize);
    };
  }, []);

  return { isScrolling };
};
