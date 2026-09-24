import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[var(--border)]">
          
          {/* Brand & Title */}
          <div>
            <div className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Portfo<span className="text-red-600 dark:text-red-500">lio.</span>
            </div>
            <p className="text-xs font-mono text-red-600 dark:text-red-500 mt-1 font-semibold">
              Md. Rafej Khan · Python Developer &amp; AI/ML Engineer
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-2 max-w-md leading-relaxed">
              Building intelligent, production-ready systems with Python, Machine Learning, Deep Learning, NLP, and scalable cloud architectures.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center flex-wrap gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[var(--text-primary)] bg-[var(--surface-secondary)] border border-[var(--border)] hover:text-red-600 dark:hover:text-red-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[var(--text-primary)] bg-[var(--surface-secondary)] border border-[var(--border)] hover:text-red-600 dark:hover:text-red-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[var(--text-primary)] bg-[var(--surface-secondary)] border border-[var(--border)] hover:bg-red-600 hover:text-white transition-all shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono">
            <span className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
              Build and design by <span className="text-red-600 dark:text-red-500 font-bold hover:scale-105 transition-transform inline-block">Md. Rafej Khan</span>
            </span>
            <span className="hidden sm:inline text-[var(--border)]">|</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
