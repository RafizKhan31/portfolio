import React from 'react';
import { Award, GraduationCap, Calendar, MapPin, CheckCircle2, ShieldCheck, ZoomIn } from 'lucide-react';
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { assets } from '../config/assets';
import { useLightbox } from '../context/LightboxContext';

export const CertificationsEducation: React.FC = () => {
  const { openLightbox } = useLightbox();

  return (
    <section className="py-20 lg:py-28 relative bg-[var(--background)] border-t border-[var(--border)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: CERTIFICATIONS */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                <Award className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
                <span>Certifications &amp; Credentials</span>
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all duration-200 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {cert.issueDate}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-3">
                      {cert.issuer}
                    </p>

                    {cert.credentials && (
                      <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {cert.credentials}
                      </p>
                    )}

                    {/* Certificate Image Preview */}
                    {cert.photo && (
                      <div
                        onClick={() => {
                          openLightbox({
                            src: cert.photo!,
                            title: cert.title,
                            subtitle: `Issued by ${cert.issuer} · ${cert.issueDate}`,
                            category: 'Official Verified Credential'
                          });
                        }}
                        className="mb-4 relative w-full h-36 rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900 cursor-pointer group/img"
                        title="Click to view full certificate credential"
                      >
                        <img
                          src={cert.photo}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-cyan-400">
                          <ZoomIn className="w-3 h-3" />
                          <span>View Official Certificate</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-[var(--surface-secondary)] text-blue-700 dark:text-cyan-300 border border-[var(--border)] text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDUCATION */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Academic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-500" />
                <span>Education</span>
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-blue-500/30 transition-all duration-200 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 rounded">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-3">
                    <span className="font-semibold text-[var(--text-secondary)]">{edu.institution}</span>
                    <span>·</span>
                    <span className="text-[var(--text-muted)]">{edu.location}</span>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
