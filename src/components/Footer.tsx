/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  return (
    <footer className={`border-t py-12 px-4 sm:px-8 text-center text-xs transition-colors duration-200 ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-[#090d13] border-[#21262d] text-[#8b949e]'}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full animate-pulse ${theme === 'light' ? 'bg-blue-500' : 'bg-cyan-500'}`} />
          <span className={`font-bold text-sm ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Khien Nguyen | DevPortfolio v1.0.0</span>
        </div>
        <p className={theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}>
          &copy; {new Date().getFullYear()} Khien Nguyen. All rights reserved. Powered by React 19 & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href="#about" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-900' : 'hover:text-white'}`}>{t('nav.about')}</a>
          <span>&middot;</span>
          <a href="#skills" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-900' : 'hover:text-white'}`}>{t('nav.skills')}</a>
          <span>&middot;</span>
          <a href="#projects" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-900' : 'hover:text-white'}`}>{t('nav.projects')}</a>
        </div>
      </div>
    </footer>
  );
}
