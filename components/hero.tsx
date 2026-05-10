"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"

const stats = [
  { value: "100M+", label: "Healthcare transactions\nprocessed & validated" },
  { value: "70%", label: "Query latency\nreduced via Spark" },
  { value: "#1", label: "Course competition\nout of 100+ teams" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />
      {/* Fade to background at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-[350px] h-[350px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-center">

          {/* Left: Text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Summer 2026 internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.12]"
            >
              I build{" "}
              <span className="text-primary">AI</span>,{" "}
              <span className="text-primary">data</span>, and{" "}
              <span className="text-primary">fintech</span> systems
              <br />
              <span className="text-muted-foreground font-medium">
                that turn messy problems into usable products.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-muted-foreground max-w-lg leading-relaxed"
            >
              Fourth-year Computer Science + Finance at Waterloo.
              I work where software engineering, data infrastructure, and financial systems meet —
              and I care about building things that actually ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Waterloo, ON</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                See my projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary text-sm font-medium transition-colors"
              >
                View experience
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch →
              </Link>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl scale-110 pointer-events-none" />
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-border/80">
                <Image
                  src="/jhong.png"
                  alt="James Hong"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
              <span>james hong</span>
              <span className="text-border">·</span>
              <span>uw waterloo</span>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-20 pt-8 border-t border-border/40 grid grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.value} className="space-y-1.5">
              <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground leading-snug whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
