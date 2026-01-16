'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  company: string
  rating: number
  quote: string
  className?: string
}

export function TestimonialCard({
  name,
  company,
  rating,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-lg p-6',
        className
      )}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < rating ? 'fill-amber-400 text-amber-400' : 'text-muted'
            )}
          />
        ))}
      </div>
      <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-muted-foreground text-sm">{company}</div>
      </div>
    </div>
  )
}
