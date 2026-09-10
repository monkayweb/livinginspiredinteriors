"use client";

import Link from "next/link";
import { recognition } from "@/content/site";
import { AnimatedRule, FadeIn, SplitWords } from "@/components/Reveal";

export default function RecognitionPreview() {
  return (
    <section data-surface="light" className="bg-paper text-ink py-28 md:py-40">
      <div className="shell">
        <div className="flex items-baseline justify-between pb-10 md:pb-16">
          <SplitWords
            as="h2"
            text="Recognition"
            className="display t-lg"
          />
          <Link
            href="/recognition"
            data-cursor
            className="link-underline t-body opacity-60 transition-opacity hover:opacity-100"
          >
            Read more
          </Link>
        </div>

        <ul>
          {recognition.map((item, i) => (
            <li key={item.title}>
              <FadeIn delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                  <span className="t-small opacity-40 md:col-span-1">
                    {item.year}
                  </span>
                  <h3 className="display t-md md:col-span-5">
                    {item.title}
                  </h3>
                  <span className="t-body opacity-60 md:col-span-5">
                    {item.outlet}
                  </span>
                </div>
                <AnimatedRule />
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
