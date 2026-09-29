"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { AnimatedRule, FadeIn, SplitWords } from "@/components/Reveal";

const perspectives = [
  {
    index: "01",
    title: "Design concepts redefining residential interiors",
    image: "/images/houghton/open-plan-living-enhanced.jpg",
    paragraphs: [
      "2026 will be shaped by authenticity, adaptability and sensorial design. Homeowners are no longer seeking spaces that simply look beautiful. They crave interiors that feel emotionally grounding and deeply personal.",
      "At Living Inspired Interiors, we are leaning into layered textural storytelling, where craftsmanship, lighting and materiality work together to create an immersive sense of home.",
      "Adaptability is equally essential. As open-plan living evolves, we are designing flexible zones through modular furniture, concealed joinery and moveable partitions that support multiple moods and functions.",
      "Sensorial design will become central: interiors that evoke calm, balance and wellbeing. We integrate this through curated lighting, natural textures and organic forms that invite people to slow down and reconnect.",
    ],
  },
  {
    index: "02",
    title: "Sustainability and mindful materials",
    image: "/images/houghton/timber-screen-enhanced.jpg",
    paragraphs: [
      "Sustainability has moved far beyond trend status. It is a new baseline for conscious living. For 2026, we are seeing a rise in reclaimed materials, low-impact finishes and artisanal production methods that celebrate craftsmanship while reducing environmental load.",
      "I am particularly excited about material innovations: engineered stones with recycled content, tactile fabrics with low chemical impact and timber alternatives that offer both beauty and responsibility.",
      "At Living Inspired Interiors, we approach sustainability not as a restriction, but as an invitation to design more thoughtfully, sourcing locally and collaborating with artisans whose work honours both craft and planet.",
    ],
  },
  {
    index: "03",
    title: "Flexible living: the new way we inhabit space",
    image: "/images/sandton/green-lounge-enhanced.jpg",
    paragraphs: [
      "Flexible living has become a South African reality, especially in Cape Town and Johannesburg, where homes must adapt to lifestyle shifts, multi-generational living and hybrid work.",
      "We are rethinking multifunctionality by designing spaces that transform rather than simply serve two purposes. Think concealed storage that becomes a bar, a hallway that converts into a gallery walkway or joinery that reveals hidden workstations.",
      "These adaptive moments allow homes to feel intentional, tailored and remarkably fluid.",
    ],
  },
  {
    index: "04",
    title: "Colour palettes for 2026",
    image: "/images/sandton/formal-lounge-enhanced.jpg",
    paragraphs: [
      "2026 will usher in a colour story that feels both grounded and quietly luxurious. Expect earthy neutrals, rich clay tones, softened charcoals and muted greens, with colours inspired by African landscapes and natural textures.",
      "We are also seeing the rise of soulful contrasts: warm neutrals paired with moody accents, deep oxblood, stormy blues and caramelised browns.",
      "Clients are responding beautifully to palettes that feel warm and cocooning, yet elegantly modern.",
    ],
  },
];

export default function PerspectivesView() {
  return (
    <>
      <PageHeader
        eyebrow="Perspectives"
        title="Ideas for"
        italicTail="intentional living."
        lead="Tanya Solomon on the materials, moods and ways of living shaping residential interiors in 2026."
      />

      <section data-surface="light" className="bg-paper py-20 text-ink md:py-32">
        <div className="shell">
          {perspectives.map((item, index) => (
            <article key={item.index} className={index === 0 ? "" : "pt-24 md:pt-40"}>
              <AnimatedRule />
              <div className="grid gap-10 pt-8 md:grid-cols-12 md:gap-10 md:pt-12">
                <div className="md:col-span-5">
                  <FadeIn>
                    <span className="t-small opacity-40">{item.index} / 04</span>
                  </FadeIn>
                  <SplitWords as="h2" text={item.title} className="display t-lg mt-6 max-w-[13ch]" />
                  <FadeIn delay={0.08} className="mt-10 md:mt-14">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                </div>

                <div className="flex flex-col gap-7 md:col-span-6 md:col-start-7 md:pt-20">
                  {item.paragraphs.map((paragraph, paragraphIndex) => (
                    <FadeIn key={paragraph} delay={paragraphIndex * 0.05}>
                      <p className="t-body max-w-[58ch] opacity-75">{paragraph}</p>
                    </FadeIn>
                  ))}
                  <FadeIn delay={0.18}>
                    <p className="t-small pt-3 opacity-40">Tanya Solomon · Founder and Creative Director</p>
                  </FadeIn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
