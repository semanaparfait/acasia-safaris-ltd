"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Bookmark, Play } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "SERENGETI",
    location: "Tanzania",
    description: "Witness the Great Migration across vast golden plains. An unrivaled stage where nature's raw drama unfolds daily under the endless African sky.",
    image: "https://i.pinimg.com/736x/48/42/4b/48424b75b7f6fa0114c5664b86296ab8.jpg",
  },
  {
    id: 2,
    name: "VOLCANOES",
    location: "Rwanda",
    description: "An intimate encounter with the majestic Mountain Gorillas. Journey through ancient rainforests shrouded in mist for a life-changing wildlife experience.",
    image: "https://i.pinimg.com/736x/68/01/19/6801199e33bc9eaa9f4777a21ee25a45.jpg",
  },
  {
    id: 3,
    name: "MURCHISON",
    location: "Uganda",
    description: "Feel the power of the Nile as it forces its way through a narrow gorge. A sanctuary for diverse wildlife and breathtaking river expeditions.",
    image: "https://i.pinimg.com/1200x/1d/3a/0e/1d3a0e7dbc04ee5e445faed00f48c164.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#0a120b] overflow-hidden text-white font-sans">
      
      {/* 1. Immersive Background with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={destinations[index].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a120b] via-transparent to-[#0a120b]/40 z-10" />
          <img 
            src={destinations[index].image} 
            className="w-full h-full object-cover" 
            alt="Safari Destination" 
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-10 flex items-center ">
        <div className="max-w-2xl">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Experience the Unseen
            </span>
            <h1 className="text-7xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              {destinations[index].name}
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              {destinations[index].description.slice(0, 100)}...
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
                Explore Destination
              </button>
              <button className="flex items-center gap-3 font-bold uppercase tracking-widest text-[10px] hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"><Play size={14} fill="currentColor" /></div>
                View Film
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Floating Preview Cards (Mirroring the Video) */}
      <div className="absolute bottom-20 right-10 z-30 hidden lg:flex gap-6 items-end">
        {destinations.map((item, i) => (
          <motion.div
            key={item.id}
            animate={{ 
              scale: i === index ? 1.1 : 1,
              opacity: i === index ? 1 : 0.5,
              y: i === index ? -10 : 0
            }}
            onClick={() => setIndex(i)}
            className={`w-44 h-60 rounded-2xl overflow-hidden cursor-pointer border-2 shadow-2xl transition-all duration-500 ${
              i === index ? 'border-emerald-500' : 'border-transparent'
            }`}
          >
            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
            <div className="absolute inset-0  p-4 flex flex-col justify-between">
              <div className="flex justify-between">
                 <div className="flex gap-0.5"><Star size={8} className="fill-emerald-400 text-emerald-400" /></div>
                 <Bookmark size={14} />
              </div>
              <p className="text-[10px] font-bold uppercase">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Smooth Navigation Controls */}
      <div className="absolute bottom-10 left-6 flex gap-4 z-30">
        <button 
          onClick={() => setIndex((prev) => (prev - 1 + destinations.length) % destinations.length)}
          className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-emerald-600 transition-all active:scale-90"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setIndex((prev) => (prev + 1) % destinations.length)}
          className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-emerald-600 transition-all active:scale-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}