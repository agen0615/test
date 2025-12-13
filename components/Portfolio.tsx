import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ArrowUp } from 'lucide-react';

interface PortfolioProps {
  onProjectClick?: (id: number) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const INITIAL_COUNT = 6;
  const [filter, setFilter] = useState<'All' | 'Fashion' | 'Commercial' | 'Social' | 'Event'>('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT); 

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_COUNT);
    const section = document.getElementById('portfolio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isExternalEmbed = (url?: string) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('drive.google.com');
  };

  return (
    <section id="portfolio" className="py-24 bg-p2p-black min-h-screen">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Header - Industrial & Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white mb-2">Selected Works</h2>
            <h3 className="text-xl md:text-2xl font-serif text-gray-400 italic">
               Archive {new Date().getFullYear()}
            </h3>
          </div>
          
          <div className="flex gap-8 mt-6 md:mt-0">
            {['All', 'Fashion', 'Commercial', 'Social', 'Event'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat as any); setVisibleCount(INITIAL_COUNT); }}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all hover:text-white ${filter === cat ? 'text-white border-b border-white' : 'text-gray-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout (CSS Columns) for Mixed Aspect Ratios */}
        <div className="columns-1 md:columns-2 gap-12 space-y-24">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              onClick={() => onProjectClick && onProjectClick(project.id)}
              className="group cursor-pointer block break-inside-avoid mb-24"
            >
              {/* Media Container - Dynamic Aspect Ratio */}
              <div className={`relative overflow-hidden w-full bg-gray-900 mb-6 ${project.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'}`}>
                {/* 
                  Logic: 
                  1. If it's a file video (mp4), try to auto-play muted in grid for effect.
                  2. If it's YouTube or Google Drive, show the static image cover (autoplay iframes are too heavy for grids).
                  3. If no video, show image.
                */}
                {project.videoUrl && !isExternalEmbed(project.videoUrl) ? (
                   <video 
                     src={project.videoUrl}
                     poster={project.image}
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="auto"
                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                     onError={(e) => {
                       console.warn("Grid video failed, fallback handled by poster");
                     }}
                   />
                ) : (
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                   />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Info - Strict Alignment */}
              <div className="flex flex-col gap-1">
                 <div className="flex justify-between items-baseline border-t border-white/10 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium group-hover:text-p2p-accent transition-colors">
                      {project.client}
                    </span>
                    <span className="text-[10px] text-gray-600 font-mono">
                      {project.year}
                    </span>
                 </div>
                 
                 <div className="flex justify-between items-start mt-1">
                   <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gray-300 transition-colors">
                     {project.title}
                   </h3>
                   <span className="text-[10px] uppercase tracking-wider text-gray-600 hidden md:block border border-white/10 px-2 py-1 rounded-full">
                     {project.category}
                   </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More & Collapse Controls */}
        <div className="mt-32 flex flex-col items-center gap-6">
            
            {/* Show Load More if there are more items to see */}
            {visibleCount < filteredProjects.length && (
                <button 
                  onClick={handleLoadMore}
                  className="group relative px-8 py-3 overflow-hidden rounded-full bg-transparent border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] hover:border-white transition-colors"
                >
                  <span className="relative z-10">Load More</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0"></div>
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">Load More</span>
                </button>
            )}

            {/* Show Collapse if we've expanded beyond initial count */}
            {visibleCount > INITIAL_COUNT && (
                 <button 
                  onClick={handleCollapse}
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white flex items-center gap-2 transition-colors py-2 border-b border-transparent hover:border-white/50"
                >
                  Collapse <ArrowUp size={12} />
                </button>
            )}
            
            {/* Status Text if everything is loaded and we have no collapse option (i.e. list is short) */}
            {visibleCount >= filteredProjects.length && visibleCount <= INITIAL_COUNT && filteredProjects.length > 0 && (
               <div className="text-gray-700 text-[10px] uppercase tracking-[0.2em]">
                  End of Archive
               </div>
            )}
        </div>
        
      </div>
    </section>
  );
};