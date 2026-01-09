'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Get In Touch
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Start Your Project?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Contact us for a quote on your textile processing needs
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form Card */}
            <div className="bg-background clean-border rounded-3xl p-8 elevated-shadow">
              <h3 className="text-2xl font-black text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Requirements
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Describe your textile processing needs..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
            
            {/* Contact Info Card */}
            <div className="bg-background clean-border rounded-3xl p-8 elevated-shadow">
              <h3 className="text-2xl font-black text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">Contact for inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@jsss.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Industrial Area</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">Daily Capacity</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-orange-500">25K</div>
                    <div className="text-xs text-muted-foreground">Digital Print (m)</div>
                  </div>
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-blue-500">7K</div>
                    <div className="text-xs text-muted-foreground">Sublimation (m)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-blue rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Requirements Review</h4>
              <p className="text-muted-foreground text-sm">
                Share your fabric and processing specifications
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-emerald rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Custom Quote</h4>
              <p className="text-muted-foreground text-sm">
                Get competitive pricing for your project
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-purple rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Quick Turnaround</h4>
              <p className="text-muted-foreground text-sm">
                Fast processing with quality assurance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
