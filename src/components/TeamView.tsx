/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Compass, Landmark, User, ShieldAlert, ArrowLeft, X, Link2, ExternalLink } from 'lucide-react';
import { TeamMember } from '../types';
import { drLiangChen, teamMembers } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface TeamViewProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ selectedId, setSelectedId }) => {
  const [drawerMember, setDrawerMember] = useState<TeamMember | null>(null);

  // Group members under target roles
  const postdocs = teamMembers.filter(m => m.category === 'postdoc');
  const phds = teamMembers.filter(m => m.category === 'phd');
  const masters = teamMembers.filter(m => m.category === 'master');
  const interns = teamMembers.filter(m => m.category === 'intern');

  const handleMemberClick = (member: TeamMember) => {
    if (member.id === 'liang-chen') {
      setSelectedId('liang-chen');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setDrawerMember(member);
    }
  };

  // Silhouette Vector placeholder component
  const SilhouettePlaceholder: React.FC = () => (
    <div className="w-full h-full bg-zinc-100 flex items-center justify-center relative group">
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-zinc-300 transition-all duration-300 group-hover:scale-105">
        <circle cx="50" cy="38" r="18" fill="currentColor" opacity="0.6" />
        <path d="M50,62 C32,62 18,72 18,85 L82,85 C82,72 68,62 50,62 Z" fill="currentColor" />
      </svg>
      <div className="absolute top-2 right-2 border border-zinc-200 bg-white/90 text-[8px] font-mono px-1.5 py-0.5 text-zinc-400">
        NO_PORTRAIT_RECORD
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in">

      <AnimatePresence mode="wait">
        
        {/* VIEW A: DR LIANG CHEN ACTIVE DETAIL PROFILE (IMAGE #2 TARGET) */}
        {selectedId === 'liang-chen' ? (
          <motion.div
            key="director-detail"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-12"
          >
            {/* Header back button */}
            <div className="border-b border-zinc-200 pb-6 flex items-center justify-between">
              <button
                onClick={() => setSelectedId(null)}
                className="cursor-pointer font-mono text-xs font-bold text-zinc-500 hover:text-zinc-950 flex items-center gap-2 focus:outline-none"
                id="btn-back-to-team"
              >
                <ArrowLeft size={14} /> BACK TO RESEARCH ROSTER
              </button>
              <span className="font-mono text-xs text-zinc-400">CLASS_LOG: DR_LIANG_CHEN_DOSSIER</span>
            </div>

            {/* Dr. Liang Chen's Primary Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Portrait & Demographics */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Visual framing box */}
                <div className="border border-zinc-200 p-4 bg-white shadow-xs">
                  <div className="aspect-[4/5] overflow-hidden grayscale contrast-115 border border-zinc-100 relative bg-zinc-100">
                    <img 
                      src={drLiangChen.image}
                      alt="Dr. Liang Chen"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-all duration-500 hover:grayscale-0 brightness-[0.93]"
                    />
                    <div className="absolute bottom-3 left-3 bg-zinc-950/80 text-[10px] font-mono text-white px-3 py-1 border border-zinc-800">
                      DR. L. CHEN // DIRECTOR
                    </div>
                  </div>
                  
                  {/* Underlay captions */}
                  <div className="pt-4 flex justify-between font-mono text-[10px] text-zinc-400">
                    <span>CASS FILE CODES: #LC-402</span>
                    <span>TURING FELLOW_ID: 2018_LC</span>
                  </div>
                </div>

                {/* Office demographics metadata block */}
                <div className="space-y-4 border border-zinc-200 bg-zinc-50/50 p-6">
                  <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-2">
                    PHYSICAL METADATA
                  </h3>
                  
                  <div className="space-y-3 text-xs text-zinc-650 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <Landmark size={14} className="text-zinc-400 shrink-0 mt-0.5" />
                      <span>{drLiangChen.office}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 border-t border-zinc-100 pt-3">
                      <Mail size={14} className="text-zinc-400 shrink-0" />
                      <a href={`mailto:${drLiangChen.email}`} className="hover:text-emerald-500 hover:underline transition-colors font-mono">
                        {drLiangChen.email}
                      </a>
                    </div>
                    
                    {drLiangChen.orcid && (
                      <div className="flex items-center gap-2 border-t border-zinc-100 pt-3">
                        <Link2 size={14} className="text-zinc-400 shrink-0" />
                        <span className="font-mono font-bold text-zinc-500 block">
                          ORCID: {drLiangChen.orcid}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column: Narrative Biography, Taxonomy, Distinctions */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* Core Designation */}
                <div className="space-y-2">
                  <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
                    {drLiangChen.name}
                  </h1>
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold">
                    {drLiangChen.role}
                  </p>
                </div>

                {/* Biography */}
                <div className="space-y-4">
                  <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-2">
                    BIOGRAPHY
                  </h3>
                  <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed space-y-4 select-text">
                    {drLiangChen.bio}
                  </p>
                </div>

                {/* Research Taxonomy - Matches Image #2 Green Highlight */}
                <div className="space-y-4">
                  <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-2">
                    RESEARCH TAXONOMY
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1.5" id="taxonomy-grid">
                    {drLiangChen.taxonomy?.map((tag) => {
                      // Highlight "Information Hierarchy" with signature emerald background in Image #2
                      const isHighlighted = tag === "Information Hierarchy";
                      return (
                        <span
                          key={tag}
                          className={`font-mono text-xs px-3 py-1.5 border uppercase font-semibold transition-all ${
                            isHighlighted
                              ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs scale-102 font-bold'
                              : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Key Distinctions */}
                <div className="space-y-4">
                  <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-2">
                    KEY DISTINCTIONS
                  </h3>
                  <ul className="space-y-3 font-mono text-xs text-zinc-700">
                    {drLiangChen.distinctions?.map((award, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 shrink-0 font-bold">[0{index + 1}]</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic textbook banner */}
                <div className="border border-zinc-250 bg-amber-50/20 p-6 flex flex-col sm:flex-row items-start gap-4 flex-wrap sm:flex-nowrap">
                  <div className="font-mono text-xs uppercase bg-zinc-900 text-white p-3 rotate-[-3deg] shrink-0 font-bold tracking-widest border border-zinc-700 text-center select-none shadow-xs">
                    TECHNOLOGY AND<br />THE STATE
                  </div>
                  <div className="space-y-1 select-text">
                    <h4 className="font-serif text-sm font-bold text-zinc-900">
                      "Technology and the State: Shaping Healthcare and Science Policy in Greater Asia"
                    </h4>
                    <p className="text-xs text-zinc-550">
                      Published by Academic Press (2021). Seminal monograph on East Asian advisory councils, national healthcare budgets, and transnational technology policy transfers.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        ) : (
          
          /* VIEW B: FULL ACTIVE ROSTER GRID (IMAGE #3 TARGET) */
          <motion.div
            key="team-roster"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-16"
          >
            {/* Header section text */}
            <div className="border-b border-zinc-200 pb-12">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-3">
                CASS Lab // Research Council
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                Intellectual Authority Through Rigor.
              </h1>
              <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base max-w-2xl">
                CASS Lab brings together specialists in the history and policy of science, technology, medicine, and environment in greater Asia. Click on profiles to inspect specific research focus summaries.
              </p>
            </div>

            {/* Prominent Director Callout Row */}
            <div 
              onClick={() => setSelectedId('liang-chen')}
              className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 border border-zinc-200 hover:border-zinc-900 bg-white p-6 transition-all duration-300"
              id="director-banner"
            >
              <div className="md:col-span-3 aspect-[4/5] overflow-hidden bg-zinc-50 border border-zinc-100 shrink-0">
                <img 
                  src={drLiangChen.image} 
                  alt="Dr. Liang Chen"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0 brightness-[0.93]"
                />
              </div>
              <div className="md:col-span-9 flex flex-col justify-between py-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-xs uppercase">
                      DIRECTOR
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">FOUNDER & COMMANDER PI</span>
                  </div>
                  <h2 className="font-serif text-2xl font-normal group-hover:text-emerald-600 transition-colors">
                    {drLiangChen.name}
                  </h2>
                  <p className="font-mono text-xs text-zinc-500 leading-tight uppercase font-medium">
                    {drLiangChen.role}
                  </p>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {drLiangChen.bio}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 font-mono text-[11px] font-bold text-zinc-900 group-hover:text-emerald-600">
                  <span>EXPAND COMPLETE ACADEMIC PROFILE DOSSIER</span> »
                </div>
              </div>
            </div>

            {/* Section 1: Postdoctoral Researchers */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl border-b border-zinc-200 pb-3 font-semibold text-zinc-900">
                Postdoctoral Researchers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="roster-postdocs">
                {postdocs.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => handleMemberClick(member)}
                    className="cursor-pointer group border border-zinc-200 hover:border-zinc-800 bg-white p-4 flex gap-4 transition-all duration-300 h-[160px]"
                    id={`team-card-${member.id}`}
                  >
                    <div className="w-[100px] h-[126px] overflow-hidden grayscale group-hover:grayscale-0 shrink-0 border border-zinc-100 bg-zinc-50">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1 overflow-hidden">
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-bold text-zinc-900 truncate group-hover:text-emerald-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="font-mono text-[10px] text-zinc-400 font-bold uppercase truncate">
                          {member.role.replace('Postdoctoral Researcher, ', '')}
                        </p>
                        <p className="font-sans text-[11px] text-zinc-500 line-clamp-3 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400 group-hover:text-zinc-650 transition-colors">
                        INSPECT PROFILE »
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Ph.D. Candidates */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl border-b border-zinc-200 pb-3 font-semibold text-zinc-900">
                Ph.D. Candidates
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="roster-phds">
                {phds.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => handleMemberClick(member)}
                    className="cursor-pointer group border border-zinc-200 hover:border-zinc-800 bg-white p-4 flex gap-4 transition-all duration-300 h-[160px]"
                    id={`team-card-${member.id}`}
                  >
                    <div className="w-[100px] h-[126px] overflow-hidden grayscale group-hover:grayscale-0 shrink-0 border border-zinc-100">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                        />
                      ) : (
                        <SilhouettePlaceholder />
                      )}
                    </div>
                    <div className="flex flex-col justify-between py-1 overflow-hidden">
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-bold text-zinc-900 truncate group-hover:text-emerald-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="font-mono text-[10px] text-zinc-400 font-bold uppercase truncate">
                          {member.role.replace('Ph.D. Candidate, ', '')}
                        </p>
                        <p className="font-sans text-[11px] text-zinc-500 line-clamp-3 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400 group-hover:text-zinc-650 transition-colors">
                        INSPECT PROFILE »
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Masters Students & Research Interns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Masters Candidates */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg border-b border-zinc-200 pb-2 font-semibold text-zinc-900">
                  Masters Students
                </h3>
                <div className="space-y-3" id="roster-masters">
                  {masters.map((member) => (
                    <div 
                      key={member.id}
                      onClick={() => handleMemberClick(member)}
                      className="cursor-pointer font-sans text-sm flex justify-between items-center py-3 px-4 border border-zinc-150 hover:border-zinc-900 bg-white hover:shadow-xs transition-all"
                      id={`team-list-${member.id}`}
                    >
                      <div>
                        <span className="font-bold text-zinc-900 block truncate">{member.name}</span>
                        <span className="font-mono text-[10px] text-zinc-450 block truncate">{member.role}</span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400 hover:text-zinc-900">INSPECT</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Interns */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg border-b border-zinc-200 pb-2 font-semibold text-zinc-900">
                  Research Interns
                </h3>
                <div className="space-y-3" id="roster-interns">
                  {interns.map((member) => (
                    <div 
                      key={member.id}
                      onClick={() => handleMemberClick(member)}
                      className="cursor-pointer font-sans text-sm flex justify-between items-center py-3 px-4 border border-zinc-150 hover:border-zinc-900 bg-white hover:shadow-xs transition-all"
                      id={`team-list-${member.id}`}
                    >
                      <div>
                        <span className="font-bold text-zinc-900 block truncate">{member.name}</span>
                        <span className="font-mono text-[10px] text-zinc-450 block truncate">{member.role}</span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400 hover:text-zinc-900">INSPECT</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* Slide-out Backdrop and Drawer Side Panel for Team Members */}
      <AnimatePresence>
        {drawerMember && (
          <>
            {/* Backdrop click barrier */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerMember(null)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
              id="drawer-backdrop"
            />

            {/* Sliding Drawer Content Board */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white border-l border-zinc-200 shadow-2xl z-50 p-8 flex flex-col justify-between overflow-y-auto"
              id="drawer-cabinet"
            >
              <div className="space-y-8">
                
                {/* Close handle bar */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <span className="font-mono text-[10px] text-zinc-400">TEAM DOSSIER // {drawerMember.id.toUpperCase()}</span>
                  <button 
                    onClick={() => setDrawerMember(null)}
                    className="cursor-pointer p-1.5 hover:bg-zinc-100 transition-colors text-zinc-500 hover:text-zinc-900 focus:outline-none"
                    aria-label="Close details"
                    id="drawer-close"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Profile Card details */}
                <div className="space-y-6">
                  
                  {/* Aspect Portrait wrapper */}
                  <div className="aspect-[4/5] overflow-hidden grayscale relative bg-zinc-50 border border-zinc-150">
                    {drawerMember.image ? (
                      <img 
                        src={drawerMember.image} 
                        alt={drawerMember.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <SilhouettePlaceholder />
                    )}
                    <div className="absolute bottom-4 left-4 bg-zinc-950/80 text-[10px] font-mono text-white px-3 py-1">
                      {drawerMember.id.toUpperCase()}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-zinc-900 leading-tight">
                      {drawerMember.name}
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-widest leading-none">
                      {drawerMember.role}
                    </p>
                  </div>

                  <div className="space-y-3 font-sans text-sm text-zinc-650 pt-2">
                    <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100 pb-1">
                      RELATIONAL CONTEXT
                    </h4>
                    <p className="leading-relaxed font-sans">{drawerMember.bio}</p>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-zinc-500 pt-2 bg-zinc-50 p-4 border border-zinc-150">
                    <h4 className="text-[10px] font-bold text-zinc-405 uppercase tracking-wider border-b border-zinc-200 pb-1">
                      DIGITAL CHANNELS
                    </h4>
                    <div className="flex justify-between items-center text-[11px]">
                      <span>Contact Node:</span>
                      <a href={`mailto:${drawerMember.email}`} className="text-zinc-900 font-semibold hover:text-emerald-500 underline transition-colors">
                        {drawerMember.email}
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              {/* Direct message dispatcher simulation */}
              <div className="border-t border-zinc-100 pt-6 mt-8 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wide">
                    Direct Inquiry Dispatcher
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                    Filing a proposal with the corresponding investigator.
                  </p>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter message text..." 
                    className="w-full text-xs border border-zinc-200 bg-white px-3 py-2.5 focus:outline-none focus:border-zinc-950 font-sans"
                    id="drawer-msg-input"
                  />
                  <button 
                    onClick={() => {
                      alert(`Mock communication envelope queued for ${drawerMember.name}.`);
                      setDrawerMember(null);
                    }}
                    className="cursor-pointer bg-zinc-950 text-white font-mono text-[10px] font-bold px-4 py-2 hover:bg-zinc-800 transition-colors tracking-wide shrink-0"
                    id="drawer-msg-submit"
                  >
                    SEND MSG
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};
