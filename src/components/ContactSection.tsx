'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ScrollReveal from './ScrollReveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '42 Roastery Lane, Downtown District',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 234-5678',
    href: 'tel:+15552345678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@emberandbloom.cafe',
    href: 'mailto:hello@emberandbloom.cafe',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri 7AM-9PM, Sat-Sun 8AM-10PM',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Café enquiry from ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      '',
      formData.message,
    ].join('\n')
    window.location.href = `mailto:hello@emberandbloom.cafe?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 section-dark noise-overlay overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="glow-blob-gold left-1/3 top-1/4 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Contact
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100">
              Get In <span className="text-coffee-300 italic">Touch</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-coffee-100 text-xl font-bold mb-6 heading-display">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 resize-none rounded-xl"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary-glow bg-coffee-300 hover:bg-coffee-400 text-coffee-950 font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 h-12"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Email the Café
                </Button>
              </div>
            </form>
          </ScrollReveal>

          {/* Contact Info + Map */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Business Info */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h3 className="text-coffee-100 text-xl font-bold mb-6 heading-display">
                  Visit Us
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-coffee-300/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-4 h-4 text-coffee-300" />
                      </div>
                      <div>
                        <p className="text-coffee-200/30 text-[10px] uppercase tracking-[0.2em] font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-coffee-100/80 text-sm sm:text-base hover:text-coffee-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-coffee-100/80 text-sm sm:text-base">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credential-free location panel */}
              <div className="rounded-2xl overflow-hidden border border-coffee-700/15 h-[280px] bg-coffee-800/60 relative">
                <img
                  src="/gallery-2.png"
                  alt="Warm café interior"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-coffee-950/55 flex flex-col items-center justify-center text-center p-6">
                  <MapPin className="w-8 h-8 text-coffee-300 mb-3" />
                  <p className="text-coffee-100 font-semibold">Find us downtown</p>
                  <p className="text-coffee-200/60 text-sm mt-1 mb-5">42 Roastery Lane, Downtown District</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=42+Roastery+Lane+Downtown+District"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-coffee-950 bg-coffee-300 hover:bg-coffee-400 rounded-full px-5 py-2.5 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
