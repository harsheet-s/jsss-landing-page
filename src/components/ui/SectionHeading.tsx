'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  pretitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  pretitle,
  title,
  description,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {pretitle && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-widest mb-3',
            dark ? 'text-background/60' : 'text-accent'
          )}
        >
          {pretitle}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight',
          dark ? 'text-background' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-background/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
