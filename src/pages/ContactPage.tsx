'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { MapPin, ExternalLink, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const serviceOptions = [
  'Processing',
  'Dyeing & Finishing',
  'Digital Printing',
  'Sublimation Printing',
  'Fire-Resistant Treatment',
  'Other / General Inquiry',
]

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interestedIn: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.interestedIn) {
      newErrors.interestedIn = 'Please select a service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: 'Please fix the errors',
        description: 'Some required fields are missing or invalid.',
        variant: 'destructive',
      })
      return
    }

    // Create mailto link with prefilled data
    const subject = encodeURIComponent(`Website Inquiry – ${formData.interestedIn}`)
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName || 'Not provided'}
Phone: ${formData.phone}
Email: ${formData.email}
Interested In: ${formData.interestedIn}
Message: ${formData.message || 'No additional message'}

---
Page URL: ${window.location.href}
Submitted At: ${new Date().toLocaleString()}`
    )

    const mailtoLink = `mailto:jaimalsinghsatnamsingh1972@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink

    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading pretitle="Get in Touch" title="Contact Us" dark align="center" />
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              pretitle="Location"
              title="Find Us"
              description="Visit our factory or reach out for production queries."
              align="center"
            />

            <div className="max-w-4xl mx-auto">
              {/* Map Container */}
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38782.36939092581!2d75.85300604634352!3d30.943280301846702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a85b6d6c5d6fd%3A0x7aefe22d9af2e7d2!2sJaimal%20Singh%20Satnam%20singh!5e0!3m2!1sen!2sin!4v1768757192612!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Factory Location - Ludhiana"
                  className="w-full"
                />
              </div>

              {/* Location Details */}
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">Factory – Ludhiana</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Bajra Road, Ludhiana - Rahon Rd, Bajrah, Ludhiana, Punjab 141007
                </p>
                <a
                  href="https://www.google.com/maps/place/Jaimal+Singh+Satnam+singh/@30.943280,75.853006,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              pretitle="Fill the Form to"
              title="Get in Touch"
              align="center"
            />

            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <div className="text-center py-12 px-6 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-lg">
                    Please send the email from your mail app and our team will contact you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                        interestedIn: '',
                        message: '',
                      })
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email ID <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <Label htmlFor="interestedIn" className="text-foreground">
                      Interested In? <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.interestedIn}
                      onValueChange={(value) => handleInputChange('interestedIn', value)}
                    >
                      <SelectTrigger
                        id="interestedIn"
                        className={`w-full bg-background ${errors.interestedIn ? 'border-destructive' : ''}`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.interestedIn && (
                      <p className="text-sm text-destructive">{errors.interestedIn}</p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Describe your requirements in Brief
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, quantities, timelines, etc."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button type="submit" size="lg" className="px-12 uppercase tracking-wider">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
