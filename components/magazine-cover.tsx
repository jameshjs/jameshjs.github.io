import Link from "next/link"

import { site } from "@/lib/content"

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

function Line({ line, align = "left" }: { line: CoverLine; align?: "left" | "right" }) {
  return (
    <Link
      href={line.href}
      className={`group block max-w-[17rem] ${align === "right" ? "md:ml-auto md:text-right" : ""}`}
    >
      <p className={`inline-block px-1.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white ${line.color}`}>
        {line.kicker}
      </p>
      <p className="mt-1 text-lg font-semibold leading-snug decoration-2 underline-offset-4 group-hover:underline">
        {line.title}
      </p>
    </Link>
  )
}

function Starburst() {
  const points = Array.from({ length: 32 }, (_, i) => {
    const r = i % 2 ? 42 : 50
    const a = (i / 32) * Math.PI * 2
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`
  }).join(" ")
  return (
    <div className="relative h-28 w-28 rotate-12 transition-transform duration-500 hover:rotate-[372deg] sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full fill-red drop-shadow-md" aria-hidden>
        <polygon points={points} />
      </svg>
      <p className="relative flex h-full flex-col items-center justify-center text-center leading-tight text-white">
        <span className="font-mono text-[10px] uppercase tracking-widest">now open to</span>
        <span className="font-serif text-xl">2027 & 2028</span>
        <span className="font-mono text-[10px] uppercase tracking-widest">roles</span>
      </p>
    </div>
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

export function MagazineCover() {
  return (
    <section className="relative overflow-hidden bg-yellow text-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* issue strip */}
        <div className="flex items-center justify-between border-b-2 border-neutral-950 py-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span>Vol. 04 · Fall 2026</span>
          <span className="hidden sm:inline">The Software &amp; Finance Issue</span>
          <span>Toronto · CA$0.00</span>
        </div>

        {/* masthead */}
        <div className="relative select-none">
          <p className="absolute left-0 top-[4%] z-0 font-serif text-2xl italic sm:left-[3%] sm:top-[14%] sm:text-5xl">James</p>
          <h1
            className="text-center font-serif leading-[0.78] tracking-[-0.03em]"
            style={{ fontSize: "clamp(7rem, 30vw, 23rem)" }}
          >
            HONG
          </h1>
          <p
            className="absolute right-0 top-[18%] font-serif text-sm tracking-[0.3em] text-neutral-800 [writing-mode:vertical-rl]"
            aria-label="Chinese name"
          >
            {site.chineseName}
          </p>
        </div>

        {/* cover body: lines | cutout | lines */}
        <div className="relative grid items-end md:grid-cols-[1fr_minmax(0,26rem)_1fr]">
          <div className="order-2 grid grid-cols-2 gap-6 pb-8 pt-8 md:order-1 md:grid-cols-1 md:gap-8 md:pb-10 md:pt-0 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
            {left.map((line) => (
              <Line key={line.kicker} line={line} />
            ))}
          </div>

          {/* the cutout stands in front of the masthead */}
          <div className="relative order-1 z-10 -mt-[9vw] md:order-2 md:-mt-[14rem]">
            <img
              src="/images/me-venice.webp"
              alt="James Hong in a flat cap and dark coat with a red rose, looking to the side"
              className="mx-auto w-[68%] drop-shadow-[0_20px_30px_rgb(0_0_0/0.25)] md:w-full"
            />
            <div className="absolute -right-2 top-[18%] origin-top-right scale-75 sm:right-0 sm:scale-100 md:-left-6 md:right-auto md:top-[24%]">
              <Starburst />
            </div>
          </div>

          <div className="order-3 grid grid-cols-2 gap-6 pb-10 md:grid-cols-1 md:gap-8 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
            {right.map((line) => (
              <Line key={line.kicker} line={line} align="right" />
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
          <Barcode />
        </div>
      </div>
    </section>
  )
}
