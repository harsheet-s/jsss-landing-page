'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { OurStorySection } from '@/components/sections/OurStorySection'
import { FeaturedHighlightSection } from '@/components/sections/FeaturedHighlightSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { CTASection } from '@/components/sections/CTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <OurStorySection />
        <FeaturedHighlightSection />
        <GallerySection />
        <ServicesSection />
        <VideoSection />
        <StatsSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
