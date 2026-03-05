'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const concerts = [
  {
    artist: "Laufey",
    title: "Bus to Katy Perry Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=500", // Replace with your concert images
    hot: true,
  },
  {
    artist: "Kesha",
    title: "Bus to Katy Perry Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500",
  },
  {
    artist: "Renee Rapp",
    title: "Bus to Katy Perry Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?q=80&w=500",
  },
  {
    artist: "5 Seconds of Summer",
    title: "Bus to Katy Perry Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=500",
  },
];

export default function FeaturedConcerts() {
  // Duplicate the list for a seamless infinite scroll effect
  const duplicatedConcerts = [...concerts, ...concerts];

  return (
    <section className="bg-transparent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Header Text */}
        <div className="mb-10 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 leading-relaxed font-bold">
            OVER 1,200+ LOCATION COVERAGES AND AN USER <br />
            SATISFACTION RATE OF 97% EXPERIENCE <br />
            TRAVELLING REDEFINED.
          </p>
          <h2 className="text-5xl font-black uppercase tracking-tighter mt-6">
            Featured Concerts
          </h2>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: [0, -1400] }} // Adjust based on total width of one set of cards
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedConcerts.map((concert, index) => (
            <div 
              key={index} 
              className="min-w-[300px] bg-[#111] border border-white/5 group hover:border-blue-500/50 transition-colors"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={concert.image} 
                  alt={concert.artist}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-500"
                />
                {concert.hot && (
                  <span className="absolute top-4 right-4 bg-red-600 text-[10px] font-bold px-2 py-1 rounded-full italic">
                    Hot
                  </span>
                )}
                {/* Logo Overlay like the image */}
                <div className="absolute bottom-4 left-4">
                   <p className="text-sm font-bold tracking-tighter opacity-80">TravelMaster</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">
                  {concert.title}
                </h3>
                
                <div className="space-y-1 text-xs text-gray-300 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-300" />
                    <span>{concert.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-300" />
                    <span>{concert.date}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-lg font-bold">{concert.price}</span>
                </div>

                <button className="w-full bg-[#007bff] hover:bg-blue-600 text-white py-3 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors mt-4">
                  Book Your Bus Seat <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}