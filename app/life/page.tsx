import type { Metadata } from "next"

import { site } from "@/lib/content"
import { Polaroid } from "@/components/polaroid"

export const metadata: Metadata = {
  title: "Life",
  description: "Épée, the gym, poker and the places that made James Hong.",
}

// To fill a "photo coming soon" slot: process the photo into public/images
// (scripts/process-photos.mjs) and add its path as `src`.
const sports = [
  {
    title: "The gym",
    note: "My reset button between deploys and bouts.",
    src: undefined,
    caption: "leg day 🦵",
    tape: "blue",
  },
  {
    title: "Other sports",
    note: "Whatever gets a group together outside.",
    src: undefined,
    caption: "more soon",
    tape: "green",
  },
] as const

const places = [
  { name: "Oakville", note: "grew up here", src: undefined, caption: "home 🏡", rotate: -3, tape: "red" },
  { name: "Shanghai", note: "lived here too", src: "/images/shanghai.webp", caption: "上海", rotate: 2, tape: "yellow" },
  { name: "Waterloo", note: "where I learned to build", src: "/images/waterloo-e7.webp", caption: "E7 banners", rotate: -2, tape: "blue" },
] as const

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden>
      <path d="M4 10 C 40 0, 80 10, 106 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M92 42 L 107 46 L 108 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Heading({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-hand text-2xl text-muted-foreground">{kicker}</p>
      <h2 className="font-serif text-5xl leading-none sm:text-6xl">{children}</h2>
    </div>
  )
}

export default function LifePage() {
  return (
    <div className="paper">
      {/* Intro */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-8 pt-14 sm:px-6 md:grid-cols-[1.3fr_1fr] md:pt-20">
        <div>
          <p className="font-hand text-3xl text-red">hi again 👋</p>
          <h1 className="mt-1 font-serif text-6xl leading-[0.95] sm:text-7xl">
            Life, <em className="italic">off the clock.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-700">
            This is the scrapbook half of the site: the sword, the barbell, the cards, and the cities that made me.
            I'm {site.name} ({site.chineseName}, if you're curious).
          </p>
        </div>
        <div className="relative mx-auto h-80 w-60 sm:h-96 sm:w-72">
          <div className="absolute inset-x-4 bottom-0 top-10 -rotate-3 rounded-3xl bg-green/80" />
          <img
            src="/images/me-leaning.webp"
            alt="James leaning back in a Los Angeles t-shirt"
            className="sticker absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
          />
          <span className="absolute -left-20 top-6 hidden font-hand text-2xl md:block">
            that's me
            <Arrow className="ml-6 h-10 w-20 rotate-12" />
          </span>
        </div>
      </section>

      {/* Fencing */}
      <section id="fencing" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="md:sticky md:top-24">
            <Heading kicker="the main event">
              Épée <span aria-hidden>🤺</span>
            </Heading>

            {/* scoring box: red and green lights */}
            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow-lg">
              <span className="flex items-center gap-2 text-sm">
                <span className="h-4 w-4 rounded-full bg-red shadow-[0_0_14px_hsl(var(--red))]" /> left
              </span>
              <span className="font-mono text-lg tabular-nums">15 : 14</span>
              <span className="flex items-center gap-2 text-sm">
                right <span className="h-4 w-4 rounded-full bg-green shadow-[0_0_14px_hsl(var(--green))]" />
              </span>
            </div>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
              <p>
                Épée is the heaviest of the three blades. The whole body is target, there's no right-of-way, and
                whoever lands first scores. Hit within 1/25th of a second of each other and both lights go off.
              </p>
              <p>
                I'm also president of the <strong className="text-foreground">Waterloo Fencing Club</strong>, which
                mostly means practices, tournament trips, and making sure everyone fits in the elevator.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                ["weapon", "épée"],
                ["target", "everything"],
                ["club role", "president"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-white/70 p-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-serif text-xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8">
            <Polaroid src="/images/fencing-action-1.webp" alt="James lunging in an épée bout" caption="lunge!" rotate={-4} />
            <div className="relative flex items-end justify-center">
              <img
                src="/images/me-fencing-gear.webp"
                alt="James holding his fencing mask"
                className="sticker relative z-10 w-full max-w-[220px]"
                style={{ rotate: "4deg" }}
              />
              <span className="absolute -bottom-9 right-0 -rotate-3 font-hand text-xl text-red sm:text-2xl">mask on, game on</span>
            </div>
            <Polaroid
              src="/images/fencing-team.webp"
              alt="The Waterloo fencing team squeezed into an elevator with their gear"
              caption="team road trip"
              rotate={3}
              tape="green"
            />
            <Polaroid src="/images/fencing-action-2.webp" alt="Two fencers mid-bout" caption="mid-bout" rotate={-2} tape="red" />
            <Polaroid
              src="/images/fencing-awards.webp"
              alt="Fencing club members holding Waterloo plaques at an awards night"
              caption="awards night 🏆"
              rotate={2}
              tape="blue"
              aspect="aspect-[4/3]"
              className="col-span-2 mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Gym, sports, poker */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Heading kicker="also keeping me busy">
          Gym, sports <em className="italic">&amp; cards</em>
        </Heading>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((s, i) => (
            <div key={s.title}>
              <Polaroid src={s.src} caption={s.caption} rotate={i % 2 ? 3 : -3} tape={s.tape} aspect="aspect-square" />
              <h3 className="mt-5 font-serif text-3xl">{s.title}</h3>
              <p className="text-neutral-700">{s.note}</p>
            </div>
          ))}
          <div>
            <div className="flex aspect-square items-center justify-center rounded-sm bg-white/60">
              <img
                src="/images/poker.webp"
                alt="A five of hearts and a two of clubs"
                className="w-2/3 mix-blend-multiply transition-transform duration-500 [animation:wobble_6s_ease-in-out_infinite]"
              />
            </div>
            <h3 className="mt-5 font-serif text-3xl">Poker nights</h3>
            <p className="text-neutral-700">Expected value, but with friends and snacks. Yes, I'll fold the 5-2.</p>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Heading kicker="where I'm from">
          Oakville <span className="text-muted-foreground">→</span> Shanghai{" "}
          <span className="text-muted-foreground">→</span> Waterloo
        </Heading>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {places.map((p) => (
            <div key={p.name}>
              <Polaroid src={p.src} alt={p.name} caption={p.caption} rotate={p.rotate} tape={p.tape} />
              <h3 className="mt-5 font-serif text-3xl">{p.name}</h3>
              <p className="font-hand text-xl text-neutral-600">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-hand text-3xl">…and sometimes, Venice</p>
          <div className="mx-auto mt-10 flex max-w-3xl justify-center">
            <Polaroid
              src="/images/venice-gondolas.webp"
              alt="James by the gondolas in Venice"
              caption="gondolas"
              rotate={-7}
              className="w-1/3 translate-y-4"
            />
            <Polaroid
              src="/images/venice-san-marco.webp"
              alt="James in front of St Mark's Basilica"
              caption="san marco"
              rotate={2}
              tape="red"
              className="-mx-4 w-1/3 sm:-mx-6"
            />
            <Polaroid
              src="/images/venice-canal.webp"
              alt="James on a bridge over a canal"
              caption="canals"
              rotate={6}
              tape="blue"
              className="w-1/3 translate-y-6"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
