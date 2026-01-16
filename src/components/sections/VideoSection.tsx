'use client'

import { Play } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function VideoSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <SectionHeading
              pretitle="Corporate Film"
              title="Experience Our World-Class Facility"
              description="Take a virtual tour of our state-of-the-art textile processing unit and see how we deliver excellence in every meter of fabric we process."
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
