/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Database, Users, Info, Mail } from 'lucide-react';

export const HomeView: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 animate-fade-in flex flex-col justify-center flex-1">
      
      {/* Principal Landing Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="home-main-section">
        
        {/* Editorial Academic Welcoming Section */}
        <div className="lg:col-span-7 space-y-8" id="home-welcome-section">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-800 font-mono text-[11px] tracking-wider uppercase font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600 animate-pulse" />
            CHINESE & ASIAN SCIENCE STUDIES
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.125]" id="welcome-heading">
            Welcome to the Chinese and Asian Science Studies Lab
          </h1>
          
          <p className="text-base text-zinc-600 font-sans leading-relaxed mt-4" id="welcome-intro">
            We examine how science, technology, medicine, and environment arrived in the greater Asia and shape the region's modern industrial sociology. Under the direction of Dr. Jongsik Christian Yi, the CASS Lab bridges historical archivist traditions with computational analysis, tracing the transnational knowledge systems that continue to define Asian modernity.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => handleNavClick('/research')}
              className="cursor-pointer inline-flex items-center gap-2.5 bg-sky-900 border border-sky-900 text-white hover:bg-sky-950 transition-all duration-300 px-6 py-3.5 font-mono text-xs tracking-wider font-bold uppercase rounded-none"
              id="home-btn-research"
            >
              Explore Research <ArrowRight size={14} />
            </button>
            
            <button
              onClick={() => handleNavClick('/about')}
              className="cursor-pointer inline-flex items-center gap-2.5 border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 bg-white transition-all duration-300 px-6 py-3.5 font-mono text-xs tracking-wider font-bold uppercase rounded-none"
              id="home-btn-about"
            >
              Our Pedagogy
            </button>
          </div>
        </div>

        {/* Director's Profile & Note Panel */}
        <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 p-6 md:p-8" id="home-directors-note-section">
          <div className="space-y-5">
            <div className="flex gap-4 items-center">
              <div className="h-16 w-16 grayscale hover:grayscale-0 transition-all rounded-xs overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQAks9MffbQknJ_G9QxaxSIvFpPBv0hfHt0_AnX3Q0sNped8fyo3U39MACf3RquWCsKf98JY1M_GT1kEq7FZLZ3VsKdDzdJ3wnhov-_ykyVVDs3pLvqol3yJn6Pk6G3_VnrwayFrgt1xhxKjersTdIyxkGWVCUY5ptbtxuwnIFv1ljGkBm3LH7ndiJOpwE8y1eveQl8oKyKqNTyg1h8EUpttEhm0wXvFnSru6pSlDOhrnma74jVwWYRgovBzvG7g7nXNxO1wTSj8A"
                  alt="Dr. Jongsik Christian Yi"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-zinc-900">Dr. Jongsik Christian Yi</h4>
                <p className="font-mono text-[9px] uppercase tracking-wider text-sky-850 font-bold">Director of CASS Lab</p>
                <p className="font-sans text-[10px] text-zinc-450 font-medium">Assistant Professor, KAIST STP</p>
              </div>
            </div>
            
            <div className="border-t border-zinc-200 pt-4 font-serif text-xs md:text-sm text-zinc-650 leading-relaxed italic relative">
              "At CASS Lab, we bridge critical STS questions with meticulous historical inquiry. Our research traces how veterinary networks, livestock husbandry, and energy systems shaped Asian modernity. We are committed to fostering a rigorous, collaborative research environment that combines digital archiving with postcolonial studies."
            </div>
            
            <div className="flex justify-between items-center pt-2 text-[9px] font-mono text-zinc-400">
              <span>CASS_DOSSIER: #LC-402</span>
              <span className="font-bold text-sky-800">— DIRECTOR'S NOTE</span>
            </div>
          </div>
        </div>

      </div>

      {/* Structured Minimal Core Portals Grid */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="home-portals-grid">
        
        {/* Portal 1: Research Initiatives */}
        <div 
          onClick={() => handleNavClick('/research')}
          className="group cursor-pointer border border-zinc-150 bg-white/50 p-6 hover:border-sky-900 hover:bg-sky-50/20 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
          id="portal-research"
        >
          <div className="space-y-3">
            <BookOpen className="text-sky-800 transition-transform group-hover:scale-105" size={20} />
            <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-sky-900 transition-colors">
              Research Initiatives
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Transnational technology transfers, environmental hydro-systems, and public healthcare history.
            </p>
          </div>
          <span className="font-mono text-[10px] text-sky-800 font-bold tracking-wider mt-4 block uppercase group-hover:translate-x-1 transition-transform">
            View Initiatives →
          </span>
        </div>

        {/* Portal 2: Publications Database */}
        <div 
          onClick={() => handleNavClick('/publications')}
          className="group cursor-pointer border border-zinc-150 bg-white/50 p-6 hover:border-sky-900 hover:bg-sky-50/20 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
          id="portal-publications"
        >
          <div className="space-y-3">
            <Database className="text-sky-800 transition-transform group-hover:scale-105" size={20} />
            <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-sky-900 transition-colors">
              Publications Database
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Peer-reviewed journals, science policy reports, books, and monograph catalog.
            </p>
          </div>
          <span className="font-mono text-[10px] text-sky-800 font-bold tracking-wider mt-4 block uppercase group-hover:translate-x-1 transition-transform">
            Browse Publications →
          </span>
        </div>

        {/* Portal 3: Our Pedagogy & About */}
        <div 
          onClick={() => handleNavClick('/about')}
          className="group cursor-pointer border border-zinc-150 bg-white/50 p-6 hover:border-sky-900 hover:bg-sky-50/20 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
          id="portal-about"
        >
          <div className="space-y-3">
            <Info className="text-sky-800 transition-transform group-hover:scale-105" size={20} />
            <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-sky-900 transition-colors">
              Our Pedagogy
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Discover CASS Lab's primary research disciplines, established timelines, and open access ethos.
            </p>
          </div>
          <span className="font-mono text-[10px] text-sky-800 font-bold tracking-wider mt-4 block uppercase group-hover:translate-x-1 transition-transform">
            Read Pedagogy →
          </span>
        </div>

        {/* Portal 4: Roster & Directory */}
        <div 
          onClick={() => handleNavClick('/team')}
          className="group cursor-pointer border border-zinc-150 bg-white/50 p-6 hover:border-sky-900 hover:bg-sky-50/20 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
          id="portal-team"
        >
          <div className="space-y-3">
            <Users className="text-sky-800 transition-transform group-hover:scale-105" size={20} />
            <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-sky-900 transition-colors">
              Scholarly Assembly
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Meet our team of dedicated historians, research candidates, and archival transcribers.
            </p>
          </div>
          <span className="font-mono text-[10px] text-sky-800 font-bold tracking-wider mt-4 block uppercase group-hover:translate-x-1 transition-transform">
            Meet the Team →
          </span>
        </div>

      </div>

    </div>
  );
};
