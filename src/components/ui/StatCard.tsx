'use client'

import { Clock, CheckCircle, Leaf, TrendingUp, Smile } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  value: string
  label: string
  icon: string
  dark?: boolean
  className?: string
}

const iconMap = {
  clock: Clock,
  check: CheckCircle,
  leaf: Leaf,
  'trending-up': TrendingUp,
  smile: Smile,
}

export function StatCard({ value, label, icon, dark = false, className }: StatCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || CheckCircle

  return (
    <div
      className={cn(
        'text-center p-6 rounded-lg',
        dark ? 'bg-background/5' : 'bg-muted',
        className
      )}
    >
      <div className={cn(
        'w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center',
        dark ? 'bg-accent' : 'bg-accent'
      )}>
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <div className={cn(
        'text-4xl md:text-5xl font-black mb-2',
        dark ? 'text-background' : 'text-foreground'
      )}>
        {value}
      </div>
      <div className={cn(
        'text-sm font-medium uppercase tracking-wider',
        dark ? 'text-background/70' : 'text-muted-foreground'
      )}>
        {label}
      </div>
    </div>
  )
}
