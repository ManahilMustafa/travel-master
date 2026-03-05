import React from 'react';

const TravelMasterInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center mb-20 px-6 pt-10">
      {/* Main Title */}
      <h1 className="text-3xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">
        Concert Travel – 
        <span className=" font-outline">Buses to Concerts & Festivals</span>
      </h1>

      <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
        <p>
          <strong className="text-white">Travel Master</strong> is a licensed Concert Travel bus & coach service operating high-quality coaches to major venues in Ireland, most noteworthy 
          <span className="text-white italic"> 3Arena, Croke Park, Aviva Stadium, RDS, Slane Castle </span> 
          and many more spectacular Dublin venues.
        </p>

        <p>
          We are your first choice for coach travel in Ireland while offering reliable same-day return travel to popular events such as concerts, festivals and matches. In addition to being the safest, most cost-effective way to travel to events, Travel Master have an extremely simple online booking method.
        </p>

        {/* Highlighted Feature Box */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
          <p className="text-white font-medium mb-4 uppercase tracking-[0.2em] text-xs opacity-60">Why We Are Different</p>
          <p className="text-lg md:text-xl text-gray-200 italic">
            "What makes TravelMaster special is that we sell <span className="text-blue-400 font-bold not-italic">individual bus tickets</span> making travel easy for the lone concert-goer. No need to rent an entire coach—we drop you right outside the venue."
          </p>
        </div>

        <p>
          No LUAS, taxi or long-distance walking required! TravelMaster also offers a customised group booking service. In conclusion, if you want to travel with a company that prioritises safety, comfort and value, then book your seat with TravelMaster today!
        </p>

        {/* Contact/FAQ Link */}
        <div className="pt-6">
          <a 
            href="#faq" 
            className="text-[10px] tracking-[0.3em] uppercase text-gray-300 hover:text-blue-400 transition-colors border-b border-gray-800 pb-1"
          >
            Questions? Visit our FAQ Page or Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TravelMasterInfo;