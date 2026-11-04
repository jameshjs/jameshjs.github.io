import Link from "next/link"
import { Github, Linkedin, MapPin } from "lucide-react"

import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 md:px-16">
      <div className="grid gap-10 py-12 sm:grid-cols-[1fr_auto_auto] sm:gap-20">
        <div>
          <Link href="/" className="text-2xl font-medium">
            {site.name}
          </Link>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> Toronto
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-muted-foreground" aria-label="Footer">
          <Link href="/" className="hover:text-foreground">home</Link>
          <Link href="/projects" className="hover:text-foreground">projects</Link>
          <Link href="/life" className="hover:text-foreground">life</Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-muted-foreground">let's work together!</p>
          <p className="text-muted-foreground">open to new-grad 2028 &amp; summer 2027 roles</p>
          <a href={`mailto:${site.email}`} className="hover:text-blue">{site.email}</a>
          <div className="mt-1 flex items-center gap-4 text-muted-foreground">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <p className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name} · psst: ↑↑↓↓←→←→BA
      </p>
    </footer>
  )
}
