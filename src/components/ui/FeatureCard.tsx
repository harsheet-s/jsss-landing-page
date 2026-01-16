'use client'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

import serviceProcessing from '@/assets/service-processing.jpg'
import serviceDyeing from '@/assets/service-dyeing.jpg'
import servicePrinting from '@/assets/service-printing.jpg'

const serviceImages: Record<string, string> = {
  processing: serviceProcessing,
  dyeing: serviceDyeing,
  printing: servicePrinting,
}

interface FeatureCardProps {
  id?: string
  title: string
  subtitle?: string
  description: string
  image: string
  link: string
  className?: string
}

export function FeatureCard({
  id,
  title,
  subtitle,
  description,
  image,
  link,
  className,
}: FeatureCardProps) {
  // Use imported image if available, otherwise use the provided image path
  const imageSrc = id && serviceImages[id] ? serviceImages[id] : image

  return (
    <Link
      to={link}
      className={cn(
        'group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        {subtitle && (
          <span className="absolute bottom-4 left-4 text-white text-xs font-medium uppercase tracking-wider">
            {subtitle}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center text-accent text-sm font-semibold">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
