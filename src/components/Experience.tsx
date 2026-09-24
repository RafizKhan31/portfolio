import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Download
} from 'lucide-react';
import { EXPERIENCE_ITEMS, EDUCATION_DATA, CERTIFICATIONS_DATA, RESEARCH_DATA } from '../data/portfolioData';
import { assets } from '../config/assets';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[var(--surface-secondary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-red-600 dark:text-red-500 uppercase tracking-widest">
            Career &amp; Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mt-1">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Professional trajectory, academic background, and industry credentials from my CV.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href={assets.resume}
              download="Md-Rafej-Khan-Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Work Experience (Left) & Education / Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border)]">
              <Briefcase className="w-5 h-5 text-red-600 dark:text-red-500" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Work Experience
              </h3>
            </div>

            {EXPERIENCE_ITEMS.map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-red-600/40 dark:hover:border-red-500/40 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-red-600 dark:text-red-500">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-[var(--text-muted)] bg-[var(--surface-secondary)] px-2.5 py-1 rounded-md border border-[var(--border)] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  {exp.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education, Certifications & Research */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border)]">
                <GraduationCap className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Education
                </h3>
              </div>

              {EDUCATION_DATA.map((edu, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-red-600/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-red-600 dark:text-red-500">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border)]">
                <Award className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Certifications
                </h3>
              </div>

              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-red-600/30 transition-all flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-red-600 dark:text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Thesis Box */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-600 dark:text-red-500">
                <BookOpen className="w-4 h-4" />
                <span>Academic Research Thesis</span>
              </div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                {RESEARCH_DATA.title}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {RESEARCH_DATA.keyFinding}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
