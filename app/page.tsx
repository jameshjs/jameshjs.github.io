import Nav from "@/components/nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhatIBuild from "@/components/what-i-build"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border/40 py-8 mt-8">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground font-mono">© 2025 James Hong</p>
          <p className="text-xs text-muted-foreground/50">
            Built with Next.js · Deployed on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  )
}
