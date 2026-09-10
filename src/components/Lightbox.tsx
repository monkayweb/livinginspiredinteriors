"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";

export type Slide = { src: string; caption: string };

export default function Lightbox({
  slides,
  index,
  onClose,
  onIndex,
}: {
  slides: Slide[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndex((index + 1) % slides.length);
  }, [index, onIndex, slides.length]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndex((index - 1 + slides.length) % slides.length);
  }, [index, onIndex, slides.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    document.documentElement.dataset.overlay = "1";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      delete document.documentElement.dataset.overlay;
    };
  }, [open, onClose, next, prev]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[800] flex flex-col bg-ink text-paper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
        >
          <div className="shell flex items-center justify-between py-6">
            <span className="t-small opacity-60">
              {String(index! + 1).padStart(2, "0")} of{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="link-underline t-small"
              data-cursor
            >
              Close
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-gutter pb-6">
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              data-cursor
              data-cursor-label="Prev"
              className="absolute left-0 top-0 z-10 h-full w-1/3"
            />
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              data-cursor
              data-cursor-label="Next"
              className="absolute right-0 top-0 z-10 h-full w-1/3"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="relative h-full w-full"
              >
                <Image
                  src={slides[index!].src}
                  alt={slides[index!].caption}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="shell pb-7">
            <span className="t-small opacity-60">{slides[index!].caption}</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
