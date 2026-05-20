/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Copy, Check, FileText, ExternalLink, Calendar, Filter, Archive } from 'lucide-react';
import { Publication } from '../types';
import { publications } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const PublicationsView: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);
  const [copiedPubId, setCopiedPubId] = useState<string | null>(null);
  const [historicalLoaded, setHistoricalLoaded] = useState<boolean>(false);

  // Extra Mock Archive Papers for the "LOAD PREVIOUS YEARS" action
  const historicalPublications: Publication[] = [
    {
      id: 'pub-2020-01',
      title: 'Statecraft, Water, and Environment: Siphoning Channels in Colonial Straits',
      authors: 'Liang Chen',
      citation: 'Chen, L. (2020). Statecraft, Water, and Environment: Siphoning Channels in Colonial Straits. Journal of Asian Studies, 4(1), 12–29.',
      abstract: 'Examining historic drainage and water canal schemes in colonial harbors to reconstruct administrative control and environmental boundaries across post-colonial Southeast Asian boundaries.',
      year: 2020,
      doi: '10.1162/jas.2020.4.1.12',
      url: '#'
    },
    {
      id: 'pub-2019-01',
      title: 'Sino-Japanese Technology Dialogues: High-Value Archival Epistles (1960–1975)',
      authors: 'Liang Chen, Sarah Lin',
      citation: 'Chen, L., & Lin, S. (2019). Sino-Japanese Technology Dialogues: High-Value Archival Epistles. East Asian Studies Bulletin, 102–115.',
      abstract: 'Reconstructing the communication network between Chinese ministries and regional technological foundations during postwar industrial restorations.',
      year: 2019,
      doi: '10.1145/easb.2019.102',
      url: '#'
    }
  ];

  const allAvailablePubs = historicalLoaded 
    ? [...publications, ...historicalPublications]
    : publications;

  // Filter logic
  const filteredPubs = allAvailablePubs.filter(pub => {
    // Year filter
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    
    // Search query filter
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      pub.title.toLowerCase().includes(lowerQuery) ||
      pub.authors.toLowerCase().includes(lowerQuery) ||
      (pub.abstract && pub.abstract.toLowerCase().includes(lowerQuery)) ||
      pub.citation.toLowerCase().includes(lowerQuery);

    return matchesYear && matchesSearch;
  });

  const handleCopyCitation = (pub: Publication, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering accordion toggle
    navigator.clipboard.writeText(pub.citation);
    setCopiedPubId(pub.id);
    setTimeout(() => {
      setCopiedPubId(null);
    }, 2000);
  };

  const toggleExpand = (pubId: string) => {
    setExpandedPubId(expandedPubId === pubId ? null : pubId);
  };

  const yearsList = ['all', '2024', '2023', '2022', '2021'];

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in">
      
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-12 mb-12">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-3">
          CASS Lab // Scientific Contributions
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Publications
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base max-w-2xl">
          Browse through the research books, monograph chapters, and journal articles authored by members of CASS Lab. Rigorously vetted peer-reviewed history and science policy studies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Filter Sidebar */}
        <aside className="lg:col-span-3 space-y-8 sticky top-24 self-start">
          
          {/* Real-time Text Search */}
          <div className="space-y-2">
            <label className="block font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Search Database
            </label>
            <div className="relative">
              <input 
                type="text"
                placeholder="Title, author, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-zinc-900 text-xs border border-zinc-200 pl-9 pr-4 py-3 focus:outline-none focus:border-emerald-500 rounded-none focus:ring-1 focus:ring-emerald-500"
                id="pub-search-input"
              />
              <Search className="absolute left-3 top-3.5 text-zinc-400" size={14} />
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-[10px] font-mono text-zinc-400 hover:text-zinc-600 border-b border-zinc-200"
                id="pub-search-clear-btn"
              >
                Clear query filter
              </button>
            )}
          </div>

          {/* Filter Year list Selector */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Filter by Year
            </h3>
            <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {yearsList.map((yr) => {
                const isActive = selectedYear === yr;
                return (
                  <button
                    key={yr}
                    onClick={() => {
                      setSelectedYear(yr);
                      setExpandedPubId(null);
                    }}
                    className={`cursor-pointer whitespace-nowrap text-left px-4 py-3 font-mono text-xs font-semibold focus:outline-none border transition-all duration-200 flex items-center justify-between min-w-[100px] lg:min-w-0 ${
                      isActive 
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs' 
                        : 'bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                    id={`pub-year-filter-${yr}`}
                  >
                    <span>{yr === 'all' ? 'All Archives' : yr}</span>
                    {isActive && <span className="hidden lg:inline h-1.5 w-1.5 bg-emerald-400 rounded-full" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Database Statistics indicator */}
          <div className="border border-zinc-200 bg-zinc-50 p-4 font-mono text-[11px] text-zinc-500 space-y-2">
            <div className="flex justify-between">
              <span>Catalog Index:</span>
              <span className="text-zinc-900 font-bold">{allAvailablePubs.length} entries</span>
            </div>
            <div className="flex justify-between">
              <span>Matching:</span>
              <span className="text-emerald-600 font-bold">{filteredPubs.length} papers</span>
            </div>
          </div>

        </aside>

        {/* Right Column: Publications directory */}
        <section className="lg:col-span-9 space-y-6">
          
          <AnimatePresence mode="popLayout">
            {filteredPubs.length > 0 ? (
              filteredPubs.map((pub) => {
                const isExpanded = expandedPubId === pub.id;
                const isCopied = copiedPubId === pub.id;
                
                return (
                  <motion.div
                    key={pub.id}
                    layoutId={`pub-card-layout-${pub.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className={`border border-zinc-200 bg-white transition-all overflow-hidden cursor-pointer ${
                      isExpanded ? 'ring-1 ring-zinc-900 border-zinc-950' : 'hover:border-zinc-300'
                    }`}
                    onClick={() => toggleExpand(pub.id)}
                    id={`pub-card-${pub.id}`}
                  >
                    
                    {/* Compact Card view */}
                    <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                      
                      {/* Document icon representing year category */}
                      <div className="h-10 w-10 bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-zinc-400">
                        {pub.year}
                      </div>

                      <div className="flex-1 space-y-2">
                        {/* Title of the literature */}
                        <h3 className="font-serif text-lg md:text-xl font-normal text-zinc-900 group-hover:text-amber-900 leading-snug">
                          {pub.title}
                        </h3>

                        {/* Co-authors */}
                        <p className="text-xs font-semibold font-mono text-emerald-600 tracking-wider">
                          BY: {pub.authors.toUpperCase()}
                        </p>

                        {/* Academic Citation Block */}
                        <div className="bg-zinc-50 border-l-2 border-zinc-300 p-4 font-mono text-[11px] text-zinc-500 leading-relaxed max-w-full overflow-x-auto">
                          {pub.citation}
                        </div>

                        {/* Copy citation & view abstract expand triggers */}
                        <div className="flex items-center gap-4 pt-2 text-[11px] font-mono select-none">
                          <button
                            onClick={(e) => handleCopyCitation(pub, e)}
                            className={`cursor-pointer inline-flex items-center gap-1.5 focus:outline-none py-1.5 px-3 border border-zinc-200 hover:border-zinc-800 transition-colors ${
                              isCopied ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold' : 'text-zinc-600 bg-white'
                            }`}
                            id={`pub-btn-copy-${pub.id}`}
                          >
                            {isCopied ? (
                              <>
                                <Check size={12} className="text-emerald-600" /> CITATION COPIED
                              </>
                            ) : (
                              <>
                                <Copy size={12} /> COPY CITATION
                              </>
                            )}
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(pub.id);
                            }}
                            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 px-2 py-1 focus:outline-none"
                            id={`pub-btn-expand-${pub.id}`}
                          >
                            <FileText size={12} /> {isExpanded ? 'HIDE ABSTRACT' : 'READ ABSTRACT'}
                          </button>
                        </div>

                      </div>

                    </div>

                    {/* Accordion view for long abstracts */}
                    <AnimatePresence>
                      {isExpanded && pub.abstract && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="border-t border-zinc-100 bg-zinc-50"
                        >
                          <div className="p-6 md:p-8 space-y-4">
                            <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                              Abstract Narrative // Epistemological Summary
                            </h4>
                            <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                              {pub.abstract}
                            </p>
                            
                            {/* DOI block */}
                            {pub.doi && (
                              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
                                <span>DOI ID: <span className="text-zinc-800">{pub.doi}</span></span>
                                <a 
                                  href={`https://doi.org/${pub.doi}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none"
                                >
                                  BROWSE OFFICIAL RECORD <ExternalLink size={11} />
                                </a>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })
            ) : (
              <div className="border border-dashed border-zinc-300 p-12 text-center font-mono text-zinc-400">
                <Archive size={32} className="mx-auto mb-4 text-zinc-300" />
                <p className="text-xs uppercase tracking-widest font-bold">No documents indexed under current filters</p>
                <p className="text-[11px] mt-2 font-sans">Try removing text constraints or switching to "All Archives".</p>
              </div>
            )}
          </AnimatePresence>

          {/* Pagination trigger for previous years */}
          {!historicalLoaded && (
            <div className="pt-4 text-center">
              <button
                onClick={() => setHistoricalLoaded(true)}
                className="cursor-pointer border border-zinc-900 text-zinc-900 font-mono text-xs font-bold px-8 py-4 uppercase select-none hover:bg-zinc-950 hover:text-white transition-all duration-300 w-full rounded-none"
                id="pub-btn-load-more"
              >
                LOAD PREVIOUS YEARS [2018 - 2020]
              </button>
            </div>
          )}

        </section>

      </div>
    </div>
  );
};
