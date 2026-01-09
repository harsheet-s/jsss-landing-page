'use client'

import { Flame, Droplets, Palette, Sparkles, Printer, Zap } from 'lucide-react'

export function Portfolio() {
  const capabilities = [
    {
      icon: Flame,
      title: "Fire Resistant Processing",
      description: "Advanced flame retardant treatments for protective textiles and industrial applications.",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      icon: Droplets,
      title: "Water Resistant Processing", 
      description: "Hydrophobic finishes for outdoor, military, and performance fabrics.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Palette,
      title: "Dyeing Services",
      description: "Precision dyeing with consistent color matching across all fabric types.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Complete finishing solutions including softening, stiffening, and specialty treatments.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Printer,
      title: "Digital Printing",
      description: "High-capacity digital printing at 25,000 meters per day with precision quality.",
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    },
    {
      icon: Zap,
      title: "Sublimation Printing",
      description: "Vibrant sublimation printing with 7,000 meters daily capacity.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Capabilities
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Processing Excellence</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            State-of-the-art technical textile processing with advanced machinery and expert craftsmanship.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-card clean-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${capability.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <capability.icon className={`w-8 h-8 ${capability.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capacity Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-foreground mb-2">25K</div>
            <div className="text-sm text-muted-foreground">Digital Print<br/>Meters/Day</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-foreground mb-2">7K</div>
            <div className="text-sm text-muted-foreground">Sublimation<br/>Meters/Day</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-foreground mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Advanced<br/>Machines</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Quality<br/>Assurance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
