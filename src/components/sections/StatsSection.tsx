'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/StatCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            pretitle="Why Choose Us"
            title="Digital Over Conventional"
            description="Our advanced processing techniques and state-of-the-art machinery deliver measurable improvements over traditional methods."
            align="center"
            dark
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {siteConfig.stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                dark
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
