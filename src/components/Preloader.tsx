"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react";
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO } from "@/lib/motion";
import Logo from "./Logo";

const KEY = "lii-intro-seen";

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState<boolean | null>(null);

  /**
   * Progress lives in a motion value, so counting from zero to one hundred
   * writes straight to the DOM instead of triggering a React render per frame.
   */
  const progress = useMotionValue(0);
  const count = useTransform(progress, (v) => Math.round(v * 100));
  const scaleX = useTransform(progress, (v) => v);

  useEffect(() => {
    const seen =
      typeof window !== "undefined" && sessionStorage.getItem(KEY) === "1";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      // Mount time read of an external store, not derived React state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);
      onDone?.();
      return;
    }

    setShow(true);
    document.documentElement.style.overflow = "hidden";

    const controls = animate(progress, 1, {
      duration: 1.9,
      ease: EASE_OUT_EXPO,
      onComplete: () => {
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem(KEY, "1");
          document.documentElement.style.overflow = "";
          onDone?.();
        }, 280);
      },
    });

    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
  }, [onDone, progress]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[900] flex flex-col justify-between bg-ink px-gutter py-gutter text-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: EASE_IN_OUT_QUART }}
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
            >
              <Logo className="h-5 w-auto md:h-6" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
              className="t-small opacity-60"
            >
              Johannesburg
            </motion.span>
          </div>

          <div className="flex flex-col items-start">
            <span className="mask-line">
              <motion.span
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.1 }}
                className="display t-xl block leading-[1]"
              >
                Inspired
              </motion.span>
            </span>
            <span className="mask-line">
              <motion.span
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.18 }}
                className="display display-accent t-xl block pl-[0.02em] leading-[1.06]"
              >
                sanctuaries
              </motion.span>
            </span>
          </div>

          <div className="flex items-end justify-between gap-8">
            <div className="h-px flex-1 bg-paper/25">
              <motion.div
                className="h-px origin-left bg-paper"
                style={{ scaleX, willChange: "transform" }}
              />
            </div>
            <motion.span className="display t-md tabular-nums">
              {count}
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
