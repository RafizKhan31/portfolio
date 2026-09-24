import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { assets } from '../config/assets';
import { PhotoSlider } from './PhotoSlider';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typing animation rotating through key engineering titles
  const titles = [
    'Machine Learning Engineer',
    'Python Developer',
    'AI Developer',
    'Deep Learning Researcher'
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIdx];
    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && subText === currentTitle) {
      // Pause at full word
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && subText === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setSubText(
        isDeleting
          ? currentTitle.substring(0, subText.length - 1)
          : currentTitle.substring(0, subText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [subText, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated modern background gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 dark:bg-red-500/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-500/10 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text, Typing Title & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-50/60 dark:bg-red-950/40 text-xs font-mono text-red-600 dark:text-red-400 shadow-sm animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-semibold">Available for Python &amp; AI/ML Opportunities</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-[var(--text-secondary)] tracking-wide">
                Hello, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="pt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] min-h-[44px]">
                <span>And I&apos;m a </span>
                <span className="text-red-600 dark:text-red-500 font-extrabold underline decoration-red-600/30 decoration-wavy">
                  {subText}
                </span>
                <span className="inline-block w-0.5 h-7 sm:h-8 ml-1 bg-red-600 dark:text-red-500 animate-pulse align-middle" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specializing in machine learning, deep learning, NLP, LLM applications, automation, and scalable AI systems. Crafting production-grade models from research to deployment.
            </p>

            {/* CTA Buttons matching user mockup style with enhanced hover animations */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-red-600 hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10">Hire me</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <a
                href={assets.resume}
                download="Md-Rafej-Khan-Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)] border border-[var(--border)] hover:border-red-600/50 active:scale-95 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
              >
                <Download className="w-4 h-4 text-red-600 dark:text-red-500 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-[var(--text-secondary)]">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-4 h-4 text-[var(--text-muted)]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[var(--text-muted)]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </div>
          </div>

          {/* Right Column: Clean Automatic Photo Slider with Floating Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md relative animate-float-slow">
              {/* Back decorative glow frame with animation */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-red-600/35 via-amber-500/25 to-red-500/30 rounded-3xl blur-xl opacity-75 animate-pulse-glow -z-10" />
              
              <PhotoSlider
                intervalMs={3600}
                aspectRatio="portrait"
                className="shadow-2xl border-2 border-white/20 dark:border-white/10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
