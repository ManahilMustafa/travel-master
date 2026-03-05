import React from 'react';

const StageoFooterSection = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden font-sans">
      
      {/* 1. TOP SECTION (Future Theatre) */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-40 z-10">
        
        {/* Floating Images (Randomly spread) */}
        <img 
          src="/img1.jpg" 
          className="absolute top-10 left-[20%] w-48 h-64 object-cover opacity-80 hidden md:block" 
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

        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-xl tracking-[0.5em] font-bold">STAGEO</h1>
        </div>

        {/* Big Heading */}
        <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-10 text-center uppercase">
          Future Theatre
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-center text-[10px] md:text-xs leading-relaxed tracking-widest uppercase opacity-80">
          Stageo is a space where modern theatre meets bold youth expression. 
          We spotlight emerging voices, experimental performances, and events 
          that redefine what stage art can be. Our mission is to inspire, 
          provoke and evolve the future of theatre.
        </p>

        {/* Social Icons (Circles) */}
        <div className="flex gap-4 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-5 h-5 bg-white/20 rounded-sm"></div> {/* Replace with actual Icons */}
            </div>
          ))}
        </div>
      </section>

      {/* 2. GRADIENT WRAPPER (This merges the bottom of top section and footer) */}
      <div className="relative">
        {/* The Orange Gradient Background Image */}
        <div className="absolute inset-0 -top-40 z-0">
          <img 
            src="/your-gradient-bg.png" 
            className="w-full h-full object-cover" 
            alt="Gradient background"
          />
        </div>

        {/* CTA Section (Visit the future...) */}
        <div className="relative z-10 px-6 md:px-20 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <h3 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight uppercase">
            Visit the future of theatre and experience bold live art!
          </h3>
          
          {/* White Button with Zig Zag Pattern */}
          <div className="relative bg-white text-black px-10 py-8 flex items-center group cursor-pointer min-w-[300px]">
            <span className="font-bold tracking-widest text-sm uppercase mr-4">Contact our studio</span>
            <span className="text-xl">➔</span>
            
            {/* Your Zig-Zag Pattern Image */}
            <img 
              src="/newsletter.png" 
              className="absolute top-0 -right-4 h-full w-4 object-cover"
              alt="pattern"
            />
          </div>
        </div>

        {/* 3. FOOTER LINKS */}
        <footer className="relative z-10 px-6 md:px-20 pb-10 border-t border-white/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] tracking-[0.2em] font-mono">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ WHO WE ARE ]</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ BACKSTAGE STORY ]</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ OUR ACTORS ]</span></div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ INSTAGRAM ]</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ YOUTUBE ]</span></div>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ RENTAL INFO ]</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ THEATRE IN MOTION ]</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>[ GET TICKETS ]</span></div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-20 flex justify-between text-[8px] opacity-60 uppercase tracking-widest font-mono">
            <p>© Stageo. All Rights Reserved.</p>
            <p>Designed by Fourtwelve. Powered by Framer.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StageoFooterSection;