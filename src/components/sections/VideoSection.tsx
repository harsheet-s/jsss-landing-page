'use client'

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
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BXjwTxb8NNM?si=Lm5pNxaJLdDDEZHL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
