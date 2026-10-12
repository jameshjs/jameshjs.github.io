"use client"

import * as React from "react"
import {
  Home,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  FileText,
} from "lucide-react"

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
  { icon: Home, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

const linkItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/jameshjs" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/james-hong-uw/" },
  { icon: Mail, label: "Email", href: "mailto:j8hong@uwaterloo.ca" },
  { icon: FileText, label: "Resume", href: "/resume.pdf" },
]

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)

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
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <span className="font-mono">⌘</span>
        <span className="font-mono">K</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for a section or link..." />
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
