import { cn } from "@/shared/lib/cn"

import { MARKETING_FEATURE_ICONS, type MarketingFeatureIconKey } from "@/shared/ui/marketing/marketing-feature-icons"

export type AboutGoalItem = {
  id: string
  title: string
  description: string
  icon: MarketingFeatureIconKey
}

export type AboutStoryGoalsSectionProps = {
  eyebrow?: string
  title: string
  paragraphs: readonly string[]
  goalsTitle: string
  goals: readonly AboutGoalItem[]
  commitmentTitle: string
  commitmentBody: string
  className?: string
}

export function AboutStoryGoalsSection({
  eyebrow,
  title,
  paragraphs,
  goalsTitle,
  goals,
  commitmentTitle,
  commitmentBody,
  className,
}: AboutStoryGoalsSectionProps) {
  return (
    <section className={cn("bg-white py-10 md:py-14", className)} aria-label="About company story and goals">
      <div className="container mx-auto px-4">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-a7-text-gray">{eyebrow}</p> : null}
        <h2 className="mt-2 max-w-5xl font-heading text-[clamp(1.5rem,3.1vw,2.4rem)] font-semibold leading-tight tracking-tight text-a7-black">
          {title}
        </h2>

        <div className="mt-5 max-w-5xl space-y-4 text-sm leading-relaxed text-a7-text-gray md:text-base">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-9 font-heading text-2xl font-semibold tracking-tight text-a7-black">{goalsTitle}</h3>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {goals.map((goal) => {
            const Icon = MARKETING_FEATURE_ICONS[goal.icon]
            return (
              <li
                key={goal.id}
                className="flex h-full flex-col items-center rounded-xl border border-border bg-white px-4 py-8 text-center sm:px-5 sm:py-9"
              >
                <Icon size={40} className="shrink-0 text-a7-black" strokeWidth={1.5} aria-hidden />
                <h4 className="mt-4 text-sm font-bold text-a7-black md:text-base">{goal.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-a7-text-gray">{goal.description}</p>
              </li>
            )
          })}
        </ul>

        <h3 className="mt-9 font-heading text-2xl font-semibold tracking-tight text-a7-black">{commitmentTitle}</h3>
        <p className="mt-3 max-w-5xl text-sm leading-relaxed text-a7-text-gray md:text-base">{commitmentBody}</p>
      </div>
    </section>
  )
}
