"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Project } from "@/content/site";
import Lightbox from "@/components/Lightbox";
import {
  AnimatedRule,
  ClipReveal,
  FadeIn,
  ScrollText,
  SplitWords,
} from "@/components/Reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";

const GALLERY_RHYTHM = [
  { col: "md:col-span-7", offset: "", aspect: "aspect-[4/5]" },
  { col: "md:col-span-5", offset: "md:mt-28", aspect: "aspect-[4/5]" },
  { col: "md:col-span-5", offset: "", aspect: "aspect-[3/4]" },
  { col: "md:col-span-7", offset: "md:mt-20", aspect: "aspect-[4/5]" },
] as const;

export default function ProjectView({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const meta = [
    { label: "Location", value: project.location },
    { label: "Timeline", value: project.timeline },
    { label: "Type", value: project.type },
    { label: "Scale", value: project.size },
  ];

  return (
    <>
      <section
        ref={heroRef}
        data-surface="dark"
        className="relative flex h-[92svh] min-h-[560px] items-end overflow-hidden bg-ink text-paper"
      >
        <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}
            style={{ willChange: "transform, opacity" }}
            className="relative h-full w-full"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/55" />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: titleY }} className="relative z-10 w-full pb-10 md:pb-14">
          <div className="shell">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="t-small block pb-5"
            >
              Project {project.index}
            </motion.span>
            <h1 className="display mask-line">
              <motion.span
                className="block text-[10.5vw] leading-[1] md:text-[6.8vw]"
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, delay: 0.35, ease: EASE_OUT_EXPO }}
              >
                {project.title}
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: EASE_OUT_EXPO }}
              className="t-body mt-6 max-w-[44ch] text-paper/70"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section data-surface="light" className="bg-paper text-ink py-20 md:py-28">
        <div className="shell">
          <AnimatedRule />
          <dl className="grid grid-cols-1 gap-y-8 pt-8 md:grid-cols-4 md:gap-6">
            {meta.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.06}>
                <div className="flex flex-col gap-2 pr-6">
                  <dt className="t-small opacity-40">{m.label}</dt>
                  <dd className="t-body max-w-[30ch]">{m.value}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>

          <div className="pt-10">
            <FadeIn>
              <div className="flex flex-wrap gap-3">
                {project.style.map((s) => (
                  <span
                    key={s}
                    className="border border-current/25 px-4 py-2 t-small opacity-70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-ink pb-24 md:pb-36">
        <div className="shell">
          <ScrollText
            text={project.intro}
            className="display max-w-[24ch] text-[6.5vw] leading-[1.1] md:max-w-[24ch] md:text-[3.2vw]"
          />
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-ink pb-24 md:pb-36">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <SplitWords
              as="h2"
              text="The work"
              className="display t-md"
            />
          </div>
          <div className="flex flex-col gap-7 md:col-span-7 md:col-start-6">
            {project.body.map((para, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <p className="t-body max-w-[62ch] opacity-75">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery ------------------------------------------------------- */}
      <section data-surface="light" className="bg-paper text-ink pb-24 md:pb-36">
        <div className="shell">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {project.gallery.map((item, i) => {
              const layout = GALLERY_RHYTHM[i % GALLERY_RHYTHM.length];
              return (
                <div key={item.src} className={`${layout.col} ${layout.offset}`}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    data-cursor
                    data-cursor-label="Open"
                    className="group block w-full text-left"
                  >
                    <ClipReveal>
                      <div className="overflow-hidden">
                        <div
                          className={`media relative w-full ${layout.aspect} transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]`}
                        >
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            sizes="(max-width: 768px) 100vw, 55vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </ClipReveal>
                    <span className="t-small mt-3 block opacity-40">
                      {item.caption}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Site and teams ------------------------------------------------ */}
      <section data-surface="dark" className="bg-ink py-24 text-paper md:py-36">
        <div className="shell grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <SplitWords
              as="h2"
              text="The site"
              className="display t-lg"
            />
            <div className="mt-8 flex flex-col gap-5">
              {project.site.map((line, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <p className="t-body max-w-[46ch] opacity-65">{line}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <FadeIn>
              <span className="t-small opacity-40">Teams</span>
            </FadeIn>
            <ul className="mt-6 flex flex-col gap-4">
              {project.teams.map((t, i) => (
                <FadeIn key={t.role} delay={i * 0.04}>
                  <li className="flex flex-col gap-1">
                    <span className="t-body">{t.name}</span>
                    <span className="t-small opacity-40">{t.role}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <FadeIn>
              <span className="t-small opacity-40">Suppliers</span>
            </FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {project.suppliers.map((s, i) => (
                <FadeIn key={s} delay={i * 0.03}>
                  <li className="t-body opacity-75">{s}</li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next ----------------------------------------------------------- */}
      <section data-surface="light" className="bg-paper text-ink py-20 md:py-28">
        <div className="shell">
          <AnimatedRule />
          <Link
            href={`/projects/${next.slug}`}
            data-cursor
            data-cursor-label="Next"
            className="group grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-12 md:py-14"
          >
            <span className="t-small opacity-40 md:col-span-2">
              Next project
            </span>
            <h2 className="display t-xl transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-7 md:group-hover:translate-x-4">
              {next.title}
            </h2>
            <div className="media relative aspect-[4/5] w-32 overflow-hidden opacity-0 transition-opacity duration-700 md:col-span-3 md:justify-self-end md:group-hover:opacity-100">
              <Image
                src={next.cover}
                alt=""
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          </Link>
          <AnimatedRule />
        </div>
      </section>

      <Lightbox
        slides={project.gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndex={setLightbox}
      />
    </>
  );
}
