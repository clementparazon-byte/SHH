import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-neutral-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-4 h-4 bg-white group-hover:bg-green-500 transition-colors"></div>
          <span className="font-bold tracking-tighter text-lg md:text-xl">SHF<span className="hidden sm:inline"> // SINGAPORE HACKERS FUND</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm text-neutral-400 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all"
            >
              {item.label}
            </a>
          ))}
          <a href="#apply" className="px-4 py-2 bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors">
            APPLY_NOW
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-neutral-800 p-6 flex flex-col gap-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg text-neutral-300 border-b border-neutral-800 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <a 
              href="#apply"
              className="text-lg text-black bg-white p-3 text-center font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              APPLY_NOW
            </a>
        </div>
      )}
    </header>
  );
};