import type { Metadata } from "next"

import { lifeGroups } from "@/lib/content"
import { LifeGroup } from "@/components/life-group"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Life",
  description: "Épée, the gym, poker and the places that made James Hong.",
}

const sections = lifeGroups.map((g) => ({ id: g.id, label: g.label }))

export default function LifePage() {
  return (
    <PageShell sections={sections}>
      <section>
        <h1 className="text-3xl font-medium tracking-tight">life</h1>
        <p className="mt-1 text-muted-foreground">the sword, the barbell, the cards, and the cities that made me</p>
        <div className="mt-8">
          {lifeGroups.map((group) => (
            <LifeGroup key={group.id} group={group} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
