/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, Sparkles, Sliders } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section id="about" className={`py-20 px-4 sm:px-8 grid-bg ${
      theme === 'light'
        ? 'bg-[#f6f8fa] border-t border-blue-200'
        : 'bg-[#0d1117] border-t border-[#21262d]'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Portrait Column */}
        <div className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-24">
          <div className="relative group max-w-sm w-full">
            {/* Modern Framing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className={`relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden aspect-square shadow-xl ${
              theme === 'light'
                ? 'bg-white border-blue-200'
                : 'bg-[#161b22] border-[#30363d]'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Khiên Nguyễn React Developer Portrait"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 font-sans"
              />

              {/* Embedded floating details badge */}
              <div className={`absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 flex items-center justify-between shadow-2xl border ${
                theme === 'light'
                  ? 'bg-white/80 border-blue-200'
                  : 'bg-[#161b22]/80 border-[#30363d]/80'
              }`}>
                <div>
                  <p className={`text-[10px] uppercase font-bold tracking-wider ${
                    theme === 'light'
                      ? 'text-slate-500'
                      : 'text-[#8b949e]'
                  }`}>Expertise Role</p>
                  <p className={`text-sm font-bold ${
                    theme === 'light'
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}>Principal Frontend Dev</p>
                </div>
                <div className={`h-8 w-8 rounded flex items-center justify-center border ${
                  theme === 'light'
                    ? 'bg-blue-100 border-blue-300 text-blue-600'
                    : 'bg-cyan-900/40 border-cyan-500/30 text-cyan-400'
                }`}>
                  <Activity size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${
              theme === 'light' ? 'text-blue-600' : 'text-cyan-400'
            }`}>{t('about.subtitle')}</p>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>{t('about.title')}</h2>
            <div className={`w-16 h-1 rounded mt-3 ${
              theme === 'light' ? 'bg-blue-500' : 'bg-cyan-500'
            }`}></div>
          </div>

          <p className={`text-base leading-relaxed ${
            theme === 'light'
              ? 'text-slate-600'
              : 'text-[#8b949e]'
          }`}>
            {t('about.description')}
          </p>

          {/* Core Values / Competencies List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className={`p-5 rounded-xl border transition-all hover:-translate-y-1 ${
              theme === 'light'
                ? 'bg-blue-50/60 hover:bg-blue-50 border-blue-200'
                : 'bg-[#161b22]/40 hover:bg-[#161b22]/80 border-[#30363d]'
            }`}>
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 border ${
                theme === 'light'
                  ? 'bg-blue-100 text-blue-600 border-blue-300'
                  : 'bg-cyan-950 text-cyan-400 border-cyan-800/30'
              }`}>
                <Sparkles size={20} />
              </div>
              <h4 className={`font-bold text-base mb-2 ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>{t('about.coreTech.title')}</h4>
              <p className={`text-xs leading-relaxed ${
                theme === 'light'
                  ? 'text-slate-600'
                  : 'text-[#8b949e]'
              }`}>{t('about.coreTech.desc')}</p>
            </div>

            <div className={`p-5 rounded-xl border transition-all hover:-translate-y-1 ${
              theme === 'light'
                ? 'bg-blue-50/60 hover:bg-blue-50 border-blue-200'
                : 'bg-[#161b22]/40 hover:bg-[#161b22]/80 border-[#30363d]'
            }`}>
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 border ${
                theme === 'light'
                  ? 'bg-emerald-100 text-emerald-600 border-emerald-300'
                  : 'bg-emerald-950 text-emerald-400 border-emerald-800/30'
              }`}>
                <Sliders size={20} />
              </div>
              <h4 className={`font-bold text-base mb-2 ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>{t('about.mindset.title')}</h4>
              <p className={`text-xs leading-relaxed ${
                theme === 'light'
                  ? 'text-slate-600'
                  : 'text-[#8b949e]'
              }`}>{t('about.mindset.desc')}</p>
            </div>
          </div>

          {/* Quote block */}
          <div className={`p-4 rounded-r-xl font-sans border-l-2 ${
            theme === 'light'
              ? 'bg-blue-50 border-blue-500'
              : 'bg-cyan-950/20 border-cyan-500'
          }`}>
            <p className={`italic text-sm ${
              theme === 'light'
                ? 'text-slate-700'
                : 'text-slate-300'
            }`}>
              &ldquo;Architecture isn&apos;t just about drawing lines in a spreadsheet; it&apos;s about shipping component rendering trees that run at 60 FPS on lower-tier mobile hardware.&rdquo;
            </p>
            <p className={`font-mono mt-2 text-xs ${
              theme === 'light'
                ? 'text-slate-500'
                : 'text-[#8b949e]'
            }`}>- Thanh Khien, DevPortfolio Principle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
