'use client'

import { useEffect, useMemo, useRef } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// Import client logos
import pantaloons from '@/assets/clients/pantaloons.png'
import allenSolly from '@/assets/clients/allen-solly.png'
import cobb from '@/assets/clients/cobb.png'
import sabhyata from '@/assets/clients/sabhyata.webp'
import ikea from '@/assets/clients/ikea.png'
import centex from '@/assets/clients/centex.png'
import jawandsons from '@/assets/clients/jawandsons.png'
import rtex from '@/assets/clients/rtex.png'

const clients = [
  { src: pantaloons, alt: 'Pantaloons' },
  { src: allenSolly, alt: 'Allen Solly' },
  { src: cobb, alt: 'Cobb Italy' },
  { src: sabhyata, alt: 'Sabhyata' },
  { src: ikea, alt: 'IKEA' },
  { src: centex, alt: 'Centex' },
  { src: jawandsons, alt: 'Jawandsons' },
  { src: rtex, alt: 'RTEX' },
]

export function ClientsMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const offsetRef = useRef(0)
  const halfWidthRef = useRef(0)
  const isPausedRef = useRef(false)

  // Duplicate list for seamless loop
  const duplicatedClients = useMemo(() => [...clients, ...clients], [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      // total scrollWidth is for duplicated list; half is one full set
      const total = track.scrollWidth
      halfWidthRef.current = total / 2
      // reset to avoid jumps after resize
      offsetRef.current = 0
      track.style.transform = `translateX(0px)`
    }

    // Measure after images load (important!)
    const imgEls = Array.from(track.querySelectorAll('img'))
    let pending = imgEls.length

    const onImgDone = () => {
      pending -= 1
      if (pending <= 0) measure()
    }

    if (pending === 0) {
      measure()
    } else {
      imgEls.forEach((img) => {
        if (img.complete) onImgDone()
        else {
          img.addEventListener('load', onImgDone, { once: true })
          img.addEventListener('error', onImgDone, { once: true })
        }
      })
    }

    // Also re-measure on window resize
    window.addEventListener('resize', measure)

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const SPEED_PX_PER_FRAME = isMobile ? 1.2 : 0.7


    const tick = () => {
  const hw = halfWidthRef.current
  if (!isPausedRef.current && hw > 0) {
    offsetRef.current += SPEED_PX_PER_FRAME
    if (offsetRef.current >= hw) offsetRef.current = 0
    track.style.transform = `translateX(-${offsetRef.current}px)`
  }
  rafRef.current = requestAnimationFrame(tick)
}


    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', measure)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          {/* Section Heading */}
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Our Partners
            </span>
            <div className="w-12 h-0.5 bg-primary mt-3"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 tracking-tight">
              OUR CLIENTS
            </h2>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over five decades of industry experience, Jaimal Singh Satnam Singh has worked with numerous well-known and reputed Indian and global brands. We provide fabric processing, digital printing, finishing, and various value-addition services across the textile spectrum.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our consistent focus on quality, innovation, and operational excellence has enabled us to build long-term relationships founded on trust and reliability.
            </p>
          </div>
        </ScrollReveal>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-8">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            <div
              ref={trackRef}
              className="flex w-max will-change-transform"
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.alt}-${index}`}
                  className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center w-[120px] h-[70px]"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
