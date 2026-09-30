"use client";

import Link from "next/link";
import {
  approach,
  distinction,
  founderProfile,
  profile,
  site,
} from "@/content/site";
import PageHeader from "@/components/PageHeader";
import ParallaxMedia from "@/components/ParallaxMedia";
import {
  AnimatedRule,
  ClipReveal,
  FadeIn,
  ScrollText,
  SplitWords,
} from "@/components/Reveal";

export default function StudioView() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="Design with"
        italicTail="intention."
        lead="Living Inspired Interiors is a boutique interior architecture and design studio founded in Johannesburg in 2020 by Tanya Solomon, specialising in bespoke residential and commercial interiors across South Africa and internationally."
      />

      <section data-surface="dark" className="bg-ink pb-24 text-paper md:pb-36">
        <div className="shell">
          <ClipReveal>
            <ParallaxMedia
              src="/images/imagegen/sandown/dining-angle.jpg"
              alt="Double volume dining room with sculptural pendant installation"
              sizes="100vw"
              strength={12}
              className="aspect-[4/5] w-full md:aspect-[16/8]"
              eager
            />
          </ClipReveal>
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-ink py-28 md:py-40">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <SplitWords
              as="h2"
              text="Who we are"
              className="display t-lg"
            />
          </div>
          <div className="flex flex-col gap-7 md:col-span-7 md:col-start-6">
            {profile.map((para, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="t-body max-w-[62ch] opacity-75">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-ink pb-28 md:pb-40">
        <div className="shell">
          <ScrollText
            text="Inspiring spaces. Curating lives. Design is not only about style. It is about soul, how we live, how we connect and how our spaces remind us who we are."
            className="display max-w-[24ch] text-[7vw] leading-[1.08] md:max-w-[22ch] md:text-[3.6vw]"
          />
        </div>
      </section>

      <section data-surface="light" className="bg-paper pb-28 text-ink md:pb-40">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="t-small opacity-40">What sets us apart</p>
            </FadeIn>
            <SplitWords
              as="h2"
              text={distinction.title}
              className="display t-lg mt-6"
            />
          </div>
          <div className="flex flex-col gap-7 md:col-span-7 md:col-start-6 md:pt-10">
            {distinction.paragraphs.map((paragraph, index) => (
              <FadeIn key={paragraph} delay={index * 0.06}>
                <p className="t-body max-w-[62ch] opacity-75">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-surface="dark" className="bg-ink py-28 text-paper md:py-40">
        <div className="shell">
          <div className="grid gap-8 pb-14 md:grid-cols-12 md:pb-20">
            <SplitWords
              as="h2"
              text="How we work"
              className="display t-lg md:col-span-6"
            />
            <FadeIn className="md:col-span-5 md:col-start-8">
              <p className="t-body opacity-60">
                Every project begins by understanding how our clients live, work
                and experience their environments. What follows is one
                continuous process rather than a set of handovers.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-x-10 gap-y-14 md:grid-cols-4">
            {approach.map((step, i) => (
              <FadeIn key={step.index} delay={i * 0.08}>
                <div className="flex flex-col gap-5">
                  <AnimatedRule />
                  <span className="t-small opacity-40">{step.index}</span>
                  <h3 className="display t-md">{step.title}</h3>
                  <p className="t-body opacity-60">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-ink py-28 md:py-40">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <ClipReveal>
            <ParallaxMedia
              src="/images/studio/tanya-solomon-founder-enhanced.jpg"
                alt="Tanya Solomon, founder and creative director"
                sizes="(max-width: 768px) 100vw, 42vw"
                strength={10}
                className="aspect-[4/5] w-full"
              />
            </ClipReveal>
          </div>

          <div className="flex flex-col justify-end gap-8 md:col-span-6 md:col-start-7 md:pb-8">
            <SplitWords
              as="h2"
              text={site.founder.name}
              className="display t-lg"
            />
            <FadeIn>
              <span className="t-body opacity-50">{site.founder.role}</span>
            </FadeIn>
            <div className="flex flex-col gap-5">
              {founderProfile.map((paragraph, index) => (
                <FadeIn key={paragraph} delay={0.05 + index * 0.04}>
                  <p className="t-body max-w-[54ch] opacity-75">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-8">
                <Link
                  href="/recognition"
                  data-cursor
                  className="link-underline t-body"
                >
                  Recognition
                </Link>
                <Link
                  href="/contact"
                  data-cursor
                  className="link-underline t-body"
                >
                  Work with the studio
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
