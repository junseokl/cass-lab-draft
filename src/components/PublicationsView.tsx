/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Calendar, 
  ArrowUpDown, 
  SlidersHorizontal, 
  BookOpen, 
  Library, 
  BookText, 
  Globe, 
  FileEdit, 
  Newspaper 
} from 'lucide-react';
import { Publication } from '../types';
import { publications } from '../data';
import { motion, AnimatePresence } from 'motion/react';

type SortOption = 'year-desc' | 'year-asc' | 'title-asc';
type CategoryFilter = 'all' | 'books' | 'chapters' | 'journals' | 'translations' | 'reviews' | 'essays';

export const PublicationsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('year-desc');
  const [copiedPubId, setCopiedPubId] = useState<string | null>(null);

  // Categories definitions for labels & icons
  const categoriesList = useMemo(() => [
    { id: 'all', label: 'All Catalog', icon: Library },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'chapters', label: 'Book Chapters', icon: BookText },
    { id: 'journals', label: 'Journal Articles', icon: Globe },
    { id: 'translations', label: 'Translations', icon: Globe },
    { id: 'reviews', label: 'Book Reviews', icon: FileEdit },
    { id: 'essays', label: 'Public Essays', icon: Newspaper },
  ], []);

  // Compute stats counters per category
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { all: publications.length };
    publications.forEach(p => {
      const cat = p.category || 'all';
      stats[cat] = (stats[cat] || 0) + 1;
    });
    return stats;
  }, []);

  // Compute subcategories based on current chosen main category
  const availableSubCategories = useMemo(() => {
    if (selectedCategory === 'all') return [];
    
    const subs = new Set<string>();
    publications.forEach(p => {
      if (p.category === selectedCategory && p.subCategory) {
        subs.add(p.subCategory);
      }
    });
    return Array.from(subs);
  }, [selectedCategory]);

  // Main filter and search flow
  const filteredAndSortedPubs = useMemo(() => {
    let result = [...publications];

    // 1. Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(pub => pub.category === selectedCategory);
    }

    // 2. Filter by subcategory
    if (selectedSubCategory !== 'all' && selectedCategory !== 'all') {
      result = result.filter(pub => pub.subCategory === selectedSubCategory);
    }

    // 3. Search query match
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(pub => 
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.citation.toLowerCase().includes(query) ||
        (pub.subCategory && pub.subCategory.toLowerCase().includes(query))
      );
    }

    // 4. Sort calculations
    if (sortBy === 'year-desc') {
      result.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
    } else if (sortBy === 'year-asc') {
      result.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    } else if (sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, selectedSubCategory, searchQuery, sortBy]);

  const handleCopyCitation = (pub: Publication, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(pub.citation);
    setCopiedPubId(pub.id);
    setTimeout(() => {
      setCopiedPubId(null);
    }, 2000);
  };

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setSelectedSubCategory('all'); // reset subcategory on main change
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in">
      
      {/* Exquisite Top Context Colophon */}
      <div className="border-b border-zinc-200 pb-10 mb-10">
        <span className="font-mono text-xs text-sky-700 font-bold uppercase tracking-widest block mb-3">
          CASS LAB // DR. JONGSIK CHRISTIAN YI BIBLIOGRAPHY
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Publications Database
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-sm max-w-3xl">
          An authoritative, filterable archive of monographs, translated sourcebooks, peer-reviewed chapters, journal articles, critical reviews, and contemporary geopolitical columns addressing the history of agricultural sciences, animal metabolic loops, and transnational technology policies.
        </p>
      </div>

      {/* Control Board: Search & Sorting */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-8 bg-zinc-50 border border-zinc-200 p-4 rounded-none">
        {/* Live Search */}
        <div className="md:col-span-8 relative">
          <input 
            type="text"
            placeholder="Search documents by keywords, title phrasing, or co-authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white text-zinc-900 text-xs border border-zinc-200 pl-9 pr-4 py-3 focus:outline-none focus:border-sky-800 rounded-none focus:ring-1 focus:ring-sky-800 font-sans"
            id="pub-query-search"
          />
          <Search className="absolute left-3 top-3.5 text-zinc-400" size={14} />
        </div>

        {/* Sorting Dropdown */}
        <div className="md:col-span-4 flex items-center justify-end gap-2.5">
          <SlidersHorizontal size={13} className="text-zinc-400" />
          <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-white border border-zinc-200 text-zinc-700 text-xs py-2.5 px-3 focus:outline-none focus:border-sky-800 rounded-none cursor-pointer"
            id="pub-sort-select"
          >
            <option value="year-desc">Year (Newest to Oldest)</option>
            <option value="year-asc">Year (Oldest to Newest)</option>
            <option value="title-asc">Title (A to Z Index)</option>
          </select>
        </div>
      </div>

      {/* Primary Category Tabs Navigation */}
      <div className="mb-6">
        <h3 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3.5">
          Filter by Literature Category
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {categoriesList.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const count = categoryStats[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as CategoryFilter)}
                className={`py-3 px-4.5 font-mono text-xs font-semibold focus:outline-none border transition-all duration-200 flex items-center gap-2.5/2 cursor-pointer shadow-2xs ${
                  isSelected 
                    ? 'bg-sky-900 text-white border-sky-950 ring-1 ring-sky-950' 
                    : 'bg-white text-zinc-600 border-zinc-200 hover:text-sky-900 hover:border-zinc-300'
                }`}
                id={`cat-tab-${cat.id}`}
              >
                <IconComponent size={13} className={isSelected ? 'text-sky-300' : 'text-zinc-400'} />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-sky-800/80 text-sky-100' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Sub-Category Pillars Navigation (only if subcategories exist) */}
      {availableSubCategories.length > 0 && (
        <div className="mb-8 p-4 bg-sky-50/20 border border-sky-100/50 flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-[10px] text-sky-800 font-bold uppercase tracking-wider mr-2">
            Narrow Division:
          </span>
          <button
            onClick={() => setSelectedSubCategory('all')}
            className={`px-3 py-1.5 font-mono text-[11px] font-medium border cursor-pointer focus:outline-none transition-colors ${
              selectedSubCategory === 'all'
                ? 'bg-sky-800 text-white border-sky-800'
                : 'bg-white text-zinc-600 border-zinc-200 hover:text-sky-900 hover:border-zinc-300'
            }`}
          >
            All Subcategories
          </button>
          {availableSubCategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubCategory(sub)}
              className={`px-3 py-1.5 font-sans text-xs font-medium border cursor-pointer focus:outline-none transition-all ${
                selectedSubCategory === sub
                  ? 'bg-sky-800 text-white border-sky-800'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:text-sky-900 hover:border-zinc-300'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Main Results Board */}
      <div className="space-y-6">
        
        {/* Filter Summary Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-500 pb-3 border-b border-zinc-100">
          <div>
            Showing <span className="font-bold text-zinc-900">{filteredAndSortedPubs.length}</span> matching records 
            {selectedCategory !== 'all' && (
              <>
                {' '}under <span className="text-sky-900 font-semibold uppercase">"{selectedCategory}"</span>
              </>
            )}
            {selectedSubCategory !== 'all' && (
              <>
                {' '}/ <span className="text-zinc-800 font-semibold">"{selectedSubCategory}"</span>
              </>
            )}
            {searchQuery && ' containing matching phrases'}
          </div>
          {(selectedCategory !== 'all' || selectedSubCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-sky-700 hover:text-sky-900 border-b border-sky-800 font-bold transition-all"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Publications Catalog Stack */}
        <AnimatePresence mode="popLayout animate-fade-in">
          {filteredAndSortedPubs.length > 0 ? (
            <div className="space-y-6">
              {filteredAndSortedPubs.map((pub, idx) => {
                const isCopied = copiedPubId === pub.id;
                
                return (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2, delay: Math.min(idx * 0.03, 0.3) }}
                    className="border border-zinc-200 bg-white hover:border-sky-300 hover:shadow-xs transition-all p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start group"
                    id={`pub-row-${pub.id}`}
                  >
                    {/* Visual Year block */}
                    <div className="flex md:flex-col items-center justify-between md:justify-center h-14 w-full md:w-16 bg-sky-50 text-sky-900 border border-sky-100 font-mono font-bold shrink-0 p-3">
                      <Calendar size={14} className="text-sky-700 hidden md:block mb-1" />
                      <span className="text-sm tracking-tight">{pub.year}</span>
                    </div>

                    {/* Meta Content columns */}
                    <div className="flex-grow space-y-3 w-full">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Main Category Badge */}
                        <span className="font-mono text-[9px] font-bold uppercase py-0.5 px-2 bg-zinc-100 text-zinc-500">
                          {pub.category === 'books' ? 'Book Monograph' : 
                           pub.category === 'chapters' ? 'Book Chapter' :
                           pub.category === 'journals' ? 'Journal Article' : 
                           pub.category === 'translations' ? 'Translation' :
                           pub.category === 'reviews' ? 'Book Review' : 'Public Essay'}
                        </span>

                        {/* Optional Sub-category badge */}
                        {pub.subCategory && (
                          <span className="font-sans text-[10px] font-medium py-0.5 px-2 bg-sky-50 text-sky-800 border border-sky-100 rounded-none">
                            {pub.subCategory}
                          </span>
                        )}
                      </div>

                      {/* Paper Title */}
                      <h3 className="font-serif text-lg md:text-xl font-normal text-zinc-900 group-hover:text-sky-900 transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      {/* Author Line */}
                      <p className="text-xs font-mono font-semibold text-zinc-500">
                        By <span className="text-zinc-700">{pub.authors}</span>
                      </p>

                      {/* Dynamic Academic Citation Block */}
                      <div className="bg-zinc-50/70 hover:bg-zinc-50 border-l-[3px] border-sky-800 p-4 font-mono text-[11px] text-zinc-600 leading-relaxed max-w-full overflow-x-auto select-all">
                        {pub.citation}
                      </div>

                      {/* Action widgets */}
                      <div className="pt-2">
                        <button
                          onClick={(e) => handleCopyCitation(pub, e)}
                          className={`inline-flex items-center gap-1.5 focus:outline-none py-2 px-4.5 border border-zinc-200 hover:border-sky-800 font-mono text-[10px] font-bold select-none transition-colors ${
                            isCopied ? 'bg-sky-50 text-sky-800 border-sky-300' : 'text-zinc-600 bg-white'
                          }`}
                          id={`pub-btn-copy-${pub.id}`}
                        >
                          {isCopied ? (
                            <>
                              <Check size={11} className="text-sky-700" /> CITATION COPIED
                            </>
                          ) : (
                            <>
                              <Copy size={11} /> COPY IN FULL APA/MLA CITATION
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-zinc-300 p-16 text-center font-mono text-zinc-400">
              <BookOpen size={36} className="mx-auto mb-4 text-zinc-300 animate-pulse" />
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">
                No papers indexed under current search rules
              </p>
              <p className="text-[11px] mt-2 font-sans text-zinc-400 max-w-sm mx-auto">
                No matching titles or citation matches for "{searchQuery}". Try changing categories or resetting all criteria filters.
              </p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
