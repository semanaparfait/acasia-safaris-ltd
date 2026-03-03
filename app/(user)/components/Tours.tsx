"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Star, ShieldCheck } from 'lucide-react';

const safariHighlights = [
  {
    title: "The Gorilla Trek",
    location: "Volcanoes NP, Rwanda",
    duration: "4 Days",
    price: "$1,500",
    tag: "Most Popular",
    image: "https://i.pinimg.com/736x/68/01/19/6801199e33bc9eaa9f4777a21ee25a45.jpg"
  },
  {
    title: "Serengeti Migration",
    location: "Serengeti, Tanzania",
    duration: "7 Days",
    price: "$2,800",
    tag: "Seasonal",
    image: "https://i.pinimg.com/736x/48/42/4b/48424b75b7f6fa0114c5664b86296ab8.jpg"
  },
  {
    title: "Murchison Falls",
    location: "Murchison, Uganda",
    duration: "5 Days",
    price: "$1,200",
    tag: "Classic",
    image: "https://i.pinimg.com/1200x/1d/3a/0e/1d3a0e7dbc04ee5e445faed00f48c164.jpg"
  },
];

export default function Tours() {
  return (
    <section className="py-32 bg-[#0a120b] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
            >
              Curated Expeditions
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              CHOOSE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">PRIVATE SAFARI.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-white/60 hover:text-emerald-500 transition-all font-bold tracking-widest text-xs uppercase border-b border-white/10 pb-2">
            View All Tours <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {safariHighlights.map((safari, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#151d16] rounded-[13px] overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <img 
                  src={safari.image} 
                  alt={safari.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {safari.tag}
                  </span>
                </div>

                {/* Glassmorphism Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a120b] to-transparent z-10" />
              </div>

              {/* Content Container */}
              <div className="p-8 relative -mt-20 z-20 bg-gradient-to-b from-transparent via-[#151d16] to-[#151d16]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {safari.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={12} className="text-emerald-500" />
                      <span className="text-xs font-medium">{safari.location}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-500">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Duration</span>
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock size={14} className="text-emerald-500" /> {safari.duration}
                    </span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Pricing</span>
                    <span className="text-sm font-bold text-emerald-500">From {safari.price}</span>
                  </div>
                </div>

                <button className="w-full bg-white/5 hover:bg-emerald-600 text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 border border-white/10 hover:border-emerald-600 group-hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                  Reserve Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}