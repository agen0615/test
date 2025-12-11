import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">PAIR TO PAIR</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Visual storytelling for the modern age. Bridging New York creativity with global markets through production-first strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Office</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>123 Mercer Street</p>
              <p>SoHo, New York, NY 10012</p>
              <p>United States</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Services</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Creative Direction</li>
              <li>Brand Films</li>
              <li>Cross-Border Marketing</li>
              <li>KOL Management</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Pair to Pair Studio. All rights reserved.</p>
          <p>New York &mdash; Asia</p>
        </div>
      </div>
    </footer>
  );
};
