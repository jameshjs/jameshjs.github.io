// Turns the original photos in /photos into web-sized WebP files in /public/images.
// Cutouts (transparent PNGs) come from scripts/cutout.swift:
//   swiftc -O scripts/cutout.swift -o /tmp/cutout && /tmp/cutout photos/hero4.jpg photos/cutouts/hero4.png
// Then run: node scripts/process-photos.mjs
import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const SRC = "photos"
const OUT = "public/images"

// [source, output name, max long edge, trim transparent edges]
const photos = [
  ["cutouts/hero4.png", "me-hero", 1200, true],
  ["cutouts/hero2.png", "me-leaning", 1000, true],
  ["fencing1.png", "me-fencing-gear", 1000, true],
  ["fencing_1.JPG", "fencing-action-1", 1600],
  ["fencing_2.JPG", "fencing-action-2", 1600],
  ["fencing_awards.jpg", "fencing-awards", 1400],
  ["fencing_team_elevator.jpeg", "fencing-team", 1400],
  ["hobby_poker.jpg", "poker", 600],
  ["hero1.jpg", "venice-gondolas", 1400],
  ["hero3.jpg", "venice-san-marco", 1400],
  ["hero5.jpg", "venice-canal", 1400],
  ["shanghai_2.jpg", "shanghai", 1400],
  ["waterloo1.png", "waterloo-hat", 1200],
  ["waterloo2.jpg", "waterloo-e7", 1400],
]

fs.mkdirSync(OUT, { recursive: true })

for (const [src, name, size, trim] of photos) {
  let img = sharp(path.join(SRC, src)).rotate()
  if (trim) img = sharp(await img.trim().toBuffer())
  const info = await img
    .resize(size, size, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90 })
    .toFile(path.join(OUT, `${name}.webp`))
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`)
}

// Link preview image for LinkedIn / iMessage (1200x630)
const me = await sharp(path.join(OUT, "me-hero.webp")).resize({ height: 600 }).toBuffer()
const meWidth = (await sharp(me).metadata()).width
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>.t{font-family:Georgia,serif;fill:#1a1a1a}.s{font-family:Helvetica,Arial,sans-serif;fill:#3c3c3c}</style>
  <text x="70" y="250" class="t" font-size="92">James Hong</text>
  <text x="72" y="320" class="s" font-size="32">Data &amp; AI infrastructure for fintech</text>
  <text x="72" y="370" class="s" font-size="32">CS &amp; Finance @ Waterloo</text>
  <rect x="72" y="420" width="36" height="12" rx="6" fill="#4285F4"/>
  <rect x="116" y="420" width="36" height="12" rx="6" fill="#EA4335"/>
  <rect x="160" y="420" width="36" height="12" rx="6" fill="#FBBC04"/>
  <rect x="204" y="420" width="36" height="12" rx="6" fill="#34A853"/>
</svg>`)
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#FFF8E7" } })
  .composite([
    { input: Buffer.from(`<svg width="1200" height="630"><circle cx="930" cy="400" r="260" fill="#FBBC04"/></svg>`) },
    { input: me, left: 1200 - meWidth - 60, top: 30 },
    { input: text },
  ])
  .png()
  .toFile("public/og.png")
console.log("og.png")
