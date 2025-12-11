import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="bg-p2p-white text-p2p-black min-h-screen animate-fade-in relative z-40">
      
      {/* Back Button (Inline) */}
      <div className="pt-32 px-6 md:px-12 max-w-[1920px] mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-p2p-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Works
        </button>
      </div>

      {/* Hero Section */}
      <header className="pb-16 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 items-end">
          <div className="md:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-6 reveal-text">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end pb-2">
            <div className="border-t border-black/20 pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Client</span>
                <span className="text-lg font-serif">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Services</span>
                <span className="text-lg font-serif">{project.category}</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Year</span>
                <span className="text-lg font-serif">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-200">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover animate-reveal-up"
          />
        </div>
      </header>

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
             <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">The Challenge</h3>
             <p className="text-lg leading-relaxed text-gray-800 font-light mb-12">
               {project.challenge}
             </p>
             
             <div className="mt-12">
               <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">Credits</h3>
               <ul className="space-y-4">
                 {project.credits.map((credit, idx) => (
                   <li key={idx} className="flex flex-col">
                     <span className="text-xs text-gray-400 uppercase tracking-wider">{credit.role}</span>
                     <span className="text-sm font-medium">{credit.name}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          <div className="md:col-span-8">
             <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">The Solution</h3>
             <p className="text-2xl md:text-4xl font-serif leading-tight text-black mb-12">
               {project.solution}
             </p>
             <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
               {project.description}
             </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.gallery.map((img, idx) => (
            <div key={idx} className={`relative ${idx === 2 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-[4/5]'} overflow-hidden`}>
               <img 
                 src={img} 
                 alt={`Gallery ${idx}`} 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
               />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer */}
      <section 
        onClick={onNext}
        className="bg-black text-white py-32 px-6 md:px-12 cursor-pointer group hover:bg-p2p-accent transition-colors duration-500"
      >
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <div>
            <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-50">Next Project</span>
            <h2 className="text-5xl md:text-8xl font-serif italic group-hover:translate-x-4 transition-transform duration-500">
              View Next Case
            </h2>
          </div>
          <ArrowRight className="w-12 h-12 md:w-24 md:h-24 opacity-50 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
        </div>
      </section>

    </div>
  );
};