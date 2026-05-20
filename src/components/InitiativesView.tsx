/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle, Database, FileText, Map, ArrowRight, Table } from 'lucide-react';
import { archiveLogs } from '../data';

interface InitiativesViewProps {
  onNavigateToTab: (tabId: string) => void;
}

export const InitiativesView: React.FC<InitiativesViewProps> = ({ onNavigateToTab }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in" id="current-initiatives">
      
      {/* Editorial Title Block */}
      <div className="border-b border-zinc-200 pb-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-zinc-550 uppercase tracking-widest block mb-3">
              CASS Laboratory // Core Initiatives
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
              Current Initiatives
            </h1>
            <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base md:text-lg">
              The CASS Lab examines how science and technology arrived in the greater Asia, how they helped shape the region’s industrial and post-industrial modernities, and where they may be leading Asian societies today.
            </p>
          </div>
          <div className="flex font-mono text-xs tracking-wider border border-zinc-200 p-1.5 uppercase gap-3 shrink-0 bg-white shadow-xs">
            <div className="px-3 border-r border-zinc-100">
              <span className="text-zinc-400 block text-[9px] mb-0.5">PROJECTS</span>
              <span className="font-semibold text-zinc-800">3 ACTIVE</span>
            </div>
            <div className="px-3">
              <span className="text-zinc-400 block text-[9px] mb-0.5">ESTABLISHED</span>
              <span className="font-semibold text-zinc-800">2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives Matrix */}
      <div className="space-y-28">

        {/* Project I: Transnational Technology Transfer */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start" id="project-governance">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs bg-zinc-900 text-white px-2.5 py-1 uppercase font-semibold">
                Project 01
              </span>
              <span className="text-emerald-600 font-mono text-xs font-semibold uppercase tracking-wider">
                ● ACTIVE RESEARCH
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-tight text-zinc-900">
              Transnational Technology Transfer & Asian Modernity
            </h2>
            <div className="border-t border-zinc-200 pt-4 space-y-2.5 font-mono text-xs text-zinc-500">
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Principal Investigator:</span>
                <span className="text-zinc-950 font-medium">Dr. Elena Rostova</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Research Timeline:</span>
                <span className="text-zinc-950 font-medium">2024 - Present</span>
              </div>
              <div className="flex justify-between">
                <span>Core Theme:</span>
                <span className="text-zinc-950 font-medium">Industrial & Tech Policy Networks</span>
              </div>
            </div>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed pt-2">
              Examining the arrival and local adaptation of science, machinery, and technology standards across Northeast and Southeast Asia during the mid-to-late 20th century. By detailing historical technology transfer agreements, state advisory councils, and industrial developments, this project traces how public policy frameworks shaped modern municipal networks and state-led industrial progress.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigateToTab('team')}
                className="cursor-pointer font-mono text-xs font-bold text-zinc-900 border-b-2 border-emerald-500 hover:text-emerald-600 transition-colors pb-1 flex items-center gap-2"
                id="proj-1-navigate-team"
              >
                VIEW TEAM SCIENTIFIC PROFILES <ArrowRight size={12} className="text-emerald-500" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-zinc-200 p-4 bg-white shadow-xs">
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhJ6e_r4UiRPZSN6IMmMoDpZK5BiTbntmWSMcPRdQdZdr-_pyW-5KPd5etlzzQHF8zsC13nlM2uzLzooM9idF59VF3BoTuNPhEmTcP-o6SjhXTmQFiUyr7c8-i3nDMrCcK50NBefWUCVLIkx-q98mW39FF-nVdLLZMX_FoKac5nnP2g16Gb1vDrM5aCeNCpLEAmaaG3pMqTnYWaN3BaJP1HWeBrG5rheQtpYtZsEsf42oe2KRqSI1Hqgy4"
                  alt="CASS Lab Historical Core Artifacts"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale brightness-95 contrast-105"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-xs text-white text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest border border-zinc-800">
                  ASTROLABE & BEAKER // HISTORICAL INSTRUMENTS
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                <span>FIGURE 1.1: SYSTEMIC TECHNOLOGY TRANSFER PATHWAYS IN EAST ASIA</span>
                <span className="text-[10px] text-zinc-500">ARCHIVAL RECONSTR: CASS-ST-1950</span>
              </div>
            </div>
          </div>

        </section>

        {/* Project II: Environmental History & Hydrological Governance */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start" id="project-water">
          
          <div className="lg:col-span-4 space-y-6 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs bg-zinc-900 text-white px-2.5 py-1 uppercase font-semibold">
                Project 02
              </span>
              <span className="text-zinc-500 font-mono text-xs font-semibold uppercase tracking-wider">
                ● ENVIRONMENTAL CORE
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-tight text-zinc-900">
              Environmental History & Hydrological Governance
            </h2>
            <div className="border-t border-zinc-200 pt-4 space-y-2.5 font-mono text-xs text-zinc-500">
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Principal Investigator:</span>
                <span className="text-zinc-950 font-medium">Dr. Julian Hayes</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Core Research Period:</span>
                <span className="text-zinc-950 font-medium">2023 - 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Geographic Target:</span>
                <span className="text-zinc-950 font-medium">Southeast Asian Coast</span>
              </div>
            </div>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed pt-2">
              Investigating the historical development of environmental infrastructure and hydrological governance across Southeast Asian shorelines and estuaries. This initiatives maps historical dredging registries, colonial cartography, and post-colonial delta projects to understand how public engineering policies transformed regional ecology, administrative boundaries, and water resource allocations.
            </p>

            {/* Editorial Technical Bulletins */}
            <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-4 rounded-none">
              <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block border-b border-zinc-200 pb-2">
                ARCHIVAL HYDRO-ENGINEERING ANALYSIS SPECIFICATIONS
              </span>
              <ul className="space-y-3 font-sans text-xs text-zinc-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[10px] text-zinc-400 font-bold mt-0.5">01</span>
                  <span><strong>Hydrometric Records:</strong> Compiled archival records from hydrographic maps dating 1890–1925.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[10px] text-zinc-400 font-bold mt-0.5">02</span>
                  <span><strong>Irrigation Directives:</strong> Mapping canal schemes and state sanitization laws.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[10px] text-zinc-400 font-bold mt-0.5">03</span>
                  <span><strong>Regional Blueprints:</strong> Tracing the long-term impact on coastal towns and post-colonial urban layouts.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Clean Static Blueprinted Schematic Network Viewport */}
          <div className="lg:col-span-8 lg:order-1">
            <div className="border border-zinc-200 p-4 bg-white shadow-xs">
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 rounded-none border border-zinc-800 p-6 flex flex-col justify-between">
                
                {/* Tech HUD Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-800/80 pb-2.5 mb-4 shrink-0">
                  <div className="flex items-center gap-2">
                    <Map size={12} className="text-emerald-500" />
                    <span className="text-zinc-300 font-bold uppercase tracking-wider">Hydrographic Registry Model [Static Layout 2.1]</span>
                  </div>
                  <span>GRID SCHEME: UTM-48N</span>
                </div>

                {/* SVG Static Technical Hydrology Blueprint */}
                <div className="flex-1 w-full h-full flex items-center justify-center p-2 min-h-[180px]">
                  <svg 
                    viewBox="0 0 450 240" 
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Grid Lines */}
                    <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8">
                      <line x1="0" y1="40" x2="450" y2="40" />
                      <line x1="0" y1="120" x2="450" y2="120" />
                      <line x1="0" y1="200" x2="450" y2="200" />
                      <line x1="100" y1="0" x2="100" y2="240" />
                      <line x1="225" y1="0" x2="225" y2="240" />
                      <line x1="350" y1="0" x2="350" y2="240" />
                    </g>

                    {/* Regional Geo Reference Textures */}
                    <text x="20" y="30" fill="rgba(255, 255, 255, 0.2)" className="font-mono text-[8px]">STRAITS OF MALACCA</text>
                    <text x="310" y="220" fill="rgba(255, 255, 255, 0.2)" className="font-mono text-[8px]">KEPPEL ESTUARY REGISTRY</text>

                    {/* Static Main Hydrologic Flow Channels */}
                    <path 
                      d="M 40,40 Q 130,80 200,60 T 310,120 T 400,190" 
                      fill="none" 
                      stroke="rgb(16, 185, 129)" 
                      strokeWidth="2.5"
                      strokeOpacity="0.8"
                    />

                    <path 
                      d="M 40,40 Q 110,150 240,165 T 330,180 T 400,190" 
                      fill="none" 
                      stroke="#06b6d4" 
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                      strokeDasharray="4, 4"
                    />

                    {/* Intersecting Canal Tributaries */}
                    <line x1="130" y1="67" x2="110" y2="150" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                    <line x1="200" y1="60" x2="240" y2="165" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                    <line x1="310" y1="120" x2="330" y2="180" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />

                    {/* Anchor/Hydrographic Stations circles */}
                    <g fill="#09090b" stroke="rgb(16, 185, 129)" strokeWidth="1.5">
                      <circle cx="40" cy="40" r="5" />
                      <circle cx="130" cy="67" r="4.5" />
                      <circle cx="200" cy="60" r="4.5" />
                      <circle cx="310" cy="120" r="4.5" />
                      <circle cx="400" cy="190" r="5" />
                    </g>

                    <g fill="#09090b" stroke="#06b6d4" strokeWidth="1.5">
                      <circle cx="110" cy="150" r="4" />
                      <circle cx="240" cy="165" r="4" />
                      <circle cx="330" cy="180" r="4" />
                    </g>

                    {/* Station Labels */}
                    <g fill="rgba(255,255,255,0.7)" className="font-mono text-[7.5px]">
                      <text x="40" y="28" textAnchor="middle">INFLOW DELTA</text>
                      <text x="130" y="55" textAnchor="middle">SIPHON AL-01</text>
                      <text x="210" y="50">ANCHOR REGION</text>
                      <text x="320" y="112">SPILLWAY OUTLET</text>
                      <text x="400" y="205" textAnchor="middle">PRIMARY EXHAUST</text>
                    </g>
                  </svg>
                </div>

                {/* Bottom Model annotations */}
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-zinc-800/80 pt-2.5 mt-4 shrink-0">
                  <span>SCALE REFERENCE: 1:250,000 ARCHIVAL SURVEYS</span>
                  <span className="text-emerald-500 font-bold uppercase tracking-wider">● VERIFIED CARTOGRAPHY</span>
                </div>

              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                <span>FIGURE 2.2: HYDRO-CARTOGRAPHIC INFRASTRUCTURE VECTOR MODEL</span>
                <span className="text-[10px] text-zinc-500">MAPPING SYSTEM RESIDENTIAL GRID V3.0</span>
              </div>
            </div>
          </div>

        </section>

        {/* Project III: Archives of Science and Public Health Policy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start" id="project-archiving">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs bg-zinc-900 text-white px-2.5 py-1 uppercase font-semibold">
                Project 03
              </span>
              <span className="text-emerald-600 font-mono text-xs font-semibold uppercase tracking-wider">
                ● POLICY CABINET
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-tight text-zinc-900">
              Archives of Science and Public Health Policy
            </h2>
            <div className="border-t border-zinc-200 pt-4 space-y-2.5 font-mono text-xs text-zinc-500">
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Principal Investigator:</span>
                <span className="text-zinc-950 font-medium">Dr. Liang Chen</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span>Archived Volume:</span>
                <span className="text-zinc-950 font-medium">10,240 Microfilms</span>
              </div>
              <div className="flex justify-between">
                <span>Methodology:</span>
                <span className="text-zinc-950 font-medium">Archival Retrieval & Semantic Indexing</span>
              </div>
            </div>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed pt-2">
              Preserving and translating high-value documents from Asian science directories and sanitization ministries. Our research scans degraded journals, governmental memos, and health committee catalogs, offering a digitized relational catalog of 20th-century Asian geopolitics and healthcare budgets.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigateToTab('archives')}
                className="cursor-pointer font-mono text-xs font-bold text-zinc-900 border-b-2 border-emerald-500 hover:text-emerald-600 transition-colors pb-1 flex items-center gap-2"
                id="proj-3-navigate-archives"
              >
                ACCESS SECURE ARTIFACT PORTAL <ArrowRight size={12} className="text-emerald-500" />
              </button>
            </div>
          </div>

          {/* Scholarly Archives Ledger (Prone to academic verification, beautifully static) */}
          <div className="lg:col-span-8">
            <div className="border border-zinc-200 p-4 bg-white shadow-xs">
              
              <div className="border border-zinc-200 rounded-none overflow-hidden bg-zinc-50 flex flex-col">
                
                {/* Ledger Header */}
                <div className="bg-white border-b border-zinc-200 px-5 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Table size={15} className="text-zinc-800" />
                    <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">Digitized Science and Medicine Correspondence Registry</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 uppercase">
                    Index REGISTRY_3.24
                  </span>
                </div>

                {/* Table Layout for Static Records */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-150 border-b border-zinc-200 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        <th className="px-5 py-3 font-semibold">Associated File Name</th>
                        <th className="px-5 py-3 font-semibold">Category</th>
                        <th className="px-5 py-3 font-semibold">Size</th>
                        <th className="px-5 py-3 font-semibold">SHA256 Code Identifier</th>
                        <th className="px-5 py-3 font-semibold text-right">Extraction Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 bg-white font-sans text-zinc-650">
                      {archiveLogs.map((log) => (
                        <tr key={log.filename} className="hover:bg-zinc-50 transition-colors">
                          <td className="px-5 py-3.5 font-mono text-zinc-900 text-xs font-semibold">
                            {log.filename}
                          </td>
                          <td className="px-5 py-3.5">
                            {log.category}
                          </td>
                          <td className="px-5 py-3.5 text-zinc-500 font-mono text-[11px]">
                            {log.size}
                          </td>
                          <td className="px-5 py-3.5 text-zinc-400 font-mono text-[11px] uppercase tracking-tighter">
                            {log.hash.slice(7, 20)}...
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 uppercase font-semibold">
                              <CheckCircle size={10} /> Verified
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Microfiche detail block */}
                <div className="p-4 bg-zinc-100 border-t border-zinc-200">
                  <div className="text-[11px] font-sans text-zinc-500 leading-normal flex items-start gap-2.5">
                    <Database size={14} className="text-zinc-400 shrink-0 mt-0.5" />
                    <span>
                      Archive files compiled from regional scientific ministries. Digital restoration models use optical character recognition metrics to extract text from degraded papers, saving valuable resources for the analysis of 20th-century budgets.
                    </span>
                  </div>
                </div>

              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400 font-sans">
                <span>LEDGER ENTRIES: CASS_SCIENCE_POLICY_DOCUMENT_INDEX</span>
                <span className="text-[10px] text-zinc-500 uppercase flex items-center gap-1 font-mono">
                  <CheckCircle size={11} className="text-emerald-500" /> Database Signature Locked
                </span>
              </div>

            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
