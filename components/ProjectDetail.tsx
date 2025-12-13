import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, X, Maximize } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext: () => void;
}

// Helper to extract YouTube ID
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Helper to extract Vimeo ID
const getVimeoId = (url: string) => {
  const regExp = /vimeo\.com\/([0-9]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Helper to extract Google Drive ID
const getGoogleDriveId = (url: string) => {
  const regExp = /\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Helper still useful for gallery items mixed array
const isVideoFile = (url: string) => /\.(mp4|webm|mov)($|\?)/i.test(url);

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const isPortrait = project.orientation === 'portrait';
  
  // Detect Video Type
  const youtubeId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;
  const vimeoId = project.videoUrl ? getVimeoId(project.videoUrl) : null;
  const googleDriveId = project.videoUrl ? getGoogleDriveId(project.videoUrl) : null;

  const handleFullscreen = () => {
    if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    }
  };

  return (
    <div className="bg-p2p-white text-p2p-black min-h-screen animate-fade-in relative z-40 pb-20">
      
      {/* Navigation Bar for Project */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} /> Back
        </button>
        
        <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold">
          {project.title}
        </div>

        <button 
           onClick={onBack}
           className="pointer-events-auto md:hidden p-2 bg-white text-black rounded-full"
        >
           <X size={16} />
        </button>
      </div>

      {/* Hero Section - Smart Layout based on Orientation */}
      <header className="relative w-full h-[85vh] overflow-hidden bg-black flex justify-center items-center">
        
        {/* Background Layer (Blurred for Portrait, Hidden for Landscape) */}
        {isPortrait && (
            <div className="absolute inset-0 opacity-30 blur-3xl scale-110 pointer-events-none">
                 <img src={project.image} alt="" className="w-full h-full object-cover" />
            </div>
        )}

        {/* Main Content Layer */}
        <div className={`relative z-10 ${isPortrait ? 'h-full w-auto aspect-[9/16] py-12' : 'w-full h-full'}`}>
            {youtubeId ? (
              // YouTube Player Support
              <iframe
                className={`w-full h-full ${isPortrait ? 'shadow-2xl' : ''}`}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : vimeoId ? (
              // Vimeo Player Support (New)
              <iframe 
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`} 
                className={`w-full h-full ${isPortrait ? 'shadow-2xl' : ''}`}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Vimeo Video"
              ></iframe>
            ) : googleDriveId ? (
              // Google Drive Player Support
              <iframe 
                src={`https://drive.google.com/file/d/${googleDriveId}/preview`} 
                className={`w-full h-full ${isPortrait ? 'shadow-2xl' : ''}`}
                allow="autoplay"
                title="Google Drive Video"
              ></iframe>
            ) : project.videoUrl ? (
              // Standard MP4 Video Player with Custom Fullscreen
              <div className="relative w-full h-full group">
                  <video 
                    ref={videoRef}
                    src={project.videoUrl}
                    poster={project.image}
                    controls={true}
                    autoPlay
                    muted
                    loop
                    playsInline
                    crossOrigin="anonymous"
                    preload="metadata"
                    className={`w-full h-full ${isPortrait ? 'object-contain shadow-2xl' : 'object-cover opacity-90'}`}
                  />
                  {/* Custom Fullscreen Trigger Overlay */}
                  <button
                    onClick={handleFullscreen}
                    className="absolute bottom-6 right-6 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-black z-30 pointer-events-auto shadow-lg"
                    title="Fullscreen"
                  >
                    <Maximize size={20} />
                  </button>
              </div>
            ) : (
              // Static Image Fallback
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full ${isPortrait ? 'object-contain shadow-2xl' : 'object-cover opacity-90'}`}
              />
            )}
        </div>
        
        {/* Hero Overlay Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
           <div className="max-w-[1920px] mx-auto">
              <h1 className={`${isPortrait ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-5xl md:text-8xl lg:text-9xl'} font-serif text-white leading-none mb-4 animate-reveal-up`}>
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80 animate-reveal-up delay-100">
                 <span className="text-xs uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full">{project.category}</span>
                 <span className="text-xs uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full">{project.year}</span>
              </div>
           </div>
        </div>
      </header>

      {/* Case Study Content */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Project Data / Credits */}
          <div className="lg:col-span-4 space-y-12">
             <div className="border-t border-black/10 pt-4">
               <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6">Client</h3>
               <p className="text-xl font-serif">{project.client}</p>
             </div>

             <div className="border-t border-black/10 pt-4">
               <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6">Scope</h3>
               <p className="text-lg text-gray-800">
                 Creative Direction, Production, <br/> Post-Production
               </p>
             </div>

             <div className="border-t border-black/10 pt-4">
               <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6">Credits</h3>
               <ul className="space-y-4">
                 {project.credits.map((credit, idx) => (
                   <li key={idx} className="grid grid-cols-2 gap-4">
                     <span className="text-xs text-gray-400 uppercase tracking-wider">{credit.role}</span>
                     <span className="text-xs font-bold uppercase tracking-wider">{credit.name}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-8">
             <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12">
               {project.solution}
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 leading-relaxed font-light text-lg">
                <p>{project.challenge}</p>
                <p>{project.description}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Grid Layout */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {project.gallery.map((media, idx) => {
            // Logic for 3 images: First image spans 2 cols, others span 1.
            const isFirst = idx === 0;
            return (
              <div 
                key={idx} 
                className={`relative w-full overflow-hidden bg-gray-100 ${isFirst ? 'md:col-span-2' : ''}`}
              >
                 {isVideoFile(media) ? (
                    <video 
                      src={media}
                      controls 
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-cover block"
                    />
                 ) : (
                    <img 
                      src={media} 
                      alt={`Gallery ${idx}`} 
                      className="w-full h-auto object-cover block hover:scale-[1.02] transition-transform duration-[1.5s]"
                    />
                 )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="mt-32 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div 
          onClick={onNext}
          className="border-t border-black/10 pt-16 cursor-pointer group"
        >
          <div className="flex justify-between items-center">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.4em] mb-4 text-gray-500">Next Case</span>
              <h2 className="text-4xl md:text-7xl font-serif italic group-hover:text-p2p-accent transition-colors duration-500">
                View Next Project
              </h2>
            </div>
            <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
               <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};