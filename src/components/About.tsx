/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, Sparkles, Sliders } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-4 sm:px-8 border-t border-[#21262d] bg-[#0d1117] grid-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Portrait Column */}
        <div className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-24">
          <div className="relative group max-w-sm w-full">
            {/* Modern Framing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden aspect-square shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Khiên Nguyễn React Developer Portrait"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 font-sans"
              />

              {/* Embedded floating details badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel border border-[#30363d]/80 rounded-xl p-3 flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-[10px] uppercase text-[#8b949e] font-bold tracking-wider">Expertise Role</p>
                  <p className="text-white text-sm font-bold">Principal Frontend Dev</p>
                </div>
                <div className="h-8 w-8 rounded bg-cyan-900/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Activity size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{t('about.subtitle')}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">{t('about.title')}</h2>
            <div className="w-16 h-1 bg-cyan-500 rounded mt-3"></div>
          </div>

          <p className="text-[#8b949e] text-base leading-relaxed">
            {t('about.description')}
          </p>

          {/* Core Values / Competencies List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-xl border border-[#30363d] bg-[#161b22]/40 hover:bg-[#161b22]/80 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-800/30">
                <Sparkles size={20} />
              </div>
              <h4 className="text-white font-bold text-base mb-2">{t('about.coreTech.title')}</h4>
              <p className="text-xs text-[#8b949e] leading-relaxed">{t('about.coreTech.desc')}</p>
            </div>

            <div className="p-5 rounded-xl border border-[#30363d] bg-[#161b22]/40 hover:bg-[#161b22]/80 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-800/30">
                <Sliders size={20} />
              </div>
              <h4 className="text-white font-bold text-base mb-2">{t('about.mindset.title')}</h4>
              <p className="text-xs text-[#8b949e] leading-relaxed">{t('about.mindset.desc')}</p>
            </div>
          </div>

          {/* Quote block */}
          <div className="border-l-2 border-cyan-500 bg-cyan-950/20 p-4 rounded-r-xl font-sans">
            <p className="text-slate-300 italic text-sm">
              &ldquo;Architecture isn&apos;t just about drawing lines in a spreadsheet; it&apos;s about shipping component rendering trees that run at 60 FPS on lower-tier mobile hardware.&rdquo;
            </p>
            <p className="text-xs text-[#8b949e] font-mono mt-2">- Thanh Khien, DevPortfolio Principle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
