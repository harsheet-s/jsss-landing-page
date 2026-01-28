'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    
    // Handle hash links (like /#services)
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      
      if (location.pathname === path || (path === '/' && location.pathname === '/')) {
        // Same page, just scroll to element
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Different page, navigate then scroll
        navigate(path || '/')
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    } else {
      navigate(href)
    }
  }

  const isActiveLink = (href: string) => {
    if (href.includes('#')) {
      return false
    }
    return location.pathname === href
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
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors',
                    isScrolled
                      ? 'text-foreground hover:text-accent'
                      : 'text-white hover:text-white/80',
                    isActiveLink(item.href) && 'text-accent'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center">
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
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 text-foreground font-semibold uppercase tracking-wider border-b border-border"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-accent text-accent-foreground font-semibold text-center rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
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