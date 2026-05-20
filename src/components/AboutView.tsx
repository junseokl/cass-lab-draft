/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Award, BookOpen, ShieldAlert, FileText, Landmark, Key } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in" id="about-portal-page">
      
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-12 mb-16">
        <span className="font-mono text-xs text-zinc-550 uppercase tracking-widest block mb-3">
          CASS Laboratory // Context & Institutional Mission
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          About the Laboratory
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base md:text-lg max-w-2xl">
          The Chinese and Asian Science Studies (CASS) Laboratory is an academic research center examining the historical, geopolitical, and environmental policies of greater Asia.
        </p>
      </div>

      {/* Core Academic Charter & Thesis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Academic Mission Statement */}
        <div className="lg:col-span-7 space-y-8 select-text">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-zinc-900 font-medium font-serif leading-snug">
              Examining the Interfaces of Science, Statecraft, and Environment in Greater Asia
            </h2>
            <p className="font-sans text-sm text-zinc-650 leading-relaxed">
              Established in 2018 led by Dr. Liang Chen, the CASS Lab was founded to explore the historical pathways of science and public health in East and Southeast Asia. Our work analyzes policy transitions, environmental transformations, and public health setups, bridging historical archival research with modern digitized database cataloging.
            </p>
            <p className="font-sans text-sm text-zinc-650 leading-relaxed">
              The CASS Lab examines how science and technology arrived in the greater Asia, how they helped shape the region’s industrial and post-industrial modernities, and where they may be leading Asian societies today. By reviewing diplomatic journals, planning blueprints, and science ministries correspondence registries, we reconstruct transnational exchanges that defined twentieth-century Asian societies.
            </p>
          </div>

          {/* Three Pillars Section */}
          <div className="pt-6 border-t border-zinc-150">
            <h3 className="font-serif text-lg font-bold text-zinc-900 mb-6 uppercase tracking-tight">Primary Research Disciplines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
                <span className="font-mono text-xs font-bold text-zinc-900 block uppercase">
                  History of Medicine & Public Health
                </span>
                <p className="font-sans text-xs text-zinc-550 leading-relaxed">
                  Analyzing international sanitary campaigns, public hygiene boards, and safe medicine integrations inside mid-century rural administrations.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-zinc-900 pl-4">
                <span className="font-mono text-xs font-bold text-zinc-900 block uppercase">
                  Environmental & Hydrologic Policy
                </span>
                <p className="font-sans text-xs text-zinc-550 leading-relaxed">
                  Tracing state-led water engineering networks, forest protection regulations, and resource policy changes across maritime and continental waterways.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Quantified Statistics Sidebar */}
        <div className="lg:col-span-5 bg-zinc-950 text-white p-8 space-y-8 relative overflow-hidden">
          {/* Decorative subtle visual grid */}
          <div className="absolute right-[-40px] bottom-[-40px] h-48 w-48 border border-zinc-900 rotate-12 opacity-15 pointer-events-none" />

          <div className="border-b border-zinc-800 pb-4">
            <span className="font-mono text-[10px] text-zinc-500 uppercase">LABORATORY INDEX</span>
            <h3 className="font-serif text-lg font-bold mt-1 text-zinc-200">System Metrics</h3>
          </div>

          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            
            <div className="space-y-1">
              <span className="font-serif text-3xl font-extralight text-emerald-400 block tracking-tight">2018</span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                ESTABLISHED
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-3xl font-extralight text-zinc-100 block tracking-tight">12+</span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                RESEARCH SCHEMES
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-3xl font-extralight text-zinc-100 block tracking-tight">10.2K</span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                DIGITIZED LOGS
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-serif text-3xl font-extralight text-emerald-400 block tracking-tight">100%</span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                OPEN ARCHIVES
              </span>
            </div>

          </div>

          <div className="border-t border-zinc-800 pt-5 space-y-2.5 font-mono text-[11px] text-zinc-400">
            <div className="flex justify-between">
              <span>National Studies funding:</span>
              <span className="text-zinc-100 font-bold">#CASS-HEALTH-2026</span>
            </div>
            <div className="flex justify-between">
              <span>Primary Press Partner:</span>
              <span className="text-emerald-400 font-bold">MIT Press / Asian Studies Org</span>
            </div>
          </div>

        </div>

      </div>

      {/* Structured Lab History Timeline & Affiliates Section */}
      <div className="border-t border-zinc-200 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Milestone Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block font-bold">
            HISTORICAL TIMELINE & CORE PHASES
          </span>
          <h3 className="font-serif text-2xl text-zinc-900">Institutional Milestones</h3>
          
          <div className="space-y-8 relative border-l border-zinc-200 pl-6 mt-6 select-text">
            
            <div className="relative">
              <div className="absolute left-[-29px] top-1.5 h-2 w-2 rounded-full border-2 border-emerald-500 bg-white" />
              <span className="font-mono text-[11px] text-emerald-600 font-bold block mb-1">2024 — PRESENT</span>
              <h4 className="font-serif text-base font-bold text-zinc-900">Southeast Asian Hydrologic and Sanitary Survey</h4>
              <p className="mt-1 text-xs text-zinc-550 leading-relaxed font-sans">
                Expanded operations into coastal Malaysian and Singaporean maritime archives to catalog colonial sanitation laws and historical water system developments.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[-29px] top-1.5 h-2 w-2 rounded-full border-2 border-zinc-400 bg-white" />
              <span className="font-mono text-[11px] text-zinc-500 font-bold block mb-1">2021 — 2023</span>
              <h4 className="font-serif text-base font-bold text-zinc-900">Geopolitical Science Policy Series Release</h4>
              <p className="mt-1 text-xs text-zinc-550 leading-relaxed font-sans">
                Conducted several comparative evaluations on postwar industrial setups in Northeast Asia, leading to the publishing of Dr. Liang Chen’s healthcare and tech policy monographs.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[-29px] top-1.5 h-2 w-2 rounded-full border-2 border-zinc-400 bg-white" />
              <span className="font-mono text-[11px] text-zinc-500 font-bold block mb-1">2018 — 2020</span>
              <h4 className="font-serif text-base font-bold text-zinc-900">Laboratory Inception</h4>
              <p className="mt-1 text-xs text-zinc-550 leading-relaxed font-sans">
                Founding of the CASS office at the Science Studies Center. Initiated partnerships with Asian historic libraries and compiled the core microfilms database.
              </p>
            </div>

          </div>
        </div>

        {/* Right: Academic Cooperations & Physical Access Directions */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Institutional Affiliates */}
          <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-5 rounded-none">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <Landmark size={15} className="text-zinc-900 shrink-0" />
              <span className="font-mono text-xs font-bold text-zinc-900 uppercase">
                Consortium Partner Affiliations
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-zinc-650">
              <div className="p-3 bg-white border border-zinc-200">
                <p className="font-semibold text-zinc-950">East Asian History Assoc</p>
                <p className="text-[10px] text-zinc-400 font-mono">Policy Analysis Division</p>
              </div>
              <div className="p-3 bg-white border border-zinc-200">
                <p className="font-semibold text-zinc-950">Southeast Asia Alliance</p>
                <p className="text-[10px] text-zinc-400 font-mono">Digital Archive Program</p>
              </div>
              <div className="p-3 bg-white border border-zinc-200">
                <p className="font-semibold text-zinc-950">Science Studies Center</p>
                <p className="text-[10px] text-zinc-400 font-mono">Academic Archive Wing</p>
              </div>
              <div className="p-3 bg-white border border-zinc-200">
                <p className="font-semibold text-zinc-950">East Asian Studies Press</p>
                <p className="text-[10px] text-zinc-400 font-mono">History of Science Board</p>
              </div>
            </div>
          </div>

          {/* Physical Access Protocols */}
          <div className="border border-zinc-200 bg-white p-6 space-y-4 rounded-none">
            <div className="flex items-center gap-2 text-zinc-900">
              <Key size={14} className="text-emerald-500 shrink-0" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Archival Visitation Protocols</span>
            </div>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed font-sans">
              The laboratory microfiche libraries, translated letters list, and physical environmental maps are stored on the 4th Floor of the North Wing, Science Studies Center building. 
            </p>
            <div className="border border-zinc-200 bg-zinc-50 p-3.5 font-mono text-[10px] text-zinc-550 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert size={14} className="text-zinc-500 shrink-0 mt-0.5" />
              <span>
                <strong>Access Requirements:</strong> Visiting scholars must submit their abstract statement via the Academic Contact portal at least 14 days before visiting.
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
