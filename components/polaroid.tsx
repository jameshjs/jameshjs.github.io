import { cn } from "@/lib/utils"

type Tape = "yellow" | "blue" | "red" | "green"

export function Polaroid({
  src,
  alt = "",
  caption,
  rotate = 0,
  tape = "yellow",
  aspect = "aspect-[4/5]",
  className,
}: {
  src?: string
  alt?: string
  caption: string
  rotate?: number
  tape?: Tape
  aspect?: string
  className?: string
}) {
  return (
    <figure
      className={cn("polaroid tape transition-transform duration-300 hover:z-20 hover:scale-[1.03]", className)}
      style={{ rotate: `${rotate}deg`, "--tape": `var(--${tape})` } as React.CSSProperties}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" className={cn("w-full object-cover", aspect)} />
      ) : (
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-neutral-300 bg-neutral-50 text-neutral-400",
            aspect
          )}
        >
          <span className="text-3xl">📸</span>
          <span className="font-hand text-lg">photo coming soon</span>
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
