"use client";

import { ReactNode } from "react";
import Cursor from "./Cursor";
import Footer from "./Footer";
import LogoSprite from "./LogoSprite";
import Nav from "./Nav";
import PageTransition from "./PageTransition";
import Preloader from "./Preloader";
import SmoothScroll from "./SmoothScroll";
import ThemeSections from "./ThemeSections";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LogoSprite />
      <SmoothScroll />
      <ThemeSections />
      <Cursor />
      <Preloader />
      <Nav />
      <main className="relative z-10 flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
