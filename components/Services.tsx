import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

interface ServicesProps {
  onServiceClick?: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section className="py-32 bg-p2p-black text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Full-Stack <br /> Creative Suite.
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-12">
                We integrate high-end production with cross-cultural strategy. A seamless workflow from New York to Shanghai.
              </p>
              <div className="w-16 h-[1px] bg-p2p-accent"></div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  onClick={() => onServiceClick && onServiceClick(service.id)}
                  className="group py-12 flex flex-col md:flex-row md:items-start gap-6 hover:bg-white/5 px-4 -mx-4 transition-colors duration-500 cursor-pointer"
                >
                  <span className="text-xs font-mono text-gray-600 pt-2">{service.id}</span>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md group-hover:text-gray-200 transition-colors">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};