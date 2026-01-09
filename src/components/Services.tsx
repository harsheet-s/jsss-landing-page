'use client'

import { useState, useEffect } from 'react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const machinery = [
    {
      id: 'stenter',
      title: "Stenter Machine",
      description: "Heat setting and drying with precise width control for dimensional stability.",
      icon: "🔥"
    },
    {
      id: 'zero-zero',
      title: "Zero-Zero Machine",
      description: "Zero-zero finishing for shrinkage control and fabric relaxation.",
      icon: "📐"
    },
    {
      id: 'decatizer',
      title: "Decatizer",
      description: "Steam-based finish for superior hand feel and permanent setting.",
      icon: "💨"
    },
    {
      id: 'jigger',
      title: "Jigger Machine",
      description: "Batch dyeing with excellent color penetration for heavy fabrics.",
      icon: "🎨"
    },
    {
      id: 'softflow',
      title: "Softflow Machine",
      description: "Gentle fabric handling for delicate and stretch fabrics.",
      icon: "🌊"
    },
    {
      id: 'u-jet',
      title: "U-Jet Dyeing",
      description: "High-speed jet dyeing for efficient processing of synthetics.",
      icon: "⚡"
    },
    {
      id: 'long-jet',
      title: "Long Jet Machine",
      description: "Extended rope dyeing for high-volume continuous production.",
      icon: "🚀"
    },
    {
      id: 'mercerizer',
      title: "Mercerizer",
      description: "Cotton mercerization for enhanced luster, strength, and dye affinity.",
      icon: "✨"
    }
  ]

  const printingServices = [
    {
      id: 'digital',
      title: "Digital Printing",
      capacity: "25,000 meters/day",
      description: "High-resolution digital printing for complex patterns and photo-realistic designs.",
      features: ["Unlimited colors", "Quick sampling", "Eco-friendly inks", "Fine detail reproduction"]
    },
    {
      id: 'sublimation',
      title: "Sublimation Printing",
      capacity: "7,000 meters/day",
      description: "Vibrant, permanent prints for polyester and synthetic blends.",
      features: ["Fade resistant", "Soft hand feel", "Full coverage", "Athletic wear specialty"]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-background via-card/30 to-background">
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Equipment
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Advanced Machinery
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            State-of-the-art equipment for every textile processing need
          </p>
        </div>

        {/* Machinery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {machinery.map((machine) => (
            <div
              key={machine.id}
              className={`bg-card clean-border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                hoveredCard === machine.id ? 'shadow-xl -translate-y-2 border-orange-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(machine.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">{machine.icon}</div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {machine.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {machine.description}
              </p>
            </div>
          ))}
        </div>

        {/* Printing Services Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Printing Services
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-capacity printing solutions for all your fabric needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {printingServices.map((service) => (
            <div
              key={service.id}
              className="bg-card clean-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-black text-xl text-foreground">
                  {service.title}
                </h4>
                <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.capacity}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
