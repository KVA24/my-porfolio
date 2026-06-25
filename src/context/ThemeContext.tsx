/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {createContext, ReactNode, use, useCallback, useEffect, useMemo, useState} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initialize from localStorage or system preference on first render
    if (typeof window === 'undefined') return 'dark';
    
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme) return savedTheme;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });
  
  // Apply theme to DOM on mount and when theme changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'light') {
      htmlElement.classList.add('light');
    } else {
      htmlElement.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);
  
  const toggleTheme = useCallback(() => {
    setThemeState(current => current === 'dark' ? 'light' : 'dark');
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme,
  }), [setTheme, theme, toggleTheme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = use(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
