import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { site } from "@/content/site";

/**
 * ZT Chablis, the studio's display face. A fine transitional serif. The family
 * ships no italic, so accent lines are separated by colour rather than slant.
 */
const display = localFont({
  src: [
    { path: "./fonts/chablis-light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/chablis-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/chablis-medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, Interior Architecture and Design, Johannesburg`,
    template: `%s, ${site.name}`,
  },
  description:
    "Living Inspired Interiors is a boutique interior architecture and design studio in Johannesburg creating bespoke residential and commercial interiors across South Africa and internationally.",
  openGraph: {
    title: site.name,
    description:
      "Boutique interior architecture and design studio in Johannesburg. Bespoke residential and commercial interiors.",
    url: site.url,
    siteName: site.name,
    locale: "en_ZA",
    type: "website",
    images: ["/images/sandown-dining-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    images: ["/images/sandown-dining-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
