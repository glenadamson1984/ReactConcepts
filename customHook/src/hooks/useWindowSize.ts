// src/hooks/useWindowSize.ts
import { useState, useEffect } from "react";

/**
 * useWindowSize
 * - Tracks the browser window's width + height.
 * - Updates whenever the window is resized.
 */
export function useWindowSize() {
  // Start with the current window size
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler to call on resize
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Call handler right away in case size changed before listener set
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size; // { width, height }
}
