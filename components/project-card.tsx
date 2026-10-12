import { ArrowUpRight, Play } from "lucide-react"

import type { Project, Status } from "@/lib/content"
import { cn } from "@/lib/utils"

const statusStyle: Record<Status, string> = {
  Building: "bg-yellow/20 text-amber-800",
  Shipped: "bg-green/15 text-green",
  Live: "bg-blue/15 text-blue",
  Concept: "bg-red/15 text-red",
}

const accents = ["bg-blue", "bg-red", "bg-yellow", "bg-green"]

function Media({ project, index }: { project: Project; index: number }) {
  const { media } = project

  if (media?.type === "image" || media?.type === "gif") {
    return <img src={media.src} alt={media.alt} loading="lazy" className="h-full w-full object-cover" />
  }

  if (media?.type === "video") {
    return (
      <a href={media.href} target="_blank" rel="noopener noreferrer" className="group/video relative block h-full w-full">
        {media.poster && <img src={media.poster} alt="" loading="lazy" className="h-full w-full object-cover" />}
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/video:bg-black/30">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <Play className="h-5 w-5 translate-x-0.5 fill-current" />
          </span>
        </span>
      </a>
    )
  }

  // nothing yet: a tidy striped slot with the project's initials
  const initials = project.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
  return (
    <div className="placeholder-slot flex h-full w-full items-center justify-center">
      <span
        className={cn(
          "flex h-14 w-14 rotate-[-4deg] items-center justify-center rounded-2xl font-serif text-2xl text-white shadow-md",
          accents[index % accents.length]
        )}
      >
        {initials}
      </span>
    </div>
  )
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgb(0_0_0/0.35)]">
      <div className="aspect-[16/10] overflow-hidden border-b border-border">
        <Media project={project} index={index} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl leading-tight">{project.name}</h3>
          <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium", statusStyle[project.status])}>
            {project.status}
          </span>
        </div>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{project.blurb}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <p className="font-mono text-xs text-muted-foreground">{project.stack.join(" · ")}</p>
          {project.links && (
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-0.5 text-sm font-medium hover:underline hover:underline-offset-4"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
