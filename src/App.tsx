/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from './types';

// Theme Provider
import { ThemeProvider, useTheme } from './context/ThemeContext';

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

function AppContent() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [lang, setLang] = useState<'en' | 'vi'>(i18n.language as 'en' | 'vi' || 'vi');

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  // Project selected deep-dive state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Resume Modal toggler
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans selection:text-cyan-400 dark:selection:text-cyan-400 light:selection:text-blue-600"
    style={{
      backgroundColor: theme === 'light' ? '#f6f8fa' : '#0d1117',
      color: theme === 'light' ? '#24292f' : '#c9d1d9',
      backgroundImage: theme === 'light'
        ? 'linear-gradient(rgba(3, 102, 214, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(3, 102, 214, 0.03) 1px, transparent 1px)'
        : undefined,
      backgroundSize: theme === 'light' ? '40px 40px' : undefined,
    }}>

      {/* Decorative Blur Spheres */}
      <div className="glow-mesh top-[10%] right-[-100px] sm:right-[5%] pointer-events-none"></div>
      <div className="glow-mesh-cyan top-[60%] left-[-200px] sm:left-[2%] pointer-events-none"></div>

      {/* Nav Header Component */}
      <Header
              lang={lang}
              setLang={changeLanguage}
              onOpenResume={() => setIsResumeOpen(true)}
            />

      {/* Hero Header Component */}
      <Hero />

      {/* About Section Component */}
      <About />

      {/* Skills Competencies Component */}
      <Skills />

      {/* Simulated Dev Lab Component */}
      <PerformanceLab />

      {/* Projects Showcase grid and customer reviews */}
            <Projects
              onSelectProject={(project) => setSelectedProject(project)}
            />

      {/* Contact Form, Info coordinates, and dynamic enquiry board */}
            <Contact lang={lang} />

      {/* Footer Component */}
            <Footer />

      {/* Modal 1: Project Details Specification Sheet */}
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />

      {/* Modal 2: Professional Resume Sheet */}
            <ResumeModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
            />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
