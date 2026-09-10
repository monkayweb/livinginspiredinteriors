"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { projects } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import ParallaxMedia from "@/components/ParallaxMedia";
import { ClipReveal, FadeIn, SplitWords } from "@/components/Reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useIsFinePointer } from "@/lib/usePointer";

type View = "grid" | "index";

export default function ProjectsView() {
  const [view, setView] = useState<View>("grid");

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected"
        italicTail="work."
        lead="Each project is approached as a complete journey rather than a series of rooms, so that every material, finish, texture and furnishing contributes to one design language."
      />

      <section data-surface="light" className="bg-paper text-ink py-16 md:py-24">
        <div className="shell">
          <div className="flex items-center justify-between pb-10 md:pb-16">
            <span className="t-small opacity-40">
              {projects.length} projects
            </span>
            <div className="flex items-center gap-1">
              {(["grid", "index"] as View[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  data-cursor
                  className={`relative px-4 py-2 t-small transition-opacity duration-500 ${
                    view === v ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {view === v ? (
                    <motion.span
                      layoutId="view-pill"
                      className="absolute inset-0 border border-current/30"
                      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    />
                  ) : null}
                  <span className="relative">
                    {v === "grid" ? "Grid" : "Index"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <ProjectGrid />
              </motion.div>
            ) : (
              <motion.div
                key="index"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <ProjectIndex />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function ProjectGrid() {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-10">
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          data-cursor
          data-cursor-label="View"
          className={`group flex flex-col gap-6 ${
            i % 2 === 1 ? "md:mt-28" : ""
          }`}
        >
          <ClipReveal>
            <div className="overflow-hidden">
              <div className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                <ParallaxMedia
                  src={project.cover}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 48vw"
                  strength={8}
                  className="aspect-[4/5] w-full"
                />
              </div>
            </div>
          </ClipReveal>

          <div className="flex items-baseline justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="display t-md">{project.title}</h2>
              <span className="t-small opacity-50">
                {project.shortLocation}
              </span>
            </div>
            <span className="t-small opacity-40">{project.year}</span>
          </div>

          <p className="t-body max-w-[46ch] opacity-60">{project.subtitle}</p>
        </Link>
      ))}
    </div>
  );
}

function ProjectIndex() {
  const fine = useIsFinePointer();
  const [active, setActive] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const placed = useRef(false);

  const track = (e: React.MouseEvent) => {
    if (!fine || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    const nx = e.clientX - r.left;
    const ny = e.clientY - r.top;
    x.set(nx);
    y.set(ny);
    // First contact: land on the cursor instead of springing in from 0,0.
    if (!placed.current) {
      placed.current = true;
      sx.jump(nx);
      sy.jump(ny);
    }
  };

  return (
    <div ref={wrap} onMouseMove={track} className="relative">
      {fine ? (
        <motion.div
          style={{ x: sx, y: sy }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[30vw] max-h-[440px] w-[22vw] max-w-[330px]">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  className="absolute inset-0 overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                >
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    sizes="24vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}

      <ul className="relative z-10">
        {projects.map((project, i) => (
          <li
            key={project.slug}
            onMouseEnter={(e) => {
              track(e);
              setActive(i);
            }}
            onMouseLeave={() => setActive(null)}
            className="group border-t border-current/15 last:border-b"
          >
            <Link
              href={`/projects/${project.slug}`}
              data-cursor
              data-cursor-label="View"
              className="grid grid-cols-1 items-baseline gap-3 py-8 md:grid-cols-12 md:gap-6 md:py-12"
            >
              <span className="t-small opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-1 md:group-hover:translate-x-3">
                {project.index}
              </span>
              <h2 className="display t-lg transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-5 md:group-hover:translate-x-5">
                {project.title}
              </h2>
              <span className="t-body opacity-55 md:col-span-3">
                {project.shortLocation}
              </span>
              <span className="t-small opacity-40 md:col-span-2">
                {project.type}
              </span>
              <span className="t-small opacity-40 md:col-span-1 md:text-right">
                {project.year}
              </span>
            </Link>

            <FadeIn className="md:hidden">
              <div className="media relative mb-8 aspect-[4/5] w-full">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>

      <div className="pt-16">
        <SplitWords
          as="p"
          text="More work in progress. Get in touch to discuss a project."
          className="display t-md max-w-[20ch] leading-[1.1] opacity-60"
        />
      </div>
    </div>
  );
}
