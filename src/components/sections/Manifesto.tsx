"use client";

import Link from "next/link";
import { manifesto, manifestoSupport, facts } from "@/content/site";
import { AnimatedRule, FadeIn, ScrollText } from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section data-surface="light" className="bg-paper text-ink py-28 md:py-44">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <ScrollText
            text={manifesto}
            className="display text-[8vw] leading-[1.04] md:text-[3.9vw]"
          />
        </div>

        <div className="flex flex-col justify-end gap-7 md:col-span-4 md:col-start-9 md:pb-2">
          <FadeIn>
            <p className="t-body opacity-65">{manifestoSupport}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link
              href="/studio"
              data-cursor
              className="link-underline t-body w-fit"
            >
              About the studio
            </Link>
          </FadeIn>
        </div>
      </div>

      <div className="shell mt-20 md:mt-32">
        <AnimatedRule />
        <dl className="grid grid-cols-2 gap-y-10 pt-8 md:grid-cols-4">
          {facts.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <div className="flex flex-col gap-2 pr-6">
                <dt className="t-small opacity-40">{f.label}</dt>
                <dd className="display t-md">{f.value}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
