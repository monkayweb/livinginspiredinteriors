"use client";

import { capabilities } from "@/content/site";
import HoverImageList from "@/components/HoverImageList";
import { SplitWords, FadeIn } from "@/components/Reveal";

export default function Capabilities() {
  return (
    <section data-surface="dark" className="bg-ink py-28 text-paper md:py-40">
      <div className="shell">
        <div className="grid gap-8 pb-12 md:grid-cols-12 md:pb-20">
          <SplitWords
            as="h2"
            text="What we do"
            className="display t-lg col-span-1 md:col-span-6"
          />
          <FadeIn className="md:col-span-5 md:col-start-8">
            <p className="t-body opacity-60">
              From full scale renovations and new builds to bespoke furniture,
              custom joinery, lighting design, art curation and project
              management, every element is considered so the result reads as one
              piece of work.
            </p>
          </FadeIn>
        </div>

        <HoverImageList items={capabilities} />
      </div>
    </section>
  );
}
