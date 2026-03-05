'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GlobalGrid() {
  const [activeBeam, setActiveBeam] = useState(null);
  const gridPositions = [15, 30, 45, 60, 75, 90];

  useEffect(() => {
    const triggerNextBeam = () => {
      const id = Math.random();
      const randomLine = gridPositions[Math.floor(Math.random() * gridPositions.length)];
      
      setActiveBeam({ id, left: randomLine });
    };

    triggerNextBeam();
    const interval = setInterval(triggerNextBeam, 2200); // 1.5s animation + 0.7s gap

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
      {/* Static Lines */}
      {gridPositions.map((pos, i) => (
        <div 
          key={`line-${i}`} 
          className="absolute w-[1px] h-full bg-white/5" 
          style={{ left: `${pos}%` }}
        />
      ))}

      {/* Sequential Beam */}
      <AnimatePresence mode="wait">
        {activeBeam && (
          <motion.div
            key={activeBeam.id}
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "110%", opacity: [0, 1, 0.5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "linear" }}
            className="absolute h-80 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            style={{ 
              left: `${activeBeam.left}%`,
              width: '1px'
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}