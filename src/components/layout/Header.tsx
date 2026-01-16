'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { MegaMenu } from './MegaMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <span className={cn(
                  'font-black text-2xl tracking-wider transition-colors',
                  isScrolled ? 'text-foreground' : 'text-white'
                )}>
                  {siteConfig.brand.name}
                </span>
                <span className={cn(
                  'text-[10px] tracking-widest uppercase transition-colors',
                  isScrolled ? 'text-muted-foreground' : 'text-white/70'
                )}>
                  Technical Textiles
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {siteConfig.navigation.main.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors',
                      isScrolled
                        ? 'text-foreground hover:text-accent'
                        : 'text-white hover:text-white/80',
                      location.pathname === item.href && 'text-accent'
                    )}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Mega Menu for Services */}
                  {item.hasMegaMenu && activeDropdown === item.label && (
                    <MegaMenu onClose={() => setActiveDropdown(null)} />
                  )}
                </div>
              ))}

              {/* Secondary dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    'px-4 py-2 text-sm font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors',
                    isScrolled
                      ? 'text-foreground hover:text-accent'
                      : 'text-white hover:text-white/80'
                  )}
                >
                  {siteConfig.navigation.secondary.label}
                  <ChevronDown className={cn(
                    'w-4 h-4 transition-transform',
                    activeDropdown === 'resources' && 'rotate-180'
                  )} />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-background border border-border rounded-lg shadow-xl py-2 min-w-[200px]">
                      {siteConfig.navigation.secondary.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded-full transition-colors',
                  isScrolled
                    ? 'text-foreground hover:bg-muted'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
              >
                Connect
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded transition-colors',
                isScrolled ? 'text-foreground' : 'text-white'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4">
              {siteConfig.navigation.main.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 text-foreground font-semibold uppercase tracking-wider border-b border-border"
                  >
                    {item.label}
                  </Link>
                  {item.hasMegaMenu && (
                    <div className="pl-4 py-2 space-y-2">
                      {Object.values(siteConfig.services).map((service) => (
                        <Link
                          key={service.id}
                          to={service.link}
                          className="block py-2 text-muted-foreground text-sm"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex gap-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className="flex-1 py-3 bg-muted text-foreground font-semibold text-center rounded flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="flex-1 py-3 bg-accent text-accent-foreground font-semibold text-center rounded"
                >
                  Connect
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
