import type { Metadata } from "next";
import ProjectsView from "@/components/views/ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected residential interiors by Living Inspired Interiors, including the Sandown Residence and Athol House in Johannesburg.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
