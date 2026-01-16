'use client'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FeaturedHighlightSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Featured highlight"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                State-of-the-Art Facility Expansion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're proud to announce the expansion of our digital printing facility, 
                increasing our daily capacity to 25,000 meters. This investment in cutting-edge 
                technology enables us to deliver superior quality prints with faster turnaround times.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded hover:bg-foreground/90 transition-colors"
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
