/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {FileText, Moon, Sun} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../context/ThemeContext';
import {memo} from 'react';

interface HeaderProps {
  lang: 'en' | 'vi';
  setLang: (lang: 'en' | 'vi') => void;
  onOpenResume: () => void;
}

const Header = memo(function Header({lang, setLang, onOpenResume}: HeaderProps) {
  const {t} = useTranslation();
  const {toggleTheme} = useTheme();
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-primary py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-extrabold text-strong tracking-wider text-lg">Khiên Nguyễn</span>
            <span
              className="hidden sm:inline-block ml-2 text-xs badge-info font-mono px-2 py-0.5 rounded-full border border-cyan-800/30">
              React Architect
            </span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-secondary">
          <a href="#about" className="hover:text-accent transition-colors uppercase tracking-wider text-xs">
            {t('nav.about')}
          </a>
          <a href="#skills" className="hover:text-accent transition-colors uppercase tracking-wider text-xs">
            {t('nav.skills')}
          </a>
          <a href="#performance-lab" className="hover:text-accent transition-colors uppercase tracking-wider text-xs">
            Sandbox Dev Lab
          </a>
          <a href="#projects" className="hover:text-accent transition-colors uppercase tracking-wider text-xs">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="hover:text-accent transition-colors uppercase tracking-wider text-xs">
            {t('nav.contact')}
          </a>
        </nav>
        
        {/* Controls: Theme, Language and Resume */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="bg-secondary hover:bg-primary border border-primary text-strong rounded-lg p-2 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle light and dark mode"
            title="Toggle theme"
          >
            <span className="hidden dark:inline-block">
              <Sun size={16} className="text-yellow-400"/>
            </span>
            <span className="hidden light:inline-block">
              <Moon size={16} className="text-slate-600"/>
            </span>
          </button>
          
          {/* Lang switcher */}
          <div className="lang-btn-container flex items-center rounded-lg p-0.5">
            <button
              onClick={() => setLang('vi')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'vi'
                  ? 'lang-btn-active'
                  : 'lang-btn-inactive'
              }`}
              aria-label="Switch to Vietnamese language"
              aria-pressed={lang === 'vi'}
            >
              VN
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'lang-btn-active'
                  : 'lang-btn-inactive'
              }`}
              aria-label="Switch to English language"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          
          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="bg-primary hover:bg-secondary text-strong py-1.5 px-3.5 sm:px-4 rounded-lg text-xs font-semibold border border-primary transition-colors flex items-center gap-2 cursor-pointer btn-secondary"
            aria-label="Open professional resume"
          >
            <FileText size={14} className="text-accent"/>
            <span>{t('resume.button')}</span>
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
