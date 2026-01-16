'use client'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export function OurStorySection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <SectionHeading
              pretitle="Our Story"
              title="The Beginning of Technical Excellence"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {siteConfig.brand.fullName} began with a vision to revolutionize textile processing 
                in India. What started as a small processing unit has grown into a comprehensive 
                technical textile facility equipped with state-of-the-art machinery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we specialize in fire-resistant and water-resistant fabric processing, 
                advanced dyeing techniques, and high-capacity digital printing. Our commitment 
                to quality and innovation drives everything we do.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
