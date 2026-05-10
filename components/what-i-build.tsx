"use client"

import { motion } from "framer-motion"
import { Brain, Database, Server, TrendingUp, LayoutDashboard, Zap } from "lucide-react"

const domains = [
  {
    icon: Brain,
    title: "AI Systems",
    description:
      "LLM pipelines, RAG applications, ML models, and AI-powered workflow automation at production scale.",
    tags: ["Azure OpenAI", "scikit-learn", "LangChain"],
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "End-to-end data engineering — ingest, transform, validate, and serve reliably at 100M+ row scale.",
    tags: ["PySpark", "Databricks", "SQL"],
  },
  {
    icon: Server,
    title: "Backend APIs",
    description:
      "RESTful services and third-party integrations built to handle real transaction volumes without breaking.",
    tags: ["FastAPI", "Node.js", "Stripe"],
  },
  {
    icon: TrendingUp,
    title: "Fintech Tools",
    description:
      "Portfolio optimization engines, factor-based trading strategy backtesting, and financial modeling.",
    tags: ["Python", "CAPM", "Fama-French"],
  },
  {
    icon: LayoutDashboard,
    title: "Data Products",
    description:
      "Dashboards and analytics interfaces that turn raw data into decisions stakeholders can actually use.",
    tags: ["Next.js", "React", "Recharts"],
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Workflow automation, CRM integrations, and reporting pipelines that eliminate hours of manual work.",
    tags: ["Salesforce", "Azure", "Python"],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function WhatIBuild() {
  return (
    <section id="build" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            What I Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Practical systems across the stack
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={domain.title}
                variants={cardVariants}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/25 hover:bg-card/60 transition-all duration-200 cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-sm">{domain.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {domain.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {domain.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-mono"
                    >
                      {tag}
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
