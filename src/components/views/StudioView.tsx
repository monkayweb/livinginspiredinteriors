"use client";

import Link from "next/link";
import { approach, collaborators, profile, site } from "@/content/site";
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
              src="/images/sandown-dining-angle.jpg"
              alt="Double volume dining room with sculptural pendant installation"
              sizes="100vw"
              strength={12}
              className="aspect-[4/5] w-full md:aspect-[16/8]"
              priority
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
            text="We believe successful design should not only be visually beautiful. It should improve wellbeing, encourage connection and stand the test of time."
            className="display max-w-[24ch] text-[7vw] leading-[1.08] md:max-w-[22ch] md:text-[3.6vw]"
          />
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
                src="/images/sandown-formal-lounge-portrait.jpg"
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
            <FadeIn delay={0.05}>
              <p className="t-body max-w-[54ch] opacity-75">
                Tanya founded Living Inspired Interiors in 2020 with a vision of
                creating highly personalised spaces that enrich everyday living.
                Her work has been recognised by SA Home Owner Magazine as one of
                South Africa&apos;s leading Women in Design, featured in the
                Design 100, and presented at Decorex Africa as a guest speaker
                and industry expert.
              </p>
            </FadeIn>
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

      <section data-surface="light" className="bg-paper text-ink pb-28 md:pb-40">
        <div className="shell">
          <AnimatedRule />
          <FadeIn>
            <p className="t-small pt-6 opacity-40">
              Makers, suppliers and collaborators
            </p>
          </FadeIn>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 pt-10 md:grid-cols-4 md:gap-y-7">
            {collaborators.map((name, i) => (
              <FadeIn key={name} delay={(i % 4) * 0.05}>
                <li className="display t-md leading-tight opacity-70">
                  {name}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
