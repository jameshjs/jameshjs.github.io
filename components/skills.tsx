"use client"

import { motion } from "framer-motion"
import { Brain, Database, Server, Cloud, Code2, TrendingUp } from "lucide-react"

const skillGroups = [
  {
    icon: Brain,
    category: "AI & Machine Learning",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    skills: ["Python", "scikit-learn", "Azure OpenAI", "LangChain", "RAG", "Pandas", "NumPy"],
  },
  {
    icon: Database,
    category: "Data Engineering",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    skills: ["SQL", "PySpark", "Databricks", "Apache Spark", "Azure Data Factory", "ETL Pipelines"],
  },
  {
    icon: Server,
    category: "Backend Engineering",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    skills: ["FastAPI", "Flask", "Node.js", "RESTful APIs", "Stripe", "C# .NET"],
  },
  {
    icon: Cloud,
    category: "Cloud & Infrastructure",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10",
    skills: ["Azure", "Docker", "Kubernetes", "Linux", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Code2,
    category: "Full-Stack",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  },
  {
    icon: TrendingUp,
    category: "Finance & Quant",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    skills: ["Portfolio Optimization", "CAPM", "Fama-French", "Bloomberg", "VBA", "CFA (in progress)"],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Technical Strengths
          </p>
          <h2 className="text-3xl font-bold tracking-tight">The tools I work with</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                variants={groupVariants}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-1.5 rounded-lg ${group.iconBg}`}>
                    <Icon className={`h-4 w-4 ${group.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono"
                    >
                      {skill}
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
