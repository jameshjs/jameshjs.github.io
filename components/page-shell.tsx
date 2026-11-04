import { SectionNav, type NavSection } from "@/components/section-nav"

// Sidebar + centred 800px column, shared by every page.
export function PageShell({ sections = [], children }: { sections?: NavSection[]; children: React.ReactNode }) {
  return (
    <div className="flex w-full items-start gap-4 px-6 pt-8 md:px-16 md:pt-4">
      <aside className="sticky top-10 hidden w-[202px] shrink-0 lg:block">
        {sections.length > 0 && <SectionNav sections={sections} />}
      </aside>
      <div className="flex min-w-0 flex-1 justify-center">
        <div className="flex w-full max-w-[800px] flex-col gap-24 pb-24">{children}</div>
      </div>
      {/* balances the sidebar so the column sits in the true centre on wide screens */}
      <div className="hidden w-[202px] shrink-0 2xl:block" />
    </div>
  )
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
