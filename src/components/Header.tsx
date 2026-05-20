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
    { id: 'archives', label: 'ARCHIVES', path: '/archives' },
    { id: 'team', label: 'TEAM', path: '/team' },
    { id: 'about', label: 'ABOUT', path: '/about' },
  ];

  const getIsActive = (itemId: string, itemPath: string) => {
    const currentPath = location.pathname;
    if (itemId === 'research') {
      return currentPath === '/' || currentPath === '/research';
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

  const isContactActive = location.pathname === '/contact';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-10">
        
        {/* Brand Logo - High Aesthetic L-Bracket with Emerald Box */}
        <button 
          onClick={() => handleNavClick('/research')}
          className="group flex items-center gap-4 text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="relative h-10 w-10 flex items-center justify-center border-l-2 border-t-2 border-zinc-900 transition-transform duration-300 group-hover:scale-[1.03]">
            {/* The signature emerald green square at bottom right of the corner frame */}
            <div className="absolute bottom-0 right-0 h-4.5 w-4.5 bg-emerald-500 transition-all duration-300 group-hover:bg-emerald-600 rounded-xs shadow-xs" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900 block leading-none">CASS Lab</span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 block uppercase mt-1">Chinese & Asian Science Studies</span>
          </div>
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
                  isActive ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500" />
                )}
              </button>
            );
          })}
          
          <button
            onClick={() => handleNavClick('/contact')}
            className={`cursor-pointer border px-5 py-2.5 font-medium transition-all duration-300 focus:outline-none rounded-none text-xs ${
              isContactActive
                ? 'bg-zinc-950 border-zinc-950 text-white shadow-xs'
                : 'border-zinc-900 text-zinc-900 hover:bg-zinc-90 w-full hover:text-zinc-50'
            }`}
            id="nav-contact"
          >
            CONTACT
          </button>
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
                    isActive ? 'text-zinc-900 font-bold border-emerald-500' : 'text-zinc-400'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick('/contact')}
              className={`mt-4 border px-6 py-3.5 font-bold tracking-widest transition-all rounded-xs ${
                isContactActive
                  ? 'bg-zinc-950 border-zinc-950 text-white'
                  : 'border-zinc-900 text-zinc-900'
              }`}
              id="mobile-nav-contact"
            >
              CONTACT PORTAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
