'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  const [activeBeam, setActiveBeam] = useState(null);
  const gridPositions = [15, 30, 45, 60, 75, 90];

  useEffect(() => {
    const triggerNextBeam = () => {
      const id = Math.random();
      const randomLine = gridPositions[Math.floor(Math.random() * gridPositions.length)];
      setActiveBeam({ id, left: randomLine });
    };
    triggerNextBeam();
    const interval = setInterval(triggerNextBeam, 2000); 
    return () => clearInterval(interval);
  }, []);

  const events = [
    { artist: 'CALVIN HARRIS', location: 'MALAHIDE CASTLE 2026' },
    { artist: 'ZACH BRYAN', location: 'PAIRC UI CHAOIMH 2026' },
    { artist: 'ZACH BRYAN', location: 'PAIRC UI CHAOIMH 2026' },
  ]

  // Animation Variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden text-white pt-20">
      
      {/* Background Grid & Beams */}
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

      {/* Background Image with Zoom-in Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img src="/hero-bg.png" alt="Concert" className="w-full h-full object-cover" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-end"
      >
        {/* Top Right Content */}
        <motion.div variants={fadeInUp} className="max-w-md text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter">
            BUS TO MALAHIDE CASTLE<br /> 
            <span className="text-5xl"> 2026</span>
          </h2>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex justify-end"
          >
            <Link 
              href="/booking" 
              className="group bg-[#007bff] hover:bg-white hover:text-black text-white px-8 py-4 flex items-center gap-3 uppercase text-xs font-black tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.3)]"
            >
              Book Your Bus Seat 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Massive Artist Name with Clip-path Reveal */}
        <div className="w-full overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.4 }}
            className="text-[12vw] font-black uppercase tracking-tighter leading-[0.75] mb-8 bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent"
          >
            CALVIN  HARRIS
          </motion.h1>
        </div>
      </motion.div>

      {/* Bottom Ticker with Fade-in */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 w-full py-4 overflow-hidden z-30 border-t border-white/5 bg-black/40 backdrop-blur-md"
      >
        <motion.div 
          className="flex whitespace-nowrap gap-12"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...events, ...events, ...events].map((event, idx) => (
            <div key={idx} className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="text-blue-500 font-black">//</span>
              <span className="text-white">{event.artist}</span>
              <span className="text-white/40">|</span>
              <span className="text-white/60">{event.location}</span>
              <span className="text-blue-500 font-black">//</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}