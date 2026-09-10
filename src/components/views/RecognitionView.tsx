"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { recognition } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import { AnimatedRule, FadeIn, SplitWords } from "@/components/Reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function RecognitionView() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Press and"
        italicTail="accolades."
        lead="Living Inspired Interiors has been recognised by South Africa's leading design press and platforms for bespoke detailing, refined material palettes and interiors that are both timeless and deeply personal."
      />

      <section data-surface="light" className="bg-paper text-ink py-20 md:py-32">
        <div className="shell">
          <ul>
            {recognition.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.title} className="border-t border-current/15 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-cursor
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-1 items-baseline gap-3 py-8 text-left md:grid-cols-12 md:gap-6 md:py-11"
                  >
                    <span className="t-small opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-1 md:group-hover:translate-x-3">
                      {item.year}
                    </span>
                    <h2 className="display t-md transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-6 md:group-hover:translate-x-4">
                      {item.title}
                    </h2>
                    <span className="t-body opacity-55 md:col-span-4">
                      {item.outlet}
                    </span>
                    <span className="relative hidden h-3 w-3 self-center justify-self-end md:col-span-1 md:block">
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-current" />
                      <motion.span
                        className="absolute left-1/2 top-0 h-3 w-px bg-current"
                        animate={{ scaleY: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-6">
                          <div className="md:col-span-4 md:col-start-2">
                            <div className="media relative aspect-[4/5] w-full">
                              <Image
                                src={item.image}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <p className="t-body max-w-[52ch] self-start opacity-70 md:col-span-5 md:col-start-7">
                            {item.body}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="pt-20 md:pt-28">
            <AnimatedRule />
            <div className="grid gap-8 pt-10 md:grid-cols-12">
              <SplitWords
                as="h2"
                text="Press enquiries"
                className="display t-md md:col-span-5"
              />
              <FadeIn className="md:col-span-5 md:col-start-7">
                <p className="t-body opacity-65">
                  For interviews, editorial features, imagery or speaking
                  requests, contact the studio directly and we will come back to
                  you with a full press kit.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
