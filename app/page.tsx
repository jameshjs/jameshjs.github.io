import Link from "next/link"
import { ArrowRight, CalendarDays, GraduationCap, MapPin } from "lucide-react"

import { experience, heroPhotos, lifeGroups, projects, site } from "@/lib/content"
import { cn } from "@/lib/utils"
import { LifeGroup } from "@/components/life-group"
import { PageShell, SectionHeading } from "@/components/page-shell"
import { Polaroid } from "@/components/polaroid"
import { ProjectCard } from "@/components/project-card"

const sections = [
  { id: "hello", label: "hello!" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "life", label: "life" },
]

const monogramColors = ["text-blue", "text-red", "text-yellow", "text-green"]

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <PageShell sections={sections}>
      {/* Intro */}
      <section id="hello" className="flex scroll-mt-10 flex-col items-center gap-12 md:flex-row md:items-start md:gap-14">
        <Polaroid
          src="/images/me-hackathon.webp"
          alt="James smiling at a hackathon, holding a laptop"
          rotate={-3}
          className="w-72 shrink-0 p-3.5 pb-12"
        />
        <div className="flex w-full min-w-0 flex-col gap-6 md:pt-8">
          <h1 className="text-3xl font-medium leading-tight tracking-tight">hi, i'm James</h1>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden /> Toronto
            </li>
            <li className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" aria-hidden /> CS &amp; Finance, University of Waterloo
            </li>
          </ul>
          <div className="space-y-4 leading-relaxed">
            <p>
              I've shipped data pipelines and agent tooling at Wealthsimple, Manulife and CIHI, and I like systems
              where the numbers have to be right. I've also passed CFA Level I.
            </p>
            <p>
              Off the clock, I'm an épée fencer and president of the Waterloo Fencing Club. You'll also find me at the
              gym or at a poker table, somewhere between Oakville and Waterloo.
            </p>
          </div>
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-[15px] transition-colors hover:border-blue hover:text-blue"
          >
            <CalendarDays className="h-4 w-4" aria-hidden /> book a 15 min chat
          </a>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {heroPhotos.map((photo, i) => (
              <Polaroid
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                rotate={[-3, 2, -2][i]}
                className="p-1.5 pb-4"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="grid scroll-mt-10 gap-10 md:grid-cols-[1fr_1.7fr]">
        <SectionHeading title="experience" />
        <ol className="flex flex-col gap-9">
          {experience.map((job, i) => (
            <li key={job.company} className="flex items-start gap-5">
              <span
                aria-hidden
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted text-xl font-semibold",
                  monogramColors[i % monogramColors.length]
                )}
              >
                {job.logo ? <img src={job.logo} alt="" className="h-8 w-8 object-contain" /> : job.company[0]}
              </span>
              <div>
                <h3 className="text-[17px] font-medium">{job.company}</h3>
                <p className="text-[15px] text-muted-foreground">
                  {job.role}, {job.dates}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{job.points[0]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-10">
        <SectionHeading title="projects" subtitle="things i've built, and am building" />
        <div className="mt-8 flex flex-col gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-1 text-[15px] text-muted-foreground hover:text-foreground">
          all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Life */}
      <section id="life" className="scroll-mt-10">
        <SectionHeading title="life" subtitle="there's more to me than pipelines" />
        <div className="mt-8">
          <LifeGroup group={lifeGroups[0]} />
        </div>
        <Link href="/life" className="mt-10 inline-flex items-center gap-1 text-[15px] text-muted-foreground hover:text-foreground">
          more of my life <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  )
}
