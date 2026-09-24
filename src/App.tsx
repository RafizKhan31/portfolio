/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LightboxProvider } from './context/LightboxContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <LightboxProvider>
        <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] selection:bg-red-500/20 selection:text-red-600 relative transition-colors duration-200">
          {/* Viewport Scroll Progress Bar */}
          <ScrollProgress />

          {/* Interactive Desktop Cursor */}
          <CustomCursor />

          {/* Floating / Sticky Navigation */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          <main id="main-content">
            {/* Hero Section with Auto Photo Slider */}
            <Hero onOpenResume={() => setIsResumeOpen(true)} />

            {/* About Section matching user screenshot with Auto Photo Slider */}
            <About onOpenResume={() => setIsResumeOpen(true)} />

            {/* Modern Services Section */}
            <Services />

            {/* Clean Skills Section */}
            <Skills />

            {/* Featured Projects with Modals */}
            <Projects />

            {/* Work Experience, Education & Certifications */}
            <Experience />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Modern Minimal Footer */}
          <Footer />

          {/* Printable Curriculum Vitae Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </div>
      </LightboxProvider>
    </ThemeProvider>
  );
}
