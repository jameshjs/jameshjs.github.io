"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { label: "Build", href: "#build" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-primary"
        >
          JH
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/jameshjs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/james-hong-uw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:j8hong@uwaterloo.ca"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
