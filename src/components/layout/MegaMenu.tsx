'use client'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'

interface MegaMenuProps {
  onClose: () => void
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  const services = Object.values(siteConfig.services)

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
      <div className="bg-background border border-border rounded-xl shadow-2xl p-6 min-w-[700px]">
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              onClick={onClose}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-video mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-xs font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                {service.description}
              </p>
              <span className="inline-flex items-center text-accent text-sm font-semibold">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
