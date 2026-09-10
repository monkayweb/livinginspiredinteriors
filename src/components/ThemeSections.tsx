"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sections tagged with data-surface="dark" | "light" drive the page level
 * background and foreground colours as they cross the middle of the viewport.
 *
 * Uses an IntersectionObserver with a zero height root band pinned to the
 * viewport centre, so nothing is measured on the scroll thread.
 */
export default function ThemeSections() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-surface]")
    );
    if (!sections.length) return;

    let current = "";

    const apply = (surface: string) => {
      if (surface === current) return;
      current = surface;
      const dark = surface === "dark";
      document.body.style.setProperty(
        "--bg",
        dark ? "var(--color-ink)" : "var(--color-paper)"
      );
      document.body.style.setProperty(
        "--fg",
        dark ? "var(--color-paper)" : "var(--color-ink)"
      );
      document.body.classList.toggle("theme-dark", dark);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            apply((entry.target as HTMLElement).dataset.surface || "light");
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    // Seed from whatever is under the viewport centre on mount.
    const mid = window.innerHeight / 2;
    const initial =
      sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      }) ?? sections[0];
    apply(initial.dataset.surface || "light");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
