"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { CommandPalette } from "@/components/command-palette"

const nav = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "life", href: "/life" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="w-full">
      <nav className="flex items-center justify-end gap-6 px-6 pb-3 pt-8 md:px-16 md:pb-4 md:pt-10">
        {nav.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn("text-[15px] transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
      <CommandPalette />
    </header>
  )
}
