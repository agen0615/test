import React, { useEffect } from 'react';
import { Service } from '../types';
import { ArrowLeft, Check } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <div className="bg-p2p-white text-p2p-black min-h-screen animate-fade-in relative z-40">
      
      {/* Back Button (Inline) */}
      <div className="absolute top-32 left-0 w-full px-6 md:px-12 z-30 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-p2p-accent transition-colors mix-blend-difference"
        >
          <ArrowLeft size={16} /> Back to About
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover animate-[fadeIn_1.5s_ease-out_forwards]"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 max-w-[1920px] mx-auto">
          <span className="text-white text-xs uppercase tracking-[0.4em] mb-4 block animate-reveal-up">Service {service.id}</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] animate-reveal-up delay-100">
            {service.title}
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left: Description */}
          <div className="md:col-span-7">
             <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">Our Philosophy</h3>
             <p className="text-2xl md:text-4xl font-serif leading-tight text-black mb-8">
               {service.shortDesc}
             </p>
             <div className="w-24 h-[1px] bg-p2p-accent mb-8"></div>
             <p className="text-lg text-gray-600 leading-relaxed font-light">
               {service.fullDesc}
             </p>
          </div>

          {/* Right: Capabilities */}
          <div className="md:col-span-5 md:pl-12 md:border-l border-gray-200">
             <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">Capabilities</h3>
             <ul className="space-y-6">
               {service.capabilities.map((cap, idx) => (
                 <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-p2p-accent group-hover:bg-p2p-accent transition-all">
                       <Check size={10} className="text-white opacity-0 group-hover:opacity-100" />
                    </div>
                    <span className="text-lg text-gray-800 group-hover:text-black transition-colors">{cap}</span>
                 </li>
               ))}
             </ul>

             <div className="mt-16 bg-p2p-black text-white p-8">
                <h4 className="text-2xl font-serif mb-4">Need this for your brand?</h4>
                <p className="text-gray-400 text-sm mb-6">Let's discuss how we can integrate this service into your next campaign.</p>
                <button onClick={onBack} className="w-full border border-white/20 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                  Contact Us
                </button>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};