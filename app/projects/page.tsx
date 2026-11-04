import type { Metadata } from "next"

import { projects } from "@/lib/content"
import { PageShell } from "@/components/page-shell"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description: "Things James Hong has built, and is building.",
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <section>
        <h1 className="text-3xl font-medium tracking-tight">projects</h1>
        <p className="mt-1 text-muted-foreground">infrastructure, trading systems and agent tooling</p>
        <div className="mt-8 flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
