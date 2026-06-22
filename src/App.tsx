/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { TRANSLATIONS } from './data';
import { Language, Project } from './types';

// Modular Sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import PerformanceLab from './components/PerformanceLab';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  // Localization state
  const [lang, setLang] = useState<Language>(Language.VN);
  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  // Project selected deep-dive state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Resume Modal toggler
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] relative selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden font-sans">
      
      {/* Decorative Blur Spheres */}
      <div className="glow-mesh top-[10%] right-[-100px] sm:right-[5%] pointer-events-none"></div>
      <div className="glow-mesh-cyan top-[60%] left-[-200px] sm:left-[2%] pointer-events-none"></div>

      {/* Nav Header Component */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Hero Header Component */}
      <Hero t={t} />

      {/* About Section Component */}
      <About t={t} />

      {/* Skills Competencies Component */}
      <Skills t={t} />

      {/* Simulated Dev Lab Component */}
      <PerformanceLab />

      {/* Projects Showcase grid and customer reviews */}
      <Projects 
        t={t} 
        onSelectProject={(project) => setSelectedProject(project)} 
      />

      {/* Contact Form, Info coordinates, and dynamic enquiry board */}
      <Contact t={t} lang={lang} />

      {/* Footer Component */}
      <Footer t={t} />

      {/* Modal 1: Project Details Specification Sheet */}
      <ProjectDetailModal 
        t={t} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Modal 2: Professional Resume Sheet */}
      <ResumeModal 
        t={t} 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
