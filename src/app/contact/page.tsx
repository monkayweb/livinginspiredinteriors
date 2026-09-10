import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Living Inspired Interiors. Studio in Morningside, Johannesburg. Residential and commercial interiors across South Africa and internationally.",
};

export default function ContactPage() {
  return <ContactView />;
}
