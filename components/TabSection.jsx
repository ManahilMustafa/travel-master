'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['UPCOMING SHOW', 'DRAMA', 'CONCERT', 'DANCE'];

const SHOW_DATA = {
  'UPCOMING SHOW': [
    {
      id: 1,
      title: 'VELVET HUNGER',
      description: 'An electrifying exploration of desire and defiance, merging raw intensity with hypnotic stage presence and sound.',
      location: '[ Vibe Room, Paris, France ]',
      time: '[ September 2023 | 08:00 PM ]',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800',
    },
    {
      id: 2,
      title: 'BROKEN LIGHT',
      description: 'A striking collision of shadow and illumination, capturing human fragility through daring performance and design.',
      location: '[ Echo Theatre, Berlin, Germany ]',
      time: '[ October 2023 | 07:00 PM ]',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800',
    },
  ],
  'DRAMA': [],
  'CONCERT': [],
  'DANCE': [],
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('UPCOMING SHOW');

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter max-w-5xl mx-auto leading-[0.9]">
            EXPLORE A NEW WORLD OF THEATRE, FIND THE SHOW THAT MATCHES YOUR MOOD
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-y border-white/20 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-8 px-4 text-[11px] font-bold tracking-[0.3em] transition-all border-r border-white/10 last:border-r-0 hover:bg-white/5 ${
                activeTab === tab ? 'bg-white/10 text-white' : 'text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-32"
            >
              {/* Added a safety check (SHOW_DATA[activeTab] || []) */}
              {(SHOW_DATA[activeTab] || []).length > 0 ? (
                SHOW_DATA[activeTab].map((show) => (
                  <div key={show.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Image with Zig-Zag Mask */}
                    <div className="lg:col-span-5">
                      <div className="border-[1.5px] border-white p-1.5 relative group">
                         <div 
                           className="aspect-[4/3] overflow-hidden bg-zinc-900"
                           style={{
                             WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' viewBox='0 0 40 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10L5 5L10 10L15 5L20 10L25 5L30 10L35 5L40 10H0Z' fill='black'/%3E%3C/svg%3E")`,
                             WebkitMaskPosition: 'bottom',
                             WebkitMaskRepeat: 'repeat-x',
                             WebkitMaskSize: '30px 10px',
                             maskImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' viewBox='0 0 40 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10L5 5L10 10L15 5L20 10L25 5L30 10L35 5L40 10H0Z' fill='black'/%3E%3C/svg%3E")`,
                             maskPosition: 'bottom',
                             maskRepeat: 'repeat-x',
                             maskSize: '30px 10px',
                             paddingBottom: '10px'
                           }}
                         >
                            <img 
                              src={show.image} 
                              alt={show.title} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                            />
                         </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="lg:col-span-4 space-y-6">
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                        {show.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-medium">
                        {show.description}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 pt-4">
                        {show.location}
                      </p>
                    </div>

                    {/* Giant Date Section */}
                    <div className="lg:col-span-3 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.7] mb-4">
                          {show.date}
                        </span>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">
                          {show.time}
                        </p>
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <div className="py-40 text-center">
                   <p className="text-zinc-700 uppercase tracking-[0.5em] text-xs font-black">No Content Available</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}