'use client'

import { Link } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'
import { 
  Printer, 
  Palette, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Gauge,
  Droplets,
  Sparkles
} from 'lucide-react'

// Import images
import printingDigital from '@/assets/printing-digital.jpg'
import printingSublimation from '@/assets/printing-sublimation.jpg'
import printingFabric from '@/assets/printing-fabric.jpg'

const digitalFeatures = [
  "Cotton, Viscose, Pashmina, Crepe, Chiffon, Organza compatibility",
  "Sharp detailing with excellent color penetration",
  "Durable wash performance for domestic and export markets",
  "State-of-the-art Hopetech and ColorJet reactive printing machines",
  "Advanced loop ager, relax dryer, continuous washer systems",
  "Stenter/dryer for dimensional stability and optimal fabric handle"
]

const sublimationFeatures = [
  "100% Polyester and polyester-based fabric compatibility",
  "Poly crepe, georgette, pashmina, linen, muslin, satin substrates",
  "Premium-grade transfer papers and sublimation inks",
  "Deep color penetration with sharp detailing",
  "Resistant to washing, rubbing, and fading",
  "Minimal ghosting with smooth tonal gradients"
]

export default function PrintingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                  <Printer className="w-4 h-4" />
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Printing Services
                </h1>
                <p className="text-xl md:text-2xl text-background/80 max-w-2xl">
                  High-volume digital and sublimation printing with precision-driven technology and exceptional color accuracy.
                </p>
                
                {/* Capacity Stats */}
                <div className="flex flex-wrap gap-8 mt-10">
                  <div className="bg-background/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-background/20">
                    <div className="text-3xl md:text-4xl font-bold text-primary">25,000</div>
                    <div className="text-sm text-background/70">meters/day Digital</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-background/20">
                    <div className="text-3xl md:text-4xl font-bold text-primary">10,000</div>
                    <div className="text-sm text-background/70">meters/day Sublimation</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Digital Printing Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <ScrollReveal>
                <div>
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Digital Printing
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    PRECISION-DRIVEN DIGITAL PRINTING
                  </h2>

                  <div className="flex items-center gap-4 mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Gauge className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">25,000 meters/day</div>
                      <div className="text-sm text-muted-foreground">Production Capacity</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Jaimal Singh Satnam Singh offers high-volume, precision-driven digital printing job work backed by advanced infrastructure and deep process expertise. With a daily production capacity exceeding 25,000 meters, we are equipped to handle large-scale requirements while maintaining consistent quality, color accuracy, and repeatability across every lot.
                    </p>
                    <p>
                      We undertake digital printing on a wide range of natural and semi-natural fabrics, including cotton, viscose, pashmina, crepe, chiffon, organza, and other compatible textile substrates. Our processes are optimized to ensure sharp detailing, excellent color penetration, and durable wash performance, making our printed fabrics suitable for both domestic and export markets.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {digitalFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={printingDigital}
                      alt="Digital fabric printing machine in action"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Zap className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">Hopetech & ColorJet</div>
                    <div className="text-xs opacity-80">Advanced Technology</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Digital Printing Details */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal>
                <div className="order-2 lg:order-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={printingFabric}
                      alt="Colorful printed fabric rolls"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={0.2}>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Advanced Infrastructure
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our digital printing facility is powered by state-of-the-art reactive printing machines from <strong className="text-foreground">Hopetech and ColorJet</strong>, equipped with the latest generation technology for superior print definition and color consistency.
                    </p>
                    <p>
                      The printing line is fully supported by advanced loop ager, relax dryer, continuous washer, and stenter/dryer systems, ensuring controlled fixation, efficient washing, dimensional stability, and optimal fabric handle.
                    </p>
                    <p>
                      As a dedicated job work partner, we focus on reliability, confidentiality, and timely execution. Our integrated setup allows seamless coordination between pre-treatment, printing, washing, drying, and finishing—minimizing lead times and ensuring uniform output even at high volumes.
                    </p>
                    <p>
                      From bulk production runs to repeat orders, we deliver dependable digital printing solutions tailored to client specifications.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sublimation Printing Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <ScrollReveal>
                <div>
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Sublimation Printing
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    VIBRANT SUBLIMATION PRINTING
                  </h2>

                  <div className="flex items-center gap-4 mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Droplets className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">10,000 meters/day</div>
                      <div className="text-sm text-muted-foreground">Production Capacity</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Jaimal Singh Satnam Singh offers high-quality sublimation printing job work with a strong focus on color brilliance, durability, and production efficiency. Our sublimation facility is designed to handle bulk requirements with a daily production capacity of up to 10,000 meters, ensuring timely delivery without compromising on print quality or consistency.
                    </p>
                    <p>
                      We specialize in sublimation printing on a wide range of 100% polyester and polyester-based fabrics, including poly crepe, poly georgette, poly pashmina, poly linen, poly muslin, poly satin, and other compatible polyester substrates.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {sublimationFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={printingSublimation}
                      alt="Sublimation printing process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Sparkles className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">Premium Quality</div>
                    <div className="text-xs opacity-80">Vivid Colors</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sublimation Details */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Premium Materials & Technology
                </h3>
                
                <div className="space-y-4 text-background/80 leading-relaxed">
                  <p>
                    We use premium-grade transfer papers and high-quality sublimation inks, combined with precisely controlled heat transfer technology, to ensure uniform color transfer and excellent fabric coverage. This results in vivid, high-definition prints with minimal ghosting, sharp edges, and smooth tonal gradients.
                  </p>
                  <p>
                    Our advanced heat transfer systems are engineered for maximum efficiency with minimal wastage, reducing paper loss, ink consumption, and reprocessing. Our processes are optimized to achieve deep color penetration, sharp detailing, and long-lasting prints that are resistant to washing, rubbing, and fading.
                  </p>
                  <p>
                    As a dedicated job work partner, we emphasize process stability, repeatability, and confidentiality. Our streamlined workflow—from paper printing to heat transfer—ensures consistent output across large volumes while maintaining cost efficiency and superior quality standards. Jaimal Singh Satnam Singh stands as a reliable sublimation printing partner for clients seeking precision, scale, and dependable performance.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <SectionHeading 
                  pretitle="Get Started"
                  title="Request a Quote"
                  description="Contact us today to discuss your printing requirements and get a customized quote for your project."
                />
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button asChild size="lg" className="group">
                    <Link to="/contact">
                      Talk to Our Experts
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">
                      View All Services
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
