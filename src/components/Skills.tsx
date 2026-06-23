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
    <section id="skills" className="py-20 px-4 sm:px-8 border-t bg-primary border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t('skills.subtitle')}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-strong">{t('skills.title')}</h2>
          <p className="text-sm mt-3.5 max-w-md mx-auto text-secondary">
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
                      ? 'bg-secondary border-accent shadow-lg shadow-accent/5'
                      : 'bg-secondary/40 border-primary hover:bg-secondary/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-accent text-strong border border-accent'
                        : 'bg-tertiary text-secondary'
                    }`}>
                      {cat.icon === 'Layers' ? <Layers size={22} /> : <Cpu size={22} />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isSelected ? 'text-strong' : 'text-secondary'}`}>
                        {cat.id === 'frontend' ? t('skills.categories.frontend') : t('skills.categories.backend')}
                      </h3>
                      <p className="text-xs text-secondary mt-1">
                        {cat.skills.length} expert competencies declared
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
            
            {/* Dynamic Tech Highlight Counter Widget */}
            <div className="p-6 rounded-xl border flex items-center justify-between bg-secondary border-primary">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Lighthouse Audits</div>
                <div className="text-xl font-extrabold mt-1 text-strong">SEO & Performance</div>
              </div>
              <div className="h-14 w-14 rounded-full border-4 flex items-center justify-center border-accent bg-accent/10">
                <span className="font-extrabold text-sm text-accent">100%</span>
              </div>
            </div>
          </div>
          
          {/* List of skills for selected category */}
          <div className="lg:col-span-7 rounded-xl border p-6 sm:p-8 relative bg-secondary border-primary">
            <h4 className="font-extrabold tracking-wide text-lg pb-4 flex items-center gap-2 border-b text-strong border-primary">
              <Code size={18} className="text-accent" />
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
                  className="p-3.5 rounded-lg border transition-all flex items-center justify-between group cursor-help bg-tertiary border-primary hover:border-accent"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded flex items-center justify-center group-hover:transition-colors bg-secondary text-accent">
                      <CheckCircle size={12} />
                    </div>
                    <span className="text-sm font-medium group-hover:transition-colors text-primary group-hover:text-accent">
                      {skill}
                    </span>
                  </div>
                  
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity text-secondary`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
