import Link from "next/link"

import { site } from "@/lib/content"
import { Seal } from "@/components/seal"

type CoverLine = { kicker: string; title: React.ReactNode; href: string; color: string }

const left: CoverLine[] = [
  {
    kicker: "Exclusive",
    title: (
      <>
        Inside Wealthsimple's promotion payouts for <em className="italic">1M+</em> people
      </>
    ),
    href: "/#work",
    color: "bg-red",
  },
  {
    kicker: "Data",
    title: (
      <>
        <span className="font-serif text-5xl leading-none">100M+</span> records, 99.9% accuracy, 70% faster queries
      </>
    ),
    href: "/#work",
    color: "bg-blue",
  },
  {
    kicker: "Finance",
    title: <>CFA Level I: passed ✓</>,
    href: "/#work",
    color: "bg-green",
  },
]

const right: CoverLine[] = [
  {
    kicker: "Sport",
    title: (
      <>
        <em className="italic">Épée</em>: the fencing club president on why you should always hit first
      </>
    ),
    href: "/life#fencing",
    color: "bg-red",
  },
  {
    kicker: "AI",
    title: <>Multi-agent systems, MCP and a Claude context layer, explained</>,
    href: "/projects",
    color: "bg-blue",
  },
  {
    kicker: "Plus",
    title: <>5 projects you can actually clone →</>,
    href: "/projects",
    color: "bg-green",
  },
]

function Line({ line, n, align = "left" }: { line: CoverLine; n: number; align?: "left" | "right" }) {
  const right = align === "right"
  return (
    <Link
      href={line.href}
      className={`group block max-w-[17rem] border-t border-neutral-950/40 pt-3 ${right ? "md:ml-auto md:text-right" : ""}`}
    >
      <div className={`flex items-center gap-2 ${right ? "md:flex-row-reverse" : ""}`}>
        <span className="font-serif text-2xl italic leading-none">{String(n).padStart(2, "0")}</span>
        <span className={`px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white ${line.color}`}>
          {line.kicker}
        </span>
      </div>
      <p className="mt-2 text-lg font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
        {line.title}
      </p>
    </Link>
  )
}

// a slowly turning ring of text around a "say hi" button
function RingBadge() {
  const text = "NOW OPEN TO SUMMER 2027 \u2726 NEW GRAD 2028 \u2726 "
  return (
    <a
      href={`mailto:${site.email}`}
      className="group relative block h-28 w-28 transition-transform hover:scale-105 sm:h-36 sm:w-36"
      aria-label="Email James: open to summer 2027 and new grad 2028 roles"
    >
      <span className="absolute inset-0 rounded-full bg-red shadow-[0_10px_25px_-8px_rgb(0_0_0/0.5)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_22s_linear_infinite]" aria-hidden>
        <defs>
          <path id="ring" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-white font-mono" fontSize="7" letterSpacing="1.15">
          <textPath href="#ring">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl italic text-white sm:text-3xl">
        say hi
      </span>
    </a>
  )
}

function Barcode() {
  // deterministic pseudo-random bar widths
  const bars = Array.from({ length: 38 }, (_, i) => 1 + ((i * 7 + 3) % 4))
  let x = 0
  return (
    <div className="bg-white px-2 pb-1 pt-2">
      <svg viewBox="0 0 110 34" className="h-10 w-28" aria-hidden>
        {bars.map((w, i) => {
          const rect = i % 2 === 0 ? <rect key={i} x={x} y={0} width={w * 0.7} height={34} fill="#111" /> : null
          x += w * 0.7 + 0.6
          return rect
        })}
      </svg>
      <p className="text-center font-mono text-[9px] tracking-widest">jameshjs.github.io</p>
    </div>
  )
}

