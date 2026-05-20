/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Terminal, Database, FileDigit, Activity, Cpu, CheckCircle2, ShieldAlert, ArrowRight, Play, Search } from 'lucide-react';
import { archiveLogs } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const ArchivesPortal: React.FC = () => {
  const [selectedLogIndex, setSelectedLogIndex] = useState<number>(0);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [terminalFeed, setTerminalFeed] = useState<string[]>([]);
  const [customHash, setCustomHash] = useState<string>('');
  const [hashResult, setHashResult] = useState<{ status: 'verified' | 'unverified' | null; message: string }>({ status: null, message: '' });

  const activeLog = archiveLogs[selectedLogIndex];

  // Initiate scan diagnostics
  const handleScanningEngine = () => {
    setIsScanning(true);
    setScanProgress(0);
    setTerminalFeed([
      "BOOTING_OCR_SCANNER: ENGAGION SEQUENCE ACTIVE",
      `EXTRACTING TARGET: ${activeLog.filename}`,
      "CALIBRATING LIGHT SENSING ARRAYS...",
      "THRESHOLD: D50 AUTOMATED CHROMATIC OFFSET"
    ]);
  };

  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 8;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setTerminalFeed((feed) => [
              ...feed,
              "» INCLUSTIVE ACCURACY CHECK: PASS [99.2% RATIO]",
              `» HASH VERIFIED: ${activeLog.hash}`,
              "» CELL DATA UNPACKED. STRUCTURE RENDERED IN TELEMETRY PORTAL."
            ]);
          }, 300);
          return 100;
        }

        // Periodically inject mock log traces
        if (next === 24) {
          setTerminalFeed((feed) => [...feed, "LOADING HYDRAULIC VECTORS...", "RESOLVING SPATIAL MARGINS"]);
        } else if (next === 56) {
          setTerminalFeed((feed) => [...feed, `HASH BUFFERING: [${activeLog.hash.slice(0, 16)}]`, "DECRYPTING MICROFILM PACKS"]);
        } else if (next === 80) {
          setTerminalFeed((feed) => [...feed, "SYNTAX RESOLVER COMPILED", "UPDATING TOPOLOGY MAP"]);
        }

        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isScanning, activeLog]);

  // Authenticate custom hash
  const verifyRegistryHash = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customHash.trim().toUpperCase();
    if (!query) return;

    if (query.includes('SHA') || query.length > 8) {
      setHashResult({
        status: 'verified',
        message: 'REGISTRY CONFIRMED // National Science Council Grant: Verified authorship corresponding to director Liang Chen.'
      });
    } else {
      setHashResult({
        status: 'unverified',
        message: 'WARNING: Selected block hash does not reside inside verified CASS Ledgers. Microfilm degradation suspected.'
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in">
      
      {/* Editorial Title Block */}
      <div className="border-b border-zinc-200 pb-12 mb-12">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-3">
          CASS Laboratory // Chinese & Asian Science Studies
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Science Policy Archives
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base max-w-2xl">
          An interactive digital archiving platform preserving and analyzing 20th-century Asian technology transfers, state science policies, and historical public health campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Records Roster */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
              COLLECTION RECORDS
            </h3>
            <p className="font-sans text-xs text-zinc-500 leading-normal">
              Select historical microfilm manifest entries to inspect structural content.
            </p>
          </div>

          <div className="space-y-3" id="archives-catalog-list">
            {archiveLogs.map((log, index) => {
              const isSelected = selectedLogIndex === index;
              return (
                <button
                  key={log.filename}
                  onClick={() => {
                    setSelectedLogIndex(index);
                    setTerminalFeed([]);
                    setScanProgress(0);
                    setIsScanning(false);
                  }}
                  className={`cursor-pointer w-full text-left p-4 border transition-all flex flex-col gap-1.5 focus:outline-none select-none rounded-none ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-450 hover:text-zinc-900'
                  }`}
                  id={`archive-log-select-${index}`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-serif text-sm font-semibold truncate max-w-[180px] sm:max-w-xs">{log.filename}</span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 border ${
                      isSelected ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-zinc-200 text-zinc-400'
                    }`}>
                      {log.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-zinc-400 border-t border-zinc-100/15 pt-2 mt-1">
                    <span>SIZE: {log.size}</span>
                    <span>TIMESTAMP: {log.timestamp.slice(0, 10)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hash Authenticator Widget */}
          <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <Database size={15} className="text-zinc-900" />
              <span className="font-mono text-xs font-bold text-zinc-900 tracking-wider">MICROFILM HASH VERIFIER</span>
            </div>
            
            <form onSubmit={verifyRegistryHash} className="space-y-3 font-mono text-xs">
              <div className="space-y-1.5">
                <label className="text-zinc-500 block">Provide Cryptographic Registry Hash:</label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    required
                    placeholder="SHA256:4C9D2E..."
                    value={customHash}
                    onChange={(e) => setCustomHash(e.target.value)}
                    className="w-full text-xs font-mono bg-white text-zinc-900 border border-zinc-200 px-3 py-2 focus:outline-none focus:border-zinc-950 rounded-none uppercase"
                    id="search-hash-input"
                  />
                  <button 
                    type="submit"
                    className="cursor-pointer bg-zinc-900 text-white font-mono text-[11px] font-bold px-4 hover:bg-zinc-800 transition-colors shrink-0 rounded-none uppercase"
                    id="search-hash-submit"
                  >
                    VERIFY
                  </button>
                </div>
              </div>
            </form>

            <AnimatePresence mode="wait">
              {hashResult.status && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-3.5 border font-mono text-[11px] leading-relaxed flex items-start gap-2.5 ${
                    hashResult.status === 'verified'
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-850'
                      : 'bg-red-50 border-red-200 text-red-850'
                  }`}
                  key={hashResult.status}
                  id="hash-verification-status-panel"
                >
                  {hashResult.status === 'verified' ? (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <ShieldAlert size={16} className="text-red-500 shrink-0 mt-0.5" />
                  )}
                  <span>{hashResult.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Immersive Analysis Center */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="border border-zinc-200 bg-white p-6 md:p-8 space-y-8">
            
            {/* Record Overview Info */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-zinc-100 pb-5">
              <div>
                <span className="font-mono text-[10px] text-zinc-400 block mb-1">CURRENT ACTIVE LOG</span>
                <h2 className="font-serif text-2xl font-bold text-zinc-900">{activeLog.filename}</h2>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-zinc-500">
                <span className="block">HASH KEY: <span className="text-zinc-850 font-bold">{activeLog.hash}</span></span>
                <span className="block mt-1">RECORD INDEX: <span className="text-zinc-850 font-bold">0x0{selectedLogIndex + 1}</span></span>
              </div>
            </div>

            {/* Microfilm Reader panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Box A: RAW microfilm text viewer */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <FileDigit size={13} className="text-zinc-400" /> Microfilm Frame Output
                  </span>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 p-6 font-mono text-[12px] text-zinc-700 h-[280px] overflow-y-auto whitespace-pre-wrap leading-relaxed select-text">
                  {activeLog.content}
                </div>
              </div>

              {/* Box B: Neural Aesthetics Scanner HUD */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity size={13} className="text-zinc-400 animate-pulse" /> Diagnostic OCR Scan Center
                </span>
                
                <div className="bg-zinc-950 text-emerald-400 font-mono text-[11px] p-5 border border-zinc-800 h-[280px] flex flex-col justify-between">
                  
                  {/* Console scroll */}
                  <div className="space-y-2.5 overflow-y-auto max-h-[190px]">
                    {terminalFeed.length > 0 ? (
                      terminalFeed.map((line, idx) => (
                        <div 
                          key={idx} 
                          className={line.startsWith('»') ? 'text-white font-bold' : 'text-emerald-500'}
                        >
                          {line}
                        </div>
                      ))
                    ) : (
                      <div className="text-zinc-500 text-center py-10 leading-relaxed">
                        ENGAGE DOCUMENT TRANSCRIBER & SCANNER TO INTERACTIVE RELATIONAL HISTORIES
                      </div>
                    )}
                  </div>

                  {/* Operational status */}
                  <div className="border-t border-zinc-850 pt-3 flex flex-col gap-2 shrink-0">
                    {isScanning ? (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px] text-zinc-500 uppercase tracking-widest">
                          <span>Scanning blocks...</span>
                          <span className="font-bold">{scanProgress}%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-1 rounded-sm overflow-hidden">
                          <div 
                            className="bg-emerald-400 h-full transition-all duration-100" 
                            style={{ width: `${scanProgress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={handleScanningEngine}
                        className="cursor-pointer flex items-center justify-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors px-4 py-2.5 font-bold uppercase select-none w-full text-xs text-center border border-emerald-400"
                        id="start-ocr-scan-btn"
                      >
                        <Play size={10} fill="currentColor" /> Scan Document Extraction Engine
                      </button>
                    )}
                  </div>

                </div>
              </div>

            </div>

            {/* Dynamic Layout Entropy Plot - Generative SVG */}
            <div className="border border-zinc-200 bg-zinc-50 p-5 rounded-none space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-800">
                <Cpu size={14} className="text-zinc-900" />
                <span>ARCHIVAL METADATA EXTRACTION TELEMETRY PLOT</span>
              </div>
              
              <div className="h-[140px] bg-zinc-950 border border-zinc-900 relative p-2 flex items-center justify-center">
                
                {/* SVG scatter and line plotting coordinates */}
                <svg viewBox="0 0 400 100" className="w-full h-full p-2 opacity-80" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5">
                    <line x1="0" y1="20" x2="400" y2="20" />
                    <line x1="0" y1="50" x2="400" y2="50" />
                    <line x1="0" y1="80" x2="400" y2="80" />
                    <line x1="100" y1="0" x2="100" y2="100" />
                    <line x1="200" y1="0" x2="200" y2="100" />
                    <line x1="300" y1="0" x2="300" y2="100" />
                  </g>

                  {/* Draw coordinate wave based on record selection */}
                  {selectedLogIndex === 0 && (
                    <path d="M 10,80 Q 100,20 200,60 T 380,20" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="1.5" strokeDasharray="3,3" />
                  )}
                  {selectedLogIndex === 1 && (
                    <path d="M 10,40 Q 100,90 200,20 T 380,60" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                  )}
                  {selectedLogIndex === 2 && (
                    <path d="M 10,88 L 102,51 L 242,99 L 342,12" fill="none" stroke="#e11d48" strokeWidth="1.5" />
                  )}
                  {selectedLogIndex === 3 && (
                    <path d="M 10,20 C 130,100 240,10 380,80" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" />
                  )}

                  {/* Plotted anchor node circles */}
                  <circle cx="102" cy={selectedLogIndex === 2 ? 51 : 50} r="4" fill="rgb(16, 185, 129)" />
                  <circle cx="242" cy={selectedLogIndex === 2 ? 99 : 60} r="4" fill="#38bdf8" />
                  <circle cx="342" cy={selectedLogIndex === 2 ? 12 : 30} r="4" fill="#f59e0b" />
                </svg>

                {/* Plot info captions */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-500 uppercase">
                  Telemetry ID: SCANNER_WAVEFORM_CHANNEL_0{selectedLogIndex + 1}
                </div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-zinc-500 flex gap-4">
                  <span>OCR_ACCURACY: 99.2%</span>
                  <span>LOG_INTEGRITY: 100%</span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
            <span>DATABASE_ID: CASS_SCIENCE_POLICY_ARCHIVES_INTEGRITY</span>
            <span className="text-[10px] text-zinc-500 uppercase flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" /> Systems Authenticated
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
