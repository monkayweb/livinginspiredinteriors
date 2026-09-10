import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/site";
import ProjectView from "@/components/views/ProjectView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: project.title,
      description: project.intro,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug);
  return <ProjectView project={project} next={others[0] ?? project} />;
}
