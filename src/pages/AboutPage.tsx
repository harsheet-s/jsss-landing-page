'use client'

import { Link } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ClientsMarquee } from '@/components/sections/ClientsMarquee'
import { 
  Target, 
  Eye, 
  Shield, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  Handshake, 
  Leaf,
  ArrowRight
} from 'lucide-react'

// Import images
import aboutStory1 from '@/assets/about-story-1.jpg'
import aboutStory2 from '@/assets/about-story-2.jpg'

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in ethical business practices, transparent dealings, and honoring commitments—principles that have guided us across generations."
  },
  {
    icon: Award,
    title: "Quality & Consistency",
    description: "Every process, every fabric, and every batch reflects our commitment to uniform quality, repeatability, and performance excellence."
  },
  {
    icon: TrendingUp,
    title: "Resilience",
    description: "Shaped by history, we value perseverance and adaptability, turning challenges into opportunities for growth and progress."
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "We embrace technology and innovation that add real value—enhancing performance, efficiency, and sustainability."
  },
  {
    icon: Handshake,
    title: "Customer Partnership",
    description: "We work as long-term partners, offering customized solutions, technical support, and dependable execution."
  },
  {
    icon: Leaf,
    title: "Responsibility",
    description: "We are committed to responsible manufacturing practices that respect people, processes, and the environment."
  }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  About Jaimal Singh Satnam Singh
                </h1>
                <p className="text-xl md:text-2xl text-background/80">
                  Rooted in tradition, driven by technology.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story - Section 1: Text Left, Image Right */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <ScrollReveal>
                <div className="order-2 lg:order-1">
                  {/* Pretitle with line */}
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Our Story
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight">
                    THE STORY OF A LEGACY
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      The story of <strong className="text-foreground">Jaimal Singh Satnam Singh</strong> is not merely the journey of a textile processing firm—it is the story of a family's resilience, vision, and unwavering dedication to textiles, shaped by history and strengthened over generations.
                    </p>
                    <p>
                      Our roots trace back to <strong className="text-foreground">pre-Partition Punjab</strong>, where our ancestors were engaged in the trade of raw cloth materials in Talwandi, Punjab (now in Pakistan). What began as a humble fabric trade soon became the backbone of the family's livelihood, built on deep knowledge of textiles and an unshakable work ethic. However, the events of the <strong className="text-foreground">1947 Partition</strong> brought with them one of the greatest trials our family would ever face.
                    </p>
                    <p>
                      Forced to leave their homeland, our forefathers crossed borders into India with almost nothing in their possession—carrying only determination, courage, and the skills they had honed over a lifetime. <strong className="text-foreground">Empty-handed yet unbroken</strong>, they rebuilt their lives from the ground up, relying on their understanding of fabrics and their belief in honest trade.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="group">
                      <Link to="/contact">
                        Get in Touch
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal delay={0.2}>
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={aboutStory1}
                      alt="Heritage textile factory building"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Story - Section 2: Image Left, Text Right (Reversed) */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal>
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={aboutStory2}
                      alt="Modern textile processing facility"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Text Content */}
              <ScrollReveal delay={0.2}>
                <div>
                  {/* Pretitle with line */}
                  <div className="mb-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                      Our Journey
                    </span>
                    <div className="w-12 h-0.5 bg-primary mt-3"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight">
                    FROM RESILIENCE TO REINVENTION
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Resettling in India, the family once again entered the textile markets, gradually re-establishing themselves through raw fabric trading. Through years of perseverance, they earned a reputation for <strong className="text-foreground">integrity, quality, and reliability</strong>, becoming trusted names among traders and buyers.
                    </p>
                    <p>
                      In <strong className="text-foreground">1972</strong>, this legacy formally took shape with the establishment of Jaimal Singh Satnam Singh, marking the transition from trading to structured textile processing. With a forward-looking approach, the firm expanded its operations beyond conventional fabrics, embracing innovation and technical expertise.
                    </p>
                    <p>
                      Over the decades, we steadily expanded into fabric dyeing, advanced finishing, and technical textile processing, blending craftsmanship with modern technology. Today, the firm is recognized for its expertise in <strong className="text-foreground">cotton, polyester, acrylic, and blended fabrics</strong>, offering specialized solutions including fire-retardant treatments, water-resistant finishes, digital printing, and sublimation printing.
                    </p>
                    <p>
                      More than a company, <strong className="text-foreground">Jaimal Singh Satnam Singh</strong> is a living heritage—rooted in tradition, driven by technology, and committed to delivering excellence in every fabric we process.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
<section className="py-20 lg:py-32 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
      
      {/* Mission */}
      <ScrollReveal>
        <div className="py-16 md:pr-16 xl:pr-24">
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="mb-6">
              <span className="block text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                Our
              </span>
              <span className="block text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                MISSION
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To deliver reliable, high-quality textile processing solutions through technical expertise, process discipline, and continuous innovation, while upholding the values of integrity, consistency, and long-term partnerships across domestic and global markets.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Vision */}
      <ScrollReveal delay={0.2}>
        <div className="py-16 md:pl-16 xl:pl-24">
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <div className="mb-6">
              <span className="block text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                Our
              </span>
              <span className="block text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                VISION
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be a trusted and forward-looking textile processing enterprise, recognized for technical excellence, responsible manufacturing, and the ability to evolve with changing industry demands—while preserving the heritage and values that define Jaimal Singh Satnam Singh.
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </div>
</section>

        {/* Our Clients Section */}
        <ClientsMarquee />

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  What We Stand For
                </span>
                <div className="w-12 h-0.5 bg-primary mt-3 mx-auto"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 tracking-tight">
                  OUR VALUES
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="group">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-background">
                      {value.title}
                    </h3>
                    <p className="text-background/70 leading-relaxed">
                      {value.description}
                    </p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Partner With Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover how our technical expertise and commitment to quality can support your textile processing needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      Contact Us
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
