import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, FileText, Layout } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_ITEMS, PROJECTS, RESEARCH_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { assets } from '../config/assets';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'web'>('pdf');
  const [pdfLoadError, setPdfLoadError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (viewMode === 'pdf') {
      window.open(assets.resume, '_blank');
    } else {
      window.print();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto backdrop-blur-md bg-black/70 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-2xl p-4 sm:p-6 md:p-8 my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border)] no-print flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span id="resume-modal-title" className="text-xs sm:text-sm font-mono font-semibold text-[var(--text-primary)]">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] text-xs">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-medium transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-[var(--surface)] text-red-600 dark:text-red-500 shadow-sm font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('web')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-medium transition-colors ${
                  viewMode === 'web'
                    ? 'bg-[var(--surface)] text-red-600 dark:text-red-500 shadow-sm font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Formatted Web View</span>
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={assets.resume}
              download="Md-Rafej-Khan-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open Raw PDF in New Tab */}
            <a
              href={assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] transition-colors"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-secondary)] hover:bg-[var(--surface)] transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume view"
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-secondary)] hover:bg-[var(--surface)] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content Area */}
        <div className="flex-1 overflow-y-auto pr-1">
          {viewMode === 'pdf' && !pdfLoadError ? (
            <div className="w-full h-[72vh] rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-secondary)] relative flex flex-col">
              <iframe
                src={`${assets.resume}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Md. Rafej Khan Resume"
                className="w-full h-full border-none"
                onError={() => setPdfLoadError(true)}
              />
              <div className="p-2.5 bg-[var(--surface-secondary)] border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>PDF not rendering properly on your browser?</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setViewMode('web')}
                    className="font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    Switch to Web View
                  </button>
                  <span>·</span>
                  <a
                    href={assets.resume}
                    download="Md-Rafej-Khan-Resume.pdf"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" /> Download Directly
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Formatted Web Resume View */
            <div className="space-y-8 print:p-0 print:space-y-6">
              {/* Header Block */}
              <div className="border-b border-[var(--border)] pb-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-1">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 font-mono mb-3">
                  {PERSONAL_INFO.title}
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span>·</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-500">
                    <Mail className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    {PERSONAL_INFO.email}
                  </a>
                  <span>·</span>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-500">
                    <Phone className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    {PERSONAL_INFO.phone}
                  </a>
                  <span>·</span>
                  <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-500">
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    github.com/RafizKhan31
                  </a>
                  <span>·</span>
                  <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-500">
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    linkedin.com/in/mdrafejkhan
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {PERSONAL_INFO.longBio}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {EXPERIENCE_ITEMS.map((exp, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <div>
                          <span className="font-bold text-sm text-[var(--text-primary)]">
                            {exp.role}
                          </span>
                          <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 ml-2">
                            — {exp.company}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[var(--text-muted)]">{exp.period}</span>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-[var(--text-secondary)] leading-relaxed">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Projects */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                  Key Engineering Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)]">
                      <div className="font-bold text-xs text-[var(--text-primary)] mb-1">
                        {proj.title}
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-2">
                        {proj.summary}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-[var(--surface)] text-blue-700 dark:text-cyan-300 border border-[var(--border)] text-[10px] font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Publications */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Research Thesis
                </h2>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)]">
                  <h3 className="font-bold text-xs text-[var(--text-primary)] mb-1">
                    {RESEARCH_DATA.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] mb-2">
                    {RESEARCH_DATA.institution} · Benchmarked across 5 empirical datasets
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {RESEARCH_DATA.keyFinding}
                  </p>
                </div>
              </div>

              {/* Technical Skills Grid */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Technical Skill Matrix
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="flex flex-col">
                      <span className="font-semibold text-[var(--text-primary)] mb-0.5">
                        {cat.name}:
                      </span>
                      <span className="text-[var(--text-secondary)] font-mono text-[11px]">
                        {cat.skills.map((s) => s.name).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Education
                  </h2>
                  {EDUCATION_DATA.map((edu, i) => (
                    <div key={i} className="mb-2 text-xs">
                      <div className="font-bold text-[var(--text-primary)]">{edu.degree}</div>
                      <div className="text-[var(--text-muted)] text-[11px]">{edu.institution} ({edu.period})</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Certifications
                  </h2>
                  {CERTIFICATIONS_DATA.map((cert) => (
                    <div key={cert.id} className="mb-2 text-xs">
                      <div className="font-bold text-[var(--text-primary)]">{cert.title}</div>
                      <div className="text-[var(--text-muted)] text-[11px]">{cert.issuer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
