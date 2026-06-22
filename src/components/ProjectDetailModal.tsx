/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { TRANSLATIONS } from '../data';

interface ProjectDetailModalProps {
  t: typeof TRANSLATIONS.VN;
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ t, project, onClose }: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Body */}
          <motion.div 
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            <div className="p-4 sm:p-5 border-b border-[#21262d] flex justify-between items-center bg-[#090d13]">
              <div className="flex items-center gap-2">
                <Settings size={16} className="text-cyan-400 rotate-45" />
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">Architectural Spec</span>
              </div>
              <button 
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-[#21262d] text-[#8b949e] hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable specs */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <div>
                <h3 className="text-xl font-extrabold text-white mb-2">{project.title}</h3>
                <span className="bg-cyan-950 font-mono text-xs text-cyan-400 border border-cyan-800/30 px-2.5 py-1 rounded">
                  Category: {project.category}
                </span>
              </div>

              {/* Challenge description */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider text-cyan-400">{t.projectChallenge}</h4>
                <p className="text-slate-300 leading-relaxed text-xs">{project.details.challenge}</p>
              </div>

              {/* Technical Solution */}
              <div className="space-y-1.5">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider text-emerald-400">{t.projectSolution}</h4>
                <p className="text-slate-300 leading-relaxed text-xs">{project.details.solution}</p>
              </div>

              {/* Core metrics visual grid */}
              <div className="space-y-2">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider text-[#58a6ff]">{t.projectMetrics}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.details.metrics.map((metric, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#0d1117] border border-[#21262d] text-xs text-white font-semibold flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✔</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture stack visual boxes */}
              <div className="space-y-2">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider text-purple-400">{t.projectArchitecture}</h4>
                <div className="bg-[#090d13] p-4 rounded-lg border border-[#21262d] space-y-3 font-mono text-xs text-[#8b949e]">
                  {project.details.architecture.map((archLine, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <span className="text-cyan-500 font-bold">[{idx + 1}]</span>
                      <p className="text-slate-300">{archLine}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons inside specs */}
            <div className="p-4 bg-[#0d1117] border-t border-[#21262d] flex justify-end gap-3">
              <button 
                onClick={onClose}
                className="bg-[#21262d] hover:bg-[#30363d] text-white py-1.5 px-4 rounded-lg font-bold text-xs border border-[#30363d] cursor-pointer"
              >
                {t.projectCloseBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
