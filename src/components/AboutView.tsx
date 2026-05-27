/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Compass, Layers, Landmark, Network } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in" id="about-portal-page">
      
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-10 mb-16">
        <span className="font-mono text-xs text-sky-800 font-bold uppercase tracking-widest block mb-3">
          CASS LAB // DR. JONGSIK CHRISTIAN YI
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          About the Laboratory
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-sm md:text-base max-w-3xl">
          The Chinese and Asian Science Studies Laboratory (CASS Lab) explores our modern understanding of science and technology by centering Asia as a critical site of historical and contemporary inquiry.
        </p>
      </div>

      {/* Primary Narrative & About */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Main Text block */}
        <div className="lg:col-span-8 space-y-6 select-text">
          <h2 className="font-serif text-xl md:text-2xl text-zinc-900 font-semibold leading-snug">
            Inquiry on Modernity, Tech-Driven Growth, and Planetary Well-Being
          </h2>
          
          <p className="font-sans text-sm md:text-base text-zinc-650 leading-relaxed">
            The Chinese and Asian Science Studies Laboratory (CASS Lab) explores our modern understanding of science and technology by centering Asia as a critical site of historical and contemporary inquiry. We look at countries like China, Japan, and South Korea, analyzing the conditions and limitations of their rapid, technology-driven economic growth.
          </p>
          
          <p className="font-sans text-sm md:text-base text-zinc-650 leading-relaxed">
            Concurrently, we critically reflect on the global distribution of technological benefits and environmental costs. When East Asian nations and Western societies enjoy the fruits of scientific advancement, are the associated burdens, waste, and ecological impacts disproportionately shifted onto regions in Southeast Asia, South Asia, and the Pacific? 
          </p>
          
          <p className="font-sans text-sm md:text-base text-zinc-650 leading-relaxed font-medium text-zinc-800 border-l-2 border-sky-800 pl-4 bg-sky-50/20 py-1">
            CASS Lab seeks to address these systemic inequalities. Our ultimate mission is to build regional S&T literacy so that we can understand, moderate, and self-regulate our technological power for the well-being of both humanity and our planet.
          </p>
        </div>

        {/* Short Colophon Box */}
        <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200 p-6 md:p-8 space-y-6">
          <div className="border-b border-zinc-250 pb-3">
            <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">MISSION STATEMENT</span>
            <h3 className="font-serif text-base font-bold text-zinc-800 mt-1">Foundational Ethics</h3>
          </div>
          <div className="space-y-4 font-sans text-xs text-zinc-600 leading-relaxed">
            <p>
              We believe academic inquiry should contribute directly to environmental stewardship and a balanced evaluation of global technological flow.
            </p>
            <p className="font-mono text-[10px] text-zinc-500 italic">
              "Understanding and self-regulating technological power remains the central challenge of the Anthropocene in greater Asia."
            </p>
          </div>
          <div className="border-t border-zinc-200 pt-3 flex justify-between items-center text-[10px] font-mono text-zinc-400">
            <span>CASS_DOC: #ABOUT</span>
            <span className="font-bold text-sky-800">CASS LAB</span>
          </div>
        </div>

      </div>

      {/* Disciplinary & Geographical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-200">
        
        {/* Pillar 1: Disciplinary Approaches */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Layers size={18} className="text-sky-800" />
            <h2 className="font-serif text-xl font-bold text-zinc-900 tracking-tight">
              Disciplinary Approaches
            </h2>
          </div>
          <p className="font-sans text-xs text-zinc-500 leading-relaxed">
            We approach our research through a multi-faceted interdisciplinary framework that integrates historical methodologies with modern sociocultural studies:
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'History of Science, Technology, Environment, and Medicine (HSTEM)',
                desc: 'Investigating long-term developments in healthcare systems, ecological shifts, and state engineering paradigms across several eras.'
              },
              {
                title: 'Science and Technology Studies (STS) / Science, Technology, and Society',
                desc: 'Reflecting on the social conditions, institutional values, and co-production networks that build modern technologies.'
              },
              {
                title: 'Science, Technology, and Public Policy (STPP)',
                desc: 'Anatomizing regulatory boundaries, national development programs, and policy constraints in the global technology space.'
              },
              {
                title: 'Multispecies Ethnography',
                desc: 'Studying animal metabolic channels, ecological interactions, and nonhuman histories in modern industrial regimes.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-zinc-200 p-4 hover:border-zinc-300 transition-colors">
                <h4 className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-zinc-550 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 2: Geographical Focus */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Compass size={18} className="text-sky-800" />
            <h2 className="font-serif text-xl font-bold text-zinc-900 tracking-tight">
              Geographical Focus
            </h2>
          </div>
          <p className="font-sans text-xs text-zinc-550 leading-relaxed">
            Our empirical research, mapping exercises, and historical database cataloging span complex international spheres and transpacific networks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                region: 'China & US-China Relations',
                context: 'Examining technological exchanges, bilateral policy interfaces, and diplomatic constraints during the late 20th and early 21st centuries.'
              },
              {
                region: 'Northeast Asia (Korea and Japan)',
                context: 'Tracing rapid technology-driven industrial projects, postwar economic developmental states, energy systems, and metabolic loops.'
              },
              {
                region: 'Southeast Asia (with Vietnam emphasis)',
                context: 'Analyzing where environmental burdens and ecological resource waste are placed, and looking at local technological responses.'
              },
              {
                region: 'The Pacific & The Americas',
                context: 'Investigating transpacific knowledge paths, marine and oceanic systems, and environmental technology channels.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200/80 p-4 flex flex-col justify-between h-full hover:bg-zinc-100/50 transition-colors">
                <div>
                  <span className="font-mono text-[10px] text-sky-850 font-bold block uppercase mb-1.5 tracking-wider">
                    ZONE 0{index + 1}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-zinc-900 mb-2">
                    {item.region}
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
