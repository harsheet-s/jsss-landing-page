'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

import gallery1 from '@/assets/gallery-1.jpg'
import gallery2 from '@/assets/gallery-2.jpg'
import gallery3 from '@/assets/gallery-3.jpg'
import gallery4 from '@/assets/gallery-4.jpg'
import gallery5 from '@/assets/gallery-5.jpg'
import gallery6 from '@/assets/gallery-6.jpg'
import gallery7 from '@/assets/gallery-7.jpg'
import gallery8 from '@/assets/gallery-8.jpg'

const galleryImages = [
  { id: 1, src: gallery1, alt: 'Quality control inspection' },
  { id: 2, src: gallery2, alt: 'Fabric warehouse inventory' },
  { id: 3, src: gallery3, alt: 'Stenter finishing machine' },
  { id: 4, src: gallery4, alt: 'Fabric color swatches' },
  { id: 5, src: gallery5, alt: 'Jigger dyeing process' },
  { id: 6, src: gallery6, alt: 'Factory exterior' },
  { id: 7, src: gallery7, alt: 'Sublimation printed fabric' },
  { id: 8, src: gallery8, alt: 'Mercerizing equipment' },
]

export function GallerySection() {
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
            {galleryImages.map((image) => (
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
