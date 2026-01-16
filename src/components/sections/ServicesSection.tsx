'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export function ServicesSection() {
  const services = Object.values(siteConfig.services)

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            pretitle="Our Services"
            title="Complete Textile Processing Solutions"
            description="From fire-resistant processing to high-capacity digital printing, we offer comprehensive services for all your textile needs."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <FeatureCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
