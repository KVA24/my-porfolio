/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SVGProps } from 'react';
import { ChevronRight, Eye } from 'lucide-react';
import { PROJECTS, TESTIMONIALS } from '../data';
import { Project } from '../types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-20 px-4 sm:px-8 grid-bg ${
      theme === 'light' 
        ? 'bg-[#f6f8fa] border-t border-blue-200' 
        : 'bg-[#0d1117] border-t border-[#21262d]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className={`text-xs font-bold uppercase tracking-widest ${
            theme === 'light' ? 'text-blue-600' : 'text-cyan-400'
          }`}>{t('projects.subtitle')}</p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>{t('projects.title')}</h2>
          <div className={`w-16 h-1 rounded mx-auto mt-3 ${
            theme === 'light' ? 'bg-blue-500' : 'bg-cyan-500'
          }`}></div>
        </div>

        {/* Bento-grid style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`group rounded-xl border bg-opacity-40 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                theme === 'light'
                  ? 'border-blue-200 bg-white hover:border-blue-500/50'
                  : 'border-[#30363d] bg-[#161b22] hover:border-cyan-500/50'
              }`}
            >
              {/* Image & tag overlay container */}
              <div className={`relative aspect-video overflow-hidden border-b bg-opacity-50 ${
                theme === 'light'
                  ? 'border-blue-100 bg-blue-50'
                  : 'border-[#21262d] bg-[#090d13]'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-opacity-20 to-transparent ${
                  theme === 'light'
                    ? 'from-blue-50'
                    : 'from-[#090d13]'
                }`} />

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                    theme === 'light'
                      ? 'bg-blue-600 text-white'
                      : 'bg-cyan-500 text-[#0d1117]'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-medium tracking-wide px-2 py-0.5 rounded backdrop-blur ${
                        theme === 'light'
                          ? 'bg-white/60 text-slate-900'
                          : 'bg-black/60 text-white'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 group-hover:transition-colors ${
                    theme === 'light'
                      ? 'text-slate-900 group-hover:text-blue-600'
                      : 'text-white group-hover:text-cyan-400'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-4 ${
                    theme === 'light'
                      ? 'text-slate-600'
                      : 'text-[#8b949e]'
                  }`}>
                    {project.description}
                  </p>

                  {/* Integrated technology tags inline */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map(techName => (
                      <span key={techName} className={`font-mono text-[11px] border px-2 py-0.5 rounded ${
                        theme === 'light'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-[#0d1117] text-slate-300 border-[#21262d]'
                      }`}>
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action bar */}
                <div className={`flex items-center gap-3 pt-4 border-t ${
                  theme === 'light'
                    ? 'border-blue-100'
                    : 'border-[#21262d]/50'
                }`}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`flex-1 py-2 px-4 rounded-lg font-bold text-xs border flex items-center justify-center gap-1.5 cursor-pointer leading-7 transition-all ${
                      theme === 'light'
                        ? 'bg-blue-50 hover:bg-blue-100 text-slate-900 border-blue-200 hover:border-blue-400'
                        : 'bg-[#21262d] hover:bg-[#30363d] text-white border-[#30363d]'
                    }`}
                  >
                    <span>{t('projects.detailsBtn')}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.demoUrl}
                    onClick={(e) => { e.preventDefault(); alert("Interactive client prototype live inside AI Studio sandbox!"); }}
                    className={`py-2 px-3 rounded-lg border font-bold text-xs flex items-center justify-center gap-1 cursor-pointer leading-7 transition-all ${
                      theme === 'light'
                        ? 'bg-blue-50 text-blue-600 border-blue-300 hover:bg-blue-100'
                        : 'bg-transparent hover:bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
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
        {/*<div className="mt-16 pt-12 border-t border-[#21262d]/70 grid grid-cols-1 md:grid-cols-2 gap-6">*/}
        {/*  {TESTIMONIALS.map(tData => (*/}
        {/*    <div key={tData.id} className="p-6 rounded-xl border border-[#21262d] bg-[#161b22]/50 relative">*/}
        {/*      <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-[#21262d]" />*/}
        {/*      <p className="text-sm text-[#8b949e] italic leading-relaxed mb-6">{tData.text}</p>*/}
        {/*      <div className="flex items-center gap-4">*/}
        {/*        <div className="h-10 w-10 rounded-full overflow-hidden border border-[#30363d] bg-slate-800">*/}
        {/*          <img src={tData.avatar} alt={tData.name} className="w-full h-full object-cover" />*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <h5 className="text-white font-bold text-xs">{tData.name}</h5>*/}
        {/*          <p className="text-[10px] text-[#8b949e] mt-0.5">{tData.role} @ {tData.company}</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
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
