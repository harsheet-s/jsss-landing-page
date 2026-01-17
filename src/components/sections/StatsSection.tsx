
import { siteConfig } from "@/config/siteConfig"
import { Plug, Pipette, Droplets, Trash2, Cloud } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  electricity: Plug,
  glue: Pipette,
  water: Droplets,
  waste: Trash2,
  co2: Cloud,
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Pretitle */}
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase">
          Know the difference
        </p>

        {/* Divider */}
        <div className="mx-auto mt-3 h-px w-16 bg-accent/50" />

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide uppercase">
          Digital over conventional printing?
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-background/75">
          These efficiencies make our digital textile printing machines both eco-friendly and economical—ideal for businesses and beyond.
        </p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {siteConfig.stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] ?? Plug

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Keep your blue theme */}
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={1.8} />
                </div>

                <div className="mt-5 text-5xl font-black">
                  {stat.value}
                </div>

                <div className="mt-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-background/80">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
