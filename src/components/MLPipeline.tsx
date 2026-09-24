import React, { useState } from 'react';
import { 
  Database, 
  Filter, 
  Cpu, 
  BrainCircuit, 
  BarChart2, 
  CloudUpload, 
  Globe, 
  ChevronRight, 
  Sparkles, 
  ZoomIn 
} from 'lucide-react';
import { ML_PIPELINE_STAGES } from '../data/portfolioData';
import { assets } from '../config/assets';
import { useLightbox } from '../context/LightboxContext';

export const MLPipeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const { openLightbox } = useLightbox();

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Database className="w-4 h-4" />;
      case 1: return <Filter className="w-4 h-4" />;
      case 2: return <Cpu className="w-4 h-4" />;
      case 3: return <BrainCircuit className="w-4 h-4" />;
      case 4: return <BarChart2 className="w-4 h-4" />;
      case 5: return <CloudUpload className="w-4 h-4" />;
      case 6: return <Globe className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const currentStage = ML_PIPELINE_STAGES[activeStageIndex];

  return (
    <section id="pipeline" className="py-20 lg:py-28 relative bg-[var(--background)] border-y border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            From Data to Intelligence
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Interactive visualization of the end-to-end machine learning and deep learning production lifecycle.
          </p>
        </div>

        {/* Global Pipeline Architecture Visual Photo */}
        <div 
          onClick={() => {
            openLightbox({
              src: assets.architecture.mlPipeline,
              title: 'Production Machine Learning Pipeline Lifecycle',
              subtitle: 'Data Ingestion → Preprocessing → Model Training → Validation → Cloud Deployment',
              category: 'End-to-End System Blueprint'
            });
          }}
          className="mb-12 rounded-2xl border border-[var(--border)] bg-slate-900 overflow-hidden shadow-lg group cursor-pointer"
          title="Click to view full architecture diagram in Lightbox"
        >
          <div className="relative w-full h-48 sm:h-64 overflow-hidden">
            <img
              src={assets.architecture.mlPipeline}
              alt="End-to-End Machine Learning Production Pipeline Flow Diagram"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-400 backdrop-blur-md">
                Full Production Lifecycle · Data → Preprocessing → Model → Cloud Deployment
              </span>
            </div>
            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-mono">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Zoom Diagram</span>
            </div>
          </div>
        </div>

        {/* Horizontal Pipeline Steps Stepper */}
        <div className="relative mb-12">
          {/* Animated Connecting Flow Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--border)] -translate-y-1/2 z-0">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-blue-500 transition-all duration-500"
              style={{ width: `${((activeStageIndex + 1) / ML_PIPELINE_STAGES.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {ML_PIPELINE_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 ${
                    isActive
                      ? 'border-blue-600 dark:border-cyan-500 bg-[var(--surface)] shadow-md ring-2 ring-blue-500/20 dark:ring-cyan-500/20'
                      : isPassed
                      ? 'border-blue-300 dark:border-slate-700 bg-[var(--surface-secondary)]'
                      : 'border-[var(--border)] bg-[var(--surface)] hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-[var(--text-muted)]'}`}>
                      {stage.number}
                    </span>
                    <div className={`p-1 rounded-md ${isActive ? 'text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-500/10' : 'text-[var(--text-muted)]'}`}>
                      {getStageIcon(idx)}
                    </div>
                  </div>

                  <div>
                    <div className={`text-xs font-bold leading-tight line-clamp-1 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                      {stage.title}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate mt-0.5">
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Exploration View */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stage Overview */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 mb-2">
                <span>Stage {currentStage.number} of 07</span>
                <span>·</span>
                <span>{currentStage.subtitle}</span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {currentStage.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {currentStage.description}
              </p>

              {/* Tooling for this stage */}
              <div>
                <span className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2 block tracking-wider">
                  Associated Tooling &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStage.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[var(--surface-secondary)] text-blue-700 dark:text-cyan-300 border border-[var(--border)] text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stage Metric & Interactive Stepper CTA */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-center">
              <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase mb-1">
                Engineering Target
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-cyan-400 mb-4">
                {currentStage.metric}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] disabled:opacity-40 hover:bg-[var(--surface-secondary)]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={activeStageIndex === ML_PIPELINE_STAGES.length - 1}
                  onClick={() => setActiveStageIndex((prev) => Math.min(ML_PIPELINE_STAGES.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 disabled:opacity-40 hover:bg-blue-700 dark:hover:bg-cyan-400 flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
