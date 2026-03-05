import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Award, Users, Globe, Heart } from 'lucide-react'

const values = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'With partnerships in 500+ destinations worldwide, we ensure authentic experiences everywhere.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Our team of travel professionals have decades of combined experience in the industry.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion for Travel',
    description: 'We believe travel transforms people and builds bridges between cultures.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'Every destination, hotel, and experience is personally vetted by our experts.',
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Emma Williams',
    role: 'Destination Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    name: 'David Martinez',
    role: 'Customer Experience',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-foreground mb-6">About Travel Master</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Since 2004, Travel Master has been crafting unforgettable journeys for adventurers, families, and couples around the globe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-2 text-foreground">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Travel Master was founded with a simple vision: to make world travel accessible and extraordinary for everyone. What started as a small travel consultancy has grown into a global movement of travel enthusiasts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our founder, Sarah Johnson, spent decades traveling across six continents and realized that the best travel experiences aren't just about destinations—they're about connections, stories, and transformations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve over 10,000 happy travelers annually, creating memories that last a lifetime and fostering understanding across cultures.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
                alt="Our team exploring destinations"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="heading-3 text-foreground mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional travel experiences that are authentic, sustainable, and transformative—creating memories while respecting the destinations and communities we visit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="heading-3 text-foreground mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted travel partner, known for personalized service, innovative experiences, and a commitment to responsible tourism.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate travel professionals dedicated to creating your perfect journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-lg text-white/80">Years of Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg text-white/80">Destinations Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">10K+</p>
              <p className="text-lg text-white/80">Happy Travelers</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-lg text-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Our Commitment to Sustainability</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-gray-600">Carbon-neutral travel options and offsetting programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-gray-600">Support for local communities and fair-trade practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-gray-600">Wildlife protection and environmental conservation initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-gray-600">Partnerships with eco-certified hotels and resorts</span>
                </li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80"
              alt="Sustainable travel practices"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
