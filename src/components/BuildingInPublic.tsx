import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const BuildingInPublic: React.FC = () => {
  const repositories = [
    {
      name: 'jarvis-voice-automation',
      description: 'Voice-activated autonomous assistant with speech recognition, dynamic NLP intent routing, and modular desktop task plugins.',
      language: 'Python',
      langColor: 'bg-amber-400',
      tags: ['OpenAI-API', 'TensorFlow', 'SpeechRecognition']
    },
    {
      name: 'stock-sentiment-lstm',
      description: 'Dual-branch multi-input LSTM forecasting model merging OHLCV market feeds with real-time NLP financial sentiment embeddings.',
      language: 'Python',
      langColor: 'bg-amber-400',
      tags: ['LSTM', 'NLP', 'AWS-Lambda']
    },
    {
      name: 'qnn-vs-classical-benchmarks',
      description: 'Research experimental suite benchmarking Parameterized Quantum Circuits (PQCs) against classical CNNs and LSTMs across 5 datasets.',
      language: 'Python',
      langColor: 'bg-amber-400',
      tags: ['Quantum-AI', 'PyTorch', 'Research']
    },
    {
      name: 'disease-medicine-triage',
      description: 'Clinical ensemble diagnostic engine utilizing SVM and Deep Neural Classifiers with a symptom-to-medicine recommendation REST API.',
      language: 'Python',
      langColor: 'bg-amber-400',
      tags: ['scikit-learn', 'Healthcare-AI', 'REST-API']
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[var(--background)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
              Open Source &amp; Code Sharing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Building in Public
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
              Actively developing reproducible machine learning architectures, automation tools, and open-source packages.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-slate-800 dark:hover:bg-slate-700 border border-blue-600 dark:border-slate-700 rounded-xl shadow-sm transition-colors self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-cyan-500 group-hover:rotate-6 transition-transform" />
                    <span className="text-base font-bold text-[var(--text-primary)] group-hover:text-blue-600 dark:group-hover:text-cyan-500 transition-colors font-mono">
                      {repo.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 rounded">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-[var(--surface-secondary)] text-blue-700 dark:text-cyan-300 border border-[var(--border)] text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                    <span className="font-mono text-[11px]">{repo.language}</span>
                  </div>
                  <a
                    href={`${PERSONAL_INFO.socials.github}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-blue-600 dark:text-cyan-400 flex items-center gap-1 group-hover:underline"
                  >
                    View code <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
