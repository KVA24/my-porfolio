/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof TRANSLATIONS.VN;
  onOpenResume: () => void;
}

export default function Header({ lang, setLang, t, onOpenResume }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[#21262d] py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-[#0d1117] font-bold text-lg select-none">
            KN
          </div>
          <div>
            <span className="font-extrabold text-white tracking-wider text-lg">Khiên Nguyễn</span>
            <span className="hidden sm:inline-block ml-2 text-xs bg-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded-full border border-cyan-800/30">
              React Architect
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8b949e]">
          <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
            {t.navAbout}
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
            {t.navSkills}
          </a>
          <a href="#sandbox" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
            Sandbox Dev Lab
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
            {t.navProjects}
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-xs">
            {t.navContact}
          </a>
        </nav>

        {/* Controls: Language and Resume */}
        <div className="flex items-center gap-4">
          {/* Lang switcher */}
          <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg p-0.5">
            <button 
              onClick={() => setLang(Language.VN)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === Language.VN 
                  ? 'bg-cyan-500 text-[#0d1117] shadow-sm' 
                  : 'text-[#8b949e] hover:text-white'
              }`}
            >
              VN
            </button>
            <button 
              onClick={() => setLang(Language.EN)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === Language.EN 
                  ? 'bg-cyan-500 text-[#0d1117] shadow-sm' 
                  : 'text-[#8b949e] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Resume button */}
          <button 
            onClick={onOpenResume}
            className="bg-[#21262d] hover:bg-[#30363d] text-white py-1.5 px-3.5 sm:px-4 rounded-lg text-xs font-semibold border border-[#30363d] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FileText size={14} className="text-cyan-400" />
            <span>{t.resumeBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
