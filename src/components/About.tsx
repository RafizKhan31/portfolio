import React, { useState, useEffect } from 'react';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { PhotoSlider } from './PhotoSlider';
import { assets } from '../config/assets';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const roles = [
    'AI Developer',
    'Python Developer',
    'Machine Learning Engineer',
    'Deep Learning Researcher'
  ];

  const [roleIdx, setRoleIdx] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && roleText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setRoleText(
        isDeleting
          ? currentRole.substring(0, roleText.length - 1)
          : currentRole.substring(0, roleText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIdx]);

  const handleDownloadCV = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.open(assets.resume, '_blank');
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[var(--surface-secondary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill / Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-red-600 dark:text-red-500">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1">
            Personal Biography
          </h2>
        </div>

        {/* 2-Column Layout matching user screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo with Automatic Slider */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <PhotoSlider
                intervalMs={3400}
                aspectRatio="portrait"
                className="shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: Exact Copy & Typography matching user screenshot */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              I'm Rafiz and I'm a{' '}
              <span className="text-red-600 dark:text-red-500">
                {roleText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-red-600 dark:bg-red-500 animate-pulse align-middle" />
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                As a Python Developer, Machine Learning Engineer, and AI Developer, I bring a unique combination of skills and expertise to the table. With a solid foundation in programming, data analysis, and statistical modeling, I am able to develop complex software systems that leverage machine learning and artificial intelligence to solve real-world problems.
              </p>

              <p>
                My expertise in Python is unmatched, and I have extensive experience working with popular libraries such as TensorFlow, Keras, PyTorch, and Scikit-learn. I am also well-versed in a variety of programming languages including C++, Java allowing me to adapt to any project requirements and collaborate seamlessly with cross-functional teams.
              </p>

              <p>
                Whether you are looking for a Python Developer, Machine Learning Engineer, or AI Developer, I am confident that I have the skills and expertise to exceed your expectations and help you achieve your goals. Thank you for considering me for your next project.
              </p>
            </div>

            {/* Feature Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-medium text-[var(--text-primary)]">
              <div className="flex items-center gap-2 p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500 flex-shrink-0" />
                <span>7+ ML Systems Deployed</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500 flex-shrink-0" />
                <span>AWS & GCP Cloud</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500 flex-shrink-0" />
                <span>Published AI Researcher</span>
              </div>
            </div>

            {/* Red "Download CV" Button matching user mockup */}
            <div className="pt-3">
              <a
                href={assets.resume}
                download="Md-Rafej-Khan-Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20 transition-all text-sm sm:text-base cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
