"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useIsFinePointer } from "@/lib/usePointer";
import { EASE_OUT_EXPO } from "@/lib/motion";

export type HoverItem = {
  title: string;
  body?: string;
  meta?: string;
  image: string;
};

export default function HoverImageList({
  items,
  className = "",
  showImagesOnMobile = false,
}: {
  items: HoverItem[];
  className?: string;
  showImagesOnMobile?: boolean;
}) {
  const fine = useIsFinePointer();
  const [active, setActive] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const placed = useRef(false);

  const track = (e: React.MouseEvent) => {
    if (!fine || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    const nx = e.clientX - r.left;
    const ny = e.clientY - r.top;
    x.set(nx);
    y.set(ny);
    // First contact: land on the cursor instead of springing in from 0,0.
    if (!placed.current) {
      placed.current = true;
      sx.jump(nx);
      sy.jump(ny);
    }
  };

  return (
    <div ref={wrap} onMouseMove={track} className={`relative ${className}`}>
      {/*
        Every preview is mounted once and cross faded on opacity. The previous
        version mounted and unmounted through AnimatePresence with popLayout,
        which ran Motion's layout projection on hover and popped whenever an
        image had not been decoded yet.
      */}
      {fine ? (
        <motion.div
          style={{ x: sx, y: sy }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[26vw] max-h-[420px] w-[19vw] max-w-[300px]">
              {items.map((item, i) => (
                <motion.div
                  key={item.image}
                  className="absolute inset-0 overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}

      <ul className="relative z-10">
        {items.map((item, i) => (
          <li
            key={item.title}
            onMouseEnter={(e) => {
              track(e);
              setActive(i);
            }}
            onMouseLeave={() => setActive(null)}
            className="group border-t border-current/15 last:border-b"
          >
            <div className="grid grid-cols-1 items-baseline gap-3 py-7 md:grid-cols-12 md:gap-6 md:py-9">
              <span className="t-small col-span-1 opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-1 md:group-hover:translate-x-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display col-span-1 t-md transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-5 md:group-hover:translate-x-4">
                {item.title}
              </h3>
              {item.body ? (
                <p className="t-body col-span-1 max-w-[46ch] opacity-60 md:col-span-5">
                  {item.body}
                </p>
              ) : null}
              {item.meta ? (
                <span className="t-small col-span-1 opacity-40 md:col-span-1 md:text-right">
                  {item.meta}
                </span>
              ) : null}
            </div>

            {showImagesOnMobile ? (
              <div className="md:hidden">
                <div className="media relative mb-7 aspect-[4/5] w-full">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
