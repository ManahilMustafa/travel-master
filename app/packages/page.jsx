'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PackageCard from '@/components/PackageCard'

const packages = [
  {
    id: 1,
    name: 'Island Escape',
    destination: 'Bali, Indonesia',
    price: 1299,
    duration: 7,
    groupSize: 8,
    image: 'https://images.unsplash.com/photo-1537905904737-13fc2b6421b5?w=600&q=80',
    highlights: [
      'Luxury beachfront resort stay',
      'Guided temple tours',
      'Spa and wellness treatments',
      'Water sports activities',
    ],
    popular: true,
  },
  {
    id: 2,
    name: 'Alpine Exploration',
    destination: 'Swiss Alps, Switzerland',
    price: 1899,
    duration: 8,
    groupSize: 6,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    highlights: [
      'Mountain hiking trails',
      'Charming village tours',
      'Scenic train journeys',
      'Traditional Swiss cuisine',
    ],
    popular: false,
  },
  {
    id: 3,
    name: 'Tokyo Cultural Immersion',
    destination: 'Tokyo, Japan',
    price: 1599,
    duration: 6,
    groupSize: 10,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642dad3?w=600&q=80',
    highlights: [
      'Historic temple visits',
      'Modern city exploration',
      'Authentic food tours',
      'Traditional craft workshops',
    ],
    popular: true,
  },
  {
    id: 4,
    name: 'Santorini Honeymoon',
    destination: 'Santorini, Greece',
    price: 1449,
    duration: 5,
    groupSize: 2,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac628?w=600&q=80',
    highlights: [
      'Sunset watching experience',
      'Private beach access',
      'Wine tasting tours',
      'Luxury dinner experiences',
    ],
    popular: false,
  },
  {
    id: 5,
    name: 'Dubai Deluxe',
    destination: 'Dubai, UAE',
    price: 1799,
    duration: 5,
    groupSize: 12,
    image: 'https://images.unsplash.com/photo-1512453475868-c21d88b1a57f?w=600&q=80',
    highlights: [
      'Luxury shopping experience',
      'Desert safari adventure',
      'Iconic landmark tours',
      'World-class dining',
    ],
    popular: true,
  },
  {
    id: 6,
    name: 'Incan Heritage Trek',
    destination: 'Machu Picchu, Peru',
    price: 1649,
    duration: 4,
    groupSize: 8,
    image: 'https://images.unsplash.com/photo-1587595431973-160378c6d54c?w=600&q=80',
    highlights: [
      'Guided Machu Picchu tour',
      'Inca Trail hiking',
      'Local market visits',
      'Cultural ceremonies',
    ],
    popular: false,
  },
  {
    id: 7,
    name: 'Paris & Versailles',
    destination: 'Paris, France',
    price: 1399,
    duration: 5,
    groupSize: 10,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    highlights: [
      'Eiffel Tower visit',
      'Louvre museum tour',
      'Versailles Palace exploration',
      'Seine river cruise',
    ],
    popular: false,
  },
  {
    id: 8,
    name: 'African Safari Expedition',
    destination: 'Kenya Safari',
    price: 2199,
    duration: 10,
    groupSize: 8,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&q=80',
    highlights: [
      'Wildlife game drives',
      'Big Five viewing',
      'Masai village visit',
      'Photography opportunities',
    ],
    popular: true,
  },
  {
    id: 9,
    name: 'NYC Urban Adventure',
    destination: 'New York, USA',
    price: 1299,
    duration: 4,
    groupSize: 6,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
    highlights: [
      'Broadway show tickets',
      'Museum tours',
      'Rooftop bar experiences',
      'Street food walking tour',
    ],
    popular: false,
  },
]

export default function PackagesPage() {
  const [sortBy, setSortBy] = useState('popular')

  const sortedPackages = [...packages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'duration':
        return b.duration - a.duration
      case 'popular':
      default:
        return b.popular ? 1 : -1
    }
  })

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-foreground mb-4">Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Choose from our curated collection of all-inclusive travel packages designed for unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Sort Options */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-600 font-medium">
              Showing {sortedPackages.length} packages
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="sort" className="text-sm font-semibold text-foreground self-center">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field max-w-xs"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-foreground mb-4">Get Exclusive Deals</h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe to our newsletter and receive exclusive discounts and early access to new packages.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary px-8 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
