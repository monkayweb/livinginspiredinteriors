"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { EASE_IN_OUT_QUART } from "@/lib/motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const first = useRef(true);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setWipe(true);
    const id = setTimeout(() => setWipe(false), 60);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {wipe ? (
          <motion.div
            key={pathname}
            className="pointer-events-none fixed inset-0 z-[600] bg-ink"
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: EASE_IN_OUT_QUART }}
          />
        ) : null}
      </AnimatePresence>

      {children}
    </>
  );
}
