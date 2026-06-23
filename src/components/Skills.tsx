/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layers, Cpu, Code, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <section id="skills" className={`py-20 px-4 sm:px-8 border-t ${
      theme === 'light'
        ? 'bg-[#f6f8fa] border-blue-200'
        : 'bg-[#0c1015] border-[#21262d]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className={`text-xs font-bold uppercase tracking-widest ${
            theme === 'light' ? 'text-blue-600' : 'text-cyan-400'
          }`}>{t('skills.subtitle')}</p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>{t('skills.title')}</h2>
          <p className={`text-sm mt-3.5 max-w-md mx-auto ${
            theme === 'light'
              ? 'text-slate-600'
              : 'text-[#8b949e]'
          }`}>
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
                      ? theme === 'light'
                        ? 'bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/5'
                        : 'bg-[#161b22] border-cyan-500 shadow-lg shadow-cyan-500/5'
                      : theme === 'light'
                        ? 'bg-white/60 border-blue-200 hover:bg-white'
                        : 'bg-[#161b22]/40 border-[#30363d] hover:bg-[#161b22]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? theme === 'light'
                          ? 'bg-blue-100 text-blue-600 border border-blue-300'
                          : 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                        : theme === 'light'
                          ? 'bg-slate-100 text-slate-500'
                          : 'bg-[#0d1117] text-[#8b949e]'
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
            <div className={`p-6 rounded-xl border flex items-center justify-between ${
              theme === 'light'
                ? 'bg-emerald-50 border-emerald-300'
                : 'bg-gradient-to-r from-emerald-950/10 to-indigo-950/10 border-[#30363d]'
            }`}>
              <div>
                <div className={`text-xs font-mono uppercase tracking-widest ${
                  theme === 'light'
                    ? 'text-emerald-600'
                    : 'text-cyan-400'
                }`}>Lighthouse Audits</div>
                <div className={`text-xl font-extrabold mt-1 ${
                  theme === 'light'
                    ? 'text-slate-900'
                    : 'text-white'
                }`}>SEO & Performance</div>
              </div>
              <div className={`h-14 w-14 rounded-full border-4 flex items-center justify-center ${
                theme === 'light'
                  ? 'bg-emerald-100 border-emerald-600'
                  : 'bg-emerald-950/40 border-emerald-500'
              }`}>
                <span className={`font-extrabold text-sm ${
                  theme === 'light'
                    ? 'text-emerald-600'
                    : 'text-emerald-400'
                }`}>100%</span>
              </div>
            </div>
          </div>
          
          {/* List of skills for selected category */}
          <div className={`lg:col-span-7 rounded-xl border p-6 sm:p-8 relative ${
            theme === 'light'
              ? 'bg-white border-blue-200'
              : 'bg-[#161b22] border-[#30363d]'
          }`}>
            <h4 className={`font-extrabold tracking-wide text-lg pb-4 flex items-center gap-2 border-b ${
              theme === 'light'
                ? 'text-slate-900 border-blue-100'
                : 'text-white border-[#21262d]'
            }`}>
              <Code size={18} className={theme === 'light' ? 'text-blue-600' : 'text-cyan-400'} />
              <span>
                {selectedSkillCategory === 'frontend' ? t('skills.categories.frontend') : t('skills.categories.backend')}
              </span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {SKILL_CATEGORIES.find(c => c.id === selectedSkillCategory)?.skills.map((skill) => (
                <div
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-3.5 rounded-lg border transition-all flex items-center justify-between group cursor-help ${
                    theme === 'light'
                      ? 'bg-blue-50 border-blue-200 hover:border-blue-400'
                      : 'bg-[#0d1117] border-[#21262d] hover:border-cyan-500/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-6 w-6 rounded flex items-center justify-center group-hover:transition-colors ${
                      theme === 'light'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-[#161b22] text-cyan-400 group-hover:bg-cyan-500/10'
                    }`}>
                      <CheckCircle size={12} />
                    </div>
                    <span className={`text-sm font-medium group-hover:transition-colors ${
                      theme === 'light'
                        ? 'text-slate-900 group-hover:text-blue-600'
                        : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {skill}
                    </span>
                  </div>
                  
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                    theme === 'light'
                      ? 'text-slate-600'
                      : 'text-[#8b949e]'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
