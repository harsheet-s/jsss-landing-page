'use client'

import { Link } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'
import { 
  Flame, 
  Droplets, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Award,
  Sparkles
} from 'lucide-react'

// Import images
import processingFire from '@/assets/processing-fire.jpg'
import processingWater from '@/assets/processing-water.jpg'
import serviceProcessing from '@/assets/service-processing.jpg'

const fireResistantFeatures = [
  "Cotton and polyester fabric compatibility",
  "Flame resistance up to 100 washes",
  "Deep fiber penetration for uniform protection",
  "Self-extinguishing properties",
  "Limits flame spread and reduces after-glow",
  "Maintains fabric strength and flexibility"
]

const waterResistantFeatures = [
  "Advanced hydrophobic coating technology",
  "Breathable water-resistant finishes",
  "Durable repellency through multiple washes",
  "Suitable for outdoor and performance wear",
  "Compatible with cotton, polyester, and blends",
  "Eco-friendly treatment options available"
]

const applications = [
  { icon: Shield, title: "Military & Defence", desc: "Uniforms and protective gear" },
  { icon: Flame, title: "Firefighting", desc: "Heat-resistant apparel" },
  { icon: Factory, title: "Industrial Safety", desc: "Protective workwear" },
  { icon: Award, title: "High-Risk Applications", desc: "Mission-critical textiles" }
]

export default function ProcessingPage() {
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
                  <Shield className="w-4 h-4" />
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Processing Services
                </h1>
                <p className="text-xl md:text-2xl text-background/80 max-w-2xl">
                  Advanced fire-resistant and water-resistant fabric processing with premium finishing for high-performance applications.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Fire Resistant Processing */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <ScrollReveal>
                <div>
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Fire Resistant Processing
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    HIGH-PERFORMANCE FR TREATMENTS
                  </h2>

                  <div className="flex items-center gap-4 mb-8 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <Flame className="w-10 h-10 text-destructive flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">100+ Wash</div>
                      <div className="text-sm text-muted-foreground">Durability Rating</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Jaimal Singh Satnam Singh offers high-performance fire-resistant (FR) fabric treatments for both cotton and polyester fabrics, developed for environments where safety, durability, and consistency are non-negotiable.
                    </p>
                    <p>
                      Our FR treatments are engineered to deliver reliable flame resistance for <strong className="text-foreground">up to 100 washes</strong>, while preserving fabric strength, flexibility, and overall performance.
                    </p>
                    <p>
                      Through precisely controlled application methods, the flame-retardant chemistry penetrates deep into the fabric structure, ensuring uniform, wash-durable protection that does not easily degrade, peel, or wash off.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {fireResistantFeatures.map((feature) => (
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
                      src={processingFire}
                      alt="Fire resistant fabric testing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-destructive text-destructive-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Flame className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">FR Certified</div>
                    <div className="text-xs opacity-80">Safety First</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Industry Applications
                </h3>
                <p className="text-muted-foreground">
                  Our fire-resistant fabrics are trusted for mission-critical applications where protection is paramount.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <ScrollReveal key={app.title} delay={index * 0.1}>
                  <div className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <app.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{app.title}</h4>
                    <p className="text-sm text-muted-foreground">{app.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="max-w-4xl mx-auto mt-16">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Even after repeated laundering, the treated fabrics maintain stable flame-retardant properties without significant compromise in hand feel, tear strength, or dimensional stability.
                  </p>
                  <p>
                    Our fire-resistant cotton and polyester fabrics are suitable for <strong className="text-foreground">military and defence uniforms, firefighting apparel, industrial protective clothing</strong>, and safety applications where exposure to heat, sparks, and open flame is a constant risk.
                  </p>
                  <p>
                    The fabrics are designed to self-extinguish, limit flame spread, and reduce after-flame and after-glow, contributing to enhanced wearer protection in critical conditions.
                  </p>
                  <p>
                    Strict quality control, wash durability testing, and performance validation form the backbone of our FR processing. By combining advanced technical expertise, proven formulations, and modern finishing infrastructure, Jaimal Singh Satnam Singh delivers consistent, long-lasting fire-resistant textile solutions trusted for high-risk and mission-critical applications.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Water Resistant Processing */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal>
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={processingWater}
                      alt="Water resistant fabric treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
                    <Droplets className="w-8 h-8 mb-2" />
                    <div className="text-sm font-semibold">Hydrophobic</div>
                    <div className="text-xs opacity-80">Advanced Coating</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={0.2}>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Water Resistant Processing
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                    ADVANCED WATER-RESISTANT FINISHES
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Jaimal Singh Satnam Singh provides professional water-resistant fabric processing using advanced hydrophobic coating technologies. Our treatments create durable, breathable water-repellent finishes that protect fabrics while maintaining comfort and performance.
                    </p>
                    <p>
                      Our water-resistant processing is ideal for outdoor apparel, performance sportswear, protective workwear, and technical textiles requiring reliable moisture protection. We work with cotton, polyester, and blended fabrics to deliver customized solutions for diverse applications.
                    </p>
                    <p>
                      With options for eco-friendly treatments and varying levels of water repellency, we tailor our processes to meet specific client requirements while ensuring consistent quality across production runs.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {waterResistantFeatures.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Premium Finishing Section */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <ScrollReveal>
                <div>
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Premium Finishing
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                    FINISHING & PERFORMANCE TREATMENTS
                  </h2>
                  
                  <div className="space-y-4 text-background/80 leading-relaxed">
                    <p>
                      Beyond specialized FR and water-resistant treatments, we offer comprehensive finishing services to enhance fabric performance, appearance, and durability. Our finishing processes are designed to meet the exact specifications of our clients.
                    </p>
                    <p>
                      From softening treatments and anti-static finishes to dimensional stability processing and custom handle modifications, our technical team works closely with clients to achieve the desired fabric characteristics.
                    </p>
                    <p>
                      Our state-of-the-art machinery including stenters, decatizers, and specialized finishing equipment ensures consistent results across large production volumes while maintaining the highest quality standards.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal delay={0.2}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={serviceProcessing}
                    alt="Premium fabric finishing process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
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
                  description="Contact us today to discuss your processing requirements and get a customized quote for your project."
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
