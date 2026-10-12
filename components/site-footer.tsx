import { Github, Linkedin, Mail } from "lucide-react"

import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} · made in Waterloo &amp; Toronto
        </p>
        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </a>
          <span className="hidden font-mono text-xs sm:inline">psst: ↑↑↓↓←→←→BA</span>
        </div>
      </div>
    </footer>
  )
}
