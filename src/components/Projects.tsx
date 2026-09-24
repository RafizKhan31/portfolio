import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { assets } from '../config/assets';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'NLP & LLM',
    'Deep Learning & Time Series',
    'Healthcare AI',
    'Recommendation Systems'
  ];

  // Map projects ensuring image paths are driven by the centralized assets configuration
  const projectsWithAssets = PROJECTS.map((project) => {
    let photo = project.photo;
    if (project.id === 'jarvis-virtual-assistant') photo = assets.projects.jarvis;
    else if (project.id === 'stock-price-prediction-lstm') photo = assets.projects.stockPrediction;
    else if (project.id === 'disease-detection-medicine' || project.id === 'disease-detection-medicine-recommendation') photo = assets.projects.diseaseDetection;
    else if (project.id === 'llm-customer-support-chatbot') photo = assets.projects.chatbot;
    else if (project.id === 'movie-recommendation-engine') photo = assets.projects.movieRecommendation;
    return { ...project, photo };
  });

  const filteredProjects = selectedCategory === 'All'
    ? projectsWithAssets
    : projectsWithAssets.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[var(--background)] transition-colors duration-200 overflow-hidden">
      {/* Background ambient animation */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 dark:bg-red-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 dark:bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl">
              Production architectures, deep learning models, and NLP agents engineered and deployed with Python, TensorFlow, PyTorch, and cloud services.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar" role="tablist">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-red-600 text-white dark:bg-red-600 font-semibold shadow-md shadow-red-600/20 scale-105'
                      : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-red-600/40 hover:text-red-600 dark:hover:text-red-500 hover:-translate-y-0.5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with staggered hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
