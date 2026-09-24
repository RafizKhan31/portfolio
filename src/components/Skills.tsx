import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  MessageSquareCode, 
  Database, 
  Cloud, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoriesWithIcons = [
    { id: 'all', name: 'All Skills' },
    ...SKILL_CATEGORIES.map(cat => ({ id: cat.id, name: cat.name }))
  ];

  // Filter skills based on selected category & search query
  const filteredCategories = SKILL_CATEGORIES.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    return true;
  }).map(category => {
    const filteredSkills = category.skills.filter(skill => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.level.toLowerCase().includes(query)
      );
    });

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(cat => cat.skills.length > 0);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-red-600 dark:text-red-500" />;
      case 'ai-ml':
        return <Cpu className="w-4 h-4 text-red-600 dark:text-red-500" />;
      case 'nlp-llm':
        return <MessageSquareCode className="w-4 h-4 text-red-600 dark:text-red-500" />;
      case 'cloud-devops':
        return <Cloud className="w-4 h-4 text-red-600 dark:text-red-500" />;
      case 'databases':
        return <Database className="w-4 h-4 text-red-600 dark:text-red-500" />;
      default:
        return <Code2 className="w-4 h-4 text-red-600 dark:text-red-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[var(--surface-secondary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Core Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl">
              Production frameworks, programming languages, and AI systems architecture from my resume.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Python, PyTorch)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categoriesWithIcons.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-red-600 text-white dark:bg-red-600 font-semibold shadow-md shadow-red-600/20'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-red-600/40 hover:text-red-600 dark:hover:text-red-500'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              {/* Category Title with Icon */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category.id)}
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {category.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">
                    ({category.skills.length})
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
                  {category.description}
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-red-600/40 dark:hover:border-red-500/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                      <span className="font-mono">Production Ready</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-[var(--text-muted)] text-sm">
              No matching skills found for &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
