"use client"; // Required for state and scroll events in Next.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, MapPin, Phone, ChevronDown } from 'lucide-react';
import logo from '@/public/logo.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll logic for the "Glassmorphism" effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Tour', href: '/packages' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar (The "Professional" Touch) */}
      <div className={`fixed top-0 w-full z-[60] hidden lg:block transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      } border-b border-white/10 bg-black/20 backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-white/80">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-emerald-500" /> Kigali, Rwanda</span>
            <span className="flex items-center gap-2"><Phone size={12} className="text-emerald-500" /> +250 7XX XXX XXX</span>
          </div>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-emerald-400">FAQ</Link>
            <Link href="/reviews" className="hover:text-emerald-400">Guest Reviews</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-0 bg-[#0a120b]/90 backdrop-blur-xl py-3 shadow-2xl' 
            : 'top-0 lg:top-10 bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 group-hover:scale-110 transition-transform">
              <Image 
                src={logo} 
                alt="Acasia Safaris" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black leading-none tracking-tighter ${isScrolled ? 'text-white' : 'text-white'}`}>
                ACASIA<span className="text-emerald-500">SAFARIS</span>
              </span>
              <span className="text-[10px] uppercase tracking-[3px] text-emerald-400 font-bold">LTD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-[2px] text-white/90 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </Link>
                {/* Modern Hover Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            {/* <Search className="text-white cursor-pointer hover:text-emerald-400 transition-colors hidden sm:block" size={20} /> */}
            <Link 
              href="/booking"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Enquire Now
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </nav>

        {/* Fullscreen Mobile Menu */}
        <div className={`fixed inset-0 bg-[#0a120b] z-[100] transition-all duration-700 flex flex-col justify-center items-center gap-8 ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}>
           <button 
            className="absolute top-8 right-8 text-white" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white hover:text-emerald-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking" 
            className="mt-4 bg-emerald-600 text-white px-12 py-5 rounded-full font-black text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      </header>
    </>
  );
}