'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const concerts = [
  {
    artist: "Laufey",
    title: "Bus to Laufey Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800",
    hot: true,
  },
  {
    artist: "Kesha",
    title: "Bus to Kesha Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
  },
  {
    artist: "Laufey",
    title: "Bus to Laufey Concert",
    location: "Malahide Castle, Dublin",
    date: "June 2026",
    price: "€24.99-€50.99",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800",
    hot: true,
  },
 
];

export default function FeaturedConcerts() {
  // Loop ko seamless banane ke liye original list ko repeat kiya
  const duplicatedConcerts = [...concerts, ...concerts];

  return (
    <section className="bg-transparent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-left"> {/* Alignment Fixed to Left */}
        <div className="mb-10 max-w-xl">
          <p className="text-[12px] uppercase tracking-[0.3em] text-gray-300 leading-relaxed font-bold">
            OVER 1,200+ LOCATION COVERAGES AND AN USER <br />
            SATISFACTION RATE OF 97% EXPERIENCE <br />
            TRAVELLING REDEFINED.
          </p>
          <h2 className="text-5xl font-black uppercase tracking-tighter mt-6 text-white">
            Featured Concerts
          </h2>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="flex relative">
        <motion.div 
          className="flex gap-6 pr-6" // Gap maintain karne ke liye padding right
          animate={{ x: ["0%", "-50%"] }} // Sabse important: percentage use kiya for seamless loop
          transition={{
            duration: 25, // Speed control
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedConcerts.map((concert, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[380px] bg-[#111] border border-white/5 group hover:border-blue-500/50 transition-colors"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img 
                  src={concert.image} 
                  alt={concert.artist}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"; }} // Fallback image if link breaks
                />
                {concert.hot && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full italic z-10">
                    HOT
                  </span>
                )}
                <div className="absolute bottom-4 left-4 z-10">
                   <p className="text-xs font-black tracking-tighter opacity-80 uppercase text-white">TravelMaster</p>
                </div>
                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-xl leading-tight uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {concert.title}
                </h3>
                
                <div className="space-y-2 text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-blue-500" />
                    <span>{concert.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blue-500" />
                    <span>{concert.date}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xl font-black text-white">{concert.price}</span>
                </div>

                <button className="w-full bg-[#007bff] hover:bg-white hover:text-black text-white py-4 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 mt-2">
                  Book Your Bus Seat 
                  <img src="/arrow.png" alt="" className="w-4 h-4 object-contain group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}