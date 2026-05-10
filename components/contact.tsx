"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "j8hong@uwaterloo.ca",
    href: "mailto:j8hong@uwaterloo.ca",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/james-hong-uw",
    href: "https://linkedin.com/in/james-hong-uw/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jameshjs",
    href: "https://github.com/jameshjs",
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's talk</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-[0.95rem]">
            I'm actively looking for Summer 2026 internships and new grad roles in software engineering,
            data engineering, or fintech. If you're working on something interesting or just want to connect,
            I'd love to hear from you.
          </p>

          <div className="space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/25 hover:bg-card/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-0.5">{link.label}</p>
                      <p className="text-sm text-foreground">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
