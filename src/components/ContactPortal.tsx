/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, CheckCircle, Send, Terminal, Key, ShieldAlert, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QueuedSubmission {
  id: string;
  name: string;
  institution: string;
  category: string;
  timestamp: string;
  status: string;
}

export const ContactPortal: React.FC = () => {
  // Roster queue logs state
  const [submissionsQueue, setSubmissionsQueue] = useState<QueuedSubmission[]>([
    {
      id: 'REQ-1094',
      name: 'Dr. Arthur Pendelton',
      institution: 'Oxford East Asian Studies',
      category: 'Collaboration Proposals',
      timestamp: '2026-05-20 09:14',
      status: 'UNDER_REVIEW'
    },
    {
      id: 'REQ-1093',
      name: 'Dr. Clara Oswald',
      institution: 'British Science Council Archives',
      category: 'Science Policy Audits',
      timestamp: '2026-05-19 14:02',
      status: 'VERIFICATION_SUCCESSFUL'
    }
  ]);

  // Form states
  const [name, setName] = useState<string>('');
  const [institution, setInstitution] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [category, setCategory] = useState<string>('General Inquiry');
  const [message, setMessage] = useState<string>('');

  // Transmission console feedback state
  const [transmissionFeed, setTransmissionFeed] = useState<string[]>([]);
  const [isTransmitting, setIsTransmitting] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);

  // Handle inquiry dispatch
  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsTransmitting(true);
    setTransmissionFeed([
      "RESOLVING DOMAIN HOST: verified academic channels requested",
      "METADATA_BOUNDING: framing message syntax variables...",
    ]);

    // Fast-simulating envelope compile
    setTimeout(() => {
      setTransmissionFeed((prev) => [
        ...prev,
        "COMPILING_ENVELOPE: SHA256 authorship hash generated",
        "TRANSMITTING ENVELOPE TO DR. LIANG CHEN'S PRIMARY DESK..."
      ]);
    }, 600);

    setTimeout(() => {
      const generatedId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      const newRecord: QueuedSubmission = {
        id: generatedId,
        name,
        institution: institution || 'Independent Scholar',
        category,
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        status: 'SUBMISSION_ACCEPTED'
      };

      setSubmissionsQueue([newRecord, ...submissionsQueue]);
      setTransmissionFeed((prev) => [
        ...prev,
        `» SECURE HANDSHAKE SUCCESSFUL: ${generatedId}`,
        "» DISPATCH QUEUED. LOGGED IN REAL-TIME LEDGER BELOW."
      ]);
      setFormSent(true);
      setIsTransmitting(false);

      // Clear input fields
      setName('');
      setInstitution('');
      setEmail('');
      setCategory('General Inquiry');
      setMessage('');
    }, 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 animate-fade-in">
      
      {/* Editorial Title Block */}
      <div className="border-b border-zinc-200 pb-12 mb-12">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-3">
          CASS Inquiry Desk // Official Comm channels
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
          Academic Contact
        </h1>
        <p className="mt-4 text-zinc-500 font-sans leading-relaxed text-base max-w-2xl">
          Submit collaboration research proposals, request digitized microfilm records, or inquire about graduate student opportunities in our Asian science history projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Submissions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-zinc-200 bg-white p-6 md:p-8">
            
            <form onSubmit={handleFormSubmission} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                
                {/* Full name input */}
                <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                  <label htmlFor="input-desc-name" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="input-desc-name"
                    required
                    placeholder="e.g. Dr. Arthur Pendelton"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (formSent) setFormSent(false);
                    }}
                    className="w-full text-xs font-sans text-zinc-900 border border-zinc-200 bg-white px-4 py-3 focus:outline-none focus:border-zinc-900 rounded-none leading-none focus:ring-1 focus:ring-zinc-950"
                  />
                </div>

                {/* Institution affilation input */}
                <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                  <label htmlFor="input-desc-affil" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                    Institution Affiliation
                  </label>
                  <input 
                    type="text" 
                    id="input-desc-affil"
                    placeholder="e.g. Oxford East Asian Studies"
                    value={institution}
                    onChange={(e) => {
                      setInstitution(e.target.value);
                      if (formSent) setFormSent(false);
                    }}
                    className="w-full text-xs font-sans text-zinc-900 border border-zinc-200 bg-white px-4 py-3 focus:outline-none focus:border-zinc-900 rounded-none leading-none focus:ring-1 focus:ring-zinc-950"
                  />
                </div>

              </div>

              {/* Email and Category dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                
                {/* Email address */}
                <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                  <label htmlFor="input-desc-email" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                    Academic Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="input-desc-email"
                    required
                    placeholder="e.g. pendelton.a@oxford.edu"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formSent) setFormSent(false);
                    }}
                    className="w-full text-xs font-sans text-zinc-900 border border-zinc-200 bg-white px-4 py-3 focus:outline-none focus:border-zinc-900 rounded-none leading-none focus:ring-1 focus:ring-zinc-950"
                  />
                </div>

                {/* Inquiry category selector */}
                <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                  <label htmlFor="input-select-category" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                    Inquiry Category
                  </label>
                  <select 
                    id="input-select-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs font-mono text-zinc-700 border border-zinc-200 bg-white px-4 py-3 focus:outline-none focus:border-zinc-900 rounded-none leading-none focus:ring-1 focus:ring-zinc-950"
                  >
                    <option>General Inquiry</option>
                    <option>Collaboration Proposals</option>
                    <option>Science Policy Audits</option>
                    <option>Prospective Student Applications</option>
                  </select>
                </div>

              </div>

              {/* Message text area */}
              <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                <label htmlFor="input-para-abstract" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                  Research Abstraction / Message Body *
                </label>
                <textarea 
                  id="input-para-abstract"
                  required
                  rows={4}
                  placeholder="Detail the scope of your science history inquiry or historical microfilm/policy records request..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (formSent) setFormSent(false);
                  }}
                  className="w-full text-xs font-sans text-zinc-900 border border-zinc-200 bg-white px-4 py-3 focus:outline-none focus:border-zinc-900 rounded-none leading-relaxed focus:ring-1 focus:ring-zinc-950 resize-y"
                />
              </div>

              {/* Submit & Status Indicator button row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono select-none">
                
                <div className="text-[11px] text-zinc-400">
                  * Fields marked with asterisk are mandatory
                </div>

                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="cursor-pointer font-mono text-xs font-bold bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-950 px-8 py-3.5 transition-all uppercase rounded-none tracking-wider shrink-0 flex items-center justify-center gap-2 group disabled:bg-zinc-400 disabled:border-zinc-400"
                  id="btn-contact-submit"
                >
                  {isTransmitting ? 'TRANSMITTING...' : 'DISPATCH PORTAL'}
                  <Send size={11} className="transition-transform group-hover:translate-x-1" />
                </button>

              </div>

            </form>

            {/* Dynamic visual Envelope compilation logs */}
            <AnimatePresence>
              {(isTransmitting || formSent) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border border-zinc-805 bg-zinc-950 text-emerald-400 p-5 font-mono text-[11px] space-y-2 mt-6 overflow-hidden"
                  id="transmission-log-terminal"
                >
                  <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 mb-2 justify-between">
                    <div className="flex items-center gap-1.5 text-zinc-350">
                      <Terminal size={12} className="text-emerald-500 animate-pulse" />
                      <span className="font-bold uppercase tracking-wider text-[10px]">Transmission Envelope Log</span>
                    </div>
                    {formSent && <span className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 uppercase rounded-xs">DONE</span>}
                  </div>
                  {transmissionFeed.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={line.startsWith('»') ? 'text-white font-bold' : 'text-emerald-500'}
                    >
                      {line}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Right Column: Live Roster of Received Proposals */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="border border-zinc-200 bg-zinc-50 p-6 md:p-8 space-y-6">
            
            <div className="space-y-1.5 border-b border-zinc-200 pb-4">
              <span className="font-mono text-[10px] text-zinc-400 block uppercase font-bold">Ledger Ledger V3.2</span>
              <h2 className="font-serif text-xl font-bold text-zinc-900">Submitted Academic Requests Queue</h2>
              <p className="font-sans text-xs text-zinc-500 leading-normal">
                Real-time cryptographic queue monitoring inbound laboratory proposal handshakes. Names are abstracted for security standards.
              </p>
            </div>

            <div className="space-y-3" id="submitted-inquiries-queue">
              {submissionsQueue.map((log) => {
                const isNew = log.status === 'SUBMISSION_ACCEPTED';
                return (
                  <div 
                    key={log.id} 
                    className={`p-4 border bg-white rounded-none flex flex-col gap-2 relative overflow-hidden transition-all duration-300 ${
                      isNew ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-zinc-200'
                    }`}
                  >
                    
                    {/* Badge */}
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-450 block">{log.id} ledger</span>
                      <span className={`px-2 py-0.5 border font-bold uppercase rounded-3xs text-[9px] ${
                        isNew 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                      }`}>
                        {log.status}
                      </span>
                    </div>

                    {/* Applicant & Institution info */}
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-sm font-bold text-zinc-900">{log.name}</h4>
                      <p className="font-sans text-xs text-zinc-400 truncate">{log.institution}</p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-zinc-100 pt-2.5 mt-1">
                      <span>{log.category}</span>
                      <span>{log.timestamp}</span>
                    </div>

                    {/* Visual highlighted accent for newly parsed queues */}
                    {isNew && (
                      <div className="absolute right-0 top-0 h-4 w-4 bg-emerald-500 rotate-45 translate-x-2.5 -translate-y-2.5" />
                    )}

                  </div>
                );
              })}
            </div>

            {/* Warning security colophon */}
            <div className="border border-zinc-200 bg-white p-4 font-mono text-[10px] text-zinc-550 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert size={14} className="text-zinc-500 shrink-0 mt-0.5 animate-pulse" />
              <span>
                WARNING: Inbound submissions undergo automated semantic validation looking for spam structures. Content not conforming will be purged without notification.
              </span>
            </div>

          </div>

          <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400">
            <span>TERMINAL_DESK: INBOUND_HANDSHAKE_MONITOR_CONNECTED</span>
            <span className="text-emerald-500 font-bold uppercase">● LIVE SENSING</span>
          </div>

        </div>

      </div>
    </div>
  );
};
