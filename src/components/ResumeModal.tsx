/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, X, Mail, Phone, MapPin, User, Briefcase, BookOpen, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../data';

interface ResumeModalProps {
  t: typeof TRANSLATIONS.VN;
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ t, isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Resume Sheet Body */}
          <motion.div 
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
          >
            <div className="p-4 sm:p-5 border-b border-[#21262d] flex justify-between items-center bg-[#090d13]">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-cyan-400 animate-pulse" />
                <div>
                  <h3 className="text-white font-extrabold text-sm tracking-wide">{t.resumeTitle}</h3>
                  <p className="text-[10px] text-[#8b949e] uppercase font-mono">{t.resumeSubtitle}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-[#21262d] text-[#8b949e] hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Layout Content scroll area */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-xs sm:text-sm bg-[#161b22] leading-relaxed text-slate-300">
              
              {/* Header Profile Info inside CV */}
              <div className="border-b border-[#21262d] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-white">Nguyễn Thành Khiên</h2>
                  <p className="text-cyan-400 font-mono font-bold text-sm tracking-wide mt-1">Lead React / Frontend Engineer</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 text-xs mt-3">
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-[#8b949e]" /> khiennd98@gmail.com
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-[#8b949e]" /> +84 (0) 98 123 3521
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#8b949e]" /> Hà Nội, Việt Nam
                    </span>
                  </div>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] px-4 py-3 rounded-lg text-xs font-mono space-y-1 text-[#8b949e]">
                  <p>Status: <span className="text-emerald-400 font-bold">Open for Proposals</span></p>
                  <p>Relocation: <span className="text-slate-300">Yes / Worldwide</span></p>
                </div>
              </div>

              {/* Summary narrative */}
              <div className="space-y-2">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide border-b border-[#21262d] pb-1 flex items-center gap-1.5">
                  <User size={14} className="text-cyan-400" />
                  <span>Executive Summary</span>
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Software engineer with over 5 years of commercial experience in Javascript frameworks, actively focusing on building high-performance large-scale corporate portals using React 18, NextJS, and robust TypeScript micro-architectures. Obsessed with high Core Web Vitals optimization scores (LCP, FID) and reliable custom state layers.
                </p>
              </div>

              {/* Professional Experience CV section */}
              <div className="space-y-4">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide border-b border-[#21262d] pb-1 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-cyan-400" />
                  <span>Work Experience</span>
                </h4>

                <div className="space-y-4">
                  {/* Job 1 */}
                  <div className="relative border-l border-cyan-500 pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                      <div>
                        <strong className="text-white text-sm">Senior Frontend Lead</strong>
                        <span className="text-cyan-400 block sm:inline sm:ml-2 font-semibold">@ TechCorp Vietnam LLC</span>
                      </div>
                      <span className="text-[#8b949e] font-mono mt-0.5 sm:mt-0">2023 - Present (Hanoi)</span>
                    </div>
                    <p className="text-slate-400 font-medium text-xs">
                      Architect and maintain multi-tier financial SaaS analytics panels, leading a team of 4 senior developers.
                    </p>
                    <ul className="list-disc pr-4 pl-4 space-y-1 text-[#8b949e] mt-1 text-[11px]">
                      <li>Refactored obsolete React workflows, decreasing initial page weight bundles by 35% using lazy chunks splitting.</li>
                      <li>Introduced shared micro-frontend libraries, saving up to 80 development hours on nested admin tooling cycles.</li>
                      <li>Configured automated Lighthouse diagnostics running on pull request pipelines.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative border-l border-[#30363d] pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                      <div>
                        <strong className="text-white text-sm">React Developer</strong>
                        <span className="text-cyan-400 block sm:inline sm:ml-2 font-semibold font-sans">@ Aura Creative Studio</span>
                      </div>
                      <span className="text-[#8b949e] font-mono mt-0.5 sm:mt-0">2021 - 2023</span>
                    </div>
                    <p className="text-slate-400 font-medium text-xs">
                      Built high-end immersive e-commerce products using Three.js R3F canvas components.
                    </p>
                    <ul className="list-disc pr-4 pl-4 space-y-1 text-[#8b949e] mt-1 text-[11px]">
                      <li>Collaborated with overseas UX designers to craft high-fidelity animation transitions using Framer Motion.</li>
                      <li>Secured checkout workflows with custom stripe middleware hooks, maintaining zero leakage rate logs.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education and courses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Edu */}
                <div className="space-y-3">
                  <h4 className="text-white font-extrabold text-sm uppercase tracking-wide border-b border-[#21262d] pb-1 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-cyan-400" />
                    <span>Education</span>
                  </h4>
                  <div className="space-y-1">
                    <strong className="text-white block text-xs">B.S. in Computer Science</strong>
                    <span className="text-[#8b949e] block text-xs"> Hanoi University of Science &amp; Technology (HUST)</span>
                    <span className="text-[#444c56] font-mono text-[10px]">GPA 3.6 / Graduated with High Honors (2017-2021)</span>
                  </div>
                </div>

                {/* Certifications etc */}
                <div className="space-y-3">
                  <h4 className="text-white font-extrabold text-sm uppercase tracking-wide border-b border-[#21262d] pb-1 flex items-center gap-1.5">
                    <Award size={14} className="text-cyan-400" />
                    <span>Certificates</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li className="flex items-center gap-1.5">
                      <span className="text-cyan-400">✔</span> AWS Certified Solutions Architect Associate
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-cyan-400">✔</span> Advanced React Systems &amp; Architecture (FrontendMasters)
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Actions Footer inside CV */}
            <div className="p-4 bg-[#0d1117] border-t border-[#21262d] flex justify-between items-center bg-[#090d13]">
              <span className="text-[10px] text-[#444c56] font-mono select-none">
                Generated via DevPortfolio 2026-06-22
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => { window.print(); }}
                  className="bg-[#21262d] hover:bg-[#30363d] text-white py-1.5 px-3 rounded font-bold text-xs border border-[#30363d] flex items-center gap-1 animate-pulse cursor-pointer h-9"
                >
                  <Download size={12} />
                  <span>{t.resumeDownload}</span>
                </button>
                <button 
                  onClick={onClose}
                  className="bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] py-1.5 px-4 rounded font-extrabold text-xs cursor-pointer h-9"
                >
                  {t.resumeClose}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
