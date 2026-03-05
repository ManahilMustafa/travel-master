'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, Calendar, MapPin } from 'lucide-react';

const TABS = ['SPORTS', 'FESTIVALS', 'CONCERT'];

const SHOW_DATA = {
  'SPORTS': [
    {
      id: 1,
      title: 'CHAMPIONS LEAGUE FINAL',
      description: 'The pinnacle of club football. Experience the roar of the crowd and the magic of the pitch in an unforgettable clash at the historic Wembley.',
      location: '[ Wembley Stadium, London ]',
      time: '[ June 2026 | 08:00 PM ]',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
    },
    {
      id: 2,
      title: 'FORMULA 1 MONACO GP',
      description: 'Speed, glamour, and precision. Watch the world\'s finest drivers navigate the tightest streets of Monte Carlo in the ultimate racing spectacle.',
      location: '[ Monte Carlo, Monaco ]',
      time: '[ May 2026 | 02:00 PM ]',
      image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1000',
    },
    {
      id: 3,
      title: 'WIMBLEDON FINALS',
      description: 'Tradition meets excellence on the grass courts. Witness history being made as the world\'s top tennis stars battle for the prestigious trophy.',
      location: '[ All England Club, London ]',
      time: '[ July 2026 | 03:00 PM ]',
      image: '/img2.jpg',
    },
  ],
  'FESTIVALS': [
    {
      id: 4,
      title: 'TOMORROWLAND 2026',
      description: 'The ultimate electronic dance music festival. Join people from all over the world in a kingdom of magic, sound, and breathtaking stage designs.',
      location: '[ Boom, Belgium ]',
      time: '[ July 2026 | 12:00 PM ]',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000',
    },
    {
      id: 5,
      title: 'COACHELLA VALLEY',
      description: 'A cultural phenomenon blending music, art, and fashion in the heart of the California desert. The lineup of a lifetime awaits.',
      location: '[ Indio, California ]',
      time: '[ April 2026 | 01:00 PM ]',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000',
    },
    {
      id: 6,
      title: 'RIO CARNIVAL 2026',
      description: 'Experience the world\'s biggest party. Samba parades, vibrant costumes, and the infectious energy of Brazil\'s most iconic celebration.',
      location: '[ Rio de Janeiro, Brazil ]',
      time: '[ February 2026 | 09:00 PM ]',
      image: 'https://images.unsplash.com/photo-1590483259330-944f249594f8?q=80&w=1000',
    },
  ],
  'CONCERT': [
    {
      id: 7,
      title: 'THE WEEKND: AFTER HOURS',
      description: 'A cinematic journey through sound. Witness the high-octane performance and stunning visuals of the Starboy in an immersive stadium experience.',
      location: '[ Marlay Park, Dublin ]',
      time: '[ August 2026 | 07:30 PM ]',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000',
    },
    {
      id: 8,
      title: 'COLDPLAY: MUSIC SPHERES',
      description: 'A colorful, sustainable, and life-affirming show. Sing along to anthems under a sky full of stars and LED wristbands.',
      location: '[ MetLife Stadium, NJ ]',
      time: '[ September 2026 | 08:00 PM ]',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000',
    },
    {
      id: 9,
      title: 'BILLIE EILISH LIVE',
      description: 'Intimate yet explosive. Dive into the hauntingly beautiful world of Billie Eilish as she performs her latest chart-topping hits.',
      location: '[ O2 Arena, London ]',
      time: '[ October 2026 | 07:00 PM ]',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000',
    },
  ],
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('SPORTS');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = (SHOW_DATA[activeTab] || []).filter(show => 
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase  max-w-3xl leading-[0.85]">
            FIND THE SHOW THAT MATCHES YOUR MOOD
          </h2>
          
          <div className="relative w-full md:w-80 group">
            <input 
              type="text"
              placeholder="SEARCH EVENTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-white/30 py-3 px-2 outline-none focus:border-blue-500 transition-colors text-xs font-bold tracking-widest uppercase"
            />
            <Search className="absolute right-2 top-3 text-white/50 group-focus-within:text-blue-500" size={18} />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-y border-white/20 mb-24 bg-zinc-900/20 backdrop-blur-sm">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
              className={`flex-1 py-10 px-4 text-[10px] md:text-[12px] font-black tracking-[0.4em] transition-all border-r border-white/10 last:border-r-0 hover:bg-white/5 relative overflow-hidden ${
                activeTab === tab ? 'text-white' : 'text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-64" // Increased space between different items
            >
              {filteredData.length > 0 ? (
                filteredData.map((show) => (
                  <div key={show.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Floating Image Section */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start">
                      <motion.div 
                        initial={{ rotate: -3 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        animate={{ y: [0, -25, 0] }}
                        transition={{ 
                          rotate: { duration: 0.8 },
                          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="relative p-5 bg-white w-full max-w-[550px] shadow-2xl"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                           <img 
                             src={show.image} 
                             alt={show.title} 
                             className="w-full h-full object-cover  transition-all duration-700"
                           />
                        </div>
                        
                        {/* Stamp Effect */}
                        <div 
                            className="absolute -bottom-4 left-0 w-full h-5 bg-white" 
                            style={{ 
                                maskImage: 'radial-gradient(circle at 12px 22px, transparent 12px, white 12px)',
                                maskSize: '24px 40px',
                                WebkitMaskImage: 'radial-gradient(circle at 12px 22px, transparent 12px, white 12px)',
                                WebkitMaskSize: '24px 40px'
                            }}
                        ></div>
                      </motion.div>
                    </div>

                    {/* Content Section - Adjusted Spacing */}
                    <div className="lg:col-span-6 flex flex-col space-y-12"> 
                      <div className="space-y-6">
                        <h3 className="text-5xl md:text-6xl font-bold uppercase ">
                          {show.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium max-w-lg">
                          {show.description}
                        </p>
                      </div>
                      
                      <div className="space-y-4 border-l-2 border-blue-600 pl-8">
                        <div className="flex items-center gap-4 text-white">
                          <MapPin size={22} className="text-blue-500" /> 
                          <span className="text-sm font-bold tracking-widest uppercase">{show.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                          <Calendar size={22} className="text-blue-500" /> 
                          <span className="text-sm font-bold tracking-widest uppercase">{show.time}</span>
                        </div>
                      </div>

                      <div className="pt-1">
                        <button className="group bg-white text-black px-10 py-4 font-black text-sm tracking-[0.2em] uppercase flex items-center gap-8 hover:bg-blue-600 hover:text-white transition-all duration-500 w-fit">
                          Book Now
                          <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <div className="py-40 text-center border border-dashed border-white/10 rounded-3xl">
                   <p className="text-zinc-600 uppercase tracking-[0.5em] text-xs font-black italic">No matches found for your search</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}