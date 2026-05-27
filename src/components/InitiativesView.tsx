/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Shield, Calendar, Landmark, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const InitiativesView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in" id="current-initiatives">
      
      {/* Editorial Title Block / Headings */}
      <div className="border-b border-zinc-200 pb-10 mb-12">
        <span className="font-mono text-xs text-sky-850 font-bold uppercase tracking-widest block mb-3">
          CASS LAB // RESEARCH
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Research Overview
        </h1>
        <p className="mt-4 text-zinc-650 font-sans leading-relaxed text-sm md:text-base max-w-3xl">
          CASS Lab sits at the intersection of historical analysis, environmental change, and contemporary international policy. Our primary research focus is tracing how regional scientific knowledge shapes geopolitical relationships, ecological policies, and global governance in Asia.
        </p>
      </div>

      {/* Main Single Research Initiative Showcase */}
      <div className="space-y-12">
        
        {/* Section title */}
        <div>
          <h2 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest block mb-6">
            Active Research Initiative
          </h2>
        </div>

        {/* Highlighted Banner Board */}
        <div className="border border-sky-900/10 bg-sky-50/10 hover:border-sky-900/20 transition-all p-6 md:p-10 rounded-none relative overflow-hidden" id="project-korea-china-security">
          
          {/* Subtle design accent line on left */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-sky-900" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side column: Main Title, Badge and Period */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] bg-sky-900 text-white px-2.5 py-1 uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Shield size={11} /> ACTIVE PROJECT
                </span>
                <span className="font-mono text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                  3-YEAR MULTI-YEAR RESEARCH PROGRAM
                </span>
              </div>

              <div className="space-y-4">
                <span className="text-zinc-400 font-mono text-[11px] font-bold block uppercase tracking-wide">
                  PROJECT TITLE
                </span>
                <h3 className="font-serif text-2xl md:text-3.5xl font-normal text-zinc-900 leading-tight">
                  한중 과학기술 협력과 연구안보
                </h3>
                <h4 className="font-sans text-sm md:text-base font-medium text-zinc-500 italic">
                  (Korea-China Scientific and Technological Cooperation and Research Security)
                </h4>
              </div>

              {/* Program Metadata Deck */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1">
                    <Landmark size={11} className="text-sky-850" /> Funding Agency
                  </span>
                  <p className="font-sans text-xs font-semibold text-zinc-805 leading-normal">
                    Ministry of Science and ICT (과학기술정보통신부) — Global Research Security Policy Support Center (글로벌 연구안보 정책지원센터)
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1">
                    <Calendar size={11} className="text-sky-850" /> Project Period
                  </span>
                  <p className="font-sans text-xs font-semibold text-zinc-800">
                    2026 – 2028
                  </p>
                </div>

              </div>

            </div>

            {/* Right side column: Detailed Editorial Summary Card */}
            <div className="lg:col-span-5 bg-white border border-zinc-200 p-6 md:p-8 space-y-4.5 shadow-2xs">
              
              <div className="border-b border-zinc-150 pb-3">
                <h4 className="font-mono text-[11px] font-bold text-sky-850 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen size={13} /> Executive Summary
                </h4>
              </div>

              <p className="font-sans text-xs md:text-sm text-zinc-650 leading-relaxed">
                This foundational research project systematically collects and analyzes domestic and global S&T cooperation patterns across Northeast and Southeast Asia to establish robust risk profiles and collaborative guidelines. 
              </p>
              
              <p className="font-sans text-xs md:text-sm text-zinc-650 leading-relaxed font-normal">
                By building an integrated conceptual framework that maps cooperative networks against modern research security demands, the project provides actionable policies and practical checklists for academic and industrial international joint ventures.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/team')}
                  className="cursor-pointer font-mono text-[10px] font-bold text-zinc-900 border-b-2 border-sky-800 hover:text-sky-950 transition-colors pb-0.5 flex items-center gap-2 uppercase tracking-wider"
                  id="btn-view-research-team"
                >
                  Meet Project Researchers <ArrowRight size={11} className="text-sky-850" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
