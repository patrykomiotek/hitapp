import { useEffect, useState } from "react";

// ES6
const getSize = () => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

export const useViewPort = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleSize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return size;
};
