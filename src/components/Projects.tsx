/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SVGProps, memo } from 'react';
import { ChevronRight, Eye } from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from '../data';
import { Project } from '../types';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects = memo(function Projects({ onSelectProject }: ProjectsProps) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 grid-bg bg-primary border-t border-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t('projects.subtitle')}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-strong">{t('projects.title')}</h2>
          <div className="w-16 h-1 rounded mx-auto mt-3 bg-accent"></div>
        </motion.div>

        {/* Bento-grid style layout with asymmetry: first project is featured (taller) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group rounded-xl border bg-opacity-40 hover:border-accent transition-all duration-300 overflow-hidden flex flex-col justify-between bg-secondary border-primary ${
                idx === 0 ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Image & tag overlay container */}
              <div className={`relative overflow-hidden border-b bg-opacity-50 bg-tertiary border-primary ${
                idx === 0 ? 'aspect-square sm:aspect-auto sm:h-96' : 'aspect-video'
              }`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t via-opacity-20 to-transparent from-tertiary" />

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-xs font-bold px-2.5 py-1 rounded bg-accent text-[#0d1117]"
                  >
                    {project.category}
                  </motion.span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded backdrop-blur bg-black/60 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <motion.h3
                    whileHover={{ color: '#38bdf8' }}
                    className="text-xl sm:text-2xl font-extrabold mb-3 group-hover:transition-colors text-strong"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-xs leading-relaxed mb-4 text-secondary">
                    {project.description}
                  </p>

                  {/* Integrated technology tags inline */}
                  <motion.div
                    className="flex flex-wrap gap-1.5 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {project.tech.map(techName => (
                      <motion.span
                        key={techName}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="font-mono text-[11px] border px-2 py-0.5 rounded bg-tertiary text-primary border-primary"
                      >
                        {techName}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Buttons Action bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-primary">
                  <motion.button
                    onClick={() => onSelectProject(project)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 py-2 px-4 rounded-lg font-bold text-xs border flex items-center justify-center gap-1.5 cursor-pointer leading-7 transition-all btn-secondary"
                  >
                    <span>{t('projects.detailsBtn')}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.a
                    href={project.demoUrl}
                    onClick={(e) => { e.preventDefault(); alert("Interactive client prototype live inside AI Studio sandbox!"); }}
                    whileHover={{ scale: 1.05 }}
                    className="py-2 px-3 rounded-lg border font-bold text-xs flex items-center justify-center gap-1 cursor-pointer leading-7 transition-all bg-transparent text-accent border-accent/30 hover:bg-accent/10"
                  >
                    <Eye size={13} />
                    <span className="hidden sm:inline">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;

function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4l-3 6a1 1 0 0 0 .5 1.5M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4l-3 6a1 1 0 0 0 .5 1.5" />
    </svg>
  );
}
