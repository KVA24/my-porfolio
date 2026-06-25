/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Settings, X} from 'lucide-react';
import {AnimatePresence, m} from 'motion/react';
import {Project} from '../types';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal = memo(function ProjectDetailModal({project, onClose}: ProjectDetailModalProps) {
  const {t} = useTranslation();
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
            className="overlay-dark absolute inset-0 backdrop-blur-sm"
          />
          
          {/* Modal Body */}
          <m.div
            initial={{scale: 0.95, y: 20, opacity: 0}}
            animate={{scale: 1, y: 0, opacity: 1}}
            exit={{scale: 0.95, y: 20, opacity: 0}}
            transition={{type: 'spring', damping: 25, stiffness: 250}}
            className="relative w-full max-w-2xl bg-secondary border border-primary rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            <div className="p-4 sm:p-5 border-b border-primary flex justify-between items-center bg-tertiary">
              <div className="flex items-center gap-2">
                <Settings size={16} className="text-accent rotate-45"/>
                <span
                  className="text-xs font-mono text-accent font-bold uppercase tracking-widest">Architectural Spec</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-primary text-secondary hover:text-strong cursor-pointer"
              >
                <X size={18}/>
              </button>
            </div>
            
            {/* Scrollable specs */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              <div>
                <h3 className="text-xl font-extrabold text-strong mb-2">{project.title}</h3>
                <span className="badge-info font-mono text-xs px-2.5 py-1 rounded">
                  Category: {project.category}
                </span>
              </div>
              
              {/* Challenge description */}
              <div className="space-y-1.5 pt-2">
                <h4
                  className="text-strong font-extrabold text-xs uppercase tracking-wider text-accent">{t('projects.challenge')}</h4>
                <p className="text-primary leading-relaxed text-xs">{project.details.challenge}</p>
              </div>
              
              {/* Technical Solution */}
              <div className="space-y-1.5">
                <h4
                  className="text-strong font-extrabold text-xs uppercase tracking-wider text-emerald-400">{t('projects.solution')}</h4>
                <p className="text-primary leading-relaxed text-xs">{project.details.solution}</p>
              </div>
              
              {/* Core metrics visual grid */}
              <div className="space-y-2">
                <h4
                  className="text-strong font-extrabold text-xs uppercase tracking-wider text-[#58a6ff]">{t('projects.metrics')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.details.metrics.map((metric, index) => (
                    <div key={index}
                         className="p-3 rounded-lg bg-tertiary border border-primary text-xs text-strong font-semibold flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✔</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Architecture stack visual boxes */}
              <div className="space-y-2">
                <h4
                  className="text-strong font-extrabold text-xs uppercase tracking-wider text-purple-400">{t('projects.architecture')}</h4>
                <div
                  className="bg-tertiary p-4 rounded-lg border border-primary space-y-3 font-mono text-xs text-secondary">
                  {project.details.architecture.map((archLine, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <span className="text-cyan-500 font-bold">[{idx + 1}]</span>
                      <p className="text-primary">{archLine}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action Buttons inside specs */}
            <div className="p-4 bg-tertiary border-t border-primary flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="bg-secondary hover:bg-primary text-strong py-1.5 px-4 rounded-lg font-bold text-xs border border-primary cursor-pointer"
              >
                {t('projects.closeBtn')}
              </button>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
});

export default ProjectDetailModal;
