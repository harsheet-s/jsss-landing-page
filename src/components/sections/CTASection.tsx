'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/siteConfig'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-accent-foreground mb-4">
              Connect with Our Expert Today!
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Ready to discuss your textile processing requirements? Our team is here to help.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-accent-foreground text-accent rounded-lg hover:opacity-90 transition-opacity group"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg uppercase tracking-wider">WhatsApp</div>
                <div className="text-sm opacity-80">Chat with us now</div>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-4 p-6 bg-accent-foreground text-accent rounded-lg hover:opacity-90 transition-opacity group"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <Phone className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg uppercase tracking-wider">Call Us</div>
                <div className="text-sm opacity-80">{siteConfig.contact.phone}</div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
