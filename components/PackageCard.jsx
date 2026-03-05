import Link from 'next/link'
import { CheckCircle, MapPin, Calendar, Users, Plane } from 'lucide-react'

export default function PackageCard({ pkg }) {
  const { id, name, destination, price, duration, groupSize, highlights, image, popular } = pkg

  return (
    <div className={`relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${popular ? 'ring-2 ring-accent' : ''}`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold z-10">
          ⭐ Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-primary font-semibold flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {destination}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="text-center">
            <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-semibold text-foreground">{duration}</p>
            <p className="text-xs text-gray-600">Days</p>
          </div>
          <div className="text-center">
            <Users className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-semibold text-foreground">{groupSize}</p>
            <p className="text-xs text-gray-600">People</p>
          </div>
          <div className="text-center">
            <Plane className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-semibold text-foreground">All</p>
            <p className="text-xs text-gray-600">Inclusive</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">What's Included:</p>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto pt-4 border-t border-border">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-4xl font-bold text-primary">${price}</p>
            <p className="text-xs text-gray-600">per person</p>
          </div>
          <Link href={`/packages/${id}`} className="btn-primary w-full text-center">
            View Full Details
          </Link>
        </div>
      </div>
    </div>
  )
}
