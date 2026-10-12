import type { Metadata } from "next"

import { projects } from "@/lib/content"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description: "Things James Hong has built, and is building.",
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-red" />
        Projects
      </p>
      <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
        A running list of things I've <span className="highlight">built</span>, broken, and{" "}
        <em className="italic">rebuilt.</em>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Infrastructure, trading systems and agent tooling. New work lands here first.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
