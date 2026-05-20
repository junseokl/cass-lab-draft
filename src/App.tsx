/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InitiativesView } from './components/InitiativesView';
import { PublicationsView } from './components/PublicationsView';
import { TeamView } from './components/TeamView';
import { AboutView } from './components/AboutView';
import { ArchivesPortal } from './components/ArchivesPortal';
import { ContactPortal } from './components/ContactPortal';
import { motion, AnimatePresence } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/research" replace />} />
          <Route path="/research" element={<InitiativesView />} />
          <Route path="/publications" element={<PublicationsView />} />
          <Route path="/archives" element={<ArchivesPortal />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/team/:memberId" element={<TeamView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactPortal />} />
          <Route path="*" element={<Navigate to="/research" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#fdfdfc] text-zinc-900 selection:bg-emerald-500 selection:text-white">
        {/* Brand Header */}
        <Header />

        {/* Main Multi-Screen Content Container */}
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>

        {/* Brand Footer colophon */}
        <Footer />
      </div>
    </HashRouter>
  );
}
