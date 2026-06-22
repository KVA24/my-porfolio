/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SVGProps } from 'react';
import { ChevronRight, Eye } from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from '../data';
import { Project } from '../types';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 bg-[#0d1117] border-t border-[#21262d] grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{t('projects.subtitle')}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-cyan-500 rounded mx-auto mt-3"></div>
        </div>

        {/* Bento-grid style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-[#30363d] bg-[#161b22] hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image & tag overlay container */}
              <div className="relative aspect-video overflow-hidden border-b border-[#21262d] bg-[#090d13]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-[#090d13]/20 to-transparent" />

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="bg-cyan-500 text-[#0d1117] text-xs font-bold px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-black/60 text-white text-[10px] font-medium tracking-wide px-2 py-0.5 rounded backdrop-blur">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Integrated technology tags inline */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map(techName => (
                      <span key={techName} className="font-mono text-[11px] bg-[#0d1117] text-slate-300 border border-[#21262d] px-2 py-0.5 rounded">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#21262d]/50">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 bg-[#21262d] hover:bg-[#30363d] text-white py-2 px-4 rounded-lg font-bold text-xs border border-[#30363d] flex items-center justify-center gap-1.5 cursor-pointer leading-7"
                  >
                    <span>{t('projects.detailsBtn')}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.demoUrl}
                    onClick={(e) => { e.preventDefault(); alert("Interactive client prototype live inside AI Studio sandbox!"); }}
                    className="bg-transparent hover:bg-cyan-500/10 text-cyan-400 py-2 px-3 rounded-lg border border-cyan-500/30 font-bold text-xs flex items-center justify-center gap-1 cursor-pointer leading-7"
                  >
                    <Eye size={13} />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonies inside the project frame to display feedback on products */}
        <div className="mt-16 pt-12 border-t border-[#21262d]/70 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map(tData => (
            <div key={tData.id} className="p-6 rounded-xl border border-[#21262d] bg-[#161b22]/50 relative">
              <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-[#21262d]" />
              <p className="text-sm text-[#8b949e] italic leading-relaxed mb-6">{tData.text}</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-[#30363d] bg-slate-800">
                  <img src={tData.avatar} alt={tData.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-xs">{tData.name}</h5>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">{tData.role} @ {tData.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4l-3 6a1 1 0 0 0 .5 1.5M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4l-3 6a1 1 0 0 0 .5 1.5" />
    </svg>
  );
}
