'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const events = [
  { 
    id: 1, 
    artist: 'CALVIN HARRIS', 
    location: 'MALAHIDE CASTLE 2026', 
    bg: '/hero-bg.png', 
    subheading: 'BUS TO MALAHIDE CASTLE' 
  },
  { 
    id: 2, 
    artist: 'ZACH BRYAN', 
    location: 'PAIRC UI CHAOIMH 2026', 
    bg: '/zach-bg.jpg', 
    subheading: 'BUS TO CORK CITY' 
  },
  { 
    id: 3, 
    artist: 'THE WEEKND', 
    location: 'MARLAY PARK 2026', 
    bg: '/weeknd-bg.jpg', 
    subheading: 'BUS TO DUBLIN SOUTH' 
  },
]

export default function Hero() {
  const [activeBeam, setActiveBeam] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridPositions = [15, 30, 45, 60, 75, 90];

  const currentEvent = events[currentIndex];

  useEffect(() => {
    const triggerNextBeam = () => {
      const id = Math.random();
      const randomLine = gridPositions[Math.floor(Math.random() * gridPositions.length)];
      setActiveBeam({ id, left: randomLine });
    };
    const interval = setInterval(triggerNextBeam, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden text-white pt-20">
      
      {/* Background & Beams (Static) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {gridPositions.map((pos, i) => (
          <div key={`line-${i}`} className="absolute w-[1px] h-full bg-white/10" style={{ left: `${pos}%` }} />
        ))}
        <AnimatePresence>
          {activeBeam && (
            <motion.div
              key={activeBeam.id}
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "120%", opacity: [0, 1, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute h-64 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              style={{ left: `${activeBeam.left}%`, width: '1px' }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Background Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentEvent.bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img src={currentEvent.bg} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-end">
        {/* Right Side Info */}
       <AnimatePresence mode="wait">
  <motion.div 
    key={currentEvent.subheading}
    initial={{ x: -30, opacity: 0 }} // Left align ke liye initial position thori change ki hai
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 30, opacity: 0 }}
    className="max-w-md text-left mb-12" // Yahan text-left kar diya
  >
    <h2 className="text-3xl md:text-4xl font-bold uppercase leading-[0.9] tracking-tighter">
      {currentEvent.subheading}<br /> 
      <span className="text-5xl"> 2026</span>
    </h2>
    
    <div className="mt-6 flex justify-start"> {/* Buttons ko left align karne ke liye justify-start */}
      <Link 
        href="/booking" 
        className="group bg-[#007bff] hover:bg-white hover:text-black text-white px-8 py-4 flex items-center gap-3 uppercase text-xs font-black tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.3)]"
      >
        Book Your Bus Seat 
        {/* Custom Arrow Image */}
        <img 
          src="/arrow.png" 
          alt="arrow" 
          className="w-5 h-5 object-contain group-hover:translate-x-1 transition-transform" 
        />
      </Link>
    </div>
  </motion.div>
</AnimatePresence>

        {/* Big Artist Name */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentEvent.artist}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="text-[12vw] font-black uppercase tracking-tighter leading-[0.75] mb-8 bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent"
            >
              {currentEvent.artist}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Customized Slider (As per your Image) */}
      <div className="absolute bottom-0 w-full py-8 overflow-hidden z-30 border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: [0, -1500] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...events, ...events, ...events, ...events, ...events].map((event, idx) => {
            const isSelected = currentIndex === (idx % events.length);
            return (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx % events.length)}
                className="flex items-center gap-4 group transition-all duration-300"
              >
                <span className="text-white/30 text-xl font-light">[</span>
                
                <div className={`flex items-center gap-3 px-2 pb-1 transition-all duration-300 ${isSelected ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent hover:border-white/20'}`}>
                  <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${isSelected ? 'text-white' : 'text-white/50'}`}>
                    {event.artist}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className={`text-[10px] font-medium tracking-[0.1em] uppercase ${isSelected ? 'text-white/80' : 'text-white/30'}`}>
                    {event.location}
                  </span>
                </div>

                <span className="text-white/30 text-xl font-light">]</span>
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}