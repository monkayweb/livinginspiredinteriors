"use client";

import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function PageHeader({
  eyebrow,
  title,
  italicTail,
  lead,
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  lead?: string;
}) {
  return (
    <header data-surface="dark" className="bg-ink pb-16 pt-32 text-paper md:pb-24 md:pt-48">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex items-baseline justify-between pb-10 md:pb-16"
        >
          <span className="t-body opacity-45">{eyebrow}</span>
          <motion.span
            className="ml-6 h-px flex-1 origin-left bg-paper/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.25, ease: EASE_OUT_EXPO }}
          />
        </motion.div>

        <h1 className="display">
          <span className="mask-line">
            <motion.span
              className="block text-[12vw] leading-[1] md:text-[7.4vw]"
              initial={{ y: "150%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.25, delay: 0.25, ease: EASE_OUT_EXPO }}
            >
              {title}
            </motion.span>
          </span>
          {italicTail ? (
            <span className="mask-line">
              <motion.span
                className="display-accent block text-[12vw] leading-[1.05] md:text-[7.4vw]"
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.25, delay: 0.35, ease: EASE_OUT_EXPO }}
              >
                {italicTail}
              </motion.span>
            </span>
          ) : null}
        </h1>

        {lead ? (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: EASE_OUT_EXPO }}
            className="t-body mt-10 max-w-[52ch] opacity-60 md:mt-14"
          >
            {lead}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}
