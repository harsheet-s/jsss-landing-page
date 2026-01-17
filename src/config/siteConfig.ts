// Site Configuration - Easy to update content

import serviceProcessing from '@/assets/service-processing.jpg'
import serviceDyeing from '@/assets/service-dyeing.jpg'
import servicePrinting from '@/assets/service-printing.jpg'

import {
  Plug,
  Pipette,
  Droplets,
  Trash2,
  Cloud,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  electricity: Plug,
  glue: Pipette,
  water: Droplets,
  waste: Trash2,
  co2: Cloud,
}
export const siteConfig = {
  // Brand
  brand: {
    name: "JSSS",
    fullName: "JAIMAL SINGH SATNAM SINGH",
    tagline: "A Modern Textile Processing Ecosystem",
    description: "Technical Textile Processing Unit specializing in fire resistant, water resistant fabrics, dyeing, finishing, and high-capacity printing services.",
  },

  // Contact Information
  contact: {
    phone: "+91 98765 43210",
    email: "info@jsss.com",
    whatsapp: "+919876543210",
    address: "Industrial Area, Ludhiana, Punjab, India",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/jsss",
    instagram: "https://instagram.com/jsss",
    twitter: "https://twitter.com/jsss",
    linkedin: "https://linkedin.com/company/jsss",
    youtube: "https://youtube.com/@jsss",
  },

  // Service Categories (used in mega menu, cards, and footer)
  services: {
    processing: {
      id: "processing",
      title: "Processing",
      subtitle: "Fire & Water Resistant",
      description: "Advanced fire resistant and water resistant fabric processing with premium finishing services.",
      features: [
        "Fire Resistant Processing",
        "Water Resistant Processing",
        "Premium Finishing",
        "Quality Assurance",
      ],
      link: "/services/processing",
      image: serviceProcessing,
    },
    dyeing: {
      id: "dyeing",
      title: "Dyeing & Finishing",
      subtitle: "Process-Focused Excellence",
      description: "State-of-the-art dyeing processes and finishing techniques for all fabric types.",
      features: [
        "Custom Dyeing",
        "Color Matching",
        "Finishing Treatments",
        "Quality Control",
      ],
      link: "/services/dyeing",
      image: serviceDyeing,
    },
    printing: {
      id: "printing",
      title: "Printing",
      subtitle: "Digital & Sublimation",
      description: "High-capacity digital and sublimation printing services with exceptional quality.",
      features: [
        "Digital Printing - 25,000 m/day",
        "Sublimation Printing - 7,000 m/day",
        "Custom Designs",
        "Fast Turnaround",
      ],
      link: "/services/printing",
      image: servicePrinting,
    },
  },

  // Machinery
  machinery: [
    { name: "Stenter", description: "Heat setting and finishing" },
    { name: "Zero-Zero", description: "Fabric relaxation" },
    { name: "Decatizer", description: "Steam treatment" },
    { name: "Jigger", description: "Dyeing machine" },
    { name: "Softflow", description: "Gentle dyeing" },
    { name: "U-Jet", description: "Jet dyeing" },
    { name: "Long Jet", description: "Extended dyeing" },
    { name: "Mercerizer", description: "Cotton treatment" },
  ],


  // Stats for "Digital over Conventional" section
stats: [
  { value: "57%", label: "LESS USE OF ELECTRICITY", icon: "electricity" },
  { value: "97%", label: "LESS USE OF GLUE", icon: "glue" },
  { value: "62%", label: "LESS USE OF WATER", icon: "water" },
  { value: "85%", label: "LESS WASTE", icon: "waste" },
  { value: "95%", label: "LESS CO2 EMISSION", icon: "co2" },
],


  // Capacities
  capacities: {
    digitalPrinting: "25,000",
    sublimationPrinting: "7,000",
    unit: "meters/day",
  },

  // Testimonials
  testimonials: [
    {
      name: "Rajesh Kumar",
      company: "Fashion Exports Ltd.",
      rating: 5,
      quote: "JSSS has transformed our production timeline. Their fire-resistant processing is unmatched in quality.",
    },
    {
      name: "Priya Sharma",
      company: "Textile Innovations",
      rating: 5,
      quote: "The digital printing capacity and color consistency exceeded our expectations. Highly recommended!",
    },
    {
      name: "Amit Patel",
      company: "Global Fabrics",
      rating: 5,
      quote: "Professional team, state-of-the-art machinery, and timely delivery. Our go-to processing partner.",
    },
    {
      name: "Sunita Verma",
      company: "Design House",
      rating: 5,
      quote: "Their sublimation printing quality is exceptional. Great attention to detail and color accuracy.",
    },
  ],

  // Navigation
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/#services" },
    ],
  },

  // Footer Links
  footerLinks: {
    ourGroup: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
    quickLinks: [
      { label: "Our Services", href: "/#services" },
      { label: "Request Quote", href: "/contact" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
