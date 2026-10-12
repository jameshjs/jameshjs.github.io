import Link from "next/link"
import { Github, Linkedin, Mail, FileText, Code2 } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { CommandPalette } from "@/components/command-palette"
import { EasterEgg } from "@/components/easter-egg"

const navLinks = [
  { label: "about", href: "#about" },
  { label: "education", href: "#education" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
]

const skills = [
  "Python", "SQL", "Go", "C/C++", "TypeScript", "JavaScript", "C#", "Bash", "R", "HTML/CSS",
  "FastAPI", "Flask", "Node.js", "React", "Next.js", "REST APIs", "WebSockets", "Postman",
  "Nginx", "Linux", "Docker", "PM2", "Git", "CI/CD", "AWS", "Azure",
  "PySpark", "Databricks", "Azure OpenAI", "RAG", "LangChain", "PyTorch", "scikit-learn", "Pandas", "MongoDB",
]

const coursework = [
  "Algorithms", "Compilers", "Operating Systems", "Databases",
  "Machine Learning", "Statistics",
]

const experience = [
  {
    role: "Incoming Software Engineer – Machine Learning",
    company: "Wealthsimple",
    dates: "Sept 2026 – Dec 2026",
    description:
      "Joining the Machine Learning team at Wealthsimple to work on ML-driven products and infrastructure.",
  },
  {
    role: "Software Engineer",
    company: "Manulife",
    dates: "Jan 2026 – Apr 2026",
    description:
      "Built PySpark and Databricks data pipelines on Azure to process 500k+ records daily, improved a weighted lead allocation engine increasing advisor conversion rates by 30%, contributed to an Azure OpenAI multi-agent system that improved intent detection accuracy by 60%, and built Power BI dashboards with a YAML-based rules engine reducing manual updates by 40%.",
  },
  {
    role: "Design Team",
    company: "WatStreet",
    dates: "Sept 2025 – Dec 2025",
    description: "Design team experience.",
  },
  {
    role: "Software Engineer",
    company: "Food For Good",
    dates: "May 2025 – Aug 2025",
    description:
      "Built Node.js and PostgreSQL features for a multilingual platform and tax reporting system serving 5,000+ users, implemented GitHub Actions CI/CD pipelines reducing release times by 30%, and automated Salesforce CRM workflows reducing manual effort by 2 hours daily.",
  },
  {
    role: "Software Engineer",
    company: "Canadian Institute for Health Information",
    dates: "Aug 2024 – Dec 2024",
    description:
      "Built a scalable PySpark/SQL pipeline processing 100M+ financial records with 99.9% validation accuracy, optimized distributed Spark jobs cutting query latency by 70%, and led research on a physician compensation model presented to 200+ stakeholders.",
  },
]

const projects = [
  {
    name: "Algorithmic Trading System",
    description:
      "Built a modular trading system with a strategy engine and live market data ingestion via WebSocket feeds, exposing REST and WebSocket APIs via FastAPI and dockerized with Redis for real-time position caching.",
    tags: ["Python", "FastAPI", "MySQL", "Docker", "Redis", "WebSockets"],
    href: "https://github.com/jameshjs",
  },
  {
    name: "DevOps AI Agent",
    description:
      "Developed a multi-agent debugging tool that programmatically inspects logs, diffs code, and surfaces root causes via a clean CLI, built on an MCP-inspired tool-use architecture with typed agent interfaces orchestrated through a central controller.",
    tags: ["Python", "MCP", "Docker", "Linux", "REST APIs"],
    href: "https://github.com/jameshjs",
  },
  {
    name: "Factor-Based Trading Strategies",
    description:
      "Implemented statistical methods including CAPM and Fama-French models to assess portfolio performance, identifying strategies that outperformed the market by an average of 3.5% annually.",
    tags: ["Python", "CAPM", "Fama-French"],
    href: "https://github.com/jameshjs/Factor-Based-Trading-Strategies",
  },
  {
    name: "Financial Portfolio Generator",
    description:
      "Built a portfolio optimization engine using regression on historical stock prices, minimizing portfolio risk. Secured 1st place out of 100+ participants in a course competition.",
    tags: ["Python", "Pandas", "yfinance"],
    href: "https://github.com/jameshjs/Safest-Portfolio-Generator",
  },
  {
    name: "Stock Portfolio Analyzer",
    description:
      "A portfolio optimization engine that helps users find the optimal allocation of their portfolio, based on their risk tolerance and investment goals.",
    tags: ["Python", "Pandas", "Matplotlib"],
    href: "https://github.com/jameshjs/Safest-Portfolio-Generator",
  },
  {
    name: "Personal Finance Dashboard",
    description:
      "A dashboard for tracking personal finances, including expenses, income, investments, and financial goals.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    href: "https://github.com/jameshjs/Factor-Based-Trading-Strategies",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <EasterEgg />

      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
          <Link href="/" className="text-sm font-bold">
            james hong
          </Link>
          <nav className="hidden gap-5 text-sm text-muted-foreground sm:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <CommandPalette />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-16 text-[15px] leading-relaxed">
        {/* Hero */}
        <section className="mb-16 space-y-5">
          <div className="flex items-center gap-4">
            <img
              src="/jhong.jpg"
              alt="James Hong"
              className="h-14 w-14 shrink-0 rounded-full border border-border object-cover grayscale transition-all hover:grayscale-0"
            />
            <div>
              <h1 className="text-lg font-bold">James Hong</h1>
              <p className="text-sm text-muted-foreground">Computer Science & Finance Student</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="flex flex-wrap items-center gap-x-2">
              <span aria-hidden>◆</span>
              CS &amp; Finance <Link href="#education" className="font-semibold hover:underline underline-offset-4">@ University of Waterloo</Link>
            </p>
            <p className="flex flex-wrap items-center gap-x-2">
              <span aria-hidden>◆</span>
              Currently: <span className="font-semibold">Incoming Software Engineer – Machine Learning @ Wealthsimple</span>
            </p>
            <div>
              <p className="flex items-center gap-2">
                <span aria-hidden>◆</span>
                <span className="italic text-muted-foreground">previously:</span>
              </p>
              <div className="mt-1.5 space-y-1.5 pl-6 text-muted-foreground">
                {experience.slice(1).map((job) => (
                  <p key={job.company} className="flex flex-wrap items-center gap-x-2">
                    <span aria-hidden>↳</span>
                    {job.role} @ <span className="font-medium text-foreground">{job.company}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="max-w-[560px] pt-2 text-muted-foreground">
            I'm passionate about building software solutions for financial problems — currently
            studying Computer Science and Finance at the University of Waterloo, with experience
            spanning full-stack development, data engineering, and financial analysis.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="rounded-md border border-border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </section>

        <div className="mb-16 border-t border-border" />

        {/* About */}
        <section id="about" className="mb-16 scroll-mt-20 space-y-3">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <span aria-hidden>◆</span> about
          </h2>
          <p>
            I'm a 4th-year student pursuing a dual degree in Computer Science and Finance at the
            University of Waterloo. My academic journey has equipped me with a unique blend of
            technical programming skills and financial knowledge.
          </p>
          <p>
            I'm particularly interested in fintech, algorithmic trading, and building scalable
            web applications — with a goal of leveraging technology to solve complex financial
            problems and create innovative solutions.
          </p>
          <p className="pt-1 text-sm text-muted-foreground">{skills.join(" · ")}</p>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20 space-y-3">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <span aria-hidden>◆</span> education
          </h2>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-semibold">University of Waterloo</span>
              <span className="font-mono text-xs text-muted-foreground">2022 – Present</span>
            </div>
            <p className="text-muted-foreground">Bachelor of Computer Science &amp; Finance</p>
            <p className="mt-1.5 flex items-start gap-2 text-muted-foreground">
              <span aria-hidden>↳</span>
              President, Waterloo Fencing Club
            </p>
            <p className="flex items-start gap-2 text-muted-foreground">
              <span aria-hidden>↳</span>
              Passed CFA Level I (2026)
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{coursework.join(" · ")}</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-20 space-y-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <span aria-hidden>◆</span> experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span>
                    <span className="font-semibold">{job.role}</span>{" "}
                    <span className="text-muted-foreground">— {job.company}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{job.dates}</span>
                </div>
                <p className="mt-1 flex items-start gap-2 text-muted-foreground">
                  <span aria-hidden>↳</span>
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16 scroll-mt-20 space-y-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <span aria-hidden>◆</span> projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline underline-offset-4"
                >
                  {project.name} ↗
                </a>
                <p className="mt-1 flex items-start gap-2 text-muted-foreground">
                  <span aria-hidden>↳</span>
                  {project.description}
                </p>
                <p className="pl-5 text-sm text-muted-foreground">{project.tags.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 space-y-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <span aria-hidden>◆</span> contact
          </h2>
          <p className="text-muted-foreground">I'm currently looking for:</p>
          <div className="space-y-1.5 pl-1 text-muted-foreground">
            <p className="flex items-start gap-2">
              <span aria-hidden>↳</span> Internship opportunities in software development or fintech
            </p>
            <p className="flex items-start gap-2">
              <span aria-hidden>↳</span> Collaboration on open-source projects related to finance
            </p>
            <p className="flex items-start gap-2">
              <span aria-hidden>↳</span> Networking with professionals in tech and finance
            </p>
          </div>
          <div className="space-y-1.5 pt-2">
            <a href="mailto:j8hong@uwaterloo.ca" className="flex items-center gap-2 hover:underline underline-offset-4">
              <Mail className="h-4 w-4 text-muted-foreground" /> j8hong@uwaterloo.ca
            </a>
            <a
              href="https://linkedin.com/in/james-hong-uw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline underline-offset-4"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" /> linkedin.com/in/james-hong-uw
            </a>
            <a
              href="https://github.com/jameshjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline underline-offset-4"
            >
              <Github className="h-4 w-4 text-muted-foreground" /> github.com/jameshjs
            </a>
          </div>
          <a
            href="mailto:j8hong@uwaterloo.ca"
            className="mt-2 inline-block rounded-md border border-border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Send me an email
          </a>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} James Hong</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jameshjs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/james-hong-uw/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:j8hong@uwaterloo.ca" className="hover:text-foreground">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/jameshjs/jameshjs.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
              title="View source"
            >
              <Code2 className="h-4 w-4" />
              <span className="sr-only">View source</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
