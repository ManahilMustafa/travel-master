'use client';
import React from 'react';

const NewsletterSection = () => {
  return (
   <section
  className="relative h-screen w-full bg-cover bg-center flex justify-end items-center pr-8 md:pr-20"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1920&auto=format&fit=crop')",
  }}
>
      {/* White Form Container */}
      <div className="relative bg-white w-full max-w-md p-10 shadow-lg">
        
        {/* Top Tagline */}
        <p className="font-mono text-sm mb-6 uppercase tracking-wider text-gray-700">
          [ Subscribe Now ]
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-black">
          BE FIRST TO DISCOVER <br /> NEW PERFORMANCES
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10 text-sm leading-relaxed">
          Subscribe to receive exclusive updates on upcoming performances, events, and behind-the-scenes stories.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 mb-2">Name*</label>
              <input 
                type="text" 
                placeholder="Jane Smith"
                className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 mb-2">Email*</label>
              <input 
                type="email" 
                placeholder="jane@framer.com"
                className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-all uppercase"
          >
            Step into the spotlight
          </button>
        </form>

        {/* Bottom Decorative Pattern */}
        {/* Apni pattern image ko src mein replace karein */}
        <div 
          className="absolute -bottom-4 left-0 w-full h-5 bg-repeat-x bg-contain"
          style={{ backgroundImage: "url('/decode-img.webp')" }}
        ></div>
      </div>
    </section>
  );
};

export default NewsletterSection;