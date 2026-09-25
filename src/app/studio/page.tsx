import type { Metadata } from "next";
import StudioView from "@/components/views/StudioView";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Founded in 2020 by Tanya Solomon, Living Inspired Interiors creates highly personalised luxury homes, executive offices, hospitality spaces and turnkey renovations.",
};

export default function StudioPage() {
  return <StudioView />;
}
