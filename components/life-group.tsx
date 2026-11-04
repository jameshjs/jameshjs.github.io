import type { LifeGroup as Group } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Polaroid } from "@/components/polaroid"

const rotations = [-3, 2, -1.5, 4]
const offsets = ["", "sm:translate-y-3", "", "sm:-translate-y-2"]

export function LifeGroup({ group }: { group: Group }) {
  const Icon = group.icon

  return (
    <article id={group.id} className="scroll-mt-10 border-b border-border py-12 first:pt-4 last:border-0 last:pb-0">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10">
        <div className="flex items-center gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
            <Icon className={cn("h-6 w-6", group.color)} aria-hidden />
          </span>
          <h3 className="text-xl font-medium">{group.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{group.note}</p>
      </div>

      {group.photos.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 px-2 sm:grid-cols-4">
          {group.photos.map((photo, i) => (
            <Polaroid
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              aspect="aspect-square"
              rotate={rotations[i % rotations.length]}
              className={cn("self-start", offsets[i % offsets.length])}
            />
          ))}
        </div>
      )}
    </article>
  )
}
