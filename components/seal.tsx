import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

// A red chop seal with the Chinese name, like an artist's stamp on a painting.
export function Seal({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex select-none flex-col items-center justify-center rounded-[3px] bg-red px-1 py-1.5 leading-none text-white shadow-[inset_0_0_0_2px_hsl(var(--red)),inset_0_0_0_3.5px_rgb(255_255_255/0.85)]",
        className
      )}
      style={{ fontFamily: '"Songti TC", "Noto Serif TC", "PMingLiU", serif' }}
      aria-label={`Chinese name: ${site.chineseName}`}
      title={site.chineseName}
    >
      {site.chineseName.split("").map((ch) => (
        <span key={ch} className="block">
          {ch}
        </span>
      ))}
    </span>
  )
}
