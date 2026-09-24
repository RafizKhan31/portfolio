import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const Stats: React.FC = () => {
  return (
    <section aria-label="Key Career Statistics" className="py-8 border-y border-[var(--border)] bg-[var(--surface-secondary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {QUICK_STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-l-2 border-blue-600 dark:border-cyan-400 pl-4 py-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
