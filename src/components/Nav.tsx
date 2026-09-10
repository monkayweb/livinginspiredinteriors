"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import { nav, site } from "@/content/site";
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO } from "@/lib/motion";

function HoverLabel({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {label}
      </span>
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 220 && !open);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`site-header fixed inset-x-0 top-0 z-[500] ${open ? "is-menu-open" : ""}`}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      >
        <div className="shell flex items-center justify-between py-5 md:py-7">
          <Link
            href="/"
            aria-label={site.name}
            data-cursor
            className="block transition-opacity duration-500 hover:opacity-70"
          >
            <Logo className="h-5 w-auto md:h-6" />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group t-small relative"
                  data-cursor
                >
                  <HoverLabel label={item.label} />
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full bg-current transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="group flex items-center gap-3 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="t-small">{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[400] flex flex-col justify-between bg-ink px-gutter pb-10 pt-28 text-paper md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: EASE_IN_OUT_QUART }}
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <span key={item.href} className="mask-line">
                  <motion.span
                    className="block"
                    initial={{ y: "150%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "150%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.12 + i * 0.06,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="display block text-[15vw] leading-[1.05]"
                    >
                      {item.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="t-small flex flex-col gap-2 opacity-70"
            >
              <a href={site.instagram.url} target="_blank" rel="noreferrer">
                {site.instagram.handle}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
