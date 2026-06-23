/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, memo } from 'react';
import { Layers, Cpu, Code, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { useTranslation } from 'react-i18next';

const Skills = memo(function Skills() {
  const { t } = useTranslation();
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 border-t bg-primary border-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t('skills.subtitle')}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-strong">{t('skills.title')}</h2>
          <p className="text-sm mt-3.5 max-w-md mx-auto text-secondary">
            {t('skills.clickHint')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Category selection */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedSkillCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                </motion.button>
              );
            })}
            
            {/* Dynamic Tech Highlight Counter Widget */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border flex items-center justify-between bg-secondary border-primary"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Lighthouse Audits</div>
                <div className="text-xl font-extrabold mt-1 text-strong">SEO & Performance</div>
              </div>
              <motion.div
                className="h-14 w-14 rounded-full border-4 flex items-center justify-center border-accent bg-accent/10"
                whileHover={{ scale: 1.1 }}
              >
                <span className="font-extrabold text-sm text-accent">100%</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* List of skills for selected category */}
          <motion.div
            className="lg:col-span-7 rounded-xl border p-6 sm:p-8 relative bg-secondary border-primary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            <h4 className="font-extrabold tracking-wide text-lg pb-4 flex items-center gap-2 border-b text-strong border-primary">
              <Code size={18} className="text-accent" />
              <span>
                {selectedSkillCategory === 'frontend' ? t('skills.categories.frontend') : t('skills.categories.backend')}
              </span>
            </h4>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {SKILL_CATEGORIES.find(c => c.id === selectedSkillCategory)?.skills.map((skill) => (
                <motion.div
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(56, 189, 248, 0.05)' }}
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
