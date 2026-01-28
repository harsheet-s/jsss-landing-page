'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import gallery1 from '@/assets/gallery-1.jpg'
import gallery2 from '@/assets/gallery-2.jpg'
import gallery3 from '@/assets/gallery-3.jpg'
import gallery4 from '@/assets/gallery-4.jpg'
import gallery5 from '@/assets/gallery-5.jpg'
import gallery6 from '@/assets/gallery-6.jpg'
import gallery7 from '@/assets/gallery-7.jpg'
import gallery8 from '@/assets/gallery-8.jpg'

const galleryImages = [
  { id: 1, src: gallery1, alt: 'Industrial fabric processing machinery' },
  { id: 2, src: gallery2, alt: 'Stenter machine in operation' },
  { id: 3, src: gallery3, alt: 'Fabric dyeing process' },
  { id: 4, src: gallery4, alt: 'Quality control inspection' },
  { id: 5, src: gallery5, alt: 'Textile finishing equipment' },
  { id: 6, src: gallery6, alt: 'Factory floor overview' },
  { id: 7, src: gallery7, alt: 'Fabric roll storage' },
  { id: 8, src: gallery8, alt: 'Processing line machinery' },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
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
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => openLightbox(index)}
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

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {selectedImage !== null && (
            <div className="relative flex items-center justify-center w-full h-[85vh]">
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain animate-scale-in"
              />

              <button
                onClick={goToNext}
                className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          )}

          {selectedImage !== null && (
            <p className="text-center text-white/80 pb-4 text-sm">
              {galleryImages[selectedImage].alt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
