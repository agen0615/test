import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { ServiceDetail } from './components/ServiceDetail';
import { PageState } from './types';
import { ArrowDown } from 'lucide-react';
import { projects } from './data/projects';
import { services } from './data/services';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Helper to handle scrolling behavior on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    setCurrentPage(PageState.PROJECT_DETAIL);
  };

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setCurrentPage(PageState.SERVICE_DETAIL);
  };

  const handleNextProject = () => {
    if (!selectedProjectId) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProjectId);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProjectId(projects[nextIndex].id);
  };

  const getSelectedProject = () => {
    return projects.find(p => p.id === selectedProjectId) || projects[0];
  };

  const getSelectedService = () => {
    return services.find(s => s.id === selectedServiceId) || services[0];
  };

  // Helper to render current view
  const renderContent = () => {
    switch(currentPage) {
      case PageState.PROJECT_DETAIL:
        return (
          <ProjectDetail 
            project={getSelectedProject()} 
            onBack={() => setCurrentPage(PageState.WORK)}
            onNext={handleNextProject}
          />
        );
      case PageState.SERVICE_DETAIL:
        return (
          <ServiceDetail 
            service={getSelectedService()}
            onBack={() => setCurrentPage(PageState.ABOUT)} // Returns to About page where services are listed
          />
        );
      case PageState.WORK:
        return (
          <div className="animate-fade-in pt-32">
             <Portfolio onProjectClick={handleProjectClick} />
          </div>
        );
      case PageState.ABOUT:
        return (
          <div className="animate-fade-in pt-32">
            <About />
            <Services onServiceClick={handleServiceClick} />
          </div>
        );
      case PageState.CONTACT:
        return (
          <div className="animate-fade-in pt-32">
            <Contact />
          </div>
        );
      case PageState.HOME:
      default:
        return (
          <main className="animate-fade-in">
            {/* Artistic Hero Section */}
            <section className="relative h-screen w-full flex items-center overflow-hidden bg-p2p-black">
              {/* Background with grain/texture overlay could go here */}
              <div className="absolute inset-0 z-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Background" 
                  className="w-full h-full object-cover grayscale brightness-50 scale-105 animate-[fadeIn_3s_ease-out_forwards]"
                />
              </div>
              
              <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 h-full items-end pb-32 md:pb-40">
                
                {/* Hero Text */}
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                  <div className="reveal-container">
                    <h2 className="text-white text-xs md:text-sm uppercase tracking-[0.4em] mb-4 reveal-text delay-100 text-p2p-gray">
                      Creative Production Studio
                    </h2>
                  </div>
                  <div className="reveal-container">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] reveal-text delay-200">
                      Visuals
                    </h1>
                  </div>
                  <div className="reveal-container">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] reveal-text delay-300 italic">
                      That Transcend
                    </h1>
                  </div>
                  <div className="reveal-container">
                     <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] reveal-text delay-500">
                      Borders.
                    </h1>
                  </div>
                </div>

                {/* Subtext / CTA */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-end">
                   <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                        Pair to Pair connects brands with global audiences through high-fidelity aesthetics, cultural strategy, and production-first methodology.
                      </p>
                      <button 
                        onClick={() => setCurrentPage(PageState.WORK)}
                        className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs hover:text-gray-300 transition-colors"
                      >
                        View Cases <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
                      </button>
                   </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
                <ArrowDown className="text-white/30 animate-bounce" size={24} />
              </div>
            </section>
            
            <Portfolio onProjectClick={handleProjectClick} />
            <Services onServiceClick={handleServiceClick} />
            <About />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-p2p-black text-white font-sans selection:bg-white selection:text-black">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      {renderContent()}
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;