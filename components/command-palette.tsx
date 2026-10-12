"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Home, Briefcase, FolderGit2, Heart, Swords, Mail, Github, Linkedin } from "lucide-react"

import { site } from "@/lib/content"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Work", href: "/#work" },
  { icon: FolderGit2, label: "Projects", href: "/projects" },
  { icon: Heart, label: "Life", href: "/life" },
  { icon: Swords, label: "Fencing", href: "/life#fencing" },
]

const linkItems = [
  { icon: Github, label: "GitHub", href: site.github },
  { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${site.email}` },
]

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    if (href.startsWith("/")) {
      router.push(href)
    } else {
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground rounded-full"
      >
        <span className="font-mono">⌘</span>
        <span className="font-mono">K</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Jump to a page or link..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => go(item.href)}>
                <item.icon />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            {linkItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => go(item.href)}>
                <item.icon />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
