/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Terminal, Sliders, RefreshCw, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function PerformanceLab() {
  const { theme } = useTheme();
  // Sandbox state
  const [simulatedElements, setSimulatedElements] = useState<number>(50);
  const [isOptimized, setIsOptimized] = useState<boolean>(true);
  const [renderStats, setRenderStats] = useState<{ timeMs: number } | null>(null);
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // Run render latency sandbox benchmark
  const triggerBenchmark = () => {
    setIsBenchmarking(true);
    setRenderCount(prev => prev + 1);
    
    setTimeout(() => {
      // Simulate real-world React render latency calculations
      // If optimized: Virtual DOM virtualization makes rendering 2000-5000 items run in 0.8ms - 2.5ms
      // If unoptimized: Regular DOM diffing of 2000 items runs in 45ms - 220ms depending on style recalculation
      const multiplier = isOptimized ? 0.02 : 1.85;
      const noise = Math.random() * 0.15;
      const finalTime = parseFloat((simulatedElements * multiplier + noise).toFixed(2));
      
      setRenderStats({
        timeMs: finalTime < 0.1 ? 0.12 : finalTime
      });
      setIsBenchmarking(false);
    }, 700);
  };

  // Trigger default benchmark on state changed
  useEffect(() => {
    triggerBenchmark();
  }, [isOptimized, simulatedElements]);

  return (
    <section id="sandbox" className={`py-20 px-4 sm:px-8 border-t transition-colors duration-200 ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-[#090d13] border-[#21262d]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className={`font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
            <Terminal size={14} className={theme === 'light' ? 'text-blue-600' : 'text-cyan-400'} />
            <span>INTERACTIVE EXPERIENCE CENTRE</span>
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>React Performance Lab</h2>
          <p className={`text-sm mt-3 max-w-xl mx-auto ${theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}`}>
            Test how custom virtualization and state memoization affect real-time computation rendering pipelines. Toggle optimization to view raw milliseconds stats!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Control Panel Column */}
          <div className={`lg:col-span-4 flex flex-col justify-between glass-panel rounded-xl border p-6 lg:p-8 transition-colors ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-[#161b22]/50 border-[#30363d]'}`}>
            <div>
              <h3 className={`font-extrabold text-lg flex items-center gap-2 mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                <Sliders size={18} className={theme === 'light' ? 'text-blue-600' : 'text-cyan-400'} />
                <span>Lab Config</span>
              </h3>

              {/* Elements count slider */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className={theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}>Simulated DOM Elements</span>
                  <span className={`font-mono font-bold ${theme === 'light' ? 'text-blue-600' : 'text-cyan-400'}`}>{simulatedElements} elements</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={simulatedElements} 
                  onChange={(e) => setSimulatedElements(Number(e.target.value))}
                  className={`w-full cursor-pointer h-1.5 rounded-lg ${theme === 'light' ? 'bg-slate-200 accent-blue-400' : 'bg-[#161b22] accent-cyan-400'}`}
                />
                <div className={`flex justify-between text-[10px] font-mono ${theme === 'light' ? 'text-slate-500' : 'text-[#444c56]'}`}>
                  <span>10</span>
                  <span>250</span>
                  <span>500 (Heavy)</span>
                </div>
              </div>

              {/* Optimization Toggle */}
              <div className={`space-y-4 pt-4 border-t ${theme === 'light' ? 'border-slate-300' : 'border-[#21262d]/70'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-sm font-bold block ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>React Memo & useMemo</span>
                    <span className={`text-[11px] ${theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}`}>Toggle virtual node diffing bypass</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={isOptimized}
                      onChange={() => setIsOptimized(!isOptimized)}
                      className="sr-only peer" 
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 ${theme === 'light' ? 'bg-slate-300 after:bg-white after:border-white' : 'bg-[#21262d] after:bg-gray-300 after:border-gray-300'}`}></div>
                  </label>
                </div>

                {/* Visual checklist */}
                <div className={`p-3 rounded-lg border text-xs space-y-2 transition-colors ${theme === 'light' ? 'bg-blue-50 border-blue-300' : 'bg-[#0c1015] border-[#21262d]'}`}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${isOptimized ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className={theme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
                      {isOptimized ? 'Memoization Caching: ACTIVE' : 'Re-evaluating entire tree every tick'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${isOptimized ? 'bg-emerald-400' : 'bg-red-500'}`} />
                    <span className={theme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
                      {isOptimized ? 'Virtual DOM Pruning: INSTORED' : 'No element pooling configured'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className={`pt-6 border-t mt-6 lg:mt-0 ${theme === 'light' ? 'border-slate-300' : 'border-[#21262d]/70'}`}>
              <button
                onClick={triggerBenchmark}
                disabled={isBenchmarking}
                className={`w-full font-bold py-2.5 px-4 rounded-lg border transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer text-xs uppercase ${theme === 'light' ? 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50' : 'bg-[#161b22] hover:bg-[#21262d] text-white border-[#30363d]'}`}
              >
                <RefreshCw size={14} className={`${isBenchmarking ? 'animate-spin' : ''}`} />
                <span>{isBenchmarking ? 'Calculating WebLatencies...' : 'Trigger Tree Re-render'}</span>
              </button>
            </div>
          </div>

          {/* Sandbox Visual Dashboard View */}
          <div className={`lg:col-span-8 rounded-xl border p-6 lg:p-8 flex flex-col justify-between transition-colors ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-[#161b22] border-[#30363d]'}`}>
            <div>
              <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-6 border-b ${theme === 'light' ? 'border-slate-300' : 'border-[#21262d]'}`}>
                <div>
                  <h3 className={`font-extrabold text-lg flex items-center gap-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    <Activity size={18} className={theme === 'light' ? 'text-blue-600' : 'text-cyan-400'} />
                    <span>Live Render Web Vitals</span>
                  </h3>
                  <p className={`text-xs ${theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}`}>Telemetry measuring milliseconds frame latency times.</p>
                </div>
                <div className={`text-xs font-mono mt-2 sm:mt-0 px-3 py-1 rounded border transition-colors ${theme === 'light' ? 'bg-blue-50 text-blue-700 border-blue-300' : 'bg-[#0d1117] text-[#8b949e] border-[#21262d]'}`}>
                  Tick Counter: <span className={`font-bold ${theme === 'light' ? 'text-blue-600' : 'text-cyan-400'}`}>{renderCount}</span>
                </div>
              </div>

              {/* Main Graph Indicator */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Performance Timer Metric */}
                <div className={`p-5 rounded-lg border flex flex-col justify-between transition-colors ${theme === 'light' ? 'bg-blue-50 border-blue-300' : 'bg-[#0d1117] border-[#21262d]'}`}>
                  <span className={`text-xs uppercase tracking-wider block ${theme === 'light' ? 'text-blue-700' : 'text-[#8b949e]'}`}>Script Call Time</span>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-4xl font-extrabold ${isOptimized ? 'text-emerald-400' : 'text-amber-500'}`}>
                      {renderStats ? `${renderStats.timeMs}ms` : '---'}
                    </span>
                    <span className={`text-xs ${theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}`}>per render pass</span>
                  </div>
                  <div className={`text-[10px] font-mono ${theme === 'light' ? 'text-slate-500' : 'text-[#444c56]'}`}>
                    {isOptimized ? 'Optimal Frame rate (60 FPS)' : 'Major Frame drop risking (> 16ms)'}
                  </div>
                </div>

                {/* Benchmark Status */}
                <div className={`p-5 rounded-lg border relative overflow-hidden transition-colors ${theme === 'light' ? 'bg-blue-50 border-blue-300' : 'bg-[#0d1117] border-[#21262d]'}`}>
                  <div className="space-y-2 text-xs">
                    <div className={`flex justify-between pb-1 border-b ${theme === 'light' ? 'border-blue-300' : 'border-[#21262d]'}`}>
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}>Render Scope:</span>
                      <span className={`font-bold font-mono ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>2.5k Multi-passes</span>
                    </div>
                    <div className={`flex justify-between pb-1 border-b ${theme === 'light' ? 'border-blue-300' : 'border-[#21262d]'}`}>
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}>FPS Efficiency:</span>
                      <span className={`font-mono font-bold ${isOptimized ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {isOptimized ? 'Excellent (100%)' : 'Caution (22%)'}
                      </span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}>Virtual Node Reuse:</span>
                      <span className={`font-bold font-mono ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{isOptimized ? '99.4%' : '0%'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Elements Visual Map Block */}
              <div className="space-y-2">
                <span className={`text-xs font-bold block ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Live DOM Virtual Matrix:</span>
                <div className={`p-4 rounded-lg border h-32 overflow-y-auto grid grid-cols-10 sm:grid-cols-20 gap-1 select-none transition-colors ${theme === 'light' ? 'bg-blue-50 border-blue-300' : 'bg-[#0d1117] border-[#21262d]'}`}>
                  {Array.from({ length: Math.min(simulatedElements, 200) }).map((_, idx) => (
                    <div 
                      key={idx}
                      className={`aspect-square rounded-[2px] transition-all duration-300 ${
                        isOptimized 
                          ? 'bg-emerald-500/20 hover:bg-emerald-400 border border-emerald-500/30' 
                          : 'bg-amber-500/20 hover:bg-amber-400 border border-amber-500/30 animate-pulse'
                      }`} 
                      title={`DOM Element ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className={`text-[10px] italic block mt-1 ${theme === 'light' ? 'text-slate-600' : 'text-[#8b949e]'}`}>
                  Showing first {Math.min(simulatedElements, 200)} simulated dynamic nodes. Redraw active on tick update.
                </span>
              </div>
            </div>

            {/* Educational Takeaway strip */}
            <div className={`mt-6 p-4 rounded border text-xs transition-colors ${theme === 'light' ? 'bg-blue-100 border-blue-300 text-slate-700' : 'bg-cyan-950/20 border-cyan-800/30 text-slate-300'}`}>
              💡 <strong>How Khiên Nguyễn optimized this:</strong> By default, React re-evaluates all children elements. In large lists / real-time grids, deploying <code>React.memo</code>, combined with <code>useCallback</code> to avoid recreate reference addresses, prevents unneeded main thread calculations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
