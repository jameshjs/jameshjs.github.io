"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Trophy, Cpu, BookHeart } from "lucide-react"

const projects = [
  {
    icon: Trophy,
    title: "Financial Portfolio Generator",
    description:
      "Portfolio optimization engine using regression on historical stock prices to find the minimum-risk allocation. Won 1st place out of 100+ participants in a university course competition. Improved backtesting speed 50% by parallelizing API calls.",
    highlights: [
      "1st place — 100+ participant course competition",
      "50% faster backtesting via parallel API calls",
      "Regression-based risk minimization on live stock data",
    ],
    stack: ["Python", "Pandas", "yfinance", "Matplotlib"],
    github: "https://github.com/jameshjs/Safest-Portfolio-Generator",
  },
  {
    icon: BookHeart,
    title: "Echomind",
    description:
      "AI-powered emotional journaling app that analyzes entries to surface mood patterns and language trends over time. Built to help people understand their mental state with data instead of gut feeling.",
    highlights: [
      "AI-powered mood pattern analysis",
      "NLP on longitudinal journal entries",
      "Trend surfacing over weeks and months",
    ],
    stack: ["React", "Node.js", "TypeScript", "AI APIs"],
    github: "https://github.com/jameshjs",
  },
  {
    icon: Cpu,
    title: "Factor-Based Trading Strategies",
    description:
      "Statistical analysis of factor investing using CAPM and Fama-French models on Nasdaq stocks. Constructed and analyzed hedging portfolios based on six financial factors to identify strategies that beat the market.",
    highlights: [
      "3.5% average annual outperformance vs. benchmark",
      "CAPM and Fama-French multi-factor analysis",
      "Nasdaq portfolio backtesting across six factors",
    ],
    stack: ["Python", "Pandas", "NumPy", "Statistics"],
    github: "https://github.com/jameshjs/Factor-Based-Trading-Strategies",
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight">Things I've built</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/25 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </div>

                <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <span className="text-primary text-xs flex-shrink-0 mt-0.5">→</span>
                      <span className="text-xs text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
