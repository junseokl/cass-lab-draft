/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'research', label: 'RESEARCH', path: '/research' },
    { id: 'publications', label: 'PUBLICATIONS', path: '/publications' },
    { id: 'teaching', label: 'TEACHING', path: '/teaching' },
    { id: 'team', label: 'TEAM', path: '/team' },
    { id: 'about', label: 'ABOUT', path: '/about' },
  ];

  const getIsActive = (itemId: string, itemPath: string) => {
    const currentPath = location.pathname;
    if (itemId === 'research') {
      return currentPath === '/research';
    }
    if (itemId === 'team') {
      return currentPath.startsWith('/team');
    }
    return currentPath === itemPath;
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-10">
        
        {/* Brand Logo - Replica Wordmark of Uploaded High-Res Image */}
        <button 
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-4 text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="flex flex-col items-center justify-center border border-sky-900/10 p-2 bg-sky-50/30 hover:bg-sky-50/50 rounded-xs transition-all duration-350" style={{ minWidth: '92px', minHeight: '60px' }}>
            <div className="text-[13px] font-bold text-sky-950 font-serif leading-none tracking-[0.06em] select-none" style={{ fontFamily: 'Georgia, "Songti SC", "SimSun", "Noto Serif SC", serif' }}>
              亞洲科技
            </div>
            <div className="text-[19px] font-black text-sky-900 font-serif leading-none mt-1 select-none tracking-[0.12em]" style={{ fontFamily: 'Georgia, serif' }}>
              CASS
            </div>
          </div>
          {/*<div>
            <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900 block leading-none">CASS Lab</span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 block uppercase mt-1">Chinese & Asian Science Studies</span>
          </div>*/}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-wider">
          {navItems.map((item) => {
            const isActive = getIsActive(item.id, item.path);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`relative py-2 font-medium transition-colors duration-200 focus:outline-none ${
                  isActive ? 'text-zinc-900 font-bold' : 'text-zinc-400 hover:text-zinc-600'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-800" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50 focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white/98 backdrop-blur-lg px-6 py-8 animate-fade-in absolute w-full left-0 shadow-lg">
          <div className="flex flex-col gap-6 text-center font-mono text-sm tracking-widest">
            {navItems.map((item) => {
              const isActive = getIsActive(item.id, item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`py-3 border-b border-zinc-100 font-semibold transition-all ${
                    isActive ? 'text-zinc-900 font-bold border-sky-800' : 'text-zinc-400'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
