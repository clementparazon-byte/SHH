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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold">SHF<span className="md-inline hidden" style={{ marginLeft: '0.5rem' }}> // SINGAPORE HACKERS FUND</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="md-flex items-center gap-4 hidden">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
          <a href="#apply" className="btn-nav-apply">
            APPLY_NOW
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md-hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu md-hidden">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <a 
              href="#apply"
              className="btn-nav-apply"
              style={{ textAlign: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              APPLY_NOW
            </a>
        </div>
      )}
    </header>
  );
};