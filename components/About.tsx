import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="bg-p2p-white text-p2p-black">
      {/* Intro Section - Typographic & Minimal */}
      <div className="py-32 md:py-48 max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="max-w-6xl">
          
          <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-12 flex items-center gap-4">
             <span className="w-8 h-[1px] bg-black"></span> 
             The Studio
          </h2>
          
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-16 leading-[0.95] tracking-tight">
            We bridge <br/> 
            New York <span className="italic text-gray-400 font-light">&</span> Asia.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-lg md:text-xl font-light leading-relaxed text-gray-800">
             <div>
                {/* Text removed per request for minimalism */}
                <p className="mb-6 font-serif italic text-2xl text-gray-400">
                   Creative Production.
                </p>
             </div>
             
             <div className="flex flex-col justify-between">
                
                {/* Minimal Stats */}
                <div className="mt-12 flex gap-16 border-t border-black/10 pt-8">
                  <div>
                    <span className="block text-3xl md:text-4xl font-serif">NYC</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">HQ</span>
                  </div>
                  <div>
                    <span className="block text-3xl md:text-4xl font-serif">Global</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Scale</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};