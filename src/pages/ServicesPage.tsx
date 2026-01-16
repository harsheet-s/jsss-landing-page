'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export default function ServicesPage() {
  const services = Object.values(siteConfig.services)

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-20 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading pretitle="What We Do" title="Our Services" dark />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ScrollReveal key={service.id} delay={i * 100}>
                  <FeatureCard {...service} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
