/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CODE_TAB_CONTENT = {
  profile: `// portfolio.ts
const developer = {
  fullName: "Nguyen Thanh Khien",
  title: "Senior React Architect",
  experienceYears: 3,
  location: "Hanoi, Vietnam",
  coreFocus: [
    "High-Performance Rendering",
    "Micro-Frontend Architecture",
    "LCP/FID Core Web Vitals"
  ],
  passion: "Merging minimalism with rigid engineering guidelines"
};`,
  performance: `// performance-optimization.tsx
import { memo, useMemo, useCallback } from 'react';

export const FastListCount = memo(({ items }) => {
  // Prevent re-computing expensive maps on parent triggers
  const activeMetrics = useMemo(() => {
    return items.filter(i => i.latency < 16);
  }, [items]);

  return (
    <div className="v-dom-grid">
      {activeMetrics.map(item => (
        <MetricCard key={item.id} value={item.val} />
      ))}
    </div>
  );
});`,
  tailwind: `/* style-system.css */
@theme {
  --color-brand: #38bdf8; /* cyan */
  --font-display: "Plus Jakarta Sans", sans-serif;
}

.glassmorphism-card {
  background: rgba(22, 27, 34, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}`
};

export default function Hero() {
  const { t } = useTranslation();
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'performance' | 'tailwind'>('profile');

  return (
    <section className="relative pt-12 md:pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Intro Text Column */}
      <div className="lg:col-span-7 flex flex-col items-start space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#1f2937]/50 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs text-emerald-400 font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t('hero.ready')}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {t('hero.title')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 block sm:inline mt-1.5 sm:mt-0">
            {t('hero.titleHighlight')}
          </span>
        </h1>

        <p className="text-[#8b949e] text-base sm:text-lg leading-relaxed max-w-2xl">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-[#0d1117] font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 text-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{t('hero.viewProjects')}</span>
            <ArrowDown size={15} className="animate-bounce" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#161b22] hover:bg-[#1f2937] text-white font-semibold rounded-lg border border-[#30363d] text-sm text-center transition-all cursor-pointer"
          >
            {t('hero.contactNow')}
          </a>
        </div>

        {/* Micro Stats Row */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-[#21262d]/70 w-full max-w-md">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">3+</div>
            <div className="text-xs text-[#8b949e] mt-1 uppercase tracking-wider font-medium">{t('about.expYear')}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">10+</div>
            <div className="text-xs text-[#8b949e] mt-1 uppercase tracking-wider font-medium">Projects Done</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#58a6ff]">99%</div>
            <div className="text-xs text-[#8b949e] mt-1 uppercase tracking-wider font-medium">Performance Score</div>
          </div>
        </div>
      </div>

      {/* Right Tabbed IDE Editor Column */}
      <div className="lg:col-span-5 relative mt-6 lg:mt-0">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur-md opacity-20 transition duration-1000"></div>
        <div className="relative rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-[#090d13] px-4 py-3 flex items-center justify-between border-b border-[#21262d]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8b949e] font-mono">
              <Terminal size={12} className="text-cyan-400" />
              <span>khiennguyen@dev-lab: ~</span>
            </div>
          </div>

          {/* Tab Selectors */}
          <div className="bg-[#0f141c] flex border-b border-[#21262d] text-xs font-mono">
            <button
              onClick={() => setActiveCodeTab('profile')}
              className={`px-4 py-2.5 transition-colors border-r border-[#21262d] flex items-center gap-1.5 cursor-pointer ${
                activeCodeTab === 'profile'
                  ? 'bg-[#161b22] text-cyan-400 border-t-2 border-t-cyan-500'
                  : 'text-[#8b949e] hover:bg-[#161b22]/50 hover:text-white'
              }`}
            >
              <div className="w-2 h-2 rounded bg-yellow-500" />
              portfolio.ts
            </button>
            <button
              onClick={() => setActiveCodeTab('performance')}
              className={`px-4 py-2.5 transition-colors border-r border-[#21262d] flex items-center gap-1.5 cursor-pointer ${
                activeCodeTab === 'performance'
                  ? 'bg-[#161b22] text-cyan-400 border-t-2 border-t-cyan-500'
                  : 'text-[#8b949e] hover:bg-[#161b22]/50 hover:text-white'
              }`}
            >
              <div className="w-2 h-2 rounded bg-cyan-400" />
              performance.tsx
            </button>
            <button
              onClick={() => setActiveCodeTab('tailwind')}
              className={`px-4 py-2.5 transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeCodeTab === 'tailwind'
                  ? 'bg-[#161b22] text-cyan-400 border-t-2 border-t-cyan-500'
                  : 'text-[#8b949e] hover:bg-[#161b22]/50 hover:text-white'
              }`}
            >
              <div className="w-2 h-2 rounded bg-[#ff5f56]" />
              theme.css
            </button>
          </div>

          {/* Code Body */}
          <div className="p-4 font-mono text-xs sm:text-sm text-[#c9d1d9] leading-relaxed overflow-x-auto bg-[#161b22]">
            <pre className="whitespace-pre">
              <code>
                {CODE_TAB_CONTENT[activeCodeTab]}
              </code>
            </pre>
          </div>

          {/* Terminal Footer Indicator */}
          <div className="bg-[#0d1117] border-t border-[#21262d] px-4 py-1.5 flex justify-between items-center text-[10px] font-mono text-[#8b949e]">
            <span>UTF-8</span>
            <span className="text-cyan-400">TypeScript React</span>
            <span>Pos 1:1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
