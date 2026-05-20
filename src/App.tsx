/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InitiativesView } from './components/InitiativesView';
import { PublicationsView } from './components/PublicationsView';
import { TeamView } from './components/TeamView';
import { AboutView } from './components/AboutView';
import { ArchivesPortal } from './components/ArchivesPortal';
import { ContactPortal } from './components/ContactPortal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('research');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // Sync scroll on tab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  const handleNavigateToTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfc] text-zinc-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Brand Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        setSelectedMemberId={setSelectedMemberId}
      />

      {/* Main Multi-Screen Content Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'research' && (
              <InitiativesView onNavigateToTab={handleNavigateToTab} />
            )}
            
            {activeTab === 'publications' && (
              <PublicationsView />
            )}
            
            {activeTab === 'archives' && (
              <ArchivesPortal />
            )}
            
            {activeTab === 'team' && (
              <TeamView 
                selectedId={selectedMemberId} 
                setSelectedId={setSelectedMemberId} 
              />
            )}
            
            {activeTab === 'about' && (
              <AboutView />
            )}
            
            {activeTab === 'contact' && (
              <ContactPortal />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Brand Footer colophon */}
      <Footer 
        setActiveTab={setActiveTab} 
        setSelectedMemberId={setSelectedMemberId} 
      />

    </div>
  );
}
