'use client'

import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <SectionHeading
              pretitle="Words of Appreciation"
              title="Client Testimonials"
              className="mb-0"
            />
            
            {/* Placeholder reviews summary */}
            <div className="flex items-center gap-4 bg-muted px-6 py-4 rounded-lg">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <div className="font-bold text-foreground">4.9 out of 5</div>
                <div className="text-sm text-muted-foreground">Based on 150+ reviews</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
