import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  TrendingUp,
  AlertCircle,
  ZoomIn
} from 'lucide-react';
import { Project } from '../types';
import { useLightbox } from '../context/LightboxContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/70 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl p-6 sm:p-8 overflow-hidden text-[var(--text-primary)] my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-secondary)] hover:bg-[var(--surface)] border border-[var(--border)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 mb-1">
            <span>{project.category}</span>
            <span>·</span>
            <span>Technical Deep Dive</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-[var(--text-secondary)] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Large Project Photo Banner */}
        <div 
          onClick={() => {
            openLightbox({
              src: project.photo,
              title: project.title,
              subtitle: project.subtitle,
              category: project.category
            });
          }}
          className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900 mb-6 relative group cursor-pointer"
          title="Click to view full architectural blueprint in Lightbox"
        >
          <img
            src={project.photo}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-cyan-400">
            Architecture Blueprint &amp; Telemetry
          </div>
          <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-mono">
            <ZoomIn className="w-4 h-4" />
            <span>Full Image</span>
          </div>
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-base sm:text-lg font-bold font-mono text-blue-600 dark:text-cyan-400 tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2 tracking-wider">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[var(--surface-secondary)] text-xs font-mono font-medium text-blue-700 dark:text-cyan-300 border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20">
            <h4 className="text-xs font-mono font-semibold uppercase text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              The Problem
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 dark:border-cyan-500/30 bg-blue-50/50 dark:bg-cyan-950/20">
            <h4 className="text-xs font-mono font-semibold uppercase text-blue-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Engineering Solution
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Stages */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] mb-3 tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-500" />
            System Pipeline Architecture
          </h4>
          <div className="space-y-2.5">
            {project.architecture.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-secondary)]"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] mb-3 tracking-wider">
            Key Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Empirical Results */}
        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 mb-8">
          <h4 className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" />
            Empirical Results &amp; Validation
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.results}
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)]">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface-secondary)] border border-[var(--border)] hover:bg-[var(--surface)] rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-xl shadow-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration / Artifact</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
