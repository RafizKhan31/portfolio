import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Stethoscope, 
  Bot, 
  Film, 
  Image as ImageIcon, 
  Sliders, 
  ZoomIn,
  Layers
} from 'lucide-react';
import { Project } from '../types';
import { useLightbox } from '../context/LightboxContext';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'simulation'>('photo');
  const { openLightbox } = useLightbox();

  const handleOpenLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    openLightbox({
      src: project.photo,
      title: project.title,
      subtitle: project.subtitle,
      category: project.category
    });
  };

  // Render bespoke interactive mini-visual based on project id
  const renderProjectVisual = () => {
    switch (project.id) {
      case 'jarvis-virtual-assistant':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-red-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Voice NLU Pipeline
              </span>
              <span className="text-slate-500">STT / TTS Stream</span>
            </div>

            {/* Audio Waveform visualization */}
            <div className="flex items-center justify-center gap-1.5 h-16 my-auto">
              {[32, 64, 48, 80, 96, 56, 72, 88, 40, 68, 92, 50, 78, 60, 44].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-red-600 to-amber-400 rounded-full transition-all duration-300 group-hover:scale-y-110"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <span>Intent: task_automation</span>
              <span className="text-emerald-400">Confidence: 94.2%</span>
            </div>
          </div>
        );

      case 'stock-price-prediction-lstm':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-red-400">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Multi-Input LSTM
              </span>
              <span className="text-emerald-400 font-semibold">+15% vs Baseline</span>
            </div>

            {/* Simulated Stock Forecast Chart */}
            <div className="relative h-20 w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                <path
                  d="M 10 65 Q 60 50, 110 55 T 200 40 T 290 25"
                  fill="none"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 10 70 Q 70 45, 130 50 T 220 30 T 290 15"
                  fill="none"
                  stroke="#E11D48"
                  strokeWidth="2.5"
                />
                <circle cx="290" cy="15" r="4" fill="#E11D48" className="animate-ping" />
                <circle cx="290" cy="15" r="3" fill="#FB7185" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <span>Features: OHLCV + News NLP</span>
              <span className="text-red-400">AWS Lambda</span>
            </div>
          </div>
        );

      case 'disease-detection-medicine':
      case 'disease-detection-medicine-recommendation':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                Dual ML Diagnostic Pipeline
              </span>
              <span className="text-slate-400">Ensemble Model</span>
            </div>

            <div className="space-y-2 my-auto">
              <div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Disease Predictor (SVM + Tree Ensemble)</span>
                  <span className="text-emerald-400">96.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[96.8%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Medicine Calibrated Ranking</span>
                  <span className="text-red-400">Calculated</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[82%] h-full bg-red-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <span>Inputs: 130+ Symptom Flags</span>
              <span className="text-emerald-400">&lt; 150ms Response</span>
            </div>
          </div>
        );

      case 'llm-customer-support-chatbot':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-red-400">
              <span className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" />
                RAG + GPT Architecture
              </span>
              <span className="text-emerald-400">+40% Quality Score</span>
            </div>

            <div className="space-y-2 my-auto text-[11px]">
              <div className="bg-slate-800 text-slate-300 p-2 rounded-lg rounded-tl-none max-w-[85%]">
                &ldquo;How do I configure custom escalation policies?&rdquo;
              </div>
              <div className="bg-red-950/70 border border-red-800/60 text-red-200 p-2 rounded-lg rounded-tr-none ml-auto max-w-[90%]">
                &ldquo;Configured via API webhook with HMAC signatures.&rdquo;
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <span>Domain Grounded / Zero Hallucination</span>
              <span className="text-red-400">OpenAI API</span>
            </div>
          </div>
        );

      case 'movie-recommendation-engine':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                Content-Based Filtering
              </span>
              <span className="text-slate-400">10,000+ Records</span>
            </div>

            <div className="grid grid-cols-4 gap-2 my-auto">
              {[
                { title: 'Sci-Fi Space', score: '0.94', color: 'bg-red-500/20 text-red-300' },
                { title: 'AI Thriller', score: '0.91', color: 'bg-blue-500/20 text-blue-300' },
                { title: 'Cyberpunk', score: '0.88', color: 'bg-purple-500/20 text-purple-300' },
                { title: 'Dystopian', score: '0.85', color: 'bg-amber-500/20 text-amber-300' }
              ].map((item, i) => (
                <div key={i} className={`p-2 rounded-lg border border-slate-800 ${item.color} text-center`}>
                  <div className="text-[10px] font-medium truncate">{item.title}</div>
                  <div className="text-xs font-mono font-bold mt-1">{item.score}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <span>Engine: TF-IDF + Cosine Sim</span>
              <span className="text-amber-400">&lt; 200ms Latency</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl p-4 flex items-center justify-center border border-slate-800">
            <Layers className="w-8 h-8 text-red-500" />
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-red-600/40 dark:hover:border-red-500/40 hover:-translate-y-1.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Project Photo / Interactive Simulation Header */}
        <div className="mb-4 relative">
          <div className="w-full h-44 rounded-xl overflow-hidden border border-[var(--border)] bg-slate-900 relative">
            {viewMode === 'photo' ? (
              <div 
                className="w-full h-full relative overflow-hidden group/img cursor-pointer"
                onClick={handleOpenLightbox}
                title="Click to view full image in Lightbox"
              >
                <img
                  src={project.photo}
                  alt={`${project.title} architectural illustration`}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                
                {/* Lightbox zoom button overlay */}
                <div className="absolute bottom-2.5 left-2.5 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-mono">
                  <ZoomIn className="w-3.5 h-3.5 text-red-400" />
                  <span>Zoom</span>
                </div>
              </div>
            ) : (
              renderProjectVisual()
            )}
          </div>

          {/* Floating View Switcher */}
          <div
            className="absolute top-2.5 right-2.5 z-10 flex items-center bg-slate-900/80 backdrop-blur-md rounded-lg p-0.5 border border-slate-700/80 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              title="Show Photo"
              className={`p-1.5 rounded-md text-[10px] font-mono flex items-center gap-1 transition-colors ${
                viewMode === 'photo'
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Photo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('simulation')}
              title="Show Live Simulation"
              className={`p-1.5 rounded-md text-[10px] font-mono flex items-center gap-1 transition-colors ${
                viewMode === 'simulation'
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3 h-3" />
              <span>Live</span>
            </button>
          </div>
        </div>

        {/* Category & Title */}
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-1.5">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="text-red-600 dark:text-red-500 font-medium">Production Architecture</span>
        </div>

        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Metrics strip */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-[var(--border)] mb-4 text-center">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-mono tabular-nums">
                  {m.value}
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Technologies used */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)] text-[11px] font-mono font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-muted)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action button trigger */}
        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-500 group-hover:translate-x-0.5 transition-transform">
          <span>View Architecture &amp; Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
