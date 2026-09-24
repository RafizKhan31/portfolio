import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
    { mode: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
    { mode: 'system', icon: <Laptop className="w-4 h-4" />, label: 'System' }
  ];

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="inline-flex items-center p-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] backdrop-blur-sm"
    >
      {options.map(({ mode, icon, label }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => setTheme(mode)}
            title={`Switch to ${label} mode`}
            aria-pressed={isActive}
            className={`p-1.5 rounded-md text-xs transition-colors duration-150 flex items-center justify-center ${
              isActive
                ? 'bg-[var(--surface)] text-blue-600 dark:text-cyan-400 shadow-sm font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {icon}
            <span className="sr-only">{label} mode</span>
          </button>
        );
      })}
    </div>
  );
};
