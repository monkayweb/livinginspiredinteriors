import type { Metadata } from "next";
import StudioView from "@/components/views/StudioView";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Living Inspired Interiors is led by founder and creative director Tanya Solomon. A boutique interior architecture and design studio in Johannesburg.",
};

export default function StudioPage() {
  return <StudioView />;
}
