import React, { useState } from "react";
import { useEffect } from "react";

const useWindowResize = () => {
  const [isMobileVersion, setIsMobileVersion] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsMobileVersion(true);
    } else {
      setIsMobileVersion(false);
    }
    const resize = window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 500) {
        setIsMobileVersion(true);
      } else {
        setIsMobileVersion(false);
      }
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return isMobileVersion;
};

export default useWindowResize;
