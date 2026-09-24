import React from 'react';
import { Code2, Brain, Bot, Cloud, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'python-dev',
      icon: <Code2 className="w-7 h-7 text-red-600 dark:text-red-500" />,
      title: 'Python & Backend Architecture',
      description:
        'Building scalable Python backends, high-performance data processing pipelines, and clean RESTful APIs using Django, FastAPI, and modular OOP design patterns.',
      skills: ['Python 3', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL']
    },
    {
      id: 'ml-dl',
      icon: <Brain className="w-7 h-7 text-red-600 dark:text-red-500" />,
      title: 'Machine Learning & Deep Learning',
      description:
        'Engineering deep learning architectures (CNNs, RNNs/LSTMs) for time-series forecasting, pattern recognition, and predictive analytics using TensorFlow, PyTorch, and scikit-learn.',
      skills: ['TensorFlow', 'PyTorch', 'CNNs', 'LSTM', 'scikit-learn']
    },
    {
      id: 'nlp-llm',
      icon: <Bot className="w-7 h-7 text-red-600 dark:text-red-500" />,
      title: 'NLP & Large Language Models (LLMs)',
      description:
        'Developing domain-specific chatbots, RAG (Retrieval-Augmented Generation) pipelines, prompt engineering, and speech-to-text assistants powered by OpenAI APIs and HuggingFace models.',
      skills: ['OpenAI API', 'RAG Pipelines', 'Prompt Engineering', 'spaCy', 'NLTK']
    },
    {
      id: 'cloud-devops',
      icon: <Cloud className="w-7 h-7 text-red-600 dark:text-red-500" />,
      title: 'Cloud AI Deployment & Pipelines',
      description:
        'Deploying trained machine learning models into live production on AWS and Google Cloud with automated serverless triggers, containerization, and monitoring.',
      skills: ['AWS Lambda', 'Google Cloud', 'Docker', 'Git/GitHub', 'CI/CD']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[var(--background)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-red-600 dark:text-red-500">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1">
            Specialized Services & Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Bridging theoretical artificial intelligence and practical, scalable Python software engineering.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-red-600/40 dark:hover:border-red-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
