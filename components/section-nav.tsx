"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export type NavSection = { id: string; label: string }

// Sticky list of the page's sections; the one being read turns blue.
export function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = React.useState(sections[0]?.id)

  React.useEffect(() => {
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) return setActive(sections[sections.length - 1]?.id)

      const line = window.innerHeight * 0.3
      const current = sections.filter((s) => {
        const el = document.getElementById(s.id)
        return el && el.getBoundingClientRect().top <= line
      })
      setActive((current[current.length - 1] ?? sections[0])?.id)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [sections])

  return (
    <nav aria-label="On this page" className="sticky top-10 flex flex-col gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-current={active === s.id ? "true" : undefined}
          className={cn(
            "text-[15px] transition-colors",
            active === s.id ? "text-blue" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
