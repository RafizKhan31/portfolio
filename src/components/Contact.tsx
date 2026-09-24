import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check,
  Github, 
  Linkedin,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[var(--background)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-red-600 dark:text-red-500 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mt-1">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Have an AI, machine learning, Python development, or full-time opportunity? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-6">
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Contact Information
              </h3>

              {/* Direct email card with Copy button */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-red-600 dark:hover:text-red-500 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-red-600 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & Location */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="p-2 rounded-lg bg-[var(--surface-secondary)] text-red-600 dark:text-red-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Direct Phone</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-[var(--text-primary)] hover:text-red-600 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="p-2 rounded-lg bg-[var(--surface-secondary)] text-red-600 dark:text-red-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Location</span>
                    <span className="font-medium text-[var(--text-primary)]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[var(--border)] space-y-3">
                <div className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase">
                  Profiles &amp; Repositories
                </div>
                <div className="flex gap-2.5">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] hover:border-red-600/40 text-xs font-semibold text-[var(--text-primary)] hover:text-red-600 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] hover:border-red-600/40 text-xs font-semibold text-[var(--text-primary)] hover:text-red-600 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been received. I will review your note and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-600 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-[var(--border)] focus:ring-red-600 dark:focus:ring-red-500'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-[var(--border)] focus:ring-red-600 dark:focus:ring-red-500'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Python Developer / AI Project"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-[var(--border)] focus:ring-red-600 dark:focus:ring-red-500'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.subject}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or engineering role..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[var(--surface-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-[var(--border)] focus:ring-red-600 dark:focus:ring-red-500'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/20 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
