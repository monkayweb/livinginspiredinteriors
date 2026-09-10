"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";

/* ---------------------------------------------------------------- FadeIn */

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 1.1, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------ SplitWords */

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  as: Tag = "span",
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  once?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.35 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.3em", marginBottom: "-0.3em" }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "142%" },
              show: { y: "0%", transition: { duration: 1.1, ease: EASE_OUT_EXPO } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ------------------------------------------------------------- ScrollText */
/* Word by word opacity tied to scroll progress. */

export function ScrollText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="relative inline-block">
      <motion.span aria-hidden style={{ opacity, willChange: "opacity" }}>
        {children}
        {" "}
      </motion.span>
    </span>
  );
}

/* ---------------------------------------------------------------- Reveal */
/*
 * A two layer translate mask rather than an animated clip-path. Clip-path
 * repaints the whole element every frame; a pair of counter moving transforms
 * stays on the compositor and reads as a slow parallax unveil.
 */

export function ClipReveal({
  children,
  className,
  delay = 0,
  duration = 1.4,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const transition = { duration, delay, ease: EASE_OUT_EXPO };

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "101%" }}
        animate={inView ? { y: "0%" } : { y: "101%" }}
        transition={transition}
        style={{ willChange: "transform" }}
      >
        <motion.div
          initial={{ y: "-32%" }}
          animate={inView ? { y: "0%" } : { y: "-32%" }}
          transition={transition}
          style={{ willChange: "transform" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ Rule */

export function AnimatedRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-current opacity-20 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
    />
  );
}
