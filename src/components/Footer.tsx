/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useTranslation} from 'react-i18next';
import {memo} from 'react';

const Footer = memo(function Footer() {
  const {t} = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className="border-t py-12 px-4 sm:px-8 text-center text-xs transition-colors duration-200 bg-primary border-primary text-secondary">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full animate-pulse bg-accent"/>
          <span className="font-bold text-sm text-strong">Khien Nguyen | DevPortfolio v1.0.0</span>
        </div>
        <p className="text-secondary" suppressHydrationWarning>
          &copy; {currentYear} Khien Nguyen. All rights reserved. Powered by React 19 & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href="#about" className="transition-colors hover:text-strong">{t('nav.about')}</a>
          <span>&middot;</span>
          <a href="#skills" className="transition-colors hover:text-strong">{t('nav.skills')}</a>
          <span>&middot;</span>
          <a href="#projects" className="transition-colors hover:text-strong">{t('nav.projects')}</a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
