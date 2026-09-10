"use client";

import Link from "next/link";
import ParallaxMedia from "@/components/ParallaxMedia";
import { ClipReveal, FadeIn, SplitWords } from "@/components/Reveal";
import { site } from "@/content/site";

export default function StudioInterlude() {
  return (
    <section data-surface="light" className="bg-paper text-ink pb-28 md:pb-44">
      <div className="shell grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-8 md:col-span-5">
          <ClipReveal>
            <ParallaxMedia
              src="/images/sandown-formal-lounge-portrait.jpg"
              alt="Tanya Solomon in the formal lounge of the Sandown Residence"
              sizes="(max-width: 768px) 66vw, 42vw"
              strength={10}
              className="aspect-[4/5] w-full"
            />
          </ClipReveal>
        </div>

        <div className="col-span-4 self-end md:col-span-3 md:pb-16">
          <ClipReveal delay={0.15}>
            <ParallaxMedia
              src="/images/athol-pendant-detail.jpg"
              alt="Pendant and bedside detail at Athol House"
              sizes="(max-width: 768px) 33vw, 25vw"
              strength={16}
              className="aspect-[3/4] w-full"
            />
          </ClipReveal>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-7 pt-6 md:col-span-3 md:pb-16 md:pt-0">
          <SplitWords
            as="p"
            text="Luxury lies in craftsmanship, authenticity and meticulous attention to detail."
            className="display t-md leading-[1.1]"
          />
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-1">
              <span className="t-body">{site.founder.name}</span>
              <span className="t-small opacity-50">{site.founder.role}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/studio"
              data-cursor
              className="link-underline t-body w-fit"
            >
              Inside the studio
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
