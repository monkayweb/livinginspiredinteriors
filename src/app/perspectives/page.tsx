import type { Metadata } from "next";
import PerspectivesView from "@/components/views/PerspectivesView";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Tanya Solomon on the materials, moods and ways of living shaping residential interiors in 2026.",
};

export default function PerspectivesPage() {
  return <PerspectivesView />;
}
