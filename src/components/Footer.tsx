'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const services = [
    'Fire Resistant Processing',
    'Water Resistant Processing',
    'Dyeing Services',
    'Finishing',
    'Digital Printing',
    'Sublimation Printing'
  ]

  const machinery = [
    'Stenter',
    'Zero-Zero',
    'Decatizer',
    'Jigger',
    'Softflow',
    'U-Jet',
    'Long Jet',
    'Mercerizer'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="font-black text-background text-3xl tracking-wider mb-2">
                JSSS
              </div>
              <div className="text-background/70 text-sm mb-4">
                JAIMAL SINGH SATNAM SINGH
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                Technical Textile Processing Unit specializing in fire resistant, 
                water resistant fabrics, dyeing, finishing, and high-capacity printing services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Contact for inquiries</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@jsss.com</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Industrial Area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-4">
            <div>
              <h4 className="font-black text-xl text-background mb-4">SERVICES</h4>
              <div className="space-y-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="text-background/70 hover:text-background gentle-animation text-sm"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Machinery */}
          <div className="col-span-6 md:col-span-4">
            <div>
              <h4 className="font-black text-xl text-background mb-4">MACHINERY</h4>
              <div className="grid grid-cols-2 gap-2">
                {machinery.map((machine) => (
                  <div
                    key={machine}
                    className="text-background/70 hover:text-background gentle-animation text-sm"
                  >
                    {machine}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 JSSS Technical Textile Processing Unit. All rights reserved.
            </div>
            <div className="text-sm text-background/70">
              Quality Processing • Timely Delivery • Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
