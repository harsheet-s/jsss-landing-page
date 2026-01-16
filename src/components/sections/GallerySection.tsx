'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function GallerySection() {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: '/placeholder.svg',
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              Our Facility in Action
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
