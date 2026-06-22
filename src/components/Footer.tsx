/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TRANSLATIONS } from '../data';

interface FooterProps {
  t: typeof TRANSLATIONS.VN;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-[#090d13] border-t border-[#21262d] py-12 px-4 sm:px-8 text-center text-xs text-[#8b949e]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-bold text-white text-sm">Khien Nguyen | DevPortfolio v1.0.0</span>
        </div>
        <p className="text-[#8b949e]">
          &copy; {new Date().getFullYear()} Khien Nguyen. All rights reserved. Powered by React 19 & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-white transition-colors">{t.navAbout}</a>
          <span>&middot;</span>
          <a href="#skills" className="hover:text-white transition-colors">{t.navSkills}</a>
          <span>&middot;</span>
          <a href="#projects" className="hover:text-white transition-colors">{t.navProjects}</a>
        </div>
      </div>
    </footer>
  );
}
