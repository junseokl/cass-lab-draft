/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, ExternalLink, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-100 border-t border-zinc-900 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Editorial Lab Descriptor */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 border-l border-t border-zinc-100">
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-sky-500" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight">CASS Lab</span>
            </div>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed mt-2">
              Chinese and Asian Science Studies Laboratory. Examining how science, technology, medicine, and environment arrived in the greater Asia and shaped the region’s modern industrial sociology.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-800 text-sky-400 px-2 py-0.5 uppercase">
                INST_ID: RM402-CAB
              </span>
              <span className="inline-flex items-center text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 uppercase">
                STATUS: DEPLOYED
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-4">STRUCTURE</h3>
            <ul className="space-y-2.5 text-sm font-mono text-zinc-400">
              <li>
                <button onClick={() => handleNavClick('/research')} className="hover:text-sky-400 transition-colors focus:outline-none text-left animate-fade-in" id="footer-link-research">
                  » Current Initiatives
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/publications')} className="hover:text-sky-400 transition-colors focus:outline-none text-left animate-fade-in" id="footer-link-publications">
                  » Publications Database
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/teaching')} className="hover:text-sky-400 transition-colors focus:outline-none text-left animate-fade-in" id="footer-link-teaching">
                  » Courses & Instruction
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/team')} className="hover:text-sky-400 transition-colors focus:outline-none text-left animate-fade-in" id="footer-link-team">
                  » Intellectual Authority / Roster
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/about')} className="hover:text-sky-400 transition-colors focus:outline-none text-left animate-fade-in" id="footer-link-about">
                  » About / Pedagogy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Office Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">OFFICE HEADQUARTERS</h3>
            <div className="space-y-3 font-sans text-sm text-zinc-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="text-sky-500 shrink-0 mt-0.5" size={16} />
                <span>
                  Room 402, North Wing,<br />
                  Computational Arts Building,<br />
                  Academic District
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="text-zinc-500 shrink-0" size={16} />
                <a href="mailto:director@casslab.edu" className="hover:text-sky-400 transition-colors">
                  director@casslab.edu
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Fingerprint className="text-zinc-500 shrink-0" size={16} />
                <span className="font-mono text-xs text-zinc-500">ORCID ID: 0000-0002-3948-1834</span>
              </div>
            </div>
          </div>

          {/* Column 4: External Standards & Credentials */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-4">AFFILIATIONS</h3>
            <div className="space-y-3 font-mono text-xs text-zinc-500">
              <p className="leading-relaxed font-sans">
                Research funded in part by national science policy grants, East Asian studies consortium contributions, and public archives digitization partnerships.
              </p>
              <div className="pt-2">
                <a 
                  href="https://orcid.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  ORCID Portal <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs font-mono text-zinc-600">
          <div>
            <span>© 2026 CASS Lab. Directed by Dr. Jongsik Christian Yi.</span>
            <span className="hidden sm:inline mx-3 text-zinc-800">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sky-500/60 font-medium animate-pulse">● SYSTEMS LIVE</span>
            <span>V4.1.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
