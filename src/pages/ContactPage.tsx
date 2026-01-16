'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/config/siteConfig'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-20 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading pretitle="Get in Touch" title="Contact Us" dark />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-lg mb-8">{siteConfig.contact.address}</p>
              <div className="space-y-4">
                <a href={`tel:${siteConfig.contact.phone}`} className="block text-xl font-bold text-accent">{siteConfig.contact.phone}</a>
                <a href={`mailto:${siteConfig.contact.email}`} className="block text-xl">{siteConfig.contact.email}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
