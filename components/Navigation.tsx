import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageState } from '../types';

interface NavigationProps {
  currentPage: PageState;
  setPage: (page: PageState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: PageState.HOME, label: 'Home' },
    { id: PageState.WORK, label: 'Selected Work' },
    { id: PageState.ABOUT, label: 'About' },
    { id: PageState.CONTACT, label: 'Inquire' },
  ];

  const handleNavClick = (page: PageState) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-p2p-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick(PageState.HOME)}
            className="cursor-pointer z-[100] relative group mix-blend-difference"
          >
            {/* REPLACE THIS SRC WITH YOUR ACTUAL LOGO FILE PATH */}
            <div className="flex items-center gap-2">
               {/* Simulating the user's infinity logo if image fails, but prefer image */}
               <img 
                 src="https://placehold.co/180x60/0a0a0a/ffffff?text=PAIR+TO+PAIR&font=playfair" 
                 alt="Pair to Pair Studio" 
                 className="h-10 md:h-12 w-auto object-contain invert"
               />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 mix-blend-difference">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-gray-300 text-white`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-[100] mix-blend-difference"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-p2p-black z-[90] flex flex-col justify-center items-center gap-8 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`text-4xl font-serif text-white hover:text-gray-400 transition-colors ${isMobileMenuOpen ? 'animate-reveal-up' : 'opacity-0'}`}
            style={{ animationDelay: isMobileMenuOpen ? `${idx * 100}ms` : '0ms' }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
};