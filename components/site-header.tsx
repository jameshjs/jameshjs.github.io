"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { site } from "@/lib/content"
import { cn } from "@/lib/utils"
import { CommandPalette } from "@/components/command-palette"

const nav = [
  { label: "Work", href: "/#work", dot: "bg-blue" },
  { label: "Projects", href: "/projects", dot: "bg-red" },
  { label: "Life", href: "/life", dot: "bg-green" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl leading-none">{site.name}</span>
          <span className="hidden text-xs text-muted-foreground/70 sm:inline transition-colors group-hover:text-muted-foreground">
            {site.chineseName}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center">
            {nav.map((item) => {
              const active = item.href !== "/#work" && pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm sm:px-3 transition-colors hover:bg-accent",
                    active ? "font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150",
                      item.dot,
                      !active && "opacity-60"
                    )}
                  />
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="hidden sm:block">
            <CommandPalette />
          </div>
        </div>
      </div>
    </header>
  )
}
