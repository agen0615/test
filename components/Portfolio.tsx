import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';

interface PortfolioProps {
  onProjectClick?: (id: number) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const [filter, setFilter] = useState<'All' | 'Fashion' | 'Commercial' | 'Social' | 'Event'>('All');
  const [visibleCount, setVisibleCount] = useState(4); 

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="py-32 bg-p2p-black min-h-screen border-t border-white/5">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white">
              Curated <span className="italic text-gray-400">Cases</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {['All', 'Fashion', 'Commercial', 'Social', 'Event'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat as any); setVisibleCount(4); }}
                className={`text-xs uppercase tracking-widest transition-all pb-1 ${filter === cat ? 'text-white border-b border-white' : 'text-gray-600 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => onProjectClick && onProjectClick(project.id)}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`} // Staggered layout for artistic feel
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  View Case
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-white/10 pt-6">
                <div>
                   <h3 className="text-3xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                   <p className="text-gray-500 text-sm tracking-wide">{project.client}</p>
                </div>
                <div className="text-right">
                   <span className="block text-xs uppercase tracking-widest text-p2p-accent mb-2">{project.category}</span>
                   <span className="text-xs text-gray-600">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Scalability: Load More */}
        {visibleCount < filteredProjects.length && (
            <div className="mt-40 text-center">
                <button 
                  onClick={handleLoadMore}
                  className="px-12 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                >
                  Explore Archive
                </button>
            </div>
        )}
        
        {/* Message when all projects are loaded */}
        {visibleCount >= filteredProjects.length && filteredProjects.length > 0 && (
           <div className="mt-40 text-center text-gray-600 text-xs uppercase tracking-widest">
              End of Selection
           </div>
        )}
      </div>
    </section>
  );
};