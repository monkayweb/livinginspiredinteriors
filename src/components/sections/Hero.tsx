"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import LocalTime from "@/components/LocalTime";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      data-surface="dark"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-28 text-paper md:h-[100svh] md:min-h-[620px] md:pb-28"
    >
      <div className="shell grid min-h-0 flex-1 grid-cols-12 items-end gap-6 pb-6 md:items-center md:gap-10 md:pb-10">
        {/* Headline ------------------------------------------------- */}
        <motion.div
          style={{ y: textY, opacity: fade, willChange: "transform, opacity" }}
          className="col-span-12 md:col-span-8"
        >
          <h1 className="display">
            <span className="mask-line">
              <motion.span
                className="block text-[12vw] leading-[1] md:text-[6.2vw]"
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.35, delay: 0.45, ease: EASE_OUT_EXPO }}
              >
                Everyday spaces,
              </motion.span>
            </span>
            <span className="mask-line">
              <motion.span
                className="display-accent block pl-[0.02em] text-[12vw] leading-[1.05] md:text-[6.2vw]"
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.35, delay: 0.55, ease: EASE_OUT_EXPO }}
              >
                inspired sanctuaries.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE_OUT_EXPO }}
            className="t-body mt-8 max-w-[42ch] text-paper/60 md:mt-12"
          >
            Boutique interior architecture and design. Bespoke residential and
            commercial interiors, made in Johannesburg since 2020.
          </motion.p>
        </motion.div>

        {/* Image ---------------------------------------------------- */}
        <motion.div
          style={{ y: imgY, willChange: "transform" }}
          className="col-span-12 flex min-h-0 flex-col md:col-span-4 md:col-start-9 md:self-center"
        >
          <div className="relative aspect-[3/4] w-full self-start overflow-hidden md:aspect-[4/5.4] md:max-h-[58svh]">
            <motion.div
              initial={{ y: "101%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.5, delay: 0.35, ease: EASE_OUT_EXPO }}
              style={{ willChange: "transform" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/sandown-dining-hero.jpg"
                alt="Double volume dining room at the Sandown Residence"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 34vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-4 flex items-baseline justify-between"
          >
            <span className="t-small text-paper/40">Sandown Residence</span>
            <span className="t-small hidden text-paper/40 md:block">
              Johannesburg
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Base bar --------------------------------------------------- */}
      <div className="shell pb-7 pt-10 md:absolute md:inset-x-0 md:bottom-0 md:pt-0">
        <motion.div
          className="h-px w-full origin-left bg-paper/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 1.1, ease: EASE_OUT_EXPO }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="flex items-center justify-between pt-5"
        >
          <span className="t-small flex items-center gap-3 text-paper/50">
            <motion.span
              className="block h-6 w-px bg-paper/40"
              animate={{ scaleY: [0.25, 1, 0.25] }}
              style={{ originY: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            Scroll
          </span>
          <span className="t-small hidden text-paper/50 md:block">
            Established 2020
          </span>
          <span className="t-small text-paper/50">
            Johannesburg <LocalTime />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
