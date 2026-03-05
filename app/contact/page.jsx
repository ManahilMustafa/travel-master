'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    color: 'text-primary',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'info@travelmaster.com',
    color: 'text-secondary',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Address',
    value: '123 Travel Street, City 12345',
    color: 'text-accent',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: 'Hours',
    value: 'Mon - Fri: 9AM - 6PM (EST)',
    color: 'text-primary',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Have questions about your dream destination? Our travel experts are ready to help you plan the perfect trip.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className={`${info.color} mb-4`}>{info.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="heading-3 text-foreground mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Thank you! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-foreground mb-2">
                    Interested Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., Bali, Paris, Tokyo"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field min-h-32 resize-none"
                    placeholder="Tell us about your travel dreams..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="heading-3 text-foreground">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="group bg-white border border-border rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    How far in advance should I book?
                    <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">
                    We recommend booking 2-3 months in advance for best availability and pricing, though last-minute bookings can often be accommodated.
                  </p>
                </details>

                <details className="group bg-white border border-border rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    What's included in your packages?
                    <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">
                    Our packages typically include flights, accommodations, guided tours, meals, and activities. Specific inclusions vary by package.
                  </p>
                </details>

                <details className="group bg-white border border-border rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    Do you offer travel insurance?
                    <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">
                    Yes! We offer comprehensive travel insurance options covering medical emergencies, trip cancellations, and lost baggage.
                  </p>
                </details>

                <details className="group bg-white border border-border rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    Can I customize my itinerary?
                    <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">
                    Absolutely! We specialize in personalized travel experiences. Contact our team to discuss custom itineraries tailored to your preferences.
                  </p>
                </details>

                <details className="group bg-white border border-border rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    What payment methods do you accept?
                    <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">
                    We accept credit cards, bank transfers, and payment plans for your convenience. A deposit is required to secure your booking.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-foreground mb-8 text-center">Visit Our Office</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="Travel Master Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8505000000003!2d-74.00601522346924!3d40.71276971099116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e8290eaf%3A0x40c6a5770666c30!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
