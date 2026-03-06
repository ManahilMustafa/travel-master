'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, ArrowRight, Minus, Plus, Calendar, MapPin, Clock, ChevronDown 
} from 'lucide-react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
const BookingPage = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [ticketQty, setTicketQty] = useState(1);
  const [activeFaq, setActiveFaq] = useState(null);

  const locations = {
    "Cork": ["Bantry @ 12:00pm", "Skibbereen @ 12:15pm", "Cork City @ 2:00pm"],
    "Kerry": ["Killarney @ 11:45am", "Tralee @ 12:30pm"],
    "Limerick": ["Limerick City @ 2:30pm", "Adare @ 2:00pm"],
    "Waterford": ["Waterford City @ 2:45pm", "Dungarvan @ 2:00pm"],
  };

  const faqData = [
    { q: "Where is the pick-up in Dublin?", a: "Across the road from the 3Arena. Our team will guide you to the correct coach parked in the designated coach bays." },
    { q: "Is there a toilet on the bus?", a: "No, these specific event coaches are not equipped with on-board toilets. We recommend using facilities before boarding." },
    { q: "What time does the bus leave for return?", a: "The bus departs at exactly 11:15 PM SHARP. We recommend arriving 10-15 minutes early as the bus cannot wait for late passengers." },
    { q: "How do I receive my tickets?", a: "Your E-Ticket is sent instantly to your email address. You can show this on your smartphone to the driver upon boarding." }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600 overflow-x-hidden">
      {/* --- Global Navbar --- */}
      <Navbar />
      {/* --- HERO CONCERT BANNER --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden ">
        <img 
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover scale-110 blur-[1px] opacity-40" 
          alt="Concert Arena Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 font-black tracking-[0.3em] md:tracking-[0.6em] text-[12px] md:text-xs mb-3"
          >
            NATIONWIDE RETURN SERVICE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none "
          >
            Reneé Rapp
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
             className="text-lg md:text-xl font-bold uppercase tracking-widest mt-4 text-gray-300"
          >
            3Arena Dublin 2026
          </motion.p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 -mt-12 md:-mt-16 relative z-10">
        
        {/* --- MAIN INFO SECTION --- */}
        <section className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-20">
          
          <div className="relative group lg:sticky lg:top-10">
            <div className="bg-white p-3 md:p-4 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80" 
                className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="3Arena Venue" 
              />
            </div>
            <div className="absolute -bottom-4 left-0 w-full flex justify-around px-2 z-20">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-4 h-4 md:w-6 md:h-6 bg-black rounded-full border-t border-zinc-800"></div>
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mt-2">€35.00 – €50.00</div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 border-y border-zinc-800 py-6 uppercase tracking-widest font-bold text-[9px] md:text-xs text-gray-300">
                <div className="flex flex-col md:flex-row items-center gap-2"><Calendar size={14} className="text-blue-500"/> Mar 2026</div>
                <div className="flex flex-col md:flex-row items-center gap-2 border-x border-zinc-800 px-2 text-center"><MapPin size={14} className="text-blue-500"/> 3 Arena</div>
                <div className="flex flex-col md:flex-row items-center gap-2"><Clock size={14} className="text-blue-500"/> Doors: 18:30</div>
            </div>

            <div className="space-y-4">
                <p className="text-blue-500 font-bold uppercase tracking-widest text-[11px]">Nationwide Return Bus to Reneé Rapp in the 3Arena Dublin Sun, 22nd Mar 2026</p>
                <div className="space-y-3 text-sm md:text-base">
                    <div className="flex items-start gap-3"><Check size={18} className="text-blue-500 shrink-0 mt-1"/> Return Bus – Price includes both ways!</div>
                    <div className="flex items-start gap-3"><Check size={18} className="text-blue-500 shrink-0 mt-1"/> Book Individual Bus Seats.</div>
                    <div className="flex items-start gap-3"><Check size={18} className="text-blue-500 shrink-0 mt-1"/> Drop off Collection from Coach Parking for 3Arena Stadium.</div>
                    <div className="flex items-start gap-3"><Check size={18} className="text-blue-500 shrink-0 mt-1"/> E-Ticket (Instant direct to your email)</div>
                    <div className="flex items-start gap-3 text-red-500"><X size={18} className="shrink-0 mt-1"/> No Toilets On Bus</div>
                    <div className="flex items-start gap-3 text-red-500"><X size={18} className="shrink-0 mt-1"/> Clamping in operation at collection points. No parking</div>
                </div>
            </div>

            <div className="bg-zinc-900 p-5 md:p-6 border-l-4 border-blue-600">
                <p className="text-sm text-zinc-300 italic mb-3"><span className="font-bold text-white uppercase tracking-wider">Please note:</span> The bus will drop off and pick up passengers at the same location, across the road from the 3Arena.</p>
                <p className="text-sm font-black uppercase tracking-widest text-white leading-relaxed">IMPORTANT: <span className="text-blue-500">The bus will depart at exactly 11:15 PM SHARP</span> for the return journey.</p>
            </div>
          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className="mb-16 md:mb-20 shadow-2xl overflow-hidden rounded-lg border border-zinc-800">
          <div className="w-full h-[300px] md:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.68832049019!2d-6.231267523267924!3d53.347514374526694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8cc066266f%3A0xc6222736168e3760!2s3Arena!5e0!3m2!1sen!2sie!4v1700000000000!5m2!1sen!2sie" 
              className="w-full h-full grayscale invert opacity-70 hover:opacity-100 transition-all duration-700"
              allowFullScreen="" loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* --- SECURE YOUR SEAT SECTION --- */}
        <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 rounded-xl mb-24 md:mb-32 shadow-2xl">
            <div className="mb-10">
                <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-2 tracking-tighter text-white underline decoration-blue-600 underline-offset-8">Secure Your Seat</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mt-6 max-w-lg leading-relaxed">
                    Don’t Forget to Click on TRAVEL INFO and Check out our PICK UP POINTS before you travel!
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-end">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-300 tracking-widest">Date</label>
                    <div className="bg-black border border-zinc-700 p-4 text-sm font-bold text-blue-500 uppercase rounded-md">Sun, 22nd Mar 2026</div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-300 tracking-widest">County</label>
                    <div className="relative">
                      <select 
                          value={selectedCounty}
                          onChange={(e) => setSelectedCounty(e.target.value)}
                          className="w-full bg-black border border-zinc-700 p-4 text-sm focus:border-blue-600 outline-none uppercase cursor-pointer transition appearance-none rounded-md"
                      >
                          <option value="">Choose County</option>
                          {Object.keys(locations).map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16}/>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Pick up Point</label>
                    <div className="relative">
                      <select 
                          disabled={!selectedCounty}
                          className="w-full bg-black border border-zinc-700 p-4 text-sm focus:border-blue-600 outline-none disabled:opacity-20 uppercase cursor-pointer transition appearance-none rounded-md"
                      >
                          <option value="">Select Location</option>
                          {selectedCounty && locations[selectedCounty].map((p, idx) => (
                              <option key={idx} value={p}>{p}</option>
                          ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16}/>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-800 pt-10">
                <div className="flex items-center gap-6 w-full md:w-auto justify-between">
                    <span className="text-[10px] uppercase font-black text-gray-300 tracking-widest">Quantity</span>
                    <div className="flex items-center gap-6 bg-black border border-zinc-700 px-4 py-2 rounded-md">
                        <button onClick={() => setTicketQty(Math.max(1, ticketQty - 1))} className="hover:text-blue-500 transition"><Minus size={18}/></button>
                        <span className="text-xl font-black w-8 text-center">{ticketQty}</span>
                        <button onClick={() => setTicketQty(ticketQty + 1)} className="hover:text-blue-500 transition"><Plus size={18}/></button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-auto">
                    <div className="text-center md:text-right w-full md:w-auto">
                        <p className="text-[10px] uppercase font-black text-gray-300 tracking-widest">Total Price</p>
                        <p className="text-4xl font-black tracking-tight text-white">€{(35 * ticketQty).toFixed(2)}</p>
                    </div>
                    <button className="w-full md:w-auto bg-blue-600 hover:bg-white hover:text-black text-white px-12 py-5 uppercase font-black tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-4 group rounded-md shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        Pay Now 
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* --- DESCRIPTION --- */}
        <section className="mb-24 md:mb-32">
            <h2 className="text-3xl md:text-4xl font-black uppercase  mb-10 border-b border-zinc-800 pb-4 tracking-tighter">Event Description</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    <p>Experience the ultimate convenience with our nationwide return bus service to see <span className="text-white font-bold">Reneé Rapp</span> live at the iconic 3Arena. We take the stress out of concert travel so you can focus on the music.</p>
                    <p>Our fleet of modern coaches ensures a comfortable journey from over 20+ counties across Ireland. Each ticket includes a guaranteed seat for both the journey to Dublin and the return trip immediately following the show.</p>
                </div>
                <div className="bg-white p-2 h-64 md:h-80 shadow-2xl overflow-hidden rounded-sm relative">
                    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80" className="w-full h-full object-cover  brightness-50" alt="Concert Crowd" />
                </div>
            </div>
        </section>

        {/* --- ACCORDION FAQs --- */}
        <section className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black uppercase  tracking-tighter inline-block border-b-4 border-blue-600 pb-2">Common Questions</h2>
            </div>
            <div className="space-y-3 px-2">
                {faqData.map((faq, i) => (
                    <div key={i} className="border border-zinc-800 bg-zinc-900/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-600">
                        <button 
                          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                          className="w-full flex justify-between items-center p-5 text-left transition-colors"
                        >
                          <span className="font-bold uppercase tracking-widest text-[11px] md:text-xs text-white pr-4">{faq.q}</span>
                          <ChevronDown size={18} className={`text-blue-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeFaq === i && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-5 pt-0 text-gray-300 text-sm md:text-base border-t border-zinc-800/50 leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>

      </main>

   {/* --- Global Footer --- */}
      <Footer />
    </div>
  );
};

export default BookingPage;