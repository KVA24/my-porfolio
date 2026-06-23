/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  lang: 'en' | 'vi';
  setLang: (lang: 'en' | 'vi') => void;
  onOpenResume: () => void;
}

export default function Header({ lang, setLang, onOpenResume }: HeaderProps) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[#21262d] dark:border-[#21262d] light:border-blue-200 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-extrabold text-white dark:text-white light:text-slate-900 tracking-wider text-lg">Khiên Nguyễn</span>
            <span className="hidden sm:inline-block ml-2 text-xs bg-cyan-950 dark:bg-cyan-950 light:bg-blue-100 text-cyan-400 dark:text-cyan-400 light:text-blue-700 font-mono px-2 py-0.5 rounded-full border border-cyan-800/30 dark:border-cyan-800/30 light:border-blue-300/50">
              React Architect
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8b949e] dark:text-[#8b949e] light:text-slate-600">
          <a href="#about" className="hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors uppercase tracking-wider text-xs">
            {t('nav.about')}
          </a>
          <a href="#skills" className="hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors uppercase tracking-wider text-xs">
            {t('nav.skills')}
          </a>
          <a href="#sandbox" className="hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors uppercase tracking-wider text-xs">
            Sandbox Dev Lab
          </a>
          <a href="#projects" className="hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors uppercase tracking-wider text-xs">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-blue-600 transition-colors uppercase tracking-wider text-xs">
            {t('nav.contact')}
          </a>
        </nav>

        {/* Controls: Theme, Language and Resume */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="bg-[#161b22] dark:bg-[#161b22] light:bg-blue-50 hover:bg-[#21262d] dark:hover:bg-[#21262d] light:hover:bg-blue-100 border border-[#30363d] dark:border-[#30363d] light:border-blue-200 text-white dark:text-white light:text-slate-900 rounded-lg p-2 transition-colors cursor-pointer flex items-center justify-center"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-slate-600" />
            )}
          </button>

          {/* Lang switcher */}
          <div className="flex items-center bg-[#161b22] dark:bg-[#161b22] light:bg-slate-100 border border-[#30363d] dark:border-[#30363d] light:border-slate-300 rounded-lg p-0.5">
            <button
              onClick={() => setLang('vi')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'vi'
                  ? 'bg-cyan-500 text-[#0d1117] dark:text-[#0d1117] light:text-white shadow-sm'
                  : 'text-[#8b949e] dark:text-[#8b949e] light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              VN
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-cyan-500 text-[#0d1117] dark:text-[#0d1117] light:text-white shadow-sm'
                  : 'text-[#8b949e] dark:text-[#8b949e] light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="bg-[#21262d] dark:bg-[#21262d] light:bg-blue-50 hover:bg-[#30363d] dark:hover:bg-[#30363d] light:hover:bg-blue-100 text-white dark:text-white light:text-slate-900 py-1.5 px-3.5 sm:px-4 rounded-lg text-xs font-semibold border border-[#30363d] dark:border-[#30363d] light:border-blue-200 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FileText size={14} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600" />
            <span>{t('resume.button')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
