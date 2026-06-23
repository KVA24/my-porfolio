/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, X, Mail, Phone, MapPin, User, Briefcase, BookOpen, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = memo(function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { t } = useTranslation();
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
            className="overlay-dark absolute inset-0 backdrop-blur-sm"
          />

          {/* Resume Sheet Body */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-secondary border border-primary rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
          >
            <div className="p-4 sm:p-5 border-b border-primary flex justify-between items-center bg-tertiary">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-accent animate-pulse" />
                <div>
                  <h3 className="text-strong font-extrabold text-sm tracking-wide">{t('resume.title')}</h3>
                  <p className="text-[10px] text-secondary uppercase font-mono">{t('resume.subtitle')}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-primary text-secondary hover:text-strong cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Layout Content scroll area */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-xs sm:text-sm bg-secondary leading-relaxed text-primary">

              {/* Header Profile Info inside CV */}
              <div className="border-b border-primary pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold text-strong">Nguyễn Thành Khiên</h2>
                  <p className="text-accent font-mono font-bold text-sm tracking-wide mt-1">Lead React / Frontend Engineer</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-secondary text-xs mt-3">
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-secondary" /> khiennd98@gmail.com
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-secondary" /> +84 (0) 98 123 3521
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-secondary" /> Hà Nội, Việt Nam
                    </span>
                  </div>
                </div>
                <div className="bg-tertiary border border-primary px-4 py-3 rounded-lg text-xs font-mono space-y-1 text-secondary">
                  <p>Status: <span className="text-emerald-400 font-bold">Open for Proposals</span></p>
                  <p>Relocation: <span className="text-primary">Yes / Worldwide</span></p>
                </div>
              </div>

              {/* Summary narrative */}
              <div className="space-y-2">
                <h4 className="text-strong font-extrabold text-sm uppercase tracking-wide border-b border-primary pb-1 flex items-center gap-1.5">
                  <User size={14} className="text-accent" />
                  <span>Executive Summary</span>
                </h4>
                <p className="text-primary leading-relaxed text-xs">
                  Software engineer with over 5 years of commercial experience in Javascript frameworks, actively focusing on building high-performance large-scale corporate portals using React 18, NextJS, and robust TypeScript micro-architectures. Obsessed with high Core Web Vitals optimization scores (LCP, FID) and reliable custom state layers.
                </p>
              </div>

              {/* Professional Experience CV section */}
              <div className="space-y-4">
                <h4 className="text-strong font-extrabold text-sm uppercase tracking-wide border-b border-primary pb-1 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-accent" />
                  <span>Work Experience</span>
                </h4>

                <div className="space-y-4">
                  {/* Job 1 */}
                  <div className="relative border-l border-accent pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                      <div>
                        <strong className="text-strong text-sm">Senior Frontend Lead</strong>
                        <span className="text-accent block sm:inline sm:ml-2 font-semibold">@ TechCorp Vietnam LLC</span>
                      </div>
                      <span className="text-secondary font-mono mt-0.5 sm:mt-0">2023 - Present (Hanoi)</span>
                    </div>
                    <p className="text-secondary font-medium text-xs">
                      Architect and maintain multi-tier financial SaaS analytics panels, leading a team of 4 senior developers.
                    </p>
                    <ul className="list-disc pr-4 pl-4 space-y-1 text-secondary mt-1 text-[11px]">
                      <li>Refactored obsolete React workflows, decreasing initial page weight bundles by 35% using lazy chunks splitting.</li>
                      <li>Introduced shared micro-frontend libraries, saving up to 80 development hours on nested admin tooling cycles.</li>
                      <li>Configured automated Lighthouse diagnostics running on pull request pipelines.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative border-l border-primary pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs">
                      <div>
                        <strong className="text-strong text-sm">React Developer</strong>
                        <span className="text-accent block sm:inline sm:ml-2 font-semibold font-sans">@ Aura Creative Studio</span>
                      </div>
                      <span className="text-secondary font-mono mt-0.5 sm:mt-0">2021 - 2023</span>
                    </div>
                    <p className="text-secondary font-medium text-xs">
                      Built high-end immersive e-commerce products using Three.js R3F canvas components.
                    </p>
                    <ul className="list-disc pr-4 pl-4 space-y-1 text-secondary mt-1 text-[11px]">
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
                  <h4 className="text-strong font-extrabold text-sm uppercase tracking-wide border-b border-primary pb-1 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-accent" />
                    <span>Education</span>
                  </h4>
                  <div className="space-y-1">
                    <strong className="text-strong block text-xs">B.S. in Computer Science</strong>
                    <span className="text-secondary block text-xs"> Hanoi University of Science &amp; Technology (HUST)</span>
                    <span className="text-muted font-mono text-[10px]">GPA 3.6 / Graduated with High Honors (2017-2021)</span>
                  </div>
                </div>

                {/* Certifications etc */}
                <div className="space-y-3">
                  <h4 className="text-strong font-extrabold text-sm uppercase tracking-wide border-b border-primary pb-1 flex items-center gap-1.5">
                    <Award size={14} className="text-accent" />
                    <span>Certificates</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-secondary">
                    <li className="flex items-center gap-1.5">
                      <span className="text-accent">✔</span> AWS Certified Solutions Architect Associate
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-accent">✔</span> Advanced React Systems &amp; Architecture (FrontendMasters)
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Actions Footer inside CV */}
            <div className="p-4 bg-tertiary border-t border-primary flex justify-between items-center">
              <span className="text-[10px] text-muted font-mono select-none">
                Generated via DevPortfolio 2026-06-22
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => { window.print(); }}
                  className="bg-primary hover:bg-secondary text-strong py-1.5 px-3 rounded font-bold text-xs border border-primary flex items-center gap-1 animate-pulse cursor-pointer h-9"
                >
                  <Download size={12} />
                  <span>{t('resume.download')}</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-accent hover:bg-accent/80 text-[#0d1117] py-1.5 px-4 rounded font-extrabold text-xs cursor-pointer h-9"
                >
                  {t('resume.close')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

export default ResumeModal;
