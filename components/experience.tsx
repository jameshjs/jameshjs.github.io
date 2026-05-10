"use client"

import { motion } from "framer-motion"

const roles = [
  {
    company: "Food For Good",
    role: "Software Engineer",
    period: "May – Aug 2025",
    location: "Toronto, ON",
    problem:
      "A charity needed to digitize donations and automate admin workflows that were entirely manual — contact retrieval took too long and reporting didn't scale.",
    built: [
      "RESTful payment API with Stripe, real-time notifications, and multilingual reporting for 5,000+ active users",
      "Salesforce CRM automation with AI and email integration, replacing a manual lookup process",
    ],
    impact: "1 hour/day of manual work eliminated · 50% faster contact data retrieval for 10,000+ business contacts",
    stack: ["Python", "FastAPI", "Stripe", "Salesforce", "Azure"],
  },
  {
    company: "Canadian Institute for Health Information",
    role: "Software Engineer",
    period: "Aug – Dec 2024",
    location: "Toronto, ON",
    problem:
      "A legacy system couldn't validate 100M+ healthcare payment transactions at modern scale — queries were slow and there was no ML layer for analysis.",
    built: [
      "Python + SQL data pipeline processing 100M+ healthcare transactions with 99.9% validation accuracy",
      "Apache Spark optimization reducing query latency by 70% while maintaining data integrity",
      "Interactive dashboard and ML models in scikit-learn to surface patient characteristics for policy decisions",
    ],
    impact:
      "70% latency reduction · 99.9% validation accuracy · Findings presented to 200+ stakeholders, shaping national healthcare funding policy",
    stack: ["Python", "SQL", "Apache Spark", "scikit-learn", "Azure"],
  },
  {
    company: "Home Hardware",
    role: "Full Stack Developer",
    period: "Jan – Apr 2024",
    location: "Waterloo, ON",
    problem:
      "Retail managers were tracking inventory and sales across 100+ products using spreadsheets — no real-time visibility, no demand forecasting.",
    built: [
      "Full-stack Retail Management Dashboard in C# .NET + SQL for live inventory and sales analytics",
      "Regression and time-series forecasting model for demand planning with 8.7% average error",
    ],
    impact: "Replaced manual spreadsheet tracking · 8.7% forecast error enabled more accurate financial projections",
    stack: ["C# .NET", "SQL", "Regression", "Time-Series"],
  },
  {
    company: "Toronto Transit Commission",
    role: "Data Analyst",
    period: "May – Aug 2023",
    location: "Toronto, ON",
    problem:
      "Operational incident data across 50,000+ records was inconsistent and unreliable, degrading financial reporting accuracy.",
    built: [
      "Anomaly detection and normalization pipeline cleaning 50K+ operational cost and incident records",
      "Coordinated a team of 8 interns tracking device incidents across 100+ clients",
    ],
    impact: "95% dataset reliability improvement · Cleaner data meaningfully improved financial reporting accuracy",
    stack: ["Python", "SQL", "Excel", "Data Cleaning"],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Problems solved, systems built
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {roles.map((role) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              variants={cardVariants}
              className="p-6 rounded-xl border border-border bg-card hover:border-border/80 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-semibold text-foreground">{role.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-primary font-medium">{role.company}</span>
                    <span className="text-border">·</span>
                    <span className="text-sm text-muted-foreground">{role.location}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full flex-shrink-0">
                  {role.period}
                </span>
              </div>

              {/* Story */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                    The problem
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{role.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5">
                    What I built
                  </p>
                  <ul className="space-y-1.5">
                    {role.built.map((point, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2.5 leading-relaxed">
                        <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border/50 flex flex-wrap items-start justify-between gap-4">
                  <p className="text-xs text-primary font-mono leading-relaxed max-w-md">
                    {role.impact}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
