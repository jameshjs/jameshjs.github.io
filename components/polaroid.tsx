import { cn } from "@/lib/utils"

export function Polaroid({
  src,
  alt,
  rotate = 0,
  aspect = "aspect-[4/5]",
  className,
}: {
  src: string
  alt: string
  rotate?: number
  aspect?: string
  className?: string
}) {
  return (
    <figure
      className={cn(
        "bg-white p-2.5 pb-8 shadow-[0_2px_14px_rgb(0_0_0/0.14)] transition-transform duration-300 hover:z-10 hover:scale-[1.03]",
        className
      )}
      style={{ rotate: `${rotate}deg` }}
    >
      <img src={src} alt={alt} loading="lazy" className={cn("w-full object-cover", aspect)} />
    </figure>
  )
}
