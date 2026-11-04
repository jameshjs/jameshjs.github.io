import { ArrowUpRight, Play } from "lucide-react"

import type { Project } from "@/lib/content"

function Media({ project }: { project: Project }) {
  const { media } = project
  if (!media) return null

  if (media.type === "video") {
    return (
      <a href={media.href} target="_blank" rel="noopener noreferrer" className="group/video relative block h-full min-h-40 w-full bg-muted">
        {media.poster && <img src={media.poster} alt="" loading="lazy" className="h-full w-full object-cover" />}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <Play className="h-5 w-5 translate-x-0.5 fill-current" />
            <span className="sr-only">Watch video</span>
          </span>
        </span>
      </a>
    )
  }

  return <img src={media.src} alt={media.alt} loading="lazy" className="h-full w-full object-cover" />
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_14px_rgb(0_0_0/0.06)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgb(0_0_0/0.1)] sm:flex-row">
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs text-muted-foreground">{project.status.toLowerCase()}</p>
        <h3 className="text-xl font-medium leading-snug">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">{project.stack.join(" · ")}</p>
          {project.links?.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 text-sm hover:text-blue"
            >
              {link.label.toLowerCase()}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
      {project.media && (
        <div className="sm:w-2/5">
          <Media project={project} />
        </div>
      )}
    </article>
  )
}
