"use client"

import * as React from "react"

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

const EMOJI = ["🎉", "✨", "🚀", "📈", "💹", "🎊"]

type Particle = {
  id: number
  left: number
  delay: number
  duration: number
  emoji: string
}

export function EasterEgg() {
  const [active, setActive] = React.useState(false)
  const [particles, setParticles] = React.useState<Particle[]>([])
  const buffer = React.useRef<string[]>([])

  React.useEffect(() => {
    console.log(
      "%c👀 looking for something?\n%ctry the konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
      "font-size: 14px; font-weight: bold;",
      "font-size: 12px; color: #888;"
    )

    const onKeyDown = (e: KeyboardEvent) => {
      buffer.current = [...buffer.current, e.key].slice(-KONAMI.length)
      if (buffer.current.join(",") === KONAMI.join(",")) {
        buffer.current = []
        setParticles(
          Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 1.5,
            duration: 2.5 + Math.random() * 2,
            emoji: EMOJI[Math.floor(Math.random() * EMOJI.length)],
          }))
        )
        setActive(true)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    if (!active) return
    const timer = setTimeout(() => setActive(false), 5000)
    return () => clearTimeout(timer)
  }, [active])

  if (!active) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      onClick={() => setActive(false)}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute top-0 text-2xl"
          style={{
            left: `${p.left}%`,
            animation: `float-fall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        >
          {p.emoji}
        </span>
      ))}
      <div
        className="relative mx-4 max-w-sm rounded-lg border border-border bg-card px-6 py-5 text-center shadow-xl"
        style={{ animation: "pop-in 0.3s ease-out" }}
      >
        <p className="text-lg font-semibold">You found the secret code 🎮</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Nice — you're clearly someone who reads the fine print. Let's connect.
        </p>
        <a
          href="mailto:j8hong@uwaterloo.ca"
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
        >
          j8hong@uwaterloo.ca
        </a>
      </div>
    </div>
  )
}
