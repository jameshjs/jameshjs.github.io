"use client"

import { motion } from "framer-motion"

const currentStatus = [
  { label: "Studying", value: "CS + Finance @ Waterloo (2022–2026)" },
  { label: "Building", value: "AI workflow tooling and fintech side projects" },
  { label: "Seeking", value: "Summer 2026 internships and new grad roles" },
  { label: "Exploring", value: "Quantitative systems and large-scale data infrastructure" },
  { label: "Also", value: "Varsity fencing · CFA Level I candidate" },
]

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* Left */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                About
              </p>
              <h2 className="text-3xl font-bold tracking-tight leading-snug">
                Building at the intersection of software, data, and finance
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
              <p>
                I'm James — a fourth-year student at the University of Waterloo studying Computer Science and Finance.
                I got into CS because I enjoy building systems that solve real problems. The finance side came from
                wanting to understand what those problems actually cost.
              </p>
              <p>
                Over the past two years, I've worked across data engineering, backend APIs, and full-stack products —
                from processing 100M+ healthcare transactions to automating payment flows for a charity. I like
                projects where the technical and the financial intersect.
              </p>
              <p>
                I'm drawn to work where scale matters: pipelines that have to be right at 100M rows, APIs that
                process real money, models that inform real decisions. That's the kind of engineering I want to keep doing.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
              Currently
            </p>
            <div className="space-y-0">
              {currentStatus.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-6 py-3.5 border-b border-border/50 last:border-0"
                >
                  <span className="text-xs text-muted-foreground font-mono w-20 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground/90">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
