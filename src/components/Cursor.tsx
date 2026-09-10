"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useIsFinePointer } from "@/lib/usePointer";
import { EASE_OUT_EXPO } from "@/lib/motion";

const BASE = 84;
const DOT = 8 / BASE;
const RING = 38 / BASE;

export default function Cursor() {
  const fine = useIsFinePointer();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 1400, damping: 80, mass: 0.28 });
  const sy = useSpring(y, { stiffness: 1400, damping: 80, mass: 0.28 });

  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const visible = useRef(false);
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (!fine) return;
    document.documentElement.classList.add("cursor-none-desktop");

    /* Position is written straight to motion values, never through React. */
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible.current) {
        visible.current = true;
        opacity.set(1);
      }
    };

    /*
     * Target detection runs on pointerover, which bubbles, rather than on
     * every pointermove. The old version ran a closest() DOM query on each
     * move event.
     */
    const over = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button"
      ) as HTMLElement | null;
      setActive(!!el);
      setLabel(el?.getAttribute("data-cursor-label") ?? null);
    };

    const leave = () => {
      visible.current = false;
      opacity.set(0);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
    };
  }, [fine, x, y, opacity]);

  if (!fine) return null;

  /*
   * No mix-blend-mode. A blended fixed element forces the compositor to
   * re-blend the area beneath it on every pointer move. The dot instead takes
   * the active surface colour, which costs nothing.
   */
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999]"
      style={{ x: sx, y: sy, opacity }}
    >
      <motion.div
        className="cursor-dot flex items-center justify-center"
        style={{ width: BASE, height: BASE, marginLeft: -BASE / 2, marginTop: -BASE / 2 }}
        animate={{ scale: label ? 1 : active ? RING : DOT }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      >
        <motion.span
          className="cursor-label text-[11px]"
          animate={{ opacity: label ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
