import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, Camera, Palette, Lightbulb } from 'lucide-react';
import { generateCreativeBrief } from '../services/geminiService';
import { AIGeneratedConcept } from '../types';

export const AICreativeDirector: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [vision, setVision] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [concept, setConcept] = useState<AIGeneratedConcept | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !vision) return;

    setIsLoading(true);
    setConcept(null);
    const result = await generateCreativeBrief(brandName, industry, vision);
    setConcept(result);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-p2p-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Input Section */}
          <div>
            <div className="flex items-center gap-2 text-p2p-accent mb-4">
              <Sparkles size={20} />
              <span className="text-sm uppercase tracking-widest font-bold">AI Creative Assistant</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Start Your Vision. <br />
              <span className="text-gray-400">Instantly.</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Not sure where to begin? Use our Gemini-powered creative director to generate a preliminary mood board description and shot list based on Pair to Pair's signature style.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-p2p-accent transition-colors"
                  placeholder="e.g. Neon Nomad"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-p2p-accent transition-colors appearance-none"
                >
                  <option value="">Select Industry</option>
                  <option value="Fashion">Fashion & Apparel</option>
                  <option value="Beauty">Beauty & Skincare</option>
                  <option value="Tech">Technology & Gadgets</option>
                  <option value="Lifestyle">Lifestyle & Home</option>
                  <option value="Food">Food & Beverage</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Project Vision / Goal</label>
                <textarea
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-p2p-accent transition-colors h-32 resize-none"
                  placeholder="e.g. Launching a new streetwear line blending Tokyo street style with NYC grit."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !brandName || !vision}
                className="group flex items-center justify-center gap-3 w-full bg-white text-black py-4 font-bold uppercase tracking-wider hover:bg-p2p-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" /> Generating Concept...
                  </>
                ) : (
                  <>
                    Generate Concept <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Output Section */}
          <div className="bg-black border border-white/10 p-8 md:p-12 min-h-[500px] flex flex-col relative">
            {!concept && !isLoading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-600">
                <Lightbulb size={48} className="mb-4 opacity-20" />
                <p>Your creative brief will appear here.</p>
              </div>
            )}

            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
                <Loader2 size={48} className="text-p2p-accent animate-spin mb-4" />
                <p className="text-sm uppercase tracking-widest text-gray-400">Analyzing brand DNA...</p>
              </div>
            )}

            {concept && (
              <div className="animate-fade-in space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-3xl font-serif text-white mb-2">{concept.conceptTitle}</h3>
                  <div className="flex gap-2 mt-2">
                    {concept.colorPalette.map((color, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
                         <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color.toLowerCase() }}></div>
                         {color}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-p2p-accent font-bold uppercase tracking-wider text-xs mb-3">
                    <Palette size={14} /> Visual Direction
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {concept.visualDirection}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-p2p-accent font-bold uppercase tracking-wider text-xs mb-3">
                    <Camera size={14} /> Suggested Shots
                  </h4>
                  <ul className="space-y-3">
                    {concept.suggestedShotList.map((shot, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-400 group">
                        <span className="text-white/20 font-serif italic">0{idx + 1}</span>
                        <span className="group-hover:text-white transition-colors">{shot}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 italic">
                    *This concept is AI-generated based on Pair to Pair's strategic framework. Contact us to bring this to life.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
