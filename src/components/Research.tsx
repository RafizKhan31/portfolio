import React, { useState } from 'react';
import { 
  Atom, 
  Layers, 
  BarChart, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ZoomIn, 
  FileCode2 
} from 'lucide-react';
import { RESEARCH_DATA } from '../data/portfolioData';
import { assets } from '../config/assets';
import { useLightbox } from '../context/LightboxContext';

export const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'datasets' | 'benchmarks'>('overview');
  const { openLightbox } = useLightbox();

  const benchmarkData = [
    {
      dataset: 'MNIST (Vision)',
      qnn: '89.4% (8 Qubits)',
      cnn: '98.2% (Classical)',
      hybrid: '96.5% (Optimal)',
      advantage: 'Parameter efficiency in variational layers'
    },
    {
      dataset: 'Breast Cancer (Biometric)',
      qnn: '92.1% (6 Qubits)',
      cnn: '91.8% (Classical MLP)',
      hybrid: '94.3% (Superior)',
      advantage: 'Hilbert-space kernel separability'
    },
    {
      dataset: 'GPT Text Gen (Sequential)',
      qnn: 'Moderate perplexity',
      cnn: 'Fast convergence (LSTM)',
      hybrid: 'Competitive perplexity',
      advantage: 'Entanglement captures non-local tokens'
    },
    {
      dataset: 'MQ9 Weather (Regression)',
      qnn: 'RMSE: 0.084',
      cnn: 'RMSE: 0.062 (RNN)',
      hybrid: 'RMSE: 0.059',
      advantage: 'Hybrid captures cyclical atmospheric patterns'
    },
    {
      dataset: 'TSP (NP-Hard Optimization)',
      qnn: 'Approximated solution',
      cnn: 'Heuristic search',
      hybrid: 'Near-optimal route',
      advantage: 'Quantum annealing & variational states'
    }
  ];

  return (
    <section id="research" className="py-20 lg:py-28 relative bg-[var(--background)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            Academic Research &amp; Investigation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Research &amp; Publications
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
            Undergraduate research thesis evaluating Parameterized Quantum Circuits (PQC) and Quantum Neural Networks against classical deep learning baselines.
          </p>
        </div>

        {/* Paper Feature Showcase Container */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-sm">
          
          {/* Header & Badges */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border)] mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 mb-1">
                <Atom className="w-4 h-4" />
                <span>{RESEARCH_DATA.thesisType}</span>
                <span>·</span>
                <span>Eastern University</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {RESEARCH_DATA.title}
              </h3>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center gap-1 bg-[var(--surface-secondary)] border border-[var(--border)] p-1 rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-sm font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('datasets')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'datasets'
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-sm font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                5 Datasets
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('benchmarks')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === 'benchmarks'
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-sm font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Benchmarks
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2 tracking-wider">
                    Abstract &amp; Research Scope
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {RESEARCH_DATA.abstract}
                  </p>
                </div>

                {/* Key Research Finding */}
                <div className="p-4 rounded-xl border border-blue-200 dark:border-cyan-500/30 bg-blue-50/50 dark:bg-cyan-950/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-cyan-400 mb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Research Finding</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {RESEARCH_DATA.keyFinding}
                  </p>
                </div>

                {/* Evaluated Dimensions */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] mb-3 tracking-wider">
                    Rigorous Benchmarking Dimensions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RESEARCH_DATA.dimensions.map((dim, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[var(--text-secondary)] p-2 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-500 shrink-0" />
                        <span>{dim}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantum Circuit Visualization Photo & Schema on the Right */}
              <div className="lg:col-span-5 rounded-2xl border border-[var(--border)] bg-slate-900 overflow-hidden shadow-lg flex flex-col group">
                <div 
                  onClick={() => {
                    openLightbox({
                      src: assets.research.quantumAI,
                      title: 'Quantum Neural Networks vs. Classical Models',
                      subtitle: 'Bloch Sphere & Variational Quantum Circuit Architecture',
                      category: 'Undergraduate Research Thesis'
                    });
                  }}
                  className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950 cursor-pointer"
                  title="Click to view full quantum architecture diagram in Lightbox"
                >
                  <img
                    src={assets.research.quantumAI}
                    alt="Quantum Neural Networks Bloch Sphere and PQC Circuit Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono text-indigo-300 backdrop-blur-md">
                    8-Qubit Hilbert Space
                  </div>
                  <div className="absolute bottom-3 left-3 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-mono">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </div>
                </div>

                <div className="p-4 font-mono text-xs text-slate-300 bg-slate-900 border-t border-slate-800">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-semibold">pqc_ansatz.py (Parameterized Circuit)</span>
                    <button
                      type="button"
                      onClick={() => {
                        openLightbox({
                          src: assets.research.diagram,
                          title: 'PQC Quantum Circuit Flowchart',
                          subtitle: 'Rx, Ry, Rz Variational Rotations & CNOT Entanglement',
                          category: 'Circuit Diagram'
                        });
                      }}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-sans underline text-xs"
                    >
                      <FileCode2 className="w-3.5 h-3.5" />
                      <span>View PQC Schematic</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Evaluated Bloch-sphere rotations (Rx, Ry, Rz) with CNOT entangling gates to map non-linear decision boundaries directly into multi-qubit quantum states.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DATASETS */}
          {activeTab === 'datasets' && (
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">
                The experimental framework benchmarked performance across 5 diverse problem domains to avoid task-specific bias:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESEARCH_DATA.datasets.map((dataset, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[var(--text-primary)]">
                        {dataset.split('(')[0].trim()}
                      </h5>
                      <span className="text-xs text-[var(--text-muted)] font-mono">
                        ({dataset.split('(')[1]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BENCHMARKS */}
          {activeTab === 'benchmarks' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-mono">
                <thead>
                  <tr className="border-b border-[var(--border)] text-[var(--text-muted)]">
                    <th className="py-3 px-4 font-semibold uppercase">Dataset / Task</th>
                    <th className="py-3 px-4 font-semibold uppercase text-purple-600 dark:text-purple-400">Pure QNN</th>
                    <th className="py-3 px-4 font-semibold uppercase text-slate-600 dark:text-slate-400">Classical SOTA</th>
                    <th className="py-3 px-4 font-semibold uppercase text-blue-600 dark:text-cyan-400">Hybrid (Q+C)</th>
                    <th className="py-3 px-4 font-semibold uppercase hidden md:table-cell">Key Insight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {benchmarkData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[var(--surface-secondary)] transition-colors">
                      <td className="py-3.5 px-4 font-sans font-medium text-[var(--text-primary)]">{row.dataset}</td>
                      <td className="py-3.5 px-4 text-purple-600 dark:text-purple-300">{row.qnn}</td>
                      <td className="py-3.5 px-4 text-[var(--text-secondary)]">{row.cnn}</td>
                      <td className="py-3.5 px-4 text-blue-600 dark:text-cyan-400 font-bold">{row.hybrid}</td>
                      <td className="py-3.5 px-4 font-sans text-xs text-[var(--text-muted)] hidden md:table-cell">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
