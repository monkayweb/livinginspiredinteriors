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
              A complete turnkey interior design service for residential and
              commercial projects. From concept and spatial planning to bespoke
              manufacture, procurement, installation and final styling, every
              element is managed as one piece of work.
            </p>
          </FadeIn>
        </div>

        <HoverImageList items={capabilities} />
      </div>
    </section>
  );
}
