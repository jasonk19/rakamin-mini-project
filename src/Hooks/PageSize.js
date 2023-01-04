import { useState, useEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 720 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
  });

  return isMobile;
};

export default useMobile;
