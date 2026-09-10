"use client";

import Link from "next/link";
import { projects } from "@/content/site";
import ParallaxMedia from "@/components/ParallaxMedia";
import { AnimatedRule, ClipReveal, SplitWords, FadeIn } from "@/components/Reveal";

export default function FeaturedWork() {
  return (
    <section data-surface="light" className="bg-paper text-ink pb-28 md:pb-44">
      <div className="shell">
        <div className="flex items-baseline justify-between pb-10 md:pb-16">
          <SplitWords
            as="h2"
            text="Selected work"
            className="display t-lg"
          />
          <Link
            href="/projects"
            data-cursor
            className="link-underline t-body opacity-60 transition-opacity hover:opacity-100"
          >
            All projects
          </Link>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                data-cursor
                data-cursor-label="View"
                className="group grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10"
              >
                <div
                  className={`md:col-span-7 ${
                    flip ? "md:order-2 md:col-start-6" : ""
                  }`}
                >
                  <ClipReveal>
                    <div className="overflow-hidden">
                      <div className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]">
                        <ParallaxMedia
                          src={project.cover}
                          alt={project.title}
                          sizes="(max-width: 768px) 100vw, 58vw"
                          strength={9}
                          className="aspect-[4/5] w-full md:aspect-[5/6]"
                        />
                      </div>
                    </div>
                  </ClipReveal>
                </div>

                <div
                  className={`flex flex-col gap-5 md:col-span-4 md:pb-6 ${
                    flip ? "md:order-1 md:col-start-1" : "md:col-start-9"
                  }`}
                >
                  <FadeIn>
                    <span className="t-small opacity-40">{project.index}</span>
                  </FadeIn>
                  <SplitWords
                    as="h3"
                    text={project.title}
                    className="display t-lg leading-[0.95]"
                  />
                  <FadeIn delay={0.05}>
                    <p className="t-body max-w-[38ch] opacity-60">
                      {project.subtitle}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <div className="mt-2 flex flex-col gap-2">
                      <AnimatedRule />
                      <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                        <span className="t-small opacity-50">
                          {project.shortLocation}
                        </span>
                        <span className="t-small opacity-50">
                          {project.year}
                        </span>
                        <span className="t-small opacity-50">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.15}>
                    <span className="mt-3 inline-flex items-center gap-3 t-body">
                      <span>View project</span>
                      <span className="block h-px w-10 origin-left bg-current transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[1.6]" />
                    </span>
                  </FadeIn>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
