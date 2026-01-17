'use client'

import { cn } from '@/lib/utils'
import { Clock, CheckCircle2, Leaf, TrendingUp, Smile } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  check: CheckCircle2,
  leaf: Leaf,
  'trending-up': TrendingUp,
  smile: Smile,
}

interface StatCardProps {
  value: string
  label: string
  icon?: string
  dark?: boolean
  className?: string
}

export function StatCard({ value, label, icon, dark, className }: StatCardProps) {
  const Icon = icon ? iconMap[icon] : undefined

  return (
    <div
      className={cn(
        'relative flex flex-col items-center text-center',
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'mb-5 flex h-12 w-12 items-center justify-center rounded-full',
          dark ? 'bg-accent text-accent-foreground' : 'bg-accent text-accent-foreground'
        )}
      >
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>

      {/* Value */}
      <div className={cn('text-5xl font-black tracking-tight', dark ? 'text-background' : 'text-foreground')}>
        {value}
      </div>

      {/* Label */}
      <div className={cn('mt-2 text-xs font-semibold uppercase tracking-[0.24em]', dark ? 'text-background/70' : 'text-muted-foreground')}>
        {label}
      </div>
    </div>
  )
}
