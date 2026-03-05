import Link from 'next/link'
import { MapPin, Star, ArrowRight } from 'lucide-react'

export default function DestinationCard({ destination }) {
  const { id, image, name, country, description, rating, price, duration } = destination

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-primary" />
              {country}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{rating}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-sm text-gray-600">From</p>
            <p className="text-2xl font-bold text-primary">${price}</p>
          </div>
          <Link
            href={`/destinations/${id}`}
            className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
            aria-label={`View details for ${name}`}
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