// printer's colour bar, built from the site's four inks
function ColorBar() {
  return (
    <div className="hidden items-center gap-3 md:flex" aria-hidden>
      <div className="flex">
        {["bg-blue", "bg-red", "bg-yellow", "bg-green", "bg-neutral-950", "bg-neutral-500", "bg-white"].map((c) => (
          <span key={c} className={`h-4 w-4 border border-neutral-950/60 ${c}`} />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Proof 04 · 2026</span>
    </div>
  )
}

const cutout = "/images/me-venice.webp"

export function MagazineCover() {
  return (
    <section className="grain relative overflow-hidden bg-yellow text-neutral-950">
      {/* crop marks */}
      <span className="crop-mark left-2 top-2 border-l border-t" />
      <span className="crop-mark right-2 top-2 border-r border-t" />
      <span className="crop-mark bottom-2 left-2 border-b border-l" />
      <span className="crop-mark bottom-2 right-2 border-b border-r" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* issue strip */}
        <div className="flex items-center justify-between border-b-2 border-neutral-950 py-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span>Vol. 04 · Fall 2026</span>
          <span className="hidden sm:inline">The Software &amp; Finance Issue</span>
          <span>Toronto · CA$0.00</span>
        </div>

        {/* masthead */}
        <div className="relative select-none">
          <div className="absolute left-0 top-[4%] z-0 flex items-start gap-2 sm:left-[3%] sm:top-[14%] sm:gap-3">
            <p className="font-serif text-2xl italic sm:text-5xl">James</p>
            <Seal className="mt-2 hidden rotate-[-4deg] text-sm sm:inline-flex" />
          </div>
          <h1
            className="text-center font-serif leading-[0.78] tracking-[-0.03em]"
            style={{ fontSize: "clamp(7rem, 30vw, 23rem)", textShadow: "0.028em 0.022em 0 hsl(var(--red))" }}
          >
            HONG
          </h1>
          <p className="absolute right-0 top-[20%] hidden font-mono text-[10px] uppercase tracking-[0.35em] [writing-mode:vertical-rl] sm:block">
            N° 04 — Autumn edition
          </p>
        </div>

        {/* cover body: lines | cutout | lines */}
        <div className="relative grid items-end md:grid-cols-[1fr_minmax(0,26rem)_1fr]">
          <div className="order-2 grid grid-cols-2 gap-6 pb-8 pt-8 md:order-1 md:grid-cols-1 md:gap-7 md:pb-10 md:pt-0 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
            {left.map((line, i) => (
              <Line key={line.kicker} line={line} n={i + 1} />
            ))}
          </div>

          {/* the cutout stands in front of the masthead, printed off-register */}
          <div className="relative order-1 z-10 -mt-[9vw] md:order-2 md:-mt-[14rem]">
            <div className="relative mx-auto w-[68%] md:w-full">
              <div
                className="halftone absolute left-1/2 top-[2%] aspect-square w-[105%] -translate-x-1/2"
                style={{ "--dot": "var(--red)" } as React.CSSProperties}
              />
              <div
                className="riso-shadow absolute inset-0 bg-blue/90"
                style={{ maskImage: `url(${cutout})`, WebkitMaskImage: `url(${cutout})`, translate: "14px -8px" }}
              />
              <img
                src={cutout}
                alt="James Hong in a flat cap and dark coat with a red rose, looking to the side"
                className="relative block w-full"
              />
            </div>
            <div className="absolute -right-1 top-[16%] sm:right-0 md:-left-8 md:right-auto md:top-[22%]">
              <RingBadge />
            </div>
          </div>

          <div className="order-3 grid grid-cols-2 gap-6 pb-10 md:grid-cols-1 md:gap-7 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
            {right.map((line, i) => (
              <Line key={line.kicker} line={line} n={i + 4} align="right" />
            ))}
          </div>
        </div>
      </div>

      {/* footer strip of the cover */}
      <div className="relative z-20 border-t-2 border-neutral-950 bg-yellow">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="max-w-md font-serif text-xl italic leading-snug sm:text-2xl">
            “I build data and AI infrastructure for fintech.”
          </p>
          <div className="flex items-center gap-6">
            <ColorBar />
            <Barcode />
          </div>
        </div>
      </div>
    </section>
  )
}
