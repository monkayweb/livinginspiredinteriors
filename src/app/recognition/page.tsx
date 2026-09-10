import type { Metadata } from "next";
import RecognitionView from "@/components/views/RecognitionView";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Awards, editorials and industry recognition for Living Inspired Interiors, including SA Home Owner Women in Design, the Design 100 and Decorex Africa.",
};

export default function RecognitionPage() {
  return <RecognitionView />;
}
