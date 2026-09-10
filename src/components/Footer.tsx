"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { nav, site } from "@/content/site";
import LocalTime from "./LocalTime";
import Logo from "./Logo";
import Magnetic from "./Magnetic";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function Footer() {
  return (
    <footer data-surface="dark" className="relative bg-ink text-paper">
      <div className="shell pt-24 md:pt-36">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="display t-lg max-w-[14ch] leading-[1.02]">
              Let us design something that lasts.
            </p>
            <Magnetic className="mt-10 block" strength={0.3}>
              <Link
                href="/contact"
                data-cursor
                data-cursor-label="Say hello"
                className="group inline-flex items-center gap-4 border border-paper/25 px-7 py-4 transition-colors duration-500 hover:border-paper"
              >
                <span className="t-body">Start a project</span>
                <span className="block h-px w-8 origin-left bg-current transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150" />
              </Link>
            </Magnetic>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="t-small opacity-40">Index</span>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline t-body w-fit"
                  data-cursor
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="t-small opacity-40">Connect</span>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="link-underline t-body w-fit"
                data-cursor
              >
                Instagram
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-underline t-body w-fit"
                data-cursor
              >
                Email
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="t-small opacity-40">Studio</span>
              <address className="t-body not-italic leading-relaxed opacity-80">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.postal}
              </address>
              <span className="t-small opacity-60">
                Johannesburg <LocalTime />
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.5, ease: EASE_OUT_EXPO }}
          className="pointer-events-none mt-20 select-none md:mt-28"
        >
          <Logo variant="stacked" className="h-auto w-full md:hidden" />
          <Logo variant="inline" className="hidden h-auto w-full md:block" />
        </motion.div>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/15 py-7 md:flex-row md:items-center md:justify-between">
          <span className="t-small opacity-50">
            {site.name}, established {site.established}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            className="t-small"
          >
            All rights reserved, {new Date().getFullYear()}
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
