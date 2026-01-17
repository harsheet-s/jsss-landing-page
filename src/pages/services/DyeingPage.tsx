'use client'

import { Link } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Droplets, 
  Gauge, 
  CheckCircle2, 
  ArrowRight,
  FlaskConical,
  Settings,
  Eye
} from 'lucide-react'

// Import images
import dyeingProcess from '@/assets/dyeing-process.jpg'
import dyeingFinishing from '@/assets/dyeing-finishing.jpg'
import serviceDyeing from '@/assets/service-dyeing.jpg'

const dyeingCapabilities = [
  "Cotton, polyester, acrylic, and blended fabrics",
  "Reactive, disperse, and acid dyeing processes",
  "Precision color matching and lab dips",
  "Bulk dyeing with consistent lot-to-lot quality",
  "Special shade development for custom requirements",
  "Eco-friendly dyeing options available"
]

const finishingCapabilities = [
  "Stentering for width and dimensional control",
  "Softening and hand-feel enhancement",
  "Anti-static and anti-pilling treatments",
  "Mercerization for cotton fabrics",
  "Calendering and pressing",
  "Specialized performance finishes"
]

const machinery = [
  { name: "Jigger Machines", desc: "Precise dyeing for woven fabrics" },
  { name: "Softflow Machines", desc: "Gentle processing for delicates" },
  { name: "U-Jet & Long Jet", desc: "High-volume jet dyeing" },
  { name: "Stenter Machines", desc: "Heat setting and finishing" },
  { name: "Zero-Zero Machines", desc: "Fabric relaxation processing" },
  { name: "Decatizer", desc: "Steam treatment for quality finish" },
  { name: "Mercerizer", desc: "Cotton enhancement treatment" },
  { name: "Continuous Washer", desc: "Efficient post-dye washing" }
]

export default function DyeingPage() {
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
                  <Palette className="w-4 h-4" />
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Dyeing & Finishing
                </h1>
                <p className="text-xl md:text-2xl text-background/80 max-w-2xl">
                  State-of-the-art dyeing processes and premium finishing treatments for exceptional fabric quality and consistency.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Dyeing Capabilities Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <ScrollReveal>
                <div>
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Dyeing Services
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    PRECISION DYEING EXCELLENCE
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Jaimal Singh Satnam Singh offers comprehensive fabric dyeing services backed by decades of experience and modern infrastructure. Our dyeing facility is equipped to handle diverse fabric types including cotton, polyester, acrylic, and blended textiles with consistent quality and color accuracy.
                    </p>
                    <p>
                      We specialize in <strong className="text-foreground">reactive, disperse, and acid dyeing processes</strong>, delivering vibrant, wash-fast colors that meet international standards. Our expert colorists provide precise shade matching, custom color development, and lab dip services to ensure your exact specifications are met.
                    </p>
                    <p>
                      From small sample batches to large production runs, our integrated dyeing setup ensures uniform results with excellent lot-to-lot consistency, minimizing rejections and maximizing efficiency.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {dyeingCapabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
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
                      src={dyeingProcess}
                      alt="Industrial fabric dyeing process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Droplets className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">Color Expertise</div>
                    <div className="text-xs opacity-80">Precise Matching</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Control Section */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Quality Assurance
                </span>
                <div className="w-12 h-0.5 bg-primary mt-3 mx-auto"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-6 mb-4">
                  RIGOROUS PROCESS CONTROL
                </h3>
                <p className="text-muted-foreground">
                  Every stage of our dyeing process is monitored and controlled to deliver consistent, high-quality results.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="bg-background p-8 rounded-lg shadow-sm border border-border text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <FlaskConical className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-3">Lab Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive lab dip samples and color matching before bulk production to ensure accuracy.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-background p-8 rounded-lg shadow-sm border border-border text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-3">Process Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring of temperature, pH, and timing for optimal dye uptake and consistency.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-background p-8 rounded-lg shadow-sm border border-border text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-3">Quality Inspection</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-stage inspection including wash fastness, rub fastness, and color consistency checks.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Finishing Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal>
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={dyeingFinishing}
                      alt="Fabric finishing machinery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Gauge className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">Precision</div>
                    <div className="text-xs opacity-80">Finishing</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={0.2}>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Finishing Services
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    PREMIUM FABRIC FINISHING
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Our comprehensive finishing services transform dyed fabrics into market-ready products with enhanced performance, appearance, and hand-feel. From dimensional control to specialized treatments, we offer end-to-end finishing solutions.
                    </p>
                    <p>
                      Our finishing line includes <strong className="text-foreground">stenters for width control, softening treatments, mercerization for cotton</strong>, and various specialized finishes to meet specific performance requirements.
                    </p>
                    <p>
                      Whether you need anti-static properties, enhanced drape, or specific hand-feel characteristics, our technical team works closely with you to achieve the desired fabric specifications.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {finishingCapabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Machinery Section */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Our Equipment
                </span>
                <div className="w-12 h-0.5 bg-primary mt-3 mx-auto"></div>
                <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight">
                  STATE-OF-THE-ART MACHINERY
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {machinery.map((machine, index) => (
                <ScrollReveal key={machine.name} delay={index * 0.05}>
                  <div className="bg-background/5 border border-background/10 p-6 rounded-lg hover:bg-background/10 transition-colors">
                    <h4 className="font-semibold text-background mb-2">{machine.name}</h4>
                    <p className="text-sm text-background/70">{machine.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                  description="Contact us today to discuss your dyeing and finishing requirements and get a customized quote for your project."
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
