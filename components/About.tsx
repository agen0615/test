import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-32 bg-p2p-white text-p2p-black">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Image Grid */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="mt-12">
                   <img 
                    src="https://images.unsplash.com/photo-1542038784424-48ed3f413994?q=80&w=1894&auto=format&fit=crop" 
                    alt="Studio" 
                    className="w-full aspect-[3/4] object-cover grayscale"
                  />
                </div>
                <div>
                   <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" 
                    alt="Fashion Shoot" 
                    className="w-full aspect-[3/4] object-cover grayscale"
                  />
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-p2p-black text-white rounded-full flex items-center justify-center p-6 text-center z-10 mix-blend-multiply">
                <p className="font-serif italic text-xl">Since 2024</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">The Studio</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Bridging NYC <br/> <span className="italic text-gray-400">&</span> Asia
            </h3>
            
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-800 max-w-xl">
              <p>
                Pair to Pair is not just a production house; we are cultural architects. Based in New York, we specialize in cross-cultural storytelling that resonates in both the US and Asian markets.
              </p>
              <p>
                Our “production-first” methodology—from creative direction to distribution—ensures that every frame we shoot is optimized for its final platform, be it a billboard in SoHo or a feed in Shanghai.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-black/10 pt-12">
              <div>
                <span className="block text-5xl font-serif mb-2">50+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Global Brands</span>
              </div>
              <div>
                <span className="block text-5xl font-serif mb-2">360°</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Service</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};