'use client'

import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'

export function Footer() {
  const services = Object.values(siteConfig.services)
  
  const socialIcons = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* Service Contact Cards */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-background/5 rounded-lg p-6">
                <h3 className="font-bold text-lg uppercase tracking-wider mb-4">
                  {service.title}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-background/80 hover:text-background transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-background/80 hover:text-background transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/80 hover:text-background transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex justify-center gap-6">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/80 hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-black text-2xl tracking-wider">{siteConfig.brand.name}</span>
              <p className="text-background/60 text-xs uppercase tracking-widest mt-1">
                {siteConfig.brand.fullName}
              </p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Our Group */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Our Group</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.ourGroup.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.link}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
