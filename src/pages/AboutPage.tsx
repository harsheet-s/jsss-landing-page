'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading pretitle="About Us" title="Our Story" dark />
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto prose prose-lg">
                <p>{siteConfig.brand.description}</p>
                <h3>Our Machinery</h3>
                <ul>
                  {siteConfig.machinery.map((m) => (
                    <li key={m.name}><strong>{m.name}</strong> - {m.description}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
