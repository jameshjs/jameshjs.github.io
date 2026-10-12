import Link from "next/link"
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

import { experience, projects, site, stats } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/project-card"
import { MagazineCover } from "@/components/magazine-cover"

const statColor = {
  blue: "bg-blue text-white",
  red: "bg-red text-white",
  yellow: "bg-yellow text-neutral-900",
  green: "bg-green text-white",
}

function SectionLabel({ n, children, dot }: { n: string; children: React.ReactNode; dot: string }) {
  return (
    <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className={cn("h-2 w-2 rounded-full", dot)} />
      {n} — {children}
    </p>
  )
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <MagazineCover />

      {/* Editor's letter */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-yellow" />
            Editor's letter
          </p>
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed text-neutral-800 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] sm:text-2xl">
              Hi, I'm James, a CS &amp; Finance student at the University of Waterloo. I've shipped data pipelines
              and agent tooling at Wealthsimple, Manulife and CIHI, and I like systems where the numbers have to be
              right. Off the clock, I'm an épée fencer and president of the Waterloo Fencing Club.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                See my projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Say hi <Mail className="h-4 w-4" />
              </a>
              <span className="ml-2 font-hand text-3xl text-muted-foreground">— James</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "rounded-2xl p-5 transition-transform hover:-translate-y-1",
                statColor[s.color],
                i % 2 ? "md:rotate-1" : "md:-rotate-1"
              )}
            >
              <p className="font-serif text-4xl leading-none sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
        <SectionLabel n="01" dot="bg-blue">
          Work
        </SectionLabel>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Five teams, one theme: <em className="italic">making money move reliably.</em>
        </h2>

        <ol className="mt-12 border-t border-border">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-3 border-b border-border py-8 transition-colors hover:bg-card/60 md:grid-cols-[180px_1fr_1.4fr] md:gap-8"
            >
              <div className="font-mono text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  {job.current && <span className="h-2 w-2 rounded-full bg-green" title="current" />}
                  {job.dates}
                </p>
                <p className="mt-1 text-xs">{job.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl leading-tight">{job.company}</h3>
                <p className="mt-1 text-muted-foreground">{job.role}</p>
              </div>
              <div>
                <ul className="space-y-2 text-[15px] leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-border" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        <SectionLabel n="02" dot="bg-red">
          Projects
        </SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Things I've built <em className="italic">(and am building).</em>
          </h2>
          <Link href="/projects" className="flex items-center gap-1 text-sm font-medium hover:underline hover:underline-offset-4">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Beyond code teaser */}
      <section className="paper border-y border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <SectionLabel n="03" dot="bg-green">
              Beyond code
            </SectionLabel>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              There's more to me than <em className="italic">pipelines.</em>
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Épée, the gym, poker nights, and a life split between Oakville, Shanghai and Waterloo.
            </p>
            <Link
              href="/life"
              className="mt-6 inline-flex items-center gap-2 font-hand text-3xl text-foreground transition-transform hover:translate-x-1"
            >
              come see the scrapbook <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Link href="/life" className="group relative mx-auto block h-80 w-full max-w-md" aria-label="Open the Life page">
            <figure className="polaroid tape absolute left-0 top-6 w-44 -rotate-6 transition-transform group-hover:-rotate-12 sm:w-52">
              <img src="/images/fencing-action-2.webp" alt="Épée bout on the piste" className="aspect-[4/5] w-full object-cover" />
              <figcaption>en garde!</figcaption>
            </figure>
            <figure
              className="polaroid tape absolute right-0 top-0 w-44 rotate-6 transition-transform group-hover:rotate-12 sm:w-52"
              style={{ "--tape": "var(--blue)" } as React.CSSProperties}
            >
              <img src="/images/venice-canal.webp" alt="James on a bridge over a canal in Venice" className="aspect-[4/5] w-full object-cover" />
              <figcaption>venice ☀️</figcaption>
            </figure>
            <img
              src="/images/poker.webp"
              alt="Two playing cards"
              className="absolute bottom-0 left-1/2 w-28 -translate-x-1/2 rotate-3 mix-blend-multiply transition-transform group-hover:rotate-[-8deg]"
            />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <p className="font-hand text-2xl text-muted-foreground">open to new-grad 2028 &amp; summer 2027 roles</p>
        <h2 className="mt-2 font-serif text-5xl sm:text-7xl">
          Let's <span className="highlight" style={{ "--hl": "var(--green)" } as React.CSSProperties}>talk</span>.
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block font-serif text-2xl underline decoration-yellow decoration-4 underline-offset-8 hover:decoration-blue sm:text-3xl"
        >
          {site.email}
        </a>
        <div className="mt-8 flex justify-center gap-3">
          {[
            { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
            { href: site.github, label: "GitHub", icon: Github },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Icon className="h-4 w-4" /> {label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
