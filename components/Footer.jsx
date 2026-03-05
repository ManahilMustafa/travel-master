import React from 'react';
import { Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';
const StageoFooterSection = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden font-sans">
      
      {/* 1. TOP SECTION (Future Theatre) */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-start px-6 pt-10 pb-40 z-10">
        
        {/* Floating Images (Original) */}
        <img 
          src="/img1.jpg" 
          className="absolute top-40 left-[20%] w-48 h-64 object-cover opacity-80 hidden md:block" 
          alt="Theatre art" 
        />
        <img 
          src="/img2.jpg" 
          className="absolute bottom-20 left-10 w-64 h-48 object-cover hidden md:block" 
          alt="Light fixture" 
        />
        <img 
          src="/img3.jpg" 
          className="absolute top-1/2 right-10 w-56 h-40 object-cover hidden md:block" 
          alt="Performer" 
        />

        {/* --- LOGO SECTION (Shifted Up) --- */}
        <div className="mb-6 flex flex-col items-center">
        
          {/* 4 LOGO IMAGES */}
          <div className="flex gap-6 md:gap-10 items-center justify-center mb-20">
            <img src="/one.png" alt="Logo 1" className="h-20 w-auto opacity-90" />
            <img src="/two.png" alt="Logo 2" className="h-20 w-auto opacity-90" />
            <img src="/three.png" alt="Logo 3" className="h-20 w-auto opacity-90" />
            <img src="/four.png" alt="Logo 4" className="h-20 w-auto opacity-90" />
             <img src="/five.png" alt="Logo 4" className="h-20 w-auto opacity-90" />
          </div>
        </div>

        {/* Big Heading */}
        <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-10 text-center uppercase">
         MOVE WITH THE BEAT
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-center text-[11px] text-gray-400 md:text-xs leading-relaxed tracking-widest uppercase px-4">
          TravelMaster is Ireland's leading digital event travel specialist. 
          From the front row of Malahide Castle to the electric nights at 3Arena, 
          we connect fans to the music they love with nationwide, eco-friendly coach travel.
        </p>

        {/* Social Icons (FIXED) */}
        <div className="flex gap-6 mt-12">
          <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
            <Facebook size={20} />
          </a>
        </div>
      </section>

      {/* 2. GRADIENT WRAPPER */}
      <div className="relative">
        <div className="absolute inset-0 -top-40 z-0">
          <img 
            src="/grad.png" 
            className="w-full h-full object-cover" 
            alt="Gradient background"
          />
        </div>

        {/* CTA Section */}
        <div className="relative z-10 px-6 md:px-20 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight uppercase">
            Visit the future of theatre and experience bold live art!
          </h3>
          
          <div className="relative bg-white text-black px-16 py-6 flex items-center group cursor-pointer min-w-[300px]">
            <span className="font-bold tracking-widest text-sm uppercase mr-4">Ready for 2026?</span>
            <span className="text-xl">➔</span>
            
            <img 
              src="/newsletter.png" 
              className="absolute top-0 -right-4 h-full w-4 object-cover"
              alt="pattern"
            />
          </div>
        </div>

        {/* 3. FOOTER LINKS (Original) */}
        <footer className="relative z-10 px-6 md:px-20 pb-10 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] tracking-[0.2em] font-mono">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ BUS TO CONCERTS ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ FESTIVAL TRAVEL ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ PICKUP POINTS ]</span></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ FAQ ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ CONTACT US ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ TERMS & CONDITIONS ]</span></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ TRACK MY BUS ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ GROUP BOOKINGS ]</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>[ REFUND POLICY ]</span></div>
            </div>
          </div>

          <div className="mt-20 flex justify-between text-[12px] opacity-90 uppercase tracking-widest font-mono">
            <p>© 2026 TravelMaster Ireland. The Event Travel Specialist.</p>
            <p>Built for the Fans.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StageoFooterSection;