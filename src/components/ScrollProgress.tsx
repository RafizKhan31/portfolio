import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollY / totalScroll) * 100));
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3.5px] bg-slate-200/20 dark:bg-slate-800/40"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-150 ease-out origin-left relative shadow-[0_0_12px_rgba(6,182,212,0.6)]"
        style={{ width: `${scrollPercentage}%` }}
      >
        {/* Animated glowing shimmer head indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full blur-[2px] opacity-90 shadow-[0_0_8px_#38BDF8]" />
      </div>
    </div>
  );
};
