'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import { Filter, Search } from 'lucide-react'

const allDestinations = [
  {
    id: 1,
    name: 'Bali Paradise',
    country: 'Indonesia',
    region: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1537905904737-13fc2b6421b5?w=600&q=80',
    description: 'Experience the tropical beauty of Bali with pristine beaches and ancient temples.',
    rating: 4.8,
    price: 1299,
    duration: '7 Days',
  },
  {
    id: 2,
    name: 'Swiss Alps Adventure',
    country: 'Switzerland',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    description: 'Discover breathtaking mountain landscapes and charming Alpine villages.',
    rating: 4.9,
    price: 1899,
    duration: '8 Days',
  },
  {
    id: 3,
    name: 'Tokyo Exploration',
    country: 'Japan',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642dad3?w=600&q=80',
    description: 'Immerse yourself in the perfect blend of tradition and modernity in Tokyo.',
    rating: 4.7,
    price: 1599,
    duration: '6 Days',
  },
  {
    id: 4,
    name: 'Santorini Romance',
    country: 'Greece',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac628?w=600&q=80',
    description: 'Watch stunning sunsets and explore white-washed villages in Santorini.',
    rating: 4.9,
    price: 1449,
    duration: '5 Days',
  },
  {
    id: 5,
    name: 'Dubai Luxury',
    country: 'United Arab Emirates',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453475868-c21d88b1a57f?w=600&q=80',
    description: 'Experience luxury and modern architecture in the heart of the desert.',
    rating: 4.6,
    price: 1799,
    duration: '5 Days',
  },
  {
    id: 6,
    name: 'Machu Picchu Trek',
    country: 'Peru',
    region: 'South America',
    image: 'https://images.unsplash.com/photo-1587595431973-160378c6d54c?w=600&q=80',
    description: 'Trek to the ancient Incan citadel with expert guides and stunning views.',
    rating: 4.8,
    price: 1649,
    duration: '4 Days',
  },
  {
    id: 7,
    name: 'Paris Romance',
    country: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    description: 'Fall in love with the City of Light and its iconic landmarks.',
    rating: 4.8,
    price: 1399,
    duration: '5 Days',
  },
  {
    id: 8,
    name: 'Safari Adventure',
    country: 'Kenya',
    region: 'Africa',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&q=80',
    description: 'Witness the incredible wildlife of the African savanna up close.',
    rating: 4.9,
    price: 2199,
    duration: '10 Days',
  },
  {
    id: 9,
    name: 'New York City',
    country: 'USA',
    region: 'North America',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
    description: 'Experience the energy and excitement of the world\'s greatest metropolis.',
    rating: 4.7,
    price: 1299,
    duration: '4 Days',
  },
]

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')

  const regions = ['All', 'Europe', 'Asia', 'Southeast Asia', 'South America', 'Africa', 'North America', 'Middle East']

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-foreground mb-4">Explore All Destinations</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse through our extensive collection of hand-curated travel destinations.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations by name, country..."
                className="input-field pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Region Filter */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Filter className="w-4 h-4" />
                Filter by Region:
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedRegion === region
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-foreground hover:bg-gray-200'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-600">
              Showing {filteredDestinations.length} of {allDestinations.length} destinations
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No destinations found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedRegion('All')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
