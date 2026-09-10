"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

export default function ParallaxMedia({
  src,
  alt,
  className = "",
  sizes = "100vw",
  strength = 12,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  /*
   * Promote to its own layer only while on screen. Promoting every parallax
   * image on the page at once pins each full size bitmap in GPU memory;
   * promoting none forces a re-raster on every scroll frame. This does
   * neither.
   */
  const inView = useInView(ref, { amount: 0, margin: "300px 0px 300px 0px" });

  return (
    <div ref={ref} className={`media ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          height: `${100 + strength * 2}%`,
          top: `-${strength}%`,
          willChange: inView ? "transform" : "auto",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
