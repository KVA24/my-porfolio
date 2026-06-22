/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layers, Cpu, Code, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 border-t border-[#21262d] bg-[#0c1015]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{t('skills.subtitle')}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">{t('skills.title')}</h2>
          <p className="text-[#8b949e] text-sm mt-3.5 max-w-md mx-auto">
            {t('skills.clickHint')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Category selection */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedSkillCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                  className={`p-6 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#161b22] border-cyan-500 shadow-lg shadow-cyan-500/5'
                      : 'bg-[#161b22]/40 border-[#30363d] hover:bg-[#161b22]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' : 'bg-[#0d1117] text-[#8b949e]'
                    }`}>
                      {cat.icon === 'Layers' ? <Layers size={22} /> : <Cpu size={22} />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-[#8b949e]'}`}>
                        {cat.id === 'frontend' ? t('skills.categories.frontend') : t('skills.categories.backend')}
                      </h3>
                      <p className="text-xs text-[#8b949e] mt-1">
                        {cat.skills.length} expert competencies declared
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Dynamic Tech Highlight Counter Widget */}
            <div className="p-6 rounded-xl border border-[#30363d] bg-gradient-to-r from-emerald-950/10 to-indigo-950/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Lighthouse Audits</div>
                <div className="text-xl font-extrabold text-white mt-1">SEO & Performance</div>
              </div>
              <div className="h-14 w-14 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-950/40">
                <span className="font-extrabold text-emerald-400 text-sm">100%</span>
              </div>
            </div>
          </div>

          {/* List of skills for selected category */}
          <div className="lg:col-span-7 rounded-xl border border-[#30363d] bg-[#161b22] p-6 sm:p-8 relative">
            <h4 className="text-white font-extrabold tracking-wide text-lg mb-6 border-b border-[#21262d] pb-4 flex items-center gap-2">
              <Code size={18} className="text-cyan-400" />
              <span>
                {selectedSkillCategory === 'frontend' ? t('skills.categories.frontend') : t('skills.categories.backend')}
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.find(c => c.id === selectedSkillCategory)?.skills.map((skill) => (
                <div
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="p-3.5 rounded-lg bg-[#0d1117] border border-[#21262d] hover:border-cyan-500/60 transition-all flex items-center justify-between group cursor-help"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-[#161b22] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      <CheckCircle size={12} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>

                  <ChevronRight size={14} className="text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
