"use client";

import { useEffect, useState } from "react";

/** True only for devices with a real hovering pointer. */
export function useIsFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setFine(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return fine;
}
