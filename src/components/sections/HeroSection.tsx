'use client'

import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import heroBg from '@/assets/hero-bg.png'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="JSSS Textile Processing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6">
            {siteConfig.brand.name}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-white/90 mb-4">
            {siteConfig.brand.tagline}
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Fire Resistant • Water Resistant • Dyeing • Finishing • Digital Printing • Sublimation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold uppercase tracking-wider rounded border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
